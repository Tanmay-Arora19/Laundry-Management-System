const fs = require('fs');
const path = require('path');
const PptxGenJS = require(process.env.APPDATA + '/npm/node_modules/pptxgenjs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
pptx.author = 'Tanmay Arora';
pptx.company = 'Chitkara University';
pptx.title = 'Laundrymat / Dry Cleaning Order Tracking System Using Java';

// Color Palette
const NAVY = '0B2545';
const ROYAL = '134074';
const ACCENT = '0077B6';
const LIGHT_BG = 'F8FAFC';
const CARD_BG = 'F1F5F9';
const WHITE = 'FFFFFF';
const DARK_TEXT = '0F172A';
const BODY_TEXT = '334155';
const MUTED_TEXT = '64748B';
const BORDER_COLOR = 'CBD5E1';
const GREEN = '15803D';
const ORANGE = 'C2410C';

// Helper function to create a standard header
function addHeader(slide, titleText, subtitleText, slideNumber) {
    // Top banner
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 10, h: 0.95,
        fill: { color: NAVY }
    });
    // Accent line under banner
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0.95, w: 10, h: 0.05,
        fill: { color: ACCENT }
    });
    // Title
    slide.addText(titleText, {
        x: 0.6, y: 0.12, w: 8.0, h: 0.45,
        fontSize: 20, fontFace: 'Arial', bold: true, color: WHITE
    });
    // Subtitle
    if (subtitleText) {
        slide.addText(subtitleText, {
            x: 0.6, y: 0.55, w: 8.0, h: 0.32,
            fontSize: 11, fontFace: 'Arial', color: '93C5FD'
        });
    }
    // Slide Number badge
    slide.addShape(pptx.ShapeType.rect, {
        x: 8.8, y: 0.22, w: 0.65, h: 0.5,
        fill: { color: ROYAL },
        line: { color: '60A5FA', width: 1 }
    });
    slide.addText(slideNumber.toString(), {
        x: 8.8, y: 0.22, w: 0.65, h: 0.5,
        fontSize: 14, fontFace: 'Arial', bold: true, color: WHITE, align: 'center', valign: 'middle'
    });

    // Bottom Footer
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 5.35, w: 10, h: 0.275,
        fill: { color: 'F1F5F9' },
        line: { color: BORDER_COLOR, width: 0.5 }
    });
    slide.addText('B.Tech CSE (AI & ML) | 3rd Semester | Chitkara University', {
        x: 0.6, y: 5.38, w: 5.5, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: MUTED_TEXT
    });
    slide.addText('Laundry Order Tracking System Using Java', {
        x: 6.2, y: 5.38, w: 3.2, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: ROYAL, align: 'right', bold: true
    });
}

// -------------------------------------------------------------
// SLIDE 1: Title Slide
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: NAVY };

    // Decorative geometric accents
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: ACCENT }
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.25, y: 0, w: 0.1, h: 5.625, fill: { color: '38BDF8' }
    });

    // Badge
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 0.6, w: 4.8, h: 0.4,
        fill: { color: ROYAL }, line: { color: '60A5FA', width: 1 }, rectRadius: 0.1
    });
    slide.addText('B.TECH CSE (AI & ML) - 3RD SEMESTER ACADEMIC PROJECT', {
        x: 0.8, y: 0.6, w: 4.8, h: 0.4,
        fontSize: 10, fontFace: 'Arial', bold: true, color: 'BAE6FD', align: 'center', valign: 'middle'
    });

    // Main Title
    slide.addText('LAUNDRYMAT / DRY CLEANING\nORDER TRACKING SYSTEM', {
        x: 0.8, y: 1.15, w: 8.5, h: 1.3,
        fontSize: 28, fontFace: 'Arial', bold: true, color: WHITE, lineSpacing: 34
    });

    // Subtitle
    slide.addText('A Console-Based Core Java Project Demonstrating Object-Oriented Programming, Multithreading & File Persistence', {
        x: 0.8, y: 2.55, w: 8.5, h: 0.5,
        fontSize: 13, fontFace: 'Arial', color: '93C5FD'
    });

    // Separator line
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.8, y: 3.15, w: 8.4, h: 0.03, fill: { color: '38BDF8' }
    });

    // Team Members Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 3.35, w: 5.0, h: 1.8,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.1
    });
    slide.addText('PROJECT TEAM MEMBERS', {
        x: 1.0, y: 3.45, w: 4.6, h: 0.3,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8'
    });
    slide.addText('1. Tanmay Arora (Lead Developer)\n2. [Team Member 2 Name]\n3. [Team Member 3 Name]\n4. [Team Member 4 Name]', {
        x: 1.0, y: 3.75, w: 4.6, h: 1.25,
        fontSize: 10.5, fontFace: 'Arial', color: WHITE, lineSpacing: 18
    });

    // Institution & Guide Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.0, y: 3.35, w: 3.2, h: 1.8,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.1
    });
    slide.addText('INSTITUTION & MENTOR', {
        x: 6.2, y: 3.45, w: 2.8, h: 0.3,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8'
    });
    slide.addText('Department of CSE (AI & ML)\nChitkara University, Punjab\n\nFaculty Guide:\n[Faculty Guide / Mentor Name]', {
        x: 6.2, y: 3.75, w: 2.8, h: 1.25,
        fontSize: 10, fontFace: 'Arial', color: 'E2E8F0', lineSpacing: 15
    });
}

