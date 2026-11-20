const fs = require('fs');
const path = require('path');
const PptxGenJS = require(process.env.APPDATA + '/npm/node_modules/pptxgenjs');

const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
pptx.author = 'Tanmay Arora';
pptx.company = 'Chitkara University';
pptx.title = 'Laundrymat / Dry Cleaning Order Tracking System Using Java';

// Color Palette - Crisp & Academic
const NAVY = '0B2545';
const ROYAL = '134074';
const ACCENT = '0077B6';
const LIGHT_BG = 'F8FAFC';
const CARD_BG = 'FFFFFF';
const DARK_TEXT = '0F172A';
const BODY_TEXT = '334155';
const MUTED_TEXT = '64748B';
const BORDER_COLOR = 'CBD5E1';
const GREEN = '15803D';
const ORANGE = 'C2410C';
const WHITE = 'FFFFFF';

// Helper function to create clean header
function addHeader(slide, titleText, subtitleText, slideNumber) {
    // Top banner
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 10, h: 0.9,
        fill: { color: NAVY }
    });
    // Accent stripe
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0.9, w: 10, h: 0.05,
        fill: { color: ACCENT }
    });
    // Title
    slide.addText(titleText, {
        x: 0.6, y: 0.12, w: 8.0, h: 0.42,
        fontSize: 19, fontFace: 'Arial', bold: true, color: WHITE
    });
    // Subtitle
    if (subtitleText) {
        slide.addText(subtitleText, {
            x: 0.6, y: 0.52, w: 8.0, h: 0.3,
            fontSize: 11, fontFace: 'Arial', color: '93C5FD'
        });
    }
    // Slide Number badge
    slide.addShape(pptx.ShapeType.rect, {
        x: 8.9, y: 0.2, w: 0.6, h: 0.48,
        fill: { color: ROYAL },
        line: { color: '60A5FA', width: 1 }
    });
    slide.addText(slideNumber.toString(), {
        x: 8.9, y: 0.2, w: 0.6, h: 0.48,
        fontSize: 14, fontFace: 'Arial', bold: true, color: WHITE, align: 'center', valign: 'middle'
    });

    // Bottom Footer
    slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 5.35, w: 10, h: 0.275,
        fill: { color: 'F1F5F9' },
        line: { color: BORDER_COLOR, width: 0.5 }
    });
    slide.addText('B.Tech CSE (AI & ML) | Semester III | Chitkara University', {
        x: 0.6, y: 5.38, w: 5.5, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: MUTED_TEXT
    });
    slide.addText('Guide: Rohit Sharma | Laundry Order System', {
        x: 5.8, y: 5.38, w: 3.6, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: ROYAL, align: 'right', bold: true
    });
}

// -------------------------------------------------------------
// SLIDE 1: Title Slide (With exact member details & Rohit Sharma)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: NAVY };

    // Decorative vertical bars
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: ACCENT } });
    slide.addShape(pptx.ShapeType.rect, { x: 0.25, y: 0, w: 0.08, h: 5.625, fill: { color: '38BDF8' } });

    // Badge
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 0.5, w: 5.2, h: 0.38,
        fill: { color: ROYAL }, line: { color: '60A5FA', width: 1 }, rectRadius: 0.08
    });
    slide.addText('B.TECH CSE (AI & ML) — 3RD SEMESTER PROJECT', {
        x: 0.8, y: 0.5, w: 5.2, h: 0.38,
        fontSize: 10, fontFace: 'Arial', bold: true, color: 'BAE6FD', align: 'center', valign: 'middle'
    });

    // Main Title
    slide.addText('LAUNDRYMAT / DRY CLEANING\nORDER TRACKING SYSTEM', {
        x: 0.8, y: 1.05, w: 8.5, h: 1.25,
        fontSize: 27, fontFace: 'Arial', bold: true, color: WHITE, lineSpacing: 34
    });

    // Subtitle
    slide.addText('A Console-Based Core Java Application Built with Object-Oriented Programming', {
        x: 0.8, y: 2.4, w: 8.5, h: 0.4,
        fontSize: 12.5, fontFace: 'Arial', color: '93C5FD'
    });

    // Separator
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 2.9, w: 8.4, h: 0.02, fill: { color: '38BDF8' } });

    // Team Members Card (Exact 4 Members with Roll Numbers)
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 3.1, w: 5.2, h: 2.1,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.08
    });
    slide.addText('PROJECT TEAM MEMBERS', {
        x: 1.0, y: 3.22, w: 4.8, h: 0.28,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8'
    });

    const teamList = [
        '1. Tanmay Arora           (Roll No: 2510993577)',
        '2. Ansh Arora             (Roll No: 2510992560)',
        '3. Jaskaran Singh Bhinder (Roll No: 2510993488)',
        '4. Vishal                 (Roll No: 2510992990)'
    ];
    slide.addText(teamList.join('\n'), {
        x: 1.0, y: 3.55, w: 4.8, h: 1.5,
        fontSize: 10.5, fontFace: 'Arial', color: WHITE, lineSpacing: 20
    });

    // Faculty Guide & College Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.2, y: 3.1, w: 3.0, h: 2.1,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.08
    });
    slide.addText('FACULTY GUIDE & DEPT', {
        x: 6.4, y: 3.22, w: 2.6, h: 0.28,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8'
    });
    slide.addText('Faculty Guide:\nRohit Sharma\n\nDepartment of CSE (AI & ML)\nChitkara University, Punjab', {
        x: 6.4, y: 3.55, w: 2.6, h: 1.5,
        fontSize: 10.5, fontFace: 'Arial', color: 'E2E8F0', lineSpacing: 18
    });
}

