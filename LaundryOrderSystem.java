import java.io.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;

/*
 * Laundry / Dry Cleaning Order Tracking System
 * Compile: javac LaundryOrderSystem.java
 * Run:     java LaundryOrderSystem
 *
 * Uses only Java standard-library classes. Data is saved in orders.txt.
 */
public class LaundryOrderSystem {

    private static final Scanner input = new Scanner(System.in);
    private static final ArrayList<Order> orders = new ArrayList<Order>();
    private static final HashMap<Integer, Order> orderMap = new HashMap<Integer, Order>();
    private static final TreeSet<String> serviceTypes = new TreeSet<String>(
            Arrays.asList("Washing", "Dry Cleaning", "Ironing"));
    private static final String DATA_FILE = "orders.txt";

    // Arrays: service names and their per-garment prices are stored at matching indexes.
    // An array of parent-class references demonstrates runtime polymorphism.
    private static final LaundryService[] serviceOptions = {
            new WashingService(), new DryCleaningService(), new IroningService()
    };

    private static int nextOrderId = 1001;

    // Custom exception: used when an order ID does not exist.
    static class InvalidOrderException extends Exception {
        InvalidOrderException(String message) {
            super(message);
        }
    }

    // Interface: every trackable order must support status updates.
    interface Trackable {
        void updateStatus(String newStatus);
    }

    // Abstraction: common service details are defined in an abstract parent class.
    static abstract class LaundryService {
        abstract String getName();
        abstract double getRate();
    }

    // Inheritance: these three classes inherit from LaundryService.
    static class WashingService extends LaundryService {
        String getName() { return "Washing"; }
        double getRate() { return 50.0; }
    }

    static class DryCleaningService extends LaundryService {
        String getName() { return "Dry Cleaning"; }
        double getRate() { return 100.0; }
    }

    static class IroningService extends LaundryService {
        String getName() { return "Ironing"; }
        double getRate() { return 30.0; }
    }

    // Class 1: Customer details.
    static class Customer {
        private String name;
        private String phone;

        Customer(String name, String phone) {
            this.name = name;
            this.phone = phone;
        }

        String getName() { return name; }
        String getPhone() { return phone; }
    }

    // Class 2: Order combines customer, garment and service information.
    static class Order implements Trackable {
        private int id;
        private Customer customer;
        private String garment;
        private String service;
        private int quantity;
        private String deliveryType;
        private String status;
        private double amount;
        private boolean paid;

        Order(int id, Customer customer, String garment, String service,
              int quantity, String deliveryType, double amount) {
            this.id = id;
            this.customer = customer;
            this.garment = garment;
            this.service = service;
            this.quantity = quantity;
            this.deliveryType = deliveryType;
            this.amount = amount;
            this.status = "Received";
            this.paid = false;
        }

        int getId() { return id; }
        String getCustomerName() { return customer.getName(); }
        String getPhone() { return customer.getPhone(); }
        String getGarment() { return garment; }
        String getService() { return service; }
        int getQuantity() { return quantity; }
        String getDeliveryType() { return deliveryType; }
        String getStatus() { return status; }
        double getAmount() { return amount; }
        boolean isPaid() { return paid; }

        public void updateStatus(String status) { this.status = status; }
        void setPaid(boolean paid) { this.paid = paid; }

        void display() {
            System.out.println("----------------------------------------");
            System.out.println("Order ID      : " + id);
            System.out.println("Customer      : " + customer.getName());
            System.out.println("Phone         : " + customer.getPhone());
            System.out.println("Garment       : " + garment);
            System.out.println("Service       : " + service);
            System.out.println("Quantity      : " + quantity);
            System.out.println("Pickup/Delivery: " + deliveryType);
            System.out.println("Order Status  : " + status);
            System.out.printf("Total Amount  : Rs. %.2f%n", amount);
            System.out.println("Payment       : " + (paid ? "Paid" : "Pending"));
        }
    }

    public static void main(String[] args) {
        loadOrders();

        System.out.println("========================================");
        System.out.println("   LAUNDRY / DRY CLEANING ORDER SYSTEM");
        System.out.println("========================================");

        boolean running = true;
        while (running) {
            showMenu();
            int choice = readInt("Enter your choice: ");

            try {
                switch (choice) {
                    case 1: addOrder(); break;
                    case 2: viewAllOrders(); break;
                    case 3: searchOrder(); break;
                    case 4: updateStatus(); break;
                    case 5: makePayment(); break;
                    case 6: showSummary(); break;
                    case 7:
                        saveOrders();
                        createBackup();
                        break;
                    case 8:
                        saveOrders();
                        System.out.println("Data saved. Thank you!");
                        running = false;
                        break;
                    default:
                        System.out.println("Invalid choice. Please select 1 to 7.");
                }
            } catch (InvalidOrderException e) {
                System.out.println("Error: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Something went wrong: " + e.getMessage());
            }
        }
    }