// -------------------------------------------------------------
// SLIDE 2: Introduction
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Introduction to Laundry Management System', 'Understanding the Daily Operations of Laundry and Dry Cleaning Businesses', 2);

    // Card 1: What is a Laundry Management System?
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.2, w: 8.8, h: 1.5,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.2, w: 0.15, h: 1.5, fill: { color: ROYAL }
    });
    slide.addText('What is a Laundry Management System?', {
        x: 0.9, y: 1.3, w: 8.3, h: 0.3,
        fontSize: 13, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('A Laundry Management System is a software application designed to handle the daily operations of a laundry or dry cleaning shop. In our daily lives, people give clothes to laundry shops for washing, dry cleaning, and ironing. The shopkeeper needs to record customer names, count garments, track cleaning stages, calculate bills, and ensure clothes are safely returned. Our Java application automates all these manual tasks through a simple, interactive terminal system that makes laundry management fast, organized, and error-free.', {
        x: 0.9, y: 1.65, w: 8.3, h: 0.95,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });

    // Card 2: Left column - Daily Shop Workflow
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 2.9, w: 4.25, h: 2.25,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('How Laundry Shops Work Daily', {
        x: 0.8, y: 3.05, w: 3.8, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: ROYAL
    });
    slide.addText('• Receiving Garments: Customers bring dirty clothes or schedule a pickup.\n• Recording Information: Shopkeepers write customer names, phone numbers, and clothes count.\n• Performing Services: Clothes are separated for washing, dry cleaning, or ironing.\n• Billing and Handover: Bills are prepared, payment is taken, and clothes are returned.', {
        x: 0.8, y: 3.4, w: 3.85, h: 1.65,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });

    // Card 3: Right column - How Java Simplifies This
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.15, y: 2.9, w: 4.25, h: 2.25,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('How Our Java Application Helps', {
        x: 5.35, y: 3.05, w: 3.8, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: GREEN
    });
    slide.addText('• Instant Order Registration: Replaces paper notebooks with computer input.\n• Automatic Bill Calculation: Calculates total price automatically without math mistakes.\n• Live Status Tracking: Lets the shopkeeper update order stages with a single keypress.\n• Safe Record Storage: Saves every transaction in a permanent file for future reference.', {
        x: 5.35, y: 3.4, w: 3.85, h: 1.65,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });
}

// -------------------------------------------------------------
// SLIDE 3: Problem Statement
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Problem Statement – Challenges with Manual Management', 'Why Traditional Pen-and-Paper Laundry Management Fails', 3);

    // Intro sentence
    slide.addText('In many traditional laundry shops, shopkeepers still write customer orders in paper notebooks and give handwritten paper receipts. This manual approach creates several serious everyday problems:', {
        x: 0.6, y: 1.15, w: 8.8, h: 0.45,
        fontSize: 11, fontFace: 'Arial', color: BODY_TEXT
    });

    const problems = [
        {
            title: '1. Damaged or Lost Paper Records',
            desc: 'Paper notebooks can easily get wet, torn, or misplaced in a busy laundry shop. When a register is lost, the shopkeeper loses all past customer records and active order details.',
            color: ORANGE
        },
        {
            title: '2. Difficulty Tracking Clothes',
            desc: 'When hundreds of garments arrive daily, it is difficult to remember which clothes are being washed, which are pressed, and which are ready for customer pickup.',
            color: ROYAL
        },
        {
            title: '3. Calculation Mistakes in Billing',
            desc: 'Calculating bills manually during peak rush hours often leads to arithmetic mistakes. This results in either charging the customer incorrectly or causing financial loss to the shop.',
            color: ORANGE
        },
        {
            title: '4. Forgetting Payment Statuses',
            desc: 'Shopkeepers frequently forget whether a customer has already paid or still owes money. Without an organized digital record, payment disputes and misunderstandings occur.',
            color: ROYAL
        }
    ];

    problems.forEach((p, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.7 + Math.floor(idx / 2) * 1.7;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 1.55,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 0.12, h: 1.55, fill: { color: p.color }
        });
        slide.addText(p.title, {
            x: x + 0.25, y: y + 0.12, w: 3.85, h: 0.3,
            fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(p.desc, {
            x: x + 0.25, y: y + 0.45, w: 3.85, h: 0.98,
            fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
        });
    });
}

// -------------------------------------------------------------
// SLIDE 4: Project Objectives
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Project Objectives – Goals of Our Application', 'What We Aim to Achieve with This Core Java Project', 4);

    slide.addText('The primary objective of this project is to build an easy-to-use, reliable, and automated order tracking system using Core Java. Our project focuses on the following key goals:', {
        x: 0.6, y: 1.15, w: 8.8, h: 0.45,
        fontSize: 11, fontFace: 'Arial', color: BODY_TEXT
    });

    const objectives = [
        { num: '01', title: 'Customer Management', desc: 'To record and organize customer details such as name and phone number systematically without paper notebooks.' },
        { num: '02', title: 'Automatic Order IDs', desc: 'To generate a unique four-digit order ID automatically for every new order placed in the system.' },
        { num: '03', title: 'Accurate Bill Calculation', desc: 'To calculate bills automatically based on fixed per-garment service rates without any human calculation errors.' },
        { num: '04', title: 'Live Order Tracking', desc: 'To track clothes step-by-step through four distinct stages: Received, Washing, Ready, and Delivered.' },
        { num: '05', title: 'Payment Management', desc: 'To maintain clear records of Paid and Pending payments and display real-time business revenue summaries.' },
        { num: '06', title: 'Permanent Data Storage', desc: 'To save all records permanently in a text file so customer order history is never lost when the program closes.' }
    ];

    objectives.forEach((obj, idx) => {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const x = 0.6 + col * 3.0;
        const y = 1.7 + row * 1.7;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 2.8, h: 1.55,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.35,
            fill: { color: ROYAL }, rectRadius: 0.05
        });
        slide.addText(obj.num, {
            x: x + 0.15, y: y + 0.15, w: 0.5, h: 0.35,
            fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE, align: 'center', valign: 'middle'
        });
        slide.addText(obj.title, {
            x: x + 0.75, y: y + 0.15, w: 1.9, h: 0.35,
            fontSize: 11, fontFace: 'Arial', bold: true, color: NAVY, valign: 'middle'
        });
        slide.addText(obj.desc, {
            x: x + 0.15, y: y + 0.58, w: 2.5, h: 0.88,
            fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
        });
    });
}