// -------------------------------------------------------------
// SLIDE 2: Introduction (Concise & Uncrowded)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Introduction', 'Understanding the Purpose of a Laundry Management System', 2);

    // Main definition card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.25, w: 8.4, h: 1.2,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.25, w: 0.15, h: 1.2, fill: { color: ROYAL } });
    slide.addText('What is this Project?', {
        x: 1.1, y: 1.35, w: 7.9, h: 0.3,
        fontSize: 13, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('A simple, automated Core Java application that helps laundry and dry cleaning shops manage daily customer orders, service pricing, cleaning progress, and payments without using paper registers.', {
        x: 1.1, y: 1.68, w: 7.9, h: 0.65,
        fontSize: 11.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });

    // 2 Column comparison
    const points = [
        {
            title: 'Daily Laundry Operations',
            color: ORANGE,
            items: [
                '• Receiving customer garments at the shop counter',
                '• Categorizing clothes for Washing, Dry Cleaning, or Ironing',
                '• Preparing bills and managing pending customer payments',
                '• Tracking garments until they are collected or delivered'
            ]
        },
        {
            title: 'How Our Java System Helps',
            color: GREEN,
            items: [
                '• Instant Digital Entry: Replaces damaged paper notebooks',
                '• Automated Billing: Multiplies quantity by rate with zero errors',
                '• Live Order Tracking: Real-time status from Received to Delivered',
                '• Permanent Records: Automatically saves data to disk files'
            ]
        }
    ];

    points.forEach((p, idx) => {
        const x = 0.8 + idx * 4.3;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: 2.65, w: 4.1, h: 2.4,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: 2.65, w: 4.1, h: 0.38, fill: { color: p.color } });
        slide.addText(p.title, {
            x: x + 0.15, y: 2.7, w: 3.8, h: 0.28,
            fontSize: 11, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(p.items.join('\n'), {
            x: x + 0.2, y: 3.15, w: 3.7, h: 1.75,
            fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
        });
    });
}

// -------------------------------------------------------------
// SLIDE 3: Problem Statement (Clean 4 Cards)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Problem Statement', 'Why Traditional Manual Record-Keeping Fails in Laundry Shops', 3);

    const problems = [
        { title: '1. Damaged or Lost Records', desc: 'Paper registers get easily torn, wet, or misplaced in humid laundry shops, causing total loss of customer history.' },
        { title: '2. Difficult Garment Tracking', desc: 'When hundreds of clothes arrive daily, it is hard to remember which clothes are washed, ironed, or ready for pickup.' },
        { title: '3. Manual Billing Mistakes', desc: 'Calculating bills by hand during busy peak hours leads to pricing mistakes, wrong totals, and financial losses.' },
        { title: '4. Forgetting Payment Statuses', desc: 'Shopkeepers often forget whether a customer has already paid or still owes money, leading to payment disputes.' }
    ];

    problems.forEach((p, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 0.12, h: 1.7, fill: { color: idx % 2 === 0 ? ORANGE : ROYAL } });
        slide.addText(p.title, {
            x: x + 0.25, y: y + 0.18, w: 3.7, h: 0.3,
            fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(p.desc, {
            x: x + 0.25, y: y + 0.55, w: 3.7, h: 1.0,
            fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 17
        });
    });
}

// -------------------------------------------------------------
// SLIDE 4: Project Objectives (4 Clear Blocks)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Project Objectives', 'What We Aim to Achieve with This Java Application', 4);

    const objs = [
        { num: '01', title: 'Customer Management', desc: 'Store customer names and phone numbers digitally without using paper registers.' },
        { num: '02', title: 'Automated Pricing & IDs', desc: 'Generate unique 4-digit order IDs (1001+) and calculate bills automatically without errors.' },
        { num: '03', title: 'Live Order Tracking', desc: 'Track clothes step-by-step across 4 clear stages: Received, Washing, Ready, and Delivered.' },
        { num: '04', title: 'Payment & Data Safety', desc: 'Record payment settlements (Pending vs. Paid) and save all records to permanent disk files.' }
    ];

    objs.forEach((o, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x + 0.2, y: y + 0.18, w: 0.5, h: 0.35,
            fill: { color: ROYAL }, rectRadius: 0.05
        });
        slide.addText(o.num, {
            x: x + 0.2, y: y + 0.18, w: 0.5, h: 0.35,
            fontSize: 11, fontFace: 'Arial', bold: true, color: WHITE, align: 'center', valign: 'middle'
        });
        slide.addText(o.title, {
            x: x + 0.8, y: y + 0.18, w: 3.1, h: 0.35,
            fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY, valign: 'middle'
        });
        slide.addText(o.desc, {
            x: x + 0.2, y: y + 0.65, w: 3.7, h: 0.9,
            fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 17
        });
    });
}