    private static void showMenu() {
        System.out.println("\n--------------- MAIN MENU ---------------");
        System.out.println("1. Create new laundry order");
        System.out.println("2. View all orders");
        System.out.println("3. Search order by ID");
        System.out.println("4. Update order status");
        System.out.println("5. Record payment");
        System.out.println("6. Business summary");
        System.out.println("7. Save and create backup");
        System.out.println("8. Save and exit");
    }

    private static int readInt(String message) {
        while (true) {
            System.out.print(message);
            try {
                return Integer.parseInt(input.nextLine().trim()); // Wrapper class Integer
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid whole number.");
            }
        }
    }

    private static double readDouble(String message) {
        while (true) {
            System.out.print(message);
            try {
                return Double.parseDouble(input.nextLine().trim()); // Wrapper class Double
            } catch (NumberFormatException e) {
                System.out.println("Please enter a valid amount.");
            }
        }
    }

    private static void addOrder() {
        System.out.println("\n--- Create New Order ---");
        System.out.print("Customer name: ");
        String name = input.nextLine().trim();
        System.out.print("Phone number: ");
        String phone = input.nextLine().trim();
        System.out.print("Garment details (e.g. 2 shirts): ");
        String garment = input.nextLine().trim();

        System.out.println("Available services:");
        for (int i = 0; i < serviceOptions.length; i++) {
            System.out.printf("%d. %s - Rs. %.2f per garment%n",
                    i + 1, serviceOptions[i].getName(), serviceOptions[i].getRate());
        }

        int serviceChoice;
        do {
            serviceChoice = readInt("Choose service (1-3): ");
        } while (serviceChoice < 1 || serviceChoice > serviceOptions.length);

        // Polymorphism: the correct subclass method runs for the selected service.
        LaundryService selectedService = serviceOptions[serviceChoice - 1];
        String service = selectedService.getName();
        int quantity;
        do {
            quantity = readInt("Number of garments: ");
            if (quantity <= 0) System.out.println("Quantity must be greater than zero.");
        } while (quantity <= 0);

        System.out.print("Pickup or Delivery (enter Pickup/Delivery): ");
        String deliveryType = input.nextLine().trim();
        if (!deliveryType.equalsIgnoreCase("Delivery")) {
            deliveryType = "Pickup";
        } else {
            deliveryType = "Delivery";
        }

        double amount = selectedService.getRate() * quantity;
        Customer customer = new Customer(name, phone);
        Order order = new Order(nextOrderId++, customer, garment, service,
                quantity, deliveryType, amount);

        orders.add(order);
        orderMap.put(order.getId(), order);

        System.out.println("\nOrder created successfully!");
        order.display();

        // Multithreading: a separate thread prints a simple order notification.
        Thread notificationThread = new Thread(() ->
                System.out.println("[Notification] Order " + order.getId()
                        + " has been received for " + order.getCustomerName() + "."));
        notificationThread.start();
    }

    private static void viewAllOrders() {
        System.out.println("\n--- All Orders ---");
        if (orders.isEmpty()) {
            System.out.println("No orders found.");
            return;
        }
        // Generic method works with a list of any object type.
        displayList(orders);
    }

    // Generics: T allows this method to accept different kinds of lists.
    private static <T> void displayList(List<T> list) {
        for (T item : list) {
            if (item instanceof Order) {
                ((Order) item).display();
            } else {
                System.out.println(item);
            }
        }
    }

    private static Order findOrder(int id) throws InvalidOrderException {
        Order order = orderMap.get(id); // HashMap gives quick lookup by order ID.
        if (order == null) {
            throw new InvalidOrderException("Order ID " + id + " was not found.");
        }
        return order;
    }

    private static void searchOrder() throws InvalidOrderException {
        int id = readInt("Enter order ID: ");
        findOrder(id).display();
    }

    private static void updateStatus() throws InvalidOrderException {
        int id = readInt("Enter order ID: ");
        Order order = findOrder(id);

        System.out.println("1. Received");
        System.out.println("2. Washing");
        System.out.println("3. Ready");
        System.out.println("4. Delivered");
        int choice = readInt("Select new status: ");

        String[] statusOptions = {"Received", "Washing", "Ready", "Delivered"};
        if (choice < 1 || choice > statusOptions.length) {
            System.out.println("Invalid status choice.");
            return;
        }

        order.updateStatus(statusOptions[choice - 1]);
        System.out.println("Status updated successfully.");
        order.display();
    }