// -------------------------------------------------------------
// SLIDE 5: Proposed Solution
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Proposed Solution – How Our Application Works', 'A Structured and Automated 6-Step Workflow for Laundry Shops', 5);

    slide.addText('Our Java application replaces traditional paper registers with a menu-driven console program. The entire customer journey is handled through six simple automated steps:', {
        x: 0.6, y: 1.15, w: 8.8, h: 0.45,
        fontSize: 11, fontFace: 'Arial', color: BODY_TEXT
    });

    const steps = [
        { s: 'Step 1', title: 'Customer Entry', desc: 'The shopkeeper enters the customer name and contact phone number.' },
        { s: 'Step 2', title: 'Service Choice', desc: 'The shopkeeper chooses Washing, Dry Cleaning, or Ironing and enters quantity.' },
        { s: 'Step 3', title: 'Auto Billing', desc: 'The system multiplies quantity by service rate to compute the total bill.' },
        { s: 'Step 4', title: 'ID & Alert', desc: 'A unique order ID is assigned and a background thread prints a confirmation alert.' },
        { s: 'Step 5', title: 'Status Update', desc: 'As clothes are cleaned and ironed, the status changes from Received to Delivered.' },
        { s: 'Step 6', title: 'Payment & Save', desc: 'Payment is recorded as Paid, and the order is saved permanently to file.' }
    ];

    steps.forEach((st, idx) => {
        const x = 0.6 + (idx % 3) * 3.0;
        const y = 1.7 + Math.floor(idx / 3) * 1.7;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 2.8, h: 1.55,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 2.8, h: 0.35, fill: { color: ROYAL }
        });
        slide.addText(`${st.s}: ${st.title}`, {
            x: x + 0.1, y: y + 0.05, w: 2.6, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(st.desc, {
            x: x + 0.15, y: y + 0.45, w: 2.5, h: 0.98,
            fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
        });
    });
}

// -------------------------------------------------------------
// SLIDE 6: Technologies Used
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Technologies & Tools Used in the Project', 'Core Software Components and Libraries Explained in Simple Words', 6);

    const techs = [
        {
            name: 'Java Programming Language',
            desc: 'We used Java because it is platform-independent ("Write Once, Run Anywhere"), highly reliable, and strictly follows Object-Oriented Programming (OOP) concepts, making it ideal for academic projects.'
        },
        {
            name: 'Java Development Kit (JDK 8+)',
            desc: 'The JDK provides the Java compiler (javac) to convert our source code into bytecode, and the Java Virtual Machine (JVM) to execute the program on any computer operating system.'
        },
        {
            name: 'Modern Code Editor (VS Code / IDE)',
            desc: 'Visual Studio Code and terminal command tools were used for writing clean code, running builds, testing menu options, and maintaining git version control.'
        },
        {
            name: 'Java Collections Framework',
            desc: 'We utilized ArrayList to store multiple order objects sequentially, HashMap to search orders instantly by their ID, and TreeSet to maintain a sorted catalog of available laundry services.'
        },
        {
            name: 'Java File Handling (I/O Streams)',
            desc: 'We used character streams (BufferedReader and PrintWriter) to read and write text data permanently to orders.txt, and byte streams (FileInputStream and FileOutputStream) for file backups.'
        },
        {
            name: 'JDBC (Database Extension Preview)',
            desc: 'Our code includes a pre-configured Java Database Connectivity method with SQL PreparedStatement, ready to link with relational databases like MySQL in future versions.'
        }
    ];

    techs.forEach((t, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.2 + Math.floor(idx / 2) * 1.35;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 1.2,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 0.12, h: 1.2, fill: { color: ACCENT }
        });
        slide.addText(t.name, {
            x: x + 0.25, y: y + 0.1, w: 3.85, h: 0.28,
            fontSize: 11, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(t.desc, {
            x: x + 0.25, y: y + 0.38, w: 3.85, h: 0.75,
            fontSize: 9.3, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
        });
    });
}

// -------------------------------------------------------------
// SLIDE 7: Main Features
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Main Features of the System', 'Comprehensive Capabilities Designed for Daily Laundry Operations', 7);

    const features = [
        { t: 'Customer Records', d: 'Stores customer name and 10-digit phone number accurately.' },
        { t: 'Garment Details', d: 'Records garment type (shirts, suits, curtains) and counts.' },
        { t: 'Service Catalog', d: 'Offers Washing (Rs. 50), Dry Cleaning (Rs. 100), Ironing (Rs. 30).' },
        { t: 'Auto ID Generation', d: 'Assigns unique sequential order IDs starting from 1001 onwards.' },
        { t: 'Instant Price Calculation', d: 'Automatically multiplies quantity by rate to compute bill.' },
        { t: 'Pickup / Delivery Tag', d: 'Categorizes whether the customer will pick up or wants home delivery.' },
        { t: '4-Stage Status Tracking', d: 'Live status tracking: Received → Washing → Ready → Delivered.' },
        { t: 'Payment Settlement', d: 'Records payment status as Paid and tracks pending customer bills.' },
        { t: 'Quick Order Search', d: 'Instantly finds and displays any order using its unique Order ID.' },
        { t: 'Automated Backup', d: 'Creates a duplicate binary backup file (orders_backup.txt).' }
    ];

    features.forEach((f, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.15 + Math.floor(idx / 2) * 0.82;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 0.72,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.06
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 0.1, h: 0.72, fill: { color: ROYAL }
        });
        slide.addText(f.t, {
            x: x + 0.2, y: y + 0.08, w: 3.9, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(f.d, {
            x: x + 0.2, y: y + 0.32, w: 3.9, h: 0.35,
            fontSize: 9, fontFace: 'Arial', color: BODY_TEXT
        });
    });
}