// -------------------------------------------------------------
// SLIDE 5: Proposed Solution (Visual 6-Step Flow)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Proposed Solution', 'Step-by-Step Order Lifecycle in Our Application', 5);

    const steps = [
        { s: 'Step 1', title: 'Customer Intake', desc: 'Enter customer name and contact phone number.' },
        { s: 'Step 2', title: 'Service Choice', desc: 'Select Washing, Dry Cleaning, or Ironing & quantity.' },
        { s: 'Step 3', title: 'Auto Calculation', desc: 'System automatically calculates total bill amount.' },
        { s: 'Step 4', title: 'Order ID 1001', desc: 'Assigns unique ID & fires instant alert notification.' },
        { s: 'Step 5', title: 'Status Tracking', desc: 'Update progress from Received to Delivered.' },
        { s: 'Step 6', title: 'Payment & Save', desc: 'Record payment as Paid and save data to file.' }
    ];

    steps.forEach((st, idx) => {
        const x = 0.8 + (idx % 3) * 2.85;
        const y = 1.35 + Math.floor(idx / 3) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 2.7, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 2.7, h: 0.36, fill: { color: idx < 3 ? ROYAL : NAVY } });
        slide.addText(`${st.s}: ${st.title}`, {
            x: x + 0.1, y: y + 0.05, w: 2.5, h: 0.26,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(st.desc, {
            x: x + 0.15, y: y + 0.52, w: 2.4, h: 1.0,
            fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
        });
    });
}

// -------------------------------------------------------------
// SLIDE 6: Technologies Used (4 Clean Cards)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Technologies & Tools Used', 'Core Java Platform Components Explained Simply', 6);

    const techs = [
        { title: 'Core Java (JDK 8+)', desc: 'Platform-independent ("Write Once, Run Anywhere"), secure, and strongly object-oriented programming language.' },
        { title: 'Java Collections Framework', desc: '• ArrayList: Stores all customer orders sequentially\n• HashMap: Provides instant O(1) order search by ID\n• TreeSet: Maintains sorted laundry service catalog' },
        { title: 'File Handling & I/O Streams', desc: '• Character Streams: BufferedReader & PrintWriter save orders to orders.txt\n• Byte Streams: Creates automated binary backups' },
        { title: 'Multithreading & Concurrency', desc: 'A dedicated background Thread prints instant order alerts without blocking terminal responsiveness.' }
    ];

    techs.forEach((t, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 0.12, h: 1.7, fill: { color: ACCENT } });
        slide.addText(t.title, {
            x: x + 0.25, y: y + 0.15, w: 3.7, h: 0.3,
            fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
        });
        slide.addText(t.desc, {
            x: x + 0.25, y: y + 0.5, w: 3.7, h: 1.1,
            fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
        });
    });
}

// -------------------------------------------------------------
// SLIDE 7: Main Features (6 Balanced Cards)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Main Features of the System', 'Key Operational Capabilities Built for Daily Laundry Business', 7);

    const feats = [
        { title: '1. Customer Records', desc: 'Stores customer name and 10-digit phone number safely.' },
        { title: '2. Automatic Order IDs', desc: 'Assigns unique 4-digit numbers starting from 1001 onwards.' },
        { title: '3. Automated Billing', desc: 'Instantly computes total amount: Quantity × Service Rate.' },
        { title: '4. 4-Stage Live Tracking', desc: 'Tracks garments: Received ➔ Washing ➔ Ready ➔ Delivered.' },
        { title: '5. Payment Settlement', desc: 'Records payments as Paid and prevents double-charging.' },
        { title: '6. Permanent File Backup', desc: 'Saves data to orders.txt with duplicate backup safety.' }
    ];

    feats.forEach((f, idx) => {
        const x = 0.8 + (idx % 3) * 2.85;
        const y = 1.35 + Math.floor(idx / 3) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 2.7, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 2.7, h: 0.35, fill: { color: ROYAL } });
        slide.addText(f.title, {
            x: x + 0.1, y: y + 0.05, w: 2.5, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(f.desc, {
            x: x + 0.15, y: y + 0.5, w: 2.4, h: 1.0,
            fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
        });
    });
}

