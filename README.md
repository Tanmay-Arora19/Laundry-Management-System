# Laundry and Dry Cleaning Management System

A console-based Laundry and Dry Cleaning Order Tracking application built in Java. This project demonstrates core Object-Oriented Programming (OOP) concepts, file persistence, multithreading, and stream processing.

---

## Features

- **Order Management**: Create orders for various laundry services (Washing, Dry Cleaning, Ironing).
- **Service Rate Calculation**: Dynamic rate calculation based on garment count and service type.
- **Status Tracking**: Track order progress across stages (`Received`, `Washing`, `Ready`, `Delivered`).
- **Billing & Payments**: Record payment statuses and compute real-time revenue summaries.
- **Data Persistence**: Automatically save and load order details from `orders.txt`.
- **Automated Backup**: Create binary backup copies (`orders_backup.txt`) using byte streams.
- **Multithreaded Alerts**: Background thread alerts when new orders are placed.
- **Business Summary**: Analytical view powered by Java Streams (total revenue, paid orders, highest-value orders).
- **Database Ready**: Includes a JDBC prepared-statement method for relational database integration.

---

## Technical Highlights & OOP Principles

| Concept | Implementation in Code |
| :--- | :--- |
| **Encapsulation** | `Customer` and `Order` classes manage private state via accessor methods. |
| **Inheritance** | `WashingService`, `DryCleaningService`, and `IroningService` extend `LaundryService`. |
| **Polymorphism** | Dynamic method dispatch on `LaundryService` references to compute rates. |
| **Abstraction** | Abstract base class `LaundryService` specifying `getName()` and `getRate()`. |
| **Interfaces** | `Trackable` interface defining status updating capabilities. |
| **Custom Exceptions** | `InvalidOrderException` for handling lookups of missing orders. |
| **Collections Framework** | `ArrayList` (order sequence), `HashMap` (ID lookup), `TreeSet` (service catalog). |
| **Generics** | Generic utility method `displayList(List<T> list)` for displaying list elements. |
| **Java Streams & Lambdas** | Stream filtering and sorting for revenue tracking and highest-value orders. |
| **Concurrency** | Dedicated `Thread` instance to simulate background order reception alerts. |
| **File I/O** | Character streams (`BufferedReader`, `PrintWriter`) and Byte streams (`FileInputStream`, `FileOutputStream`). |

---

## Project Structure

```text
.
├── LaundryOrderSystem.java   # Main application source code
├── README.md                 # Project documentation
├── .gitignore                # Git ignore configuration
├── run.bat                   # Windows quick-run script
└── run.sh                    # Linux/macOS quick-run script
```

---

## Getting Started

### Prerequisites

- Java Development Kit (JDK) 8 or higher
- Git (optional, for version control)

Check your Java installation:
```bash
java -version
javac -version
```

### Compilation & Execution

#### Option 1: Using the helper scripts

- **Windows**:
  ```cmd
  run.bat
  ```

- **Linux / macOS**:
  ```bash
  chmod +x run.sh
  ./run.sh
  ```

#### Option 2: Using the command line directly

1. Compile the Java source file:
   ```bash
   javac LaundryOrderSystem.java
   ```

2. Run the application:
   ```bash
   java LaundryOrderSystem
   ```

---

## Menu Options

Upon running the program, the main menu provides the following operations:

1. **Create new laundry order**: Enter customer name, phone number, garment details, choose service, specify quantity, and select pickup or delivery.
2. **View all orders**: Display all saved customer orders.
3. **Search order by ID**: Retrieve an order by its unique numerical identifier.
4. **Update order status**: Progress an order through Received, Washing, Ready, and Delivered states.
5. **Record payment**: Mark an order's payment as settled.
6. **Business summary**: View aggregated stats (total orders, paid counts, total revenue, top order).
7. **Save and create backup**: Persist changes to disk and generate a backup file.
8. **Save and exit**: Flush data to file and terminate the application cleanly.

---

## Storage & File Format

Orders are stored in `orders.txt` using pipe-delimited records:
```text
OrderId|CustomerName|Phone|Garment|Service|Quantity|DeliveryType|Amount|Status|PaidStatus
```

Example record:
```text
1001|John Doe|9876543210|2 shirts|Washing|2|Pickup|100.0|Received|false
```

---

## Author

- **Tanmay Arora** ([@Tanmay-Arora19](https://github.com/Tanmay-Arora19))