// -------------------------------------------------------------
// SLIDE 8: System Architecture
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'System Architecture & Data Flow', 'Block Diagram Demonstrating How Information Flows in the System', 8);

    // Block diagram boxes (horizontal layout across the slide)
    const blocks = [
        { name: 'User / Shopkeeper', sub: 'Console Input' },
        { name: 'Main Menu', sub: 'Options 1 to 8' },
        { name: 'Customer Module', sub: 'Name & Phone' },
        { name: 'Order & Pricing', sub: 'Rate Calculation' },
        { name: 'Tracking & Pay', sub: 'Status & Settlement' },
        { name: 'File Storage', sub: 'orders.txt & Backup' }
    ];

    blocks.forEach((b, idx) => {
        const x = 0.5 + idx * 1.52;
        const y = 1.25;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 1.35, h: 0.85,
            fill: { color: idx === 0 ? ROYAL : (idx === 5 ? GREEN : NAVY) },
            line: { color: '38BDF8', width: 1 }, rectRadius: 0.08
        });
        slide.addText(b.name, {
            x: x + 0.05, y: y + 0.12, w: 1.25, h: 0.38,
            fontSize: 9.5, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
        });
        slide.addText(b.sub, {
            x: x + 0.05, y: y + 0.48, w: 1.25, h: 0.25,
            fontSize: 8, fontFace: 'Arial', color: '93C5FD', align: 'center'
        });

        // Arrow between blocks
        if (idx < 5) {
            slide.addText('➔', {
                x: x + 1.35, y: y + 0.2, w: 0.17, h: 0.4,
                fontSize: 14, fontFace: 'Arial', bold: true, color: ACCENT, align: 'center', valign: 'middle'
            });
        }
    });

    // Explanation card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 2.35, w: 8.8, h: 2.8,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Detailed Explanation of System Architecture Blocks', {
        x: 0.9, y: 2.5, w: 8.2, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
    });

    const archPoints = [
        '1. User Interface: The shopkeeper interacts with the system using numbers (1 to 8) displayed on the terminal menu.',
        '2. Input Handling: The scanner reads user inputs and wrapper classes ensure that invalid text does not crash the system.',
        '3. Business Logic: Customer objects and Order objects are created using Object-Oriented principles and service polymorphism.',
        '4. Memory Storage: Active orders are stored in an ArrayList for listing and a HashMap for instant key-based ID searching.',
        '5. Persistence Layer: The system writes pipe-delimited records to orders.txt and creates a binary copy in orders_backup.txt.'
    ];

    slide.addText(archPoints.join('\n\n'), {
        x: 0.9, y: 2.9, w: 8.2, h: 2.1,
        fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });
}

// -------------------------------------------------------------
// SLIDE 9: Module Division Among Four Members
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module Division Among Four Team Members', 'Clear Division of Academic Responsibilities Across the Project Team', 9);

    const modules = [
        {
            member: 'Member 1: Tanmay Arora',
            role: 'Module 1: Customer & Service Management',
            duties: '• Designed the Customer class to store customer names and phone numbers.\n• Created the abstract parent class LaundryService.\n• Implemented child classes: WashingService, DryCleaningService, and IroningService.\n• Defined fixed per-garment service rates and customer input validation.'
        },
        {
            member: 'Member 2: [Team Member 2]',
            role: 'Module 2: Order Creation & Pricing Logic',
            duties: '• Developed the core Order class to link customer, garment, and service details.\n• Implemented automatic unique Order ID generation starting from 1001.\n• Created the automated bill calculation logic (Quantity × Service Rate).\n• Handled pickup and delivery option selection and order display formatting.'
        },
        {
            member: 'Member 3: [Team Member 3]',
            role: 'Module 3: Order Tracking & Payment Management',
            duties: '• Created the Trackable interface to define status update capabilities.\n• Implemented the 4-stage lifecycle: Received → Washing → Ready → Delivered.\n• Built the fast order search feature using HashMap for instant lookup by ID.\n• Created the payment recording module to toggle status from Pending to Paid.'
        },
        {
            member: 'Member 4: [Team Member 4]',
            role: 'Module 4: File Handling, Reports & Integration',
            duties: '• Created the saveOrders() and loadOrders() methods using BufferedReader/PrintWriter.\n• Developed the byte-stream backup method to create orders_backup.txt.\n• Implemented the Business Summary module using modern Java Streams.\n• Integrated all four modules into the main switch-case loop.'
        }
    ];

    modules.forEach((m, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.15 + Math.floor(idx / 2) * 2.05;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 1.9,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 4.25, h: 0.35, fill: { color: idx === 0 ? ROYAL : NAVY }
        });
        slide.addText(m.member, {
            x: x + 0.15, y: y + 0.05, w: 3.95, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(m.role, {
            x: x + 0.15, y: y + 0.42, w: 3.95, h: 0.25,
            fontSize: 10, fontFace: 'Arial', bold: true, color: ACCENT
        });
        slide.addText(m.duties, {
            x: x + 0.15, y: y + 0.7, w: 3.95, h: 1.1,
            fontSize: 8.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
        });
    });
}