// -------------------------------------------------------------
// SLIDE 8: System Architecture (Visual Flow + Key Points)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'System Architecture & Data Flow', 'How Information Moves Through the System', 8);

    // 5 Horizontal Flow Boxes
    const blocks = [
        { name: 'Shopkeeper', sub: 'Console Input' },
        { name: 'Main Menu', sub: 'Options 1-8' },
        { name: 'Business Logic', sub: 'Order & Customer' },
        { name: 'Collections', sub: 'ArrayList & Map' },
        { name: 'File Storage', sub: 'orders.txt' }
    ];

    blocks.forEach((b, idx) => {
        const x = 0.8 + idx * 1.75;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: 1.35, w: 1.55, h: 0.85,
            fill: { color: idx === 0 ? ROYAL : (idx === 4 ? GREEN : NAVY) },
            line: { color: '38BDF8', width: 1 }, rectRadius: 0.08
        });
        slide.addText(b.name, {
            x: x + 0.05, y: 1.48, w: 1.45, h: 0.32,
            fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
        });
        slide.addText(b.sub, {
            x: x + 0.05, y: 1.8, w: 1.45, h: 0.25,
            fontSize: 8.5, fontFace: 'Arial', color: '93C5FD', align: 'center'
        });
        if (idx < 4) {
            slide.addText('➔', {
                x: x + 1.55, y: 1.52, w: 0.2, h: 0.4,
                fontSize: 14, fontFace: 'Arial', bold: true, color: ACCENT, align: 'center'
            });
        }
    });

    // 3 Clean summary points below
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 2.5, w: 8.4, h: 2.5,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Core Architecture Principles:', {
        x: 1.1, y: 2.65, w: 7.8, h: 0.3,
        fontSize: 12.5, fontFace: 'Arial', bold: true, color: NAVY
    });

    const archPoints = [
        '• Clean Separation of Concerns: User menu, calculations, and data storage are kept in separate modular classes.',
        '• Fast Memory Operations: Active orders are kept in an ArrayList for listing and a HashMap for rapid O(1) ID lookups.',
        '• Permanent Disk Safety: Every new order and payment change is directly saved into orders.txt and backed up.'
    ];
    slide.addText(archPoints.join('\n\n'), {
        x: 1.1, y: 3.05, w: 7.8, h: 1.8,
        fontSize: 11, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });
}

// -------------------------------------------------------------
// SLIDE 9: Module Division (Exact 4 Members & Roll Numbers)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module Division Among Team Members', 'Work Allocation Across the 4 Project Partners', 9);

    const modules = [
        {
            member: 'Tanmay Arora (2510993577)',
            mod: 'Module 1: Customer & Services',
            desc: '• Designed Customer class (name, phone)\n• Created abstract LaundryService hierarchy\n• Defined rates: Washing, Dry Cleaning, Ironing'
        },
        {
            member: 'Ansh Arora (2510992560)',
            mod: 'Module 2: Order Management & Pricing',
            desc: '• Designed core Order model\n• Implemented sequential Order ID (1001+)\n• Automated billing calculation (Qty × Rate)'
        },
        {
            member: 'Jaskaran Singh Bhinder (2510993488)',
            mod: 'Module 3: Order Tracking & Payment',
            desc: '• Implemented Trackable interface\n• 4-stage lifecycle (Received to Delivered)\n• Fast HashMap search & payment settlement'
        },
        {
            member: 'Vishal (2510992990)',
            mod: 'Module 4: Data Management & System',
            desc: '• File persistence (orders.txt)\n• Automated byte-stream backup\n• Java Streams analytics & main menu loop'
        }
    ];

    modules.forEach((m, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 4.1, h: 0.35, fill: { color: idx === 0 ? ROYAL : NAVY } });
        slide.addText(m.member, {
            x: x + 0.15, y: y + 0.05, w: 3.8, h: 0.25,
            fontSize: 10.5, fontFace: 'Arial', bold: true, color: WHITE
        });
        slide.addText(m.mod, {
            x: x + 0.2, y: y + 0.42, w: 3.7, h: 0.25,
            fontSize: 10, fontFace: 'Arial', bold: true, color: ACCENT
        });
        slide.addText(m.desc, {
            x: x + 0.2, y: y + 0.7, w: 3.7, h: 0.9,
            fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
        });
    });
}

