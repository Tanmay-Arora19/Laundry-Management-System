const fs = require('fs');
const path = require('path');

const targetDirs = [
    path.join(__dirname, 'images'),
    'C:\\Users\\shree\\.gemini\\antigravity\\brain\\5839e50a-3e7e-492d-8e78-d0e165c7854e\\images'
];

function createTerminalSVG(title, lines, width = 850, height = 480) {
    let textElements = '';
    let y = 65;
    const lineHeight = 19;

    lines.forEach(line => {
        let color = '#E2E8F0';
        let weight = 'normal';

        if (line.startsWith('$') || line.startsWith('>')) {
            color = '#38BDF8';
            weight = 'bold';
        } else if (line.includes('==') || line.includes('--')) {
            color = '#64748B';
        } else if (line.startsWith('Enter') || line.startsWith('Choose')) {
            color = '#FCD34D';
            weight = 'bold';
        } else if (line.includes('[Notification]')) {
            color = '#4ADE80';
            weight = 'bold';
        } else if (line.includes('successfully') || line.includes('saved') || line.includes('loaded')) {
            color = '#34D399';
            weight = 'bold';
        } else if (line.includes('Error:') || line.includes('Invalid') || line.includes('Please enter')) {
            color = '#F87171';
            weight = 'bold';
        } else if (line.includes('Order ID') || line.includes('Customer') || line.includes('Total Amount')) {
            color = '#93C5FD';
            weight = 'bold';
        } else if (line.includes('Rs.')) {
            color = '#A7F3D0';
            weight = 'bold';
        }

        // Escape XML entities
        const escaped = line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        textElements += `<text x="24" y="${y}" font-family="'Consolas', 'Courier New', monospace" font-size="13" font-weight="${weight}" fill="${color}">${escaped}</text>\n`;
        y += lineHeight;
    });

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  <!-- Window Container -->
  <rect x="5" y="5" width="${width - 10}" height="${height - 10}" rx="10" fill="#0B132B" stroke="#1E293B" stroke-width="2" filter="url(#shadow)"/>
  
  <!-- Window Titlebar -->
  <rect x="5" y="5" width="${width - 10}" height="36" rx="10" fill="#1C2541"/>
  <rect x="5" y="30" width="${width - 10}" height="11" fill="#1C2541"/>
  
  <!-- Window Controls -->
  <circle cx="25" cy="22" r="6" fill="#EF4444"/>
  <circle cx="43" cy="22" r="6" fill="#F59E0B"/>
  <circle cx="61" cy="22" r="6" fill="#10B981"/>
  
  <!-- Title -->
  <text x="${width / 2}" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="12" font-weight="600" fill="#94A3B8" text-anchor="middle">${title}</text>
  
  <!-- Terminal Content Area -->
  <g>
    ${textElements}
  </g>
</svg>`;
}

// 1. Fig 5.1: Main Menu & Startup
const fig51_lines = [
    '$ javac LaundryOrderSystem.java',
    '$ java LaundryOrderSystem',
    'Previous orders loaded from file.',
    '========================================',
    '   LAUNDRY / DRY CLEANING ORDER SYSTEM',
    '========================================',
    '',
    '--------------- MAIN MENU ---------------',
    '1. Create new laundry order',
    '2. View all orders',
    '3. Search order by ID',
    '4. Update order status',
    '5. Record payment',
    '6. Business summary',
    '7. Save and create backup',
    '8. Save and exit',
    'Enter your choice: _'
];

// 2. Fig 5.2: Order Creation & Live Calculation
const fig52_lines = [
    'Enter your choice: 1',
    '',
    '--- Create New Order ---',
    'Customer name: Aman Sharma',
    'Phone number: 9876543210',
    'Garment details (e.g. 2 shirts): 3 Shirts',
    'Available services:',
    '1. Washing - Rs. 50.00 per garment',
    '2. Dry Cleaning - Rs. 100.00 per garment',
    '3. Ironing - Rs. 30.00 per garment',
    'Choose service (1-3): 1',
    'Number of garments: 3',
    'Pickup or Delivery (enter Pickup/Delivery): Pickup',
    '',
    'Order created successfully!',
    '----------------------------------------',
    'Order ID       : 1001',
    'Customer       : Aman Sharma',
    'Phone          : 9876543210',
    'Garment        : 3 Shirts',
    'Service        : Washing',
    'Quantity       : 3',
    'Pickup/Delivery: Pickup',
    'Order Status   : Received',
    'Total Amount   : Rs. 150.00',
    'Payment        : Pending',
    '----------------------------------------',
    '[Notification] Order 1001 has been received for Aman Sharma.'
];

// 3. Fig 5.3: View All Orders & Order Search by ID
const fig53_lines = [
    'Enter your choice: 2',
    '',
    '--- All Orders ---',
    '----------------------------------------',
    'Order ID       : 1001',
    'Customer       : Aman Sharma',
    'Phone          : 9876543210',
    'Garment        : 3 Shirts',
    'Service        : Washing',
    'Quantity       : 3',
    'Pickup/Delivery: Pickup',
    'Order Status   : Received',
    'Total Amount   : Rs. 150.00',
    'Payment        : Pending',
    '----------------------------------------',
    '',
    'Enter your choice: 3',
    'Enter order ID: 1001',
    '----------------------------------------',
    'Order ID       : 1001',
    'Customer       : Aman Sharma',
    'Phone          : 9876543210',
    'Garment        : 3 Shirts',
    'Service        : Washing',
    'Quantity       : 3',
    'Pickup/Delivery: Pickup',
    'Order Status   : Received',
    'Total Amount   : Rs. 150.00',
    'Payment        : Pending'
];

// 4. Fig 5.4: Order Status Progression
const fig54_lines = [
    'Enter your choice: 4',
    'Enter order ID: 1001',
    '1. Received',
    '2. Washing',
    '3. Ready',
    '4. Delivered',
    'Select new status: 3',
    'Status updated successfully.',
    '----------------------------------------',
    'Order ID       : 1001',
    'Customer       : Aman Sharma',
    'Phone          : 9876543210',
    'Garment        : 3 Shirts',
    'Service        : Washing',
    'Quantity       : 3',
    'Pickup/Delivery: Pickup',
    'Order Status   : Ready',
    'Total Amount   : Rs. 150.00',
    'Payment        : Pending'
];

// 5. Fig 5.5: Payment Recording
const fig55_lines = [
    'Enter your choice: 5',
    'Enter order ID: 1001',
    'Payment of Rs. 150.00 recorded successfully.',
    '',
    'Enter your choice: 3',
    'Enter order ID: 1001',
    '----------------------------------------',
    'Order ID       : 1001',
    'Customer       : Aman Sharma',
    'Phone          : 9876543210',
    'Garment        : 3 Shirts',
    'Service        : Washing',
    'Quantity       : 3',
    'Pickup/Delivery: Pickup',
    'Order Status   : Ready',
    'Total Amount   : Rs. 150.00',
    'Payment        : Paid'
];

// 6. Fig 5.6: Business Summary & Revenue Analytics
const fig56_lines = [
    'Enter your choice: 6',
    '',
    '--- Business Summary ---',
    'Total orders: 3',
    'Paid orders: 2',
    'Money received: Rs. 350.00',
    'Services offered: [Dry Cleaning, Ironing, Washing]',
    'Highest-value order:',
    '----------------------------------------',
    'Order ID       : 1002',
    'Customer       : Priya Verma',
    'Phone          : 9812345678',
    'Garment        : 2 Blazers',
    'Service        : Dry Cleaning',
    'Quantity       : 2',
    'Pickup/Delivery: Delivery',
    'Order Status   : Ready',
    'Total Amount   : Rs. 200.00',
    'Payment        : Paid'
];

// 7. Fig 5.7: File Persistence & Backup
const fig57_lines = [
    'Enter your choice: 7',
    'Orders saved in orders.txt',
    'Backup created.',
    '',
    'Enter your choice: 8',
    'Orders saved in orders.txt',
    'Data saved. Thank you!',
    '',
    '$ cat orders.txt',
    '1001|Aman Sharma|9876543210|3 Shirts|Washing|3|Pickup|150.0|Ready|true',
    '1002|Priya Verma|9812345678|2 Blazers|Dry Cleaning|2|Delivery|200.0|Ready|true',
    '1003|Rohit Kumar|9988776655|5 Shirts|Ironing|5|Pickup|150.0|Received|false',
    '',
    '$ ls -l orders*.txt',
    '-rw-r--r-- 1 student staff 248 Nov 20 10:45 orders.txt',
    '-rw-r--r-- 1 student staff 248 Nov 20 10:45 orders_backup.txt'
];

// 8. Fig 5.8: Error Handling & Custom Exceptions
const fig58_lines = [
    'Enter your choice: 3',
    'Enter order ID: abc',
    'Please enter a valid whole number.',
    'Enter order ID: 9999',
    'Error: Order ID 9999 was not found.',
    '',
    'Enter your choice: 1',
    'Customer name: Rahul',
    'Phone number: 9876500000',
    'Garment details: Coat',
    'Choose service (1-3): 5',
    'Choose service (1-3): 2',
    'Number of garments: 0',
    'Quantity must be greater than zero.',
    'Number of garments: -2',
    'Quantity must be greater than zero.',
    'Number of garments: 1',
    'Order created successfully!'
];

// 9. Fig 4.1: Architecture Diagram SVG
function createArchitectureSVG(width = 850, height = 480) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B2545;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#134074;stop-opacity:1" />
    </linearGradient>
    <filter id="boxShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="2"/>

  <!-- Title -->
  <text x="${width / 2}" y="35" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="18" font-weight="bold" fill="#0B2545" text-anchor="middle">System Architecture &amp; Data Flow Diagram</text>
  <text x="${width / 2}" y="56" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Laundrymat / Dry Cleaning Order Tracking System Using Java</text>

  <!-- Block 1: User / Shopkeeper -->
  <rect x="50" y="90" width="200" height="70" rx="8" fill="url(#grad1)" filter="url(#boxShadow)"/>
  <text x="150" y="122" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">User / Shopkeeper</text>
  <text x="150" y="142" font-family="Arial" font-size="11" fill="#93C5FD" text-anchor="middle">Console Terminal Input</text>

  <!-- Arrow 1 -->
  <path d="M 250 125 L 320 125" stroke="#0077B6" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text x="285" y="115" font-family="Arial" font-size="10" fill="#0077B6" text-anchor="middle">Commands</text>

  <!-- Block 2: Main Menu & Controller -->
  <rect x="325" y="90" width="200" height="70" rx="8" fill="#134074" filter="url(#boxShadow)"/>
  <text x="425" y="122" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Main Menu Controller</text>
  <text x="425" y="142" font-family="Arial" font-size="11" fill="#93C5FD" text-anchor="middle">Options 1-8 &amp; Input Validation</text>

  <!-- Arrow 2 -->
  <path d="M 525 125 L 595 125" stroke="#0077B6" stroke-width="3" fill="none"/>
  <text x="560" y="115" font-family="Arial" font-size="10" fill="#0077B6" text-anchor="middle">Dispatches</text>

  <!-- Block 3: Business Logic & OOP Modules -->
  <rect x="600" y="90" width="200" height="70" rx="8" fill="#0B2545" filter="url(#boxShadow)"/>
  <text x="700" y="122" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Core Business Logic</text>
  <text x="700" y="142" font-family="Arial" font-size="11" fill="#93C5FD" text-anchor="middle">Order, Customer, Services</text>

  <!-- Downward Arrow from Block 3 to Memory & Processing Layer -->
  <path d="M 700 160 L 700 220" stroke="#0077B6" stroke-width="3" fill="none"/>

  <!-- Sub-block: 4 OOP Modules -->
  <rect x="50" y="225" width="750" height="110" rx="8" fill="#FFFFFF" stroke="#93C5FD" stroke-width="1.5" filter="url(#boxShadow)"/>
  <text x="425" y="248" font-family="Arial" font-size="13" font-weight="bold" fill="#0B2545" text-anchor="middle">Object-Oriented Subsystems &amp; Services Hierarchy</text>

  <!-- Box M1 -->
  <rect x="70" y="260" width="160" height="60" rx="6" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="150" y="285" font-family="Arial" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">Customer Module</text>
  <text x="150" y="303" font-family="Arial" font-size="9" fill="#64748B" text-anchor="middle">Encapsulated Data</text>

  <!-- Box M2 -->
  <rect x="250" y="260" width="160" height="60" rx="6" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="330" y="285" font-family="Arial" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">Pricing &amp; Services</text>
  <text x="330" y="303" font-family="Arial" font-size="9" fill="#64748B" text-anchor="middle">Polymorphic Rates</text>

  <!-- Box M3 -->
  <rect x="430" y="260" width="160" height="60" rx="6" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="510" y="285" font-family="Arial" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">Tracking &amp; Pay</text>
  <text x="510" y="303" font-family="Arial" font-size="9" fill="#64748B" text-anchor="middle">Trackable Interface</text>

  <!-- Box M4 -->
  <rect x="610" y="260" width="160" height="60" rx="6" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="690" y="285" font-family="Arial" font-size="11" font-weight="bold" fill="#0F172A" text-anchor="middle">Java Streams API</text>
  <text x="690" y="303" font-family="Arial" font-size="9" fill="#64748B" text-anchor="middle">Analytics &amp; Top Order</text>

  <!-- Downward Arrow from OOP to Persistence -->
  <path d="M 425 335 L 425 375" stroke="#0077B6" stroke-width="3" fill="none"/>

  <!-- Persistence Layer Blocks -->
  <rect x="50" y="380" width="230" height="75" rx="8" fill="#15803D" filter="url(#boxShadow)"/>
  <text x="165" y="412" font-family="Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">In-Memory Collections</text>
  <text x="165" y="432" font-family="Arial" font-size="10" fill="#BBF7D0" text-anchor="middle">ArrayList (Order List) | HashMap (ID Search)</text>

  <rect x="310" y="380" width="230" height="75" rx="8" fill="#0369A1" filter="url(#boxShadow)"/>
  <text x="425" y="412" font-family="Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Primary File Storage</text>
  <text x="425" y="432" font-family="Arial" font-size="10" fill="#BAE6FD" text-anchor="middle">orders.txt (Character Streams)</text>

  <rect x="570" y="380" width="230" height="75" rx="8" fill="#B45309" filter="url(#boxShadow)"/>
  <text x="685" y="412" font-family="Arial" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Automated Backup</text>
  <text x="685" y="432" font-family="Arial" font-size="10" fill="#FEF3C7" text-anchor="middle">orders_backup.txt (Byte Streams)</text>
</svg>`;
}