// -------------------------------------------------------------
// SLIDE 10: Module 1 – Customer & Service Management
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 1 – Customer and Service Management', 'Collecting Customer Details and Organizing Laundry Service Catalogs', 10);

    // Left Card: Customer Details
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.2, w: 4.25, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.2, w: 4.25, h: 0.4, fill: { color: ROYAL }
    });
    slide.addText('Customer Information Management', {
        x: 0.8, y: 1.25, w: 3.85, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });
    slide.addText('• Customer Representation:\nEvery customer is represented by an independent Customer object containing their full name and contact phone number.\n\n• Data Protection (Encapsulation):\nCustomer variables are declared private. They cannot be modified directly from outside the class, keeping the data secure and preventing accidental changes.\n\n• Input Validation:\nThe system ensures the user provides valid text and numbers so that incomplete records are never saved into the application memory.', {
        x: 0.8, y: 1.75, w: 3.85, h: 3.2,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });

    // Right Card: Services & Rates
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.15, y: 1.2, w: 4.25, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 5.15, y: 1.2, w: 4.25, h: 0.4, fill: { color: NAVY }
    });
    slide.addText('Laundry Services & Fixed Pricing', {
        x: 5.35, y: 1.25, w: 3.85, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    const rates = [
        { name: '1. Washing Service', price: 'Rs. 50.00 / garment', desc: 'Standard water and detergent wash for daily casual clothes like shirts, t-shirts, and trousers.' },
        { name: '2. Dry Cleaning Service', price: 'Rs. 100.00 / garment', desc: 'Specialized chemical solvent cleaning for delicate garments like suits, blazers, and woolens.' },
        { name: '3. Ironing Service', price: 'Rs. 30.00 / garment', desc: 'Steam press and wrinkle removal service for freshly washed garments.' }
    ];

    let ry = 1.75;
    rates.forEach(r => {
        slide.addShape(pptx.ShapeType.roundRect, {
            x: 5.35, y: ry, w: 3.85, h: 0.95,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 0.5 }, rectRadius: 0.06
        });
        slide.addText(r.name, {
            x: 5.45, y: ry + 0.08, w: 2.2, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(r.price, {
            x: 7.7, y: ry + 0.08, w: 1.4, h: 0.25,
            fontSize: 9.5, fontFace: 'Arial', bold: true, color: GREEN, align: 'right'
        });
        slide.addText(r.desc, {
            x: 5.45, y: ry + 0.35, w: 3.65, h: 0.55,
            fontSize: 8.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13
        });
        ry += 1.1;
    });
}

// -------------------------------------------------------------
// SLIDE 11: Module 2 – Order Management and Pricing
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 2 – Order Management and Pricing', 'Automated Order Creation and Dynamic Price Calculation', 11);

    // Left Card: Order Creation Details
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.2, w: 4.5, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('How an Order is Created Step-by-Step', {
        x: 0.85, y: 1.35, w: 4.0, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('1. Customer Identification:\nThe shopkeeper enters the customer\'s name and phone number. An existing or new customer record is linked.\n\n2. Garment Details Entry:\nThe user enters the description of garments (for example, "3 Shirts").\n\n3. Service Selection:\nThe user chooses from the menu: 1 for Washing, 2 for Dry Cleaning, or 3 for Ironing.\n\n4. Automatic Order ID Generation:\nThe system assigns the next sequential four-digit order ID (starts at 1001, then 1002, 1003...). This ensures every order is unique.', {
        x: 0.85, y: 1.75, w: 4.0, h: 3.2,
        fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });

    // Right Card: Calculation Example
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.35, y: 1.2, w: 4.05, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 5.35, y: 1.2, w: 4.05, h: 0.4, fill: { color: ROYAL }
    });
    slide.addText('Real-Life Calculation Example', {
        x: 5.5, y: 1.25, w: 3.75, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    const exDetails = [
        'Customer Name: Aman Sharma',
        'Garment Type: Shirts',
        'Service Chosen: Washing',
        'Quantity: 3 garments',
        'Service Rate: Rs. 50.00 per garment'
    ];
    slide.addText(exDetails.join('\n'), {
        x: 5.5, y: 1.75, w: 3.75, h: 1.3,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });

    // Highlight Box for Calculation Formula
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.5, y: 3.15, w: 3.75, h: 1.8,
        fill: { color: 'EFF6FF' }, line: { color: '93C5FD', width: 1 }, rectRadius: 0.08
    });
    slide.addText('BILL CALCULATION FORMULA', {
        x: 5.65, y: 3.25, w: 3.45, h: 0.25,
        fontSize: 9.5, fontFace: 'Arial', bold: true, color: ROYAL
    });
    slide.addText('Total Bill = Quantity × Rate per Garment\nTotal Bill = 3 × Rs. 50.00\nTotal Bill = Rs. 150.00', {
        x: 5.65, y: 3.55, w: 3.45, h: 0.8,
        fontSize: 11, fontFace: 'Arial', bold: true, color: GREEN, lineSpacing: 18
    });
    slide.addText('Status: "Received" | Payment: "Pending"', {
        x: 5.65, y: 4.45, w: 3.45, h: 0.35,
        fontSize: 9, fontFace: 'Arial', color: MUTED_TEXT
    });
}

// -------------------------------------------------------------
// SLIDE 12: Module 3 – Order Tracking and Payment
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 3 – Order Tracking and Payment', 'Lifecycle Progress Tracking and Financial Settlement', 12);

    // 4 Order Status Stages
    slide.addText('The 4 Order Lifecycle Stages in Our Application:', {
        x: 0.6, y: 1.15, w: 8.8, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY
    });

    const stages = [
        { name: '1. Received', desc: 'Clothes are accepted at the counter and order details are registered.' },
        { name: '2. Washing', desc: 'Clothes are actively being washed, dry cleaned, or steam ironed.' },
        { name: '3. Ready', desc: 'Cleaning is finished. Clothes are packed and ready for pickup.' },
        { name: '4. Delivered', desc: 'Garments are handed back to the customer, completing the cycle.' }
    ];

    stages.forEach((st, idx) => {
        const x = 0.6 + idx * 2.25;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: 1.5, w: 2.1, h: 1.45,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: 1.5, w: 2.1, h: 0.32, fill: { color: idx === 3 ? GREEN : (idx === 0 ? ROYAL : NAVY) }
        });
        slide.addText(st.name, {
            x: x + 0.05, y: y = 1.55, w: 2.0, h: 0.25,
            fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
        });
        slide.addText(st.desc, {
            x: x + 0.1, y: 1.9, w: 1.9, h: 0.95,
            fontSize: 9, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13
        });
    });

    // Bottom Left: Instant Search by ID
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 3.15, w: 4.25, h: 2.0,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Instant Order Search by ID', {
        x: 0.8, y: 3.28, w: 3.85, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: ROYAL
    });
    slide.addText('• When a customer visits or calls the shop, they provide their unique Order ID.\n• The shopkeeper enters the number (e.g. 1001) into menu option 3.\n• Using HashMap, the system locates and displays the order details in less than a second.\n• If the ID does not exist, a custom InvalidOrderException displays an informative error.', {
        x: 0.8, y: 3.6, w: 3.85, h: 1.45,
        fontSize: 9.3, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
    });

    // Bottom Right: Payment Management
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.15, y: 3.15, w: 4.25, h: 2.0,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Payment Status Management', {
        x: 5.35, y: 3.28, w: 3.85, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: GREEN
    });
    slide.addText('• Every new order begins with payment marked as "Pending".\n• When the customer clears the bill, the shopkeeper selects menu option 5.\n• The payment status updates from "Pending" to "Paid".\n• The system prevents duplicate payments by checking if an order is already paid, keeping accounts clear.', {
        x: 5.35, y: 3.6, w: 3.85, h: 1.45,
        fontSize: 9.3, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
    });
}