// -------------------------------------------------------------
// SLIDE 10: Module 1 – Customer & Services
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 1: Customer & Service Management', 'Lead Developer: Tanmay Arora (2510993577)', 10);

    // Left: Customer details
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.35, w: 4.1, h: 0.38, fill: { color: ROYAL } });
    slide.addText('Customer Management', {
        x: 0.95, y: 1.4, w: 3.8, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });
    slide.addText('• Encapsulated Data Model:\nCustomer information is stored in an independent Customer object containing private name and phone fields.\n\n• Data Security:\nPrivate fields prevent accidental modification from outside the class.\n\n• Input Validation:\nEnsures customer name and valid 10-digit phone number are entered cleanly.', {
        x: 0.95, y: 1.9, w: 3.8, h: 2.9,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });

    // Right: 3 Services
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.1, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 5.1, y: 1.35, w: 4.1, h: 0.38, fill: { color: NAVY } });
    slide.addText('Service Types & Pricing', {
        x: 5.25, y: 1.4, w: 3.8, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    const sList = [
        { name: '1. Washing Service', price: 'Rs. 50.00 / garment', desc: 'Standard water wash for shirts, t-shirts, and daily wear.' },
        { name: '2. Dry Cleaning Service', price: 'Rs. 100.00 / garment', desc: 'Chemical solvent cleaning for suits, blazers, and delicate fabrics.' },
        { name: '3. Ironing Service', price: 'Rs. 30.00 / garment', desc: 'Steam press and wrinkle removal service.' }
    ];

    let sy = 1.9;
    sList.forEach(s => {
        slide.addShape(pptx.ShapeType.roundRect, {
            x: 5.25, y: sy, w: 3.8, h: 0.95,
            fill: { color: 'F1F5F9' }, line: { color: BORDER_COLOR, width: 0.5 }, rectRadius: 0.06
        });
        slide.addText(s.name, { x: 5.35, y: sy + 0.08, w: 2.2, h: 0.22, fontSize: 10, fontFace: 'Arial', bold: true, color: NAVY });
        slide.addText(s.price, { x: 7.55, y: sy + 0.08, w: 1.4, h: 0.22, fontSize: 9.5, fontFace: 'Arial', bold: true, color: GREEN, align: 'right' });
        slide.addText(s.desc, { x: 5.35, y: sy + 0.35, w: 3.6, h: 0.5, fontSize: 9, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13 });
        sy += 1.1;
    });
}

// -------------------------------------------------------------
// SLIDE 11: Module 2 – Order Creation & Pricing
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 2: Order Management & Pricing', 'Lead Developer: Ansh Arora (2510992560)', 11);

    // Left: Order workflow
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Order Creation Workflow', {
        x: 1.0, y: 1.5, w: 3.7, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('1. Customer Details: Enter name and phone number.\n\n2. Garment Details: Enter clothes count (e.g., 3 Shirts).\n\n3. Service Selection: Choose Washing, Dry Cleaning, or Ironing.\n\n4. Automatic Order ID: System assigns unique ID (1001, 1002...).\n\n5. Default State: Status set to "Received" & Payment to "Pending".', {
        x: 1.0, y: 1.9, w: 3.7, h: 2.9,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });

    // Right: Calculation box
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.1, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 5.1, y: 1.35, w: 4.1, h: 0.38, fill: { color: ROYAL } });
    slide.addText('Pricing Calculation Example', {
        x: 5.25, y: 1.4, w: 3.8, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });

    slide.addText('• Customer: Aman Sharma\n• Garment: 3 Shirts\n• Service: Washing (Rs. 50.00 / garment)', {
        x: 5.3, y: 1.95, w: 3.7, h: 0.9,
        fontSize: 11, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });

    // Formula Highlight Box
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.3, y: 2.95, w: 3.7, h: 1.8,
        fill: { color: 'EFF6FF' }, line: { color: '93C5FD', width: 1 }, rectRadius: 0.08
    });
    slide.addText('BILL CALCULATION FORMULA', {
        x: 5.45, y: 3.1, w: 3.4, h: 0.25,
        fontSize: 10, fontFace: 'Arial', bold: true, color: ROYAL
    });
    slide.addText('Total Bill = Quantity × Service Rate\nTotal Bill = 3 × Rs. 50.00\nTotal Bill = Rs. 150.00', {
        x: 5.45, y: 3.4, w: 3.4, h: 0.85,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: GREEN, lineSpacing: 18
    });
    slide.addText('Generated: Order ID 1001 (Pickup)', {
        x: 5.45, y: 4.35, w: 3.4, h: 0.3,
        fontSize: 9.5, fontFace: 'Arial', color: MUTED_TEXT
    });
}

// -------------------------------------------------------------
// SLIDE 12: Module 3 – Order Tracking & Payment
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 3: Order Tracking & Payment', 'Lead Developer: Jaskaran Singh Bhinder (2510993488)', 12);

    // 4 Lifecycle stages
    slide.addText('4-Stage Order Lifecycle Progression:', {
        x: 0.8, y: 1.25, w: 8.4, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY
    });

    const stages = [
        { n: '1. Received', d: 'Clothes registered at shop counter' },
        { n: '2. Washing', d: 'Garments currently in cleaning process' },
        { n: '3. Ready', d: 'Clothes cleaned, ironed, and packed' },
        { n: '4. Delivered', d: 'Handed back to customer safely' }
    ];

    stages.forEach((st, idx) => {
        const x = 0.8 + idx * 2.15;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: 1.6, w: 2.0, h: 1.2,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: 1.6, w: 2.0, h: 0.3, fill: { color: idx === 3 ? GREEN : ROYAL } });
        slide.addText(st.n, { x: x + 0.05, y: 1.65, w: 1.9, h: 0.22, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE, align: 'center' });
        slide.addText(st.d, { x: x + 0.1, y: 2.0, w: 1.8, h: 0.7, fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 13 });
    });

    // 2 Bottom Cards
    const bCards = [
        {
            title: 'Instant Order Search (Option 3)',
            desc: '• Enter Order ID (e.g. 1001)\n• Instant O(1) lookup using HashMap\n• Throws InvalidOrderException if ID does not exist'
        },
        {
            title: 'Payment Settlement (Option 5)',
            desc: '• New orders start as "Pending"\n• Option 5 marks payment as "Paid"\n• Locks against duplicate payments'
        }
    ];

    bCards.forEach((bc, idx) => {
        const x = 0.8 + idx * 4.3;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: 3.0, w: 4.1, h: 2.0,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addText(bc.title, { x: x + 0.2, y: 3.15, w: 3.7, h: 0.28, fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY });
        slide.addText(bc.desc, { x: x + 0.2, y: 3.5, w: 3.7, h: 1.35, fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18 });
    });
}