    private static void makePayment() throws InvalidOrderException {
        int id = readInt("Enter order ID: ");
        Order order = findOrder(id);

        if (order.isPaid()) {
            System.out.println("Payment has already been recorded.");
        } else {
            order.setPaid(true);
            System.out.printf("Payment of Rs. %.2f recorded successfully.%n", order.getAmount());
        }
    }

    private static void showSummary() {
        System.out.println("\n--- Business Summary ---");
        System.out.println("Total orders: " + orders.size());

        long paidCount = orders.stream().filter(o -> o.isPaid()).count();
        double totalRevenue = orders.stream()
                .filter(o -> o.isPaid())
                .mapToDouble(o -> o.getAmount())
                .sum();

        // Lambda expression sorts orders by amount.
        List<Order> sortedOrders = orders.stream()
                .sorted((a, b) -> Double.compare(b.getAmount(), a.getAmount()))
                .collect(Collectors.toList());

        System.out.println("Paid orders: " + paidCount);
        System.out.printf("Money received: Rs. %.2f%n", totalRevenue);
        System.out.println("Services offered: " + serviceTypes);

        if (!sortedOrders.isEmpty()) {
            System.out.println("Highest-value order:");
            sortedOrders.get(0).display();
        }
    }

    // File handling: text data is loaded when the program starts.
    private static void loadOrders() {
        File file = new File(DATA_FILE);
        if (!file.exists()) return;

        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] p = line.split("\\|", -1);
                if (p.length != 10) continue;

                int id = Integer.parseInt(p[0]);
                Customer customer = new Customer(p[1], p[2]);
                Order order = new Order(id, customer, p[3], p[4],
                        Integer.parseInt(p[5]), p[6], Double.parseDouble(p[7]));
                order.updateStatus(p[8]);
                order.setPaid(Boolean.parseBoolean(p[9]));

                orders.add(order);
                orderMap.put(id, order);
                if (id >= nextOrderId) nextOrderId = id + 1;
            }
            System.out.println("Previous orders loaded from file.");
        } catch (IOException | NumberFormatException e) {
            System.out.println("Could not load saved data: " + e.getMessage());
        }
    }

    private static void saveOrders() {
        try (PrintWriter writer = new PrintWriter(new FileWriter(DATA_FILE))) {
            for (Order o : orders) {
                // Replace delimiter so a user-entered value does not break the file format.
                writer.println(o.getId() + "|" + clean(o.getCustomerName()) + "|"
                        + clean(o.getPhone()) + "|" + clean(o.getGarment()) + "|"
                        + o.getService() + "|" + o.getQuantity() + "|"
                        + o.getDeliveryType() + "|" + o.getAmount() + "|"
                        + o.getStatus() + "|" + o.isPaid());
            }
            System.out.println("Orders saved in " + DATA_FILE);
        } catch (IOException e) {
            System.out.println("Unable to save orders: " + e.getMessage());
        }
    }

    private static String clean(String value) {
        return value.replace("|", "/").replace("\n", " ");
    }

    // Byte streams: creates a backup copy of the saved text file.
    // This method can be called after saveOrders() when a backup is required.
    private static void createBackup() {
        try (FileInputStream in = new FileInputStream(DATA_FILE);
             FileOutputStream out = new FileOutputStream("orders_backup.txt")) {
            int data;
            while ((data = in.read()) != -1) {
                out.write(data);
            }
            System.out.println("Backup created.");
        } catch (IOException e) {
            System.out.println("Backup failed: " + e.getMessage());
        }
    }

    /*
     * JDBC demonstration (optional database layer).
     * This compiles with the JDK, but to use it you must create a database/table,
     * install the matching JDBC driver, create a Connection, and call this method.
     */
    private static void insertOrderUsingJDBC(Connection connection, Order order)
            throws SQLException {
        String sql = "INSERT INTO laundry_orders "
                + "(order_id, customer_name, phone, garment, service, quantity, "
                + "delivery_type, status, amount, paid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement ps = connection.prepareStatement(sql)) {
            ps.setInt(1, order.getId());
            ps.setString(2, order.getCustomerName());
            ps.setString(3, order.getPhone());
            ps.setString(4, order.getGarment());
            ps.setString(5, order.getService());
            ps.setInt(6, order.getQuantity());
            ps.setString(7, order.getDeliveryType());
            ps.setString(8, order.getStatus());
            ps.setDouble(9, order.getAmount());
            ps.setBoolean(10, order.isPaid());
            ps.executeUpdate();
        }
    }
}