// -------------------------------------------------------------
// SLIDE 13: Module 4 – File Handling and Reports
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 4 – File Handling, Backup and Reports', 'Permanent Data Storage and Real-Time Business Summaries', 13);

    const fFeatures = [
        {
            title: '1. Permanent File Storage (orders.txt)',
            desc: 'Whenever the user selects option 7 or 8, the saveOrders() method writes all orders into orders.txt using pipe-delimited records. When the application starts up, loadOrders() automatically reads previous records so history is never lost.'
        },
        {
            title: '2. Automated Dual Backup (orders_backup.txt)',
            desc: 'The createBackup() method uses Java low-level byte streams (FileInputStream and FileOutputStream) to make an exact byte-for-byte copy of orders.txt. This protects shop records against accidental file loss or corruption.'
        },
        {
            title: '3. Business Summary & Analytics',
            desc: 'Option 6 provides instant financial and order analytics calculated with modern Java Streams:\n• Total Orders Processed: Complete count of all registered orders.\n• Paid Orders Count: Total number of settled accounts.\n• Revenue Collected: Exact sum of all paid orders in Rupees.\n• Highest-Value Order: Automatically identifies and highlights the biggest customer order.'
        }
    ];

    fFeatures.forEach((f, idx) => {
        const y = 1.15 + idx * 1.35;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: 0.6, y: y, w: 8.8, h: idx === 2 ? 1.45 : 1.2,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: 0.6, y: y, w: 0.12, h: idx === 2 ? 1.45 : 1.2, fill: { color: idx === 2 ? GREEN : ROYAL }
        });
        slide.addText(f.title, {
            x: 0.85, y: y + 0.1, w: 8.4, h: 0.28,
            fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(f.desc, {
            x: 0.85, y: y + 0.38, w: 8.4, h: idx === 2 ? 0.98 : 0.72,
            fontSize: 9.3, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
        });
    });
}

// -------------------------------------------------------------
// SLIDE 14: Object-Oriented Programming (OOP) Concepts
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Object-Oriented Programming (OOP) Concepts', 'Core OOP Principles Explained with Everyday Examples and Project Code', 14);

    const oopConcepts = [
        {
            concept: 'Class',
            analogy: 'Like an architectural blueprint used to build houses.',
            code: 'Customer and Order classes define templates for data.'
        },
        {
            concept: 'Object',
            analogy: 'An actual physical house constructed from a blueprint.',
            code: 'new Customer("Aman", "9876543210") creates a real customer.'
        },
        {
            concept: 'Encapsulation',
            analogy: 'A medicine capsule or ATM protecting cash inside.',
            code: 'Private fields (amount, status) accessed via getter/setter methods.'
        },
        {
            concept: 'Inheritance',
            analogy: 'A child inheriting family traits from their parents.',
            code: 'WashingService and DryCleaningService extend LaundryService.'
        },
        {
            concept: 'Polymorphism',
            analogy: 'One person acting as a customer, driver, and student.',
            code: 'selectedService.getRate() calls the specific rate at runtime.'
        },
        {
            concept: 'Abstraction',
            analogy: 'Pressing a car accelerator without knowing engine combustion.',
            code: 'abstract class LaundryService specifies getRate() without body.'
        },
        {
            concept: 'Interface',
            analogy: 'A standard wall socket where any matching plug works.',
            code: 'interface Trackable specifies updateStatus() implemented by Order.'
        }
    ];

    // Table Header
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.15, w: 8.8, h: 0.35, fill: { color: NAVY }
    });
    slide.addText('OOP Principle', { x: 0.7, y: 1.18, w: 1.5, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });
    slide.addText('Real-Life Everyday Analogy', { x: 2.3, y: 1.18, w: 3.4, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });
    slide.addText('Implementation in Our Laundry Project', { x: 5.8, y: 1.18, w: 3.5, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });

    oopConcepts.forEach((c, idx) => {
        const y = 1.52 + idx * 0.51;
        slide.addShape(pptx.ShapeType.rect, {
            x: 0.6, y: y, w: 8.8, h: 0.49,
            fill: { color: idx % 2 === 0 ? WHITE : CARD_BG },
            line: { color: BORDER_COLOR, width: 0.5 }
        });
        slide.addText(c.concept, { x: 0.7, y: y + 0.05, w: 1.5, h: 0.38, fontSize: 9.5, fontFace: 'Arial', bold: true, color: ROYAL });
        slide.addText(c.analogy, { x: 2.3, y: y + 0.05, w: 3.4, h: 0.38, fontSize: 8.8, fontFace: 'Arial', color: BODY_TEXT });
        slide.addText(c.code, { x: 5.8, y: y + 0.05, w: 3.5, h: 0.38, fontSize: 8.8, fontFace: 'Arial', color: DARK_TEXT });
    });
}