// -------------------------------------------------------------
// SLIDE 13: Module 4 – Data Management & Reports
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Module 4: Data Management & Reports', 'Lead Developer: Vishal (2510992990)', 13);

    const m4Cards = [
        {
            title: '1. Permanent File Storage (orders.txt)',
            desc: 'Writes records into orders.txt using BufferedReader and PrintWriter. When the program restarts, all past orders are automatically loaded back into memory.'
        },
        {
            title: '2. Automated Dual Backup (orders_backup.txt)',
            desc: 'Uses low-level byte streams (FileInputStream and FileOutputStream) to make an exact duplicate copy of orders.txt to prevent data loss or file corruption.'
        },
        {
            title: '3. Business Summary & Analytics (Java Streams)',
            desc: '• Total Orders Count & Paid Orders\n• Total Revenue Received in Rupees\n• Automatically identifies and highlights the Highest-Value Order'
        }
    ];

    m4Cards.forEach((c, idx) => {
        const y = 1.35 + idx * 1.25;
        slide.addShape(pptx.ShapeType.roundRect, {
            x: 0.8, y: y, w: 8.4, h: 1.15,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: y, w: 0.12, h: 1.15, fill: { color: idx === 2 ? GREEN : ROYAL } });
        slide.addText(c.title, { x: 1.05, y: y + 0.12, w: 8.0, h: 0.26, fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY });
        slide.addText(c.desc, { x: 1.05, y: y + 0.4, w: 8.0, h: 0.65, fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15 });
    });
}

// -------------------------------------------------------------
// SLIDE 14: OOP Concepts (Clean & Readable)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Object-Oriented Programming (OOP) Concepts', 'Core OOP Principles Applied in the Laundry System', 14);

    const oop = [
        { c: 'Class', a: 'Blueprint (House design)', p: 'Customer and Order classes' },
        { c: 'Object', a: 'Actual Instance (Constructed house)', p: 'new Customer("Aman", "9876543210")' },
        { c: 'Encapsulation', a: 'Medicine Capsule (Protected data)', p: 'Private fields accessed via getters' },
        { c: 'Inheritance', a: 'Child inheriting parent traits', p: 'WashingService extends LaundryService' },
        { c: 'Polymorphism', a: 'One person, multiple roles', p: 'selectedService.getRate() at runtime' },
        { c: 'Abstraction', a: 'Car driving (Hiding engine details)', p: 'abstract class LaundryService' },
        { c: 'Interface', a: 'Standard plug socket', p: 'interface Trackable for status updates' }
    ];

    // Table Header
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.25, w: 8.4, h: 0.35, fill: { color: NAVY } });
    slide.addText('OOP Principle', { x: 0.9, y: 1.28, w: 1.8, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });
    slide.addText('Real-Life Everyday Analogy', { x: 2.8, y: 1.28, w: 3.2, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });
    slide.addText('Implementation in Project', { x: 6.1, y: 1.28, w: 3.0, h: 0.28, fontSize: 10, fontFace: 'Arial', bold: true, color: WHITE });

    oop.forEach((row, idx) => {
        const y = 1.62 + idx * 0.48;
        slide.addShape(pptx.ShapeType.rect, {
            x: 0.8, y: y, w: 8.4, h: 0.46,
            fill: { color: idx % 2 === 0 ? WHITE : 'F1F5F9' },
            line: { color: BORDER_COLOR, width: 0.5 }
        });
        slide.addText(row.c, { x: 0.9, y: y + 0.05, w: 1.8, h: 0.36, fontSize: 10, fontFace: 'Arial', bold: true, color: ROYAL });
        slide.addText(row.a, { x: 2.8, y: y + 0.05, w: 3.2, h: 0.36, fontSize: 9.5, fontFace: 'Arial', color: BODY_TEXT });
        slide.addText(row.p, { x: 6.1, y: y + 0.05, w: 3.0, h: 0.36, fontSize: 9.5, fontFace: 'Arial', color: DARK_TEXT });
    });
}

// -------------------------------------------------------------
// SLIDE 15: Other Java Concepts (4 Clear Cards)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Other Core Java Concepts Used', 'Collections, Generics, Concurrency & Stream Processing', 15);

    const concepts = [
        {
            title: 'Collections (ArrayList & HashMap)',
            desc: '• ArrayList: Dynamic list storing all orders in arrival sequence\n• HashMap: Key-value dictionary enabling instant O(1) search by ID'
        },
        {
            title: 'Custom Exceptions (Error Handling)',
            desc: '• InvalidOrderException: Prevents crashes when an order ID is missing\n• try-catch blocks: Protects input against non-numeric characters'
        },
        {
            title: 'Java Streams & Lambdas',
            desc: '• filters paid orders and calculates total revenue concisely\n• sorts orders to identify the highest-value transaction'
        },
        {
            title: 'Multithreading & Generics',
            desc: '• Asynchronous Thread: Prints order alerts without console freezing\n• Generic method displayList(List<T>): Reusable list display'
        }
    ];

    concepts.forEach((c, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 0.12, h: 1.7, fill: { color: ROYAL } });
        slide.addText(c.title, { x: x + 0.25, y: y + 0.15, w: 3.7, h: 0.3, fontSize: 11.5, fontFace: 'Arial', bold: true, color: NAVY });
        slide.addText(c.desc, { x: x + 0.25, y: y + 0.5, w: 3.7, h: 1.1, fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16 });
    });
}