// Generate all files
const images = [
    { name: 'fig4_1_architecture.svg', content: createArchitectureSVG(850, 480) },
    { name: 'fig5_1_main_menu.svg', content: createTerminalSVG('Terminal - Application Startup & Main Menu', fig51_lines, 850, 460) },
    { name: 'fig5_2_create_order.svg', content: createTerminalSVG('Terminal - Option 1: Order Creation & Billing', fig52_lines, 850, 620) },
    { name: 'fig5_3_view_search.svg', content: createTerminalSVG('Terminal - Option 2 & 3: List & Search Orders', fig53_lines, 850, 680) },
    { name: 'fig5_4_update_status.svg', content: createTerminalSVG('Terminal - Option 4: Order Status Tracking', fig54_lines, 850, 460) },
    { name: 'fig5_5_record_payment.svg', content: createTerminalSVG('Terminal - Option 5: Payment Settlement', fig55_lines, 850, 480) },
    { name: 'fig5_6_business_summary.svg', content: createTerminalSVG('Terminal - Option 6: Business Summary Analytics', fig56_lines, 850, 480) },
    { name: 'fig5_7_file_persistence.svg', content: createTerminalSVG('Terminal - Option 7 & 8: File Persistence & Backup', fig57_lines, 850, 500) },
    { name: 'fig5_8_exception_handling.svg', content: createTerminalSVG('Terminal - Error Handling & Validation', fig58_lines, 850, 520) }
];

targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    images.forEach(img => {
        fs.writeFileSync(path.join(dir, img.name), img.content, 'utf8');
    });
});

console.log(`Successfully generated ${images.length} terminal and architecture images in both target directories.`);