// -------------------------------------------------------------
// SLIDE 15: Other Core Java Concepts Used
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Other Core Java Concepts Used in the Project', 'Modern Java Libraries and Techniques Explained in Simple Language', 15);

    const otherJava = [
        { name: 'ArrayList', tag: 'Collections', desc: 'A dynamic, resizable list used to store all order objects sequentially in memory.' },
        { name: 'HashMap', tag: 'Collections', desc: 'A key-value dictionary that lets us search any order by its numerical ID in O(1) instant time.' },
        { name: 'TreeSet', tag: 'Collections', desc: 'An automatically sorted collection holding distinct laundry service types.' },
        { name: 'Custom Exceptions', tag: 'Error Handling', desc: 'InvalidOrderException prevents crashes when a user enters an order ID that does not exist.' },
        { name: 'Generics (<T>)', tag: 'Code Reuse', desc: 'A generic display method displayList(List<T> list) that can display lists of any data type.' },
        { name: 'Java Streams & Lambdas', tag: 'Analytics', desc: 'Concise functional code to filter paid orders, sum up revenue, and sort highest-value orders.' },
        { name: 'Multithreading', tag: 'Concurrency', desc: 'Runs order notification alerts on a separate background thread without making the console freeze.' },
        { name: 'File Streams (I/O)', tag: 'Persistence', desc: 'Character streams save text data and Byte streams create exact binary backup copies.' }
    ];

    otherJava.forEach((oj, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.15 + Math.floor(idx / 2) * 1.0;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 0.9,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.06
        });
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x + 0.12, y: y + 0.1, w: 1.1, h: 0.22,
            fill: { color: 'EFF6FF' }, line: { color: '93C5FD', width: 0.5 }, rectRadius: 0.04
        });
        slide.addText(oj.tag, {
            x: x + 0.12, y: y + 0.1, w: 1.1, h: 0.22,
            fontSize: 7.5, fontFace: 'Arial', bold: true, color: ROYAL, align: 'center', valign: 'middle'
        });
        slide.addText(oj.name, {
            x: x + 1.3, y: y + 0.08, w: 2.8, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(oj.desc, {
            x: x + 0.15, y: y + 0.38, w: 3.95, h: 0.48,
            fontSize: 8.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13
        });
    });
}

// -------------------------------------------------------------
// SLIDE 16: Program Execution / Terminal Output
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Program Execution & Sample Terminal Output', 'Demonstration of the Console Interface During an Actual Order Placement', 16);

    // Left Box: Terminal Simulation
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.15, w: 5.2, h: 4.0,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.08
    });
    // Terminal title bar
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.15, w: 5.2, h: 0.3, fill: { color: '1E293B' }
    });
    slide.addText('Terminal Console: java LaundryOrderSystem', {
        x: 0.8, y: 1.18, w: 4.5, h: 0.22,
        fontSize: 9, fontFace: 'Courier New', color: '94A3B8'
    });

    const terminalLines = [
        '========================================',
        '   LAUNDRY / DRY CLEANING ORDER SYSTEM',
        '========================================',
        '--------------- MAIN MENU ---------------',
        '1. Create new laundry order',
        '2. View all orders | 3. Search order by ID',
        '4. Update status   | 5. Record payment',
        '6. Summary         | 7. Save and backup',
        '8. Save and exit',
        'Enter your choice: 1',
        '',
        '--- Create New Order ---',
        'Customer name: Aman Sharma',
        'Phone number: 9876543210',
        'Garment details: 3 Shirts',
        'Choose service (1-3): 1 [Washing - Rs. 50]',
        'Number of garments: 3',
        'Pickup or Delivery: Pickup',
        '',
        'Order ID: 1001 | Total Amount: Rs. 150.00',
        'Status: Received | Payment: Pending',
        '[Notification] Order 1001 received for Aman.'
    ];

    slide.addText(terminalLines.join('\n'), {
        x: 0.8, y: 1.5, w: 4.8, h: 3.55,
        fontSize: 8.2, fontFace: 'Courier New', color: '38BDF8', lineSpacing: 12
    });

    // Right Box: Walkthrough Explanation
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.0, y: 1.15, w: 3.4, h: 4.0,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Execution Walkthrough', {
        x: 6.2, y: 1.3, w: 3.0, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
    });

    const stepsW = [
        '1. Launching the System:\nThe program loads existing orders from orders.txt and displays the 8-option main menu.',
        '2. Selecting Option 1:\nThe user selects option 1 to initiate the order creation process.',
        '3. Entering Information:\nCustomer details, garment count, and service choice are entered cleanly.',
        '4. Instant Order Confirmation:\nThe system prints full order details with Order ID 1001 and total Rs. 150.00.',
        '5. Background Thread Alert:\nA separate thread prints an immediate order notification without blocking.'
    ];

    slide.addText(stepsW.join('\n\n'), {
        x: 6.2, y: 1.65, w: 3.0, h: 3.35,
        fontSize: 8.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13
    });
}

// -------------------------------------------------------------
// SLIDE 17: Advantages of the Project
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Advantages of the Laundry Management System', 'Key Benefits and Practical Value Delivered to Small Business Owners', 17);

    const advantages = [
        {
            title: 'Simple and User-Friendly',
            desc: 'The console menu uses simple numbers (1 to 8). Any laundry assistant can learn to operate the entire system within five minutes without requiring specialized computer training.'
        },
        {
            title: 'Eliminates Calculation Mistakes',
            desc: 'By automating price calculation (Quantity × Rate), the system completely eliminates manual math errors that often occur when calculating bills in a rush.'
        },
        {
            title: 'Complete Status Transparency',
            desc: 'Clothes are clearly tracked across four distinct stages (Received, Washing, Ready, Delivered), preventing misplaced garments and customer complaints.'
        },
        {
            title: 'Organized Customer Records',
            desc: 'Stores complete customer names, contact numbers, and past transaction records in one organized digital location rather than messy paper registers.'
        },
        {
            title: 'Financial Clarity & Revenue Tracking',
            desc: 'Provides clear visibility into paid versus pending balances and computes overall shop revenue with a single menu choice.'
        },
        {
            title: 'Safe and Persistent Data Storage',
            desc: 'Data is automatically saved to permanent disk storage, and byte-stream backups guarantee that order history is never lost even during power failures.'
        }
    ];

    advantages.forEach((adv, idx) => {
        const x = 0.6 + (idx % 2) * 4.55;
        const y = 1.15 + Math.floor(idx / 2) * 1.35;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.25, h: 1.2,
            fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, {
            x: x, y: y, w: 0.12, h: 1.2, fill: { color: GREEN }
        });
        slide.addText(adv.title, {
            x: x + 0.25, y: y + 0.1, w: 3.85, h: 0.28,
            fontSize: 11, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(adv.desc, {
            x: x + 0.25, y: y + 0.38, w: 3.85, h: 0.75,
            fontSize: 9.3, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 14
        });
    });
}