// -------------------------------------------------------------
// SLIDE 16: Terminal Output Simulation
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Program Execution & Output', 'Realistic Terminal Walkthrough During Order Creation', 16);

    // Left Box: Clean Terminal Simulation
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.25, w: 5.2, h: 3.9,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.25, w: 5.2, h: 0.3, fill: { color: '1E293B' } });
    slide.addText('Terminal: java LaundryOrderSystem', {
        x: 1.0, y: 1.28, w: 4.5, h: 0.22,
        fontSize: 9, fontFace: 'Courier New', color: '94A3B8'
    });

    const termText = [
        '--- Create New Order ---',
        'Customer name: Aman Sharma',
        'Phone number: 9876543210',
        'Garment details: 3 Shirts',
        'Choose service (1-3): 1 [Washing - Rs. 50]',
        'Number of garments: 3',
        'Pickup or Delivery: Pickup',
        '',
        'Order created successfully!',
        '----------------------------------------',
        'Order ID       : 1001',
        'Customer       : Aman Sharma',
        'Service        : Washing',
        'Quantity       : 3',
        'Total Amount   : Rs. 150.00',
        'Order Status   : Received',
        'Payment        : Pending',
        '----------------------------------------',
        '[Notification] Order 1001 received for Aman.'
    ];

    slide.addText(termText.join('\n'), {
        x: 1.0, y: 1.6, w: 4.8, h: 3.4,
        fontSize: 8.5, fontFace: 'Courier New', color: '38BDF8', lineSpacing: 13
    });

    // Right: 3 Execution Highlights
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 6.2, y: 1.25, w: 3.0, h: 3.9,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Execution Highlights', {
        x: 6.4, y: 1.4, w: 2.6, h: 0.3,
        fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY
    });

    const highlights = [
        '1. Automated ID:\nAssigned unique Order ID 1001 automatically.',
        '2. Accurate Billing:\n3 Shirts × Rs. 50 = Rs. 150.00 computed with zero math errors.',
        '3. Concurrency Alert:\nBackground Thread alerts that the order is received without freezing the console.'
    ];
    slide.addText(highlights.join('\n\n'), {
        x: 6.4, y: 1.8, w: 2.6, h: 3.2,
        fontSize: 9.8, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 15
    });
}

// -------------------------------------------------------------
// SLIDE 17: Advantages (4 Clean Cards)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Advantages of the Project', 'Key Practical Benefits Delivered to Laundry Businesses', 17);

    const advs = [
        { title: 'Simple & User-Friendly', desc: 'Numbered console menu (1 to 8) that anyone can learn to operate in 5 minutes without training.' },
        { title: 'Zero Billing Mistakes', desc: 'Automatic price calculation eliminates arithmetic errors common during busy shop hours.' },
        { title: 'Full Status Transparency', desc: 'Live order tracking (Received ➔ Delivered) prevents misplaced clothes and customer complaints.' },
        { title: 'Permanent & Safe Storage', desc: 'Automatic file saving (orders.txt) and duplicate byte backups prevent any data loss.' }
    ];

    advs.forEach((a, idx) => {
        const x = 0.8 + (idx % 2) * 4.3;
        const y = 1.35 + Math.floor(idx / 2) * 1.9;

        slide.addShape(pptx.ShapeType.roundRect, {
            x: x, y: y, w: 4.1, h: 1.7,
            fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
        });
        slide.addShape(pptx.ShapeType.rect, { x: x, y: y, w: 0.12, h: 1.7, fill: { color: GREEN } });
        slide.addText(a.title, { x: x + 0.25, y: y + 0.18, w: 3.7, h: 0.3, fontSize: 12, fontFace: 'Arial', bold: true, color: NAVY });
        slide.addText(a.desc, { x: x + 0.25, y: y + 0.55, w: 3.7, h: 1.0, fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 17 });
    });
}

// -------------------------------------------------------------
// SLIDE 18: Limitations & Future Scope
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Limitations & Future Scope', 'Version 1.0 Boundaries and Version 2.0 Roadmap', 18);

    // Left: Current Limitations
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.35, w: 4.1, h: 0.38, fill: { color: ORANGE } });
    slide.addText('Current Limitations (v1.0)', {
        x: 0.95, y: 1.4, w: 3.8, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });
    slide.addText('• Console Interface: Text-based terminal without mouse or window support.\n\n• Flat File Storage: Stores records in text files rather than a relational SQL database.\n\n• Manual Payment: Cash settlement only; no digital online payments.\n\n• Single Machine: Runs locally on one PC.', {
        x: 0.95, y: 1.9, w: 3.8, h: 2.9,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });

    // Right: Future Improvements
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.1, y: 1.35, w: 4.1, h: 3.65,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 5.1, y: 1.35, w: 4.1, h: 0.38, fill: { color: GREEN } });
    slide.addText('Future Roadmap (v2.0)', {
        x: 5.25, y: 1.4, w: 3.8, h: 0.28,
        fontSize: 11.5, fontFace: 'Arial', bold: true, color: WHITE
    });
    slide.addText('• JavaFX Desktop GUI: Interactive dashboard with buttons, icons, and windows.\n\n• MySQL Database: Connecting via scaffolded JDBC prepared statements.\n\n• Online Payments: Integrating UPI QR codes and digital receipts.\n\n• Automated Alerts: SMS and WhatsApp notifications when clothes are ready.', {
        x: 5.25, y: 1.9, w: 3.8, h: 2.9,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 18
    });
}

// -------------------------------------------------------------
// SLIDE 19: Conclusion & Learnings
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: LIGHT_BG };
    addHeader(slide, 'Conclusion & Academic Learnings', 'Key Takeaways from the Semester III Java Project', 19);

    // Summary Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 1.35, w: 8.4, h: 1.3,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addShape(pptx.ShapeType.rect, { x: 0.8, y: 1.35, w: 0.15, h: 1.3, fill: { color: ROYAL } });
    slide.addText('Project Summary', {
        x: 1.1, y: 1.45, w: 7.9, h: 0.28,
        fontSize: 12.5, fontFace: 'Arial', bold: true, color: NAVY
    });
    slide.addText('The Laundrymat / Dry Cleaning Order Tracking System successfully demonstrates how Core Java solves real-world operational challenges. By replacing paper registers with an automated console program, our system ensures fast order entry, error-free billing, live tracking, and permanent data persistence.', {
        x: 1.1, y: 1.78, w: 7.9, h: 0.75,
        fontSize: 10.5, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 17
    });

    // Learnings Card
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 0.8, y: 2.8, w: 8.4, h: 2.2,
        fill: { color: CARD_BG }, line: { color: BORDER_COLOR, width: 1 }, rectRadius: 0.08
    });
    slide.addText('Key Academic Learnings:', {
        x: 1.1, y: 2.95, w: 7.8, h: 0.28,
        fontSize: 12, fontFace: 'Arial', bold: true, color: ROYAL
    });

    const learnings = [
        '• Practical OOP: Hands-on implementation of Encapsulation, Inheritance, Polymorphism, Abstraction, and Interfaces.',
        '• Collections Selection: Learned how to select between ArrayList (ordered lists) and HashMap (O(1) rapid lookups).',
        '• File Safety: Used character streams for text persistence and byte streams for binary backups.',
        '• Team Collaboration: Gained real experience dividing a project into 4 modules and integrating them smoothly.'
    ];
    slide.addText(learnings.join('\n\n'), {
        x: 1.1, y: 3.3, w: 7.8, h: 1.55,
        fontSize: 10, fontFace: 'Arial', color: BODY_TEXT, lineSpacing: 16
    });
}

// -------------------------------------------------------------
// SLIDE 20: Thank You Slide (With Team & Rohit Sharma)
// -------------------------------------------------------------
{
    const slide = pptx.addSlide();
    slide.background = { color: NAVY };

    // Decorative side stripe
    slide.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: ACCENT } });

    // Header
    slide.addText('THANK YOU!', {
        x: 1.0, y: 0.9, w: 8.0, h: 0.8,
        fontSize: 36, fontFace: 'Arial', bold: true, color: WHITE, align: 'center'
    });
    slide.addText('Any Questions or Feedback?', {
        x: 1.0, y: 1.7, w: 8.0, h: 0.4,
        fontSize: 15, fontFace: 'Arial', color: '93C5FD', align: 'center'
    });

    // Separator line
    slide.addShape(pptx.ShapeType.rect, { x: 2.5, y: 2.25, w: 5.0, h: 0.02, fill: { color: '38BDF8' } });

    // Project & Team Info Box
    slide.addShape(pptx.ShapeType.roundRect, {
        x: 1.2, y: 2.5, w: 7.6, h: 2.5,
        fill: { color: '0F172A' }, line: { color: '334155', width: 1 }, rectRadius: 0.08
    });

    slide.addText('PROJECT: LAUNDRYMAT / DRY CLEANING ORDER TRACKING SYSTEM', {
        x: 1.4, y: 2.65, w: 7.2, h: 0.28,
        fontSize: 11, fontFace: 'Arial', bold: true, color: '38BDF8', align: 'center'
    });

    const finalTeam = [
        '1. Tanmay Arora           (Roll No: 2510993577)   |   2. Ansh Arora             (Roll No: 2510992560)',
        '3. Jaskaran Singh Bhinder (Roll No: 2510993488)   |   4. Vishal                 (Roll No: 2510992990)'
    ];
    slide.addText(finalTeam.join('\n'), {
        x: 1.4, y: 3.0, w: 7.2, h: 0.65,
        fontSize: 10, fontFace: 'Arial', color: WHITE, align: 'center', lineSpacing: 18
    });

    slide.addText('Faculty Guide: Rohit Sharma\nDepartment of Computer Science & Engineering (AI & ML)\nChitkara University, Punjab', {
        x: 1.4, y: 3.8, w: 7.2, h: 0.95,
        fontSize: 10.5, fontFace: 'Arial', color: 'BAE6FD', align: 'center', lineSpacing: 16
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