// -------------------------------------------------------------
// SLIDE 18: Limitations and Future Scope
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Current Limitations & Future Scope', 'Areas for Future Expansion and Technological Evolution', 18);

    // Left Card: Current Limitations
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.2, w: 4.25, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.2, w: 4.25, h: 0.4, fill: { color: ORANGE }
    });
    slide.addText('Current Limitations (Version 1.0)', {
        x: 0.8, y: 1.25, w: 3.85, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    const limits = [
        '• Console-Based Interface:\nThe system runs inside a terminal window without graphical buttons, windows, or mouse support.',
        '• Text File Storage:\nData is stored in text files rather than a multi-user relational database server like MySQL.',
        '• Manual Cash Payments:\nPayments must be manually marked as Paid; there is no built-in online payment gateway.',
        '• Single Machine Execution:\nThe application runs on one local computer and cannot be accessed remotely by customers.'
    ];
    slide.addText(limits.join('\n\n'), {
        x: 0.8, y: 1.75, w: 3.85, h: 3.2,
        fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });

    // Right Card: Future Improvements
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.15, y: 1.2, w: 4.25, h: 3.95,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 5.15, y: 1.2, w: 4.25, h: 0.4, fill: { color: GREEN }
    });
    slide.addText('Future Scope (Version 2.0 Roadmap)', {
        x: 5.35, y: 1.25, w: 3.85, h: 0.3,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    const futures = [
        '• Graphical User Interface (GUI):\nBuilding an interactive desktop application using JavaFX or Java Swing with buttons and dashboards.',
        '• MySQL Database Integration:\nConnecting the existing JDBC prepared-statement layer to a relational MySQL database server.',
        '• Online Payment Integration:\nAdding UPI QR codes, Razorpay, and digital receipts for instant contactless payments.',
        '• SMS & WhatsApp Notifications:\nSending automated alerts to customer phones when garments reach the "Ready" stage.'
    ];
    slide.addText(futures.join('\n\n'), {
        x: 5.35, y: 1.75, w: 3.85, h: 3.2,
        fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });
}

// -------------------------------------------------------------
// SLIDE 19: Conclusion & Learning Outcomes
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Conclusion & Academic Learning Outcomes', 'Key Takeaways from Designing and Implementing the Java System', 19);

    // Summary Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 1.2, w: 8.8, h: 1.45,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, {
        x: 0.6, y: 1.2, w: 0.15, h: 1.45, fill: { color: ROYAL }
    });
    slide.addText('Project Summary', {
        x: 0.9, y: 1.3, w: 8.3, h: 0.3,
        fontSize: 12.5, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('The Laundrymat / Dry Cleaning Order Tracking System successfully demonstrates how Core Java can solve real-world operational challenges. By replacing messy manual paper records with a structured, automated console program, our application ensures fast order creation, error-free price calculations, transparent status tracking, and secure permanent data storage for laundry businesses.', {
        x: 0.9, y: 1.65, w: 8.3, h: 0.9,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });

    // Learning Outcomes Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.6, y: 2.8, w: 8.8, h: 2.35,
        fill: { color: WHITE }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('What Our Team Learned During Project Development:', {
        x: 0.9, y: 2.95, w: 8.2, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: ROYAL
    });

    const learnings = [
        '• Practical OOP Application: Gained deep hands-on understanding of Encapsulation, Inheritance, Polymorphism, Abstraction, and Interfaces.',
        '• Collections Selection: Learned how to choose the right data structure (ArrayList for ordered lists vs HashMap for fast key lookups).',
        '• File Persistence & Stream Backup: Understood how character streams preserve records and byte streams create exact duplicate backups.',
        '• Collaborative Software Development: Practiced dividing complex software into 4 clear student modules and integrating them into one system.'
    ];

    slide.addText(learnings.join('\n\n'), {
        x: 0.9, y: 3.3, w: 8.2, h: 1.7,
        fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });
}

// -------------------------------------------------------------
// SLIDE 20: Thank You Slide
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: NAVY };

    // Decorative side stripe
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: ACCENT }
    });

    // Main Greeting
    slide.addText('THANK YOU!', {
        x: 1.0, y: 1.1, w: 8.0, h: 0.9,
        fontSize: 38, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
    });

    slide.addText('Any Questions or Feedback?', {
        x: 1.0, y: 1.95, w: 8.0, h: 0.45,
        fontSize: 16, fontFace: 'Arial', color: '93C5FD', align: 'center'
    });

    // Separator line
    slide.addShape(pptx.ShapeType.rect, {
        x: 2.5, y: 2.55, w: 5.0, h: 0.03, fill: { color: '38BDF8' }
    });

    // Project & Team Info Box
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 1.5, y: 2.8, w: 7.0, h: 2.2,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.1
    });

    slide.addText('PROJECT: LAUNDRYMAT / DRY CLEANING ORDER TRACKING SYSTEM', {
        x: 1.7, y: 2.95, w: 6.6, h: 0.3,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8', align: 'center'
    });

    slide.addText('Presented by Team Members:\n1. Tanmay Arora (Lead Developer)  |  2. [Team Member 2 Name]\n3. [Team Member 3 Name]          |  4. [Team Member 4 Name]', {
        x: 1.7, y: 3.3, w: 6.6, h: 0.75,
        fontSize: 10, fontFace: 'Arial', color: WHITE, align: 'center', lineSpacing: 16
    });

    slide.addText('B.Tech Computer Science & Engineering (AI & ML) - 3rd Semester\nChitkara University, Punjab', {
        x: 1.7, y: 4.15, w: 6.6, h: 0.65,
        fontSize: 10, fontFace: 'Arial', color: 'BAE6FD', align: 'center', lineSpacing: 15
    });
}

// Write the PPTX file
const outputPath = path.join(__dirname, 'Laundry_Management_System_Presentation.pptx');
pptx.writeFile({ fileName: outputPath })
    .then(fileName => {
        console.log(`Presentation generated successfully: ${fileName}`);
    })
    .catch(err => {
        console.error('Error generating presentation:', err);
    });
