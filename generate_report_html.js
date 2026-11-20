const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

function getImgContent(name) {
    const p = path.join(imgDir, name);
    if (fs.existsSync(p)) {
        return fs.readFileSync(p, 'utf8');
    }
    return '';
}

const fig41 = getImgContent('fig4_1_architecture.svg');
const fig51 = getImgContent('fig5_1_main_menu.svg');
const fig52 = getImgContent('fig5_2_create_order.svg');
const fig53 = getImgContent('fig5_3_view_search.svg');
const fig54 = getImgContent('fig5_4_update_status.svg');
const fig55 = getImgContent('fig5_5_record_payment.svg');
const fig56 = getImgContent('fig5_6_business_summary.svg');
const fig57 = getImgContent('fig5_7_file_persistence.svg');
const fig58 = getImgContent('fig5_8_exception_handling.svg');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laundrymat / Dry Cleaning Order Tracking System Using Java - Project Report</title>
    <style>
        :root {
            --primary: #0B2545;
            --secondary: #134074;
            --accent: #0077B6;
            --chitkara-red: #8B0000;
            --dark: #0F172A;
            --body-text: #2D3748;
            --border: #CBD5E1;
            --light-bg: #F8FAFC;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: "Times New Roman", Times, Georgia, serif;
            color: var(--body-text);
            line-height: 1.65;
            background: #E2E8F0;
            padding: 30px 10px;
        }

        .report-page {
            background: #FFFFFF;
            max-width: 900px;
            margin: 0 auto 30px auto;
            padding: 65px 75px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            border-radius: 4px;
            min-height: 1100px;
            position: relative;
        }

        /* Print Settings */
        @media print {
            body {
                background: #FFFFFF;
                padding: 0;
            }
            .report-page {
                box-shadow: none;
                margin: 0;
                padding: 45px 55px;
                max-width: 100%;
                border-radius: 0;
                page-break-after: always;
            }
            .no-print {
                display: none !important;
            }
        }

        /* Top Action Bar */
        .print-bar {
            max-width: 900px;
            margin: 0 auto 20px auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--primary);
            color: #FFFFFF;
            padding: 12px 24px;
            border-radius: 8px;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .print-btn {
            background: var(--chitkara-red);
            color: #FFFFFF;
            border: none;
            padding: 8px 18px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            font-size: 14px;
            transition: 0.2s;
        }

        .print-btn:hover {
            background: #A00000;
        }

        /* Typography */
        h1, h2, h3, h4 {
            font-family: "Times New Roman", Times, serif;
            color: var(--primary);
            margin-bottom: 12px;
        }

        h1 {
            font-size: 25px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-align: center;
            line-height: 1.3;
        }

        h2 {
            font-size: 19px;
            border-bottom: 2px solid var(--primary);
            padding-bottom: 6px;
            margin-top: 26px;
            margin-bottom: 14px;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }

        h3 {
            font-size: 15.5px;
            margin-top: 18px;
            color: var(--secondary);
        }

        p {
            font-size: 14px;
            margin-bottom: 12px;
            text-align: justify;
        }

        ul, ol {
            margin-left: 26px;
            margin-bottom: 14px;
            font-size: 13.5px;
        }

        li {
            margin-bottom: 5px;
        }

        /* Cover Page Styling */
        .cover-header {
            text-align: center;
            border-bottom: 3px double var(--chitkara-red);
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        .cover-header h2 {
            font-size: 24px;
            color: var(--chitkara-red);
            border: none;
            margin: 0;
            font-weight: 900;
        }

        .cover-header p {
            text-align: center;
            font-size: 13.5px;
            font-weight: 600;
            color: var(--primary);
            margin: 4px 0 0 0;
        }

        .cover-title-area {
            text-align: center;
            margin: 30px 0;
        }

        .cover-title-area h1 {
            font-size: 26px;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .cover-title-area .sub {
            font-size: 15px;
            font-style: italic;
            color: #4A5568;
            max-width: 650px;
            margin: 0 auto 16px auto;
        }

        .cover-title-area .degree-line {
            font-size: 13.5px;
            font-weight: bold;
            color: var(--chitkara-red);
        }

        .cover-meta-grid {
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            border-top: 1px solid var(--border);
            padding-top: 20px;
        }

        /* Tables */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 16px 0;
            font-size: 13px;
            background: #FFFFFF;
        }

        th, td {
            border: 1px solid #A0AEC0;
            padding: 8px 10px;
            text-align: left;
        }

        th {
            background-color: #EDF2F7;
            color: var(--primary);
            font-weight: bold;
        }

        tr:nth-child(even) {
            background-color: #F8FAFC;
        }

        /* Figures */
        .figure-container {
            margin: 20px 0;
            text-align: center;
        }

        .figure-container svg {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .figure-caption {
            font-size: 12px;
            font-weight: bold;
            color: #4A5568;
            margin-top: 6px;
            font-style: italic;
        }

        /* Code Blocks */
        pre {
            background: #1A202C;
            color: #E2E8F0;
            padding: 12px 16px;
            border-radius: 6px;
            font-family: "Consolas", "Courier New", monospace;
            font-size: 12px;
            overflow-x: auto;
            margin: 14px 0;
            line-height: 1.4;
        }

        code {
            font-family: "Consolas", "Courier New", monospace;
            background: #EDF2F7;
            color: #800000;
            padding: 2px 4px;
            border-radius: 3px;
            font-size: 12.5px;
        }

        /* Signatures Area */
        .sig-container {
            margin-top: 60px;
            display: flex;
            justify-content: space-between;
        }

        .sig-box {
            text-align: center;
            width: 45%;
            border-top: 1px solid #4A5568;
            padding-top: 6px;
            font-size: 13px;
        }
    </style>
</head>
<body>

    <!-- Top Action Bar -->
    <div class="print-bar no-print">
        <div>
            <strong>Chitkara University | Project Report</strong> — Laundry Order Tracking System
        </div>
        <button class="print-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
    </div>

    <!-- PAGE 1: TITLE COVER PAGE -->
    <div class="report-page">
        <div class="cover-header">
            <h2>CHITKARA UNIVERSITY</h2>
            <p>DEPARTMENT OF COMPUTER SCIENCE &amp; ENGINEERING (AI &amp; ML)</p>
        </div>

        <div class="cover-title-area">
            <h1>LAUNDRYMAT / DRY CLEANING<br>ORDER TRACKING SYSTEM USING JAVA</h1>
            <p class="sub">A Console-Based Enterprise Laundry Management Application Built with Core Java &amp; Object-Oriented Programming Principles</p>
            <p class="degree-line">Submitted in partial fulfilment of the requirements for the course project during Semester III</p>
        </div>

        <div style="margin: 30px 0;">
            <p style="font-weight: bold; text-align: center; margin-bottom: 8px; font-size: 14px;">SUBMITTED BY (GROUP MEMBERS):</p>
            <table>
                <thead>
                    <tr>
                        <th style="text-align: center; width: 60px;">S. No.</th>
                        <th style="width: 170px;">Name of Student</th>
                        <th style="text-align: center; width: 120px;">Roll Number</th>
                        <th>Key Contribution Area</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="text-align: center;">1</td>
                        <td><strong>Tanmay Arora</strong></td>
                        <td style="text-align: center;"><strong>2510993577</strong></td>
                        <td>Customer &amp; Service Management (Customer details, garment details, and service selection)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">2</td>
                        <td><strong>Ansh Arora</strong></td>
                        <td style="text-align: center;"><strong>2510992560</strong></td>
                        <td>Order Management &amp; Pricing (Creating orders, generating IDs, and calculating bills)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">3</td>
                        <td><strong>Jaskaran Singh Bhinder</strong></td>
                        <td style="text-align: center;"><strong>2510993488</strong></td>
                        <td>Order Tracking &amp; Payment (Updating order status, searching orders, and payment management)</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">4</td>
                        <td><strong>Vishal</strong></td>
                        <td style="text-align: center;"><strong>2510992990</strong></td>
                        <td>Data Management &amp; Main System (File handling, backup, business summary, and main menu integration)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="cover-meta-grid">
            <div>
                <p style="margin: 0; font-size: 13px; color: #4A5568;">Under the guidance of:</p>
                <p style="margin: 2px 0 0 0; font-size: 15px; font-weight: bold; color: var(--primary);">Amitabh Srivastava</p>
                <p style="margin: 0; font-size: 12.5px; color: #4A5568;">Department of CSE (AI &amp; ML)</p>
            </div>
            <div style="text-align: right;">
                <p style="margin: 0; font-size: 12.5px; color: #4A5568;">Academic Year: <strong>2026</strong></p>
                <p style="margin: 2px 0 0 0; font-size: 12.5px; color: #4A5568;">Semester: <strong>III</strong></p>
                <p style="margin: 0; font-size: 12.5px; color: #4A5568;">Chitkara University, Punjab</p>
            </div>
        </div>
    </div>

    <!-- PAGE 2: BONAFIDE CERTIFICATE -->
    <div class="report-page">
        <h2>Bonafide Certificate</h2>
        <p>This is to certify that the project report titled <strong>"Laundrymat / Dry Cleaning Order Tracking System Using Java"</strong> is a bonafide record of group project work carried out jointly by the team members named below, students of B.Tech Computer Science &amp; Engineering (AI &amp; ML), under my supervision and guidance, in partial fulfilment of the requirements for the course project during Semester III.</p>
        
        <p>Each member listed below contributed to the design, development, and documentation of this project, and shares joint responsibility for the work presented in this report.</p>

        <table>
            <thead>
                <tr>
                    <th style="text-align: center; width: 60px;">S. No.</th>
                    <th style="width: 170px;">Name of Student</th>
                    <th style="text-align: center; width: 120px;">Roll Number</th>
                    <th>Key Contribution Area</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center;">1</td>
                    <td>Tanmay Arora</td>
                    <td style="text-align: center;">2510993577</td>
                    <td>Customer &amp; Service Management: Customer details, garment details and service selection</td>
                </tr>
                <tr>
                    <td style="text-align: center;">2</td>
                    <td>Ansh Arora</td>
                    <td style="text-align: center;">2510992560</td>
                    <td>Order Management &amp; Pricing: Creating orders, generating IDs and calculating bills</td>
                </tr>
                <tr>
                    <td style="text-align: center;">3</td>
                    <td>Jaskaran Singh Bhinder</td>
                    <td style="text-align: center;">2510993488</td>
                    <td>Order Tracking &amp; Payment: Updating order status, searching orders and payment management</td>
                </tr>
                <tr>
                    <td style="text-align: center;">4</td>
                    <td>Vishal</td>
                    <td style="text-align: center;">2510992990</td>
                    <td>Data Management &amp; Main System: File handling, backup, business summary and main menu integration</td>
                </tr>
            </tbody>
        </table>

        <div class="sig-container" style="margin-top: 80px;">
            <div class="sig-box">
                <strong>Team Representative Signature</strong><br>
                <span>(On behalf of all group members)</span>
            </div>
            <div class="sig-box">
                <strong>Faculty Guide Signature</strong><br>
                <span>Amitabh Srivastava<br>Department of CSE (AI &amp; ML)</span>
            </div>
        </div>

        <div class="sig-container" style="margin-top: 50px; justify-content: center;">
            <div class="sig-box" style="width: 60%;">
                <strong>Head of Department</strong><br>
                <span>Department of Computer Science &amp; Engineering (AI &amp; ML)<br>Chitkara University, Punjab</span>
            </div>
        </div>
    </div>

    <!-- PAGE 3: ACKNOWLEDGEMENT & CONTRIBUTIONS -->
    <div class="report-page">
        <h2>Acknowledgement</h2>
        <p>We, the members of this project group, would like to express our sincere gratitude to our faculty guide, <strong>Amitabh Srivastava</strong>, for the valuable guidance, encouragement, and constructive feedback provided throughout the duration of this project. Their support helped us understand not just how to write Java syntax, but how to architect a modular, maintainable software system grounded in Object-Oriented Programming (OOP) paradigms and defensive programming principles.</p>

        <p>We are also thankful to the <strong>Department of Computer Science &amp; Engineering (AI &amp; ML), Chitkara University</strong>, for providing the computational resources, laboratory environment, and structured coursework that made it possible to translate classroom object-oriented concepts into a working industrial software prototype.</p>

        <!-- EXACT FEE PROJECT TABLE STRUCTURE: S.No. | Team Member | Key Contribution Area -->
        <table style="margin: 20px 0;">
            <thead>
                <tr>
                    <th style="width: 60px; text-align: center;">S.No.</th>
                    <th style="width: 200px;">Team Member</th>
                    <th>Key Contribution Area</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center;">1</td>
                    <td><strong>Tanmay Arora</strong></td>
                    <td>Customer &amp; Service Management (Customer details, garment details, and service selection)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">2</td>
                    <td><strong>Ansh Arora</strong></td>
                    <td>Order Management &amp; Pricing (Creating orders, generating IDs, and calculating bills)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">3</td>
                    <td><strong>Jaskaran Singh Bhinder</strong></td>
                    <td>Order Tracking &amp; Payment (Updating order status, searching orders, and payment management)</td>
                </tr>
                <tr>
                    <td style="text-align: center;">4</td>
                    <td><strong>Vishal</strong></td>
                    <td>Data Management &amp; Main System (File handling, backup, business summary, and main menu integration)</td>
                </tr>
            </tbody>
        </table>

        <p>This project was a genuinely collaborative effort among <strong>Tanmay Arora</strong>, <strong>Ansh Arora</strong>, <strong>Jaskaran Singh Bhinder</strong>, and <strong>Vishal</strong>. Each member contributed across research, design, development, testing, and documentation: Tanmay Arora led Customer &amp; Service Management (customer details, garment details, and service selection); Ansh Arora spearheaded Order Management &amp; Pricing (creating orders, generating IDs, and calculating bills); Jaskaran Singh Bhinder engineered Order Tracking &amp; Payment (updating order status, searching orders, and payment management); and Vishal developed Data Management &amp; Main System (file handling, backup, business summary, and main menu integration). Regular team discussions helped us stay consistent in design and modular execution without losing a single shared visual identity. We are grateful for each other's commitment, patience, and mutual dedication throughout this academic journey.</p>

        <p>Finally, we want to acknowledge the global Java developer community and the official Oracle documentation whose tutorials and technical references provided continuous inspiration for standard library streams, generics, and concurrent multithreading.</p>

        <div style="text-align: right; margin-top: 24px;">
            <p style="margin: 0; font-weight: bold;">On behalf of the project team</p>
            <p style="margin: 0; font-size: 13px; color: #4A5568;">B.Tech CSE (AI &amp; ML), Semester III, Chitkara University</p>
        </div>
    </div>

    <!-- PAGE 4: ABSTRACT & TABLE OF CONTENTS -->
    <div class="report-page">
        <h2>Abstract</h2>
        <p>The <strong>Laundrymat / Dry Cleaning Order Tracking System</strong> is a robust, console-driven enterprise application developed in Core Java for small-to-medium laundry and dry cleaning businesses. In traditional laundry establishments, order management relies heavily on handwritten paper registers, manual paper receipts, and mental arithmetic. This outdated methodology frequently leads to misplaced garments, calculation errors, delayed deliveries, and financial discrepancies.</p>

        <p>To resolve these operational bottlenecks, our team engineered an automated, menu-driven desktop system adhering strictly to Object-Oriented Programming (OOP) paradigms. The application provides comprehensive operational coverage: systematic customer registration, dynamic garment description, multi-tier service selection (Washing, Dry Cleaning, and Ironing), automated sequential order ID assignment, instant mathematical billing, 4-stage lifecycle status tracking (<code>Received</code>, <code>Washing</code>, <code>Ready</code>, <code>Delivered</code>), and financial settlement tracking (<code>Pending</code> vs. <code>Paid</code>).</p>

        <p>Architecturally, the software demonstrates advanced Java concepts: encapsulation of private state, abstract base classes, runtime polymorphism, contract-based interfaces (<code>Trackable</code>), Java Collections (<code>ArrayList</code>, <code>HashMap</code>, <code>TreeSet</code>), defensive exception handling (<code>InvalidOrderException</code>), asynchronous multithreading for notification alerts, dual-stream file persistence (character streams and low-level byte streams), modern stream analytics via Java 8 Lambdas, and scaffolded JDBC SQL database methods.</p>

        <p><strong>Keywords:</strong> <em>Core Java, Object-Oriented Programming (OOP), Laundry Management, File Handling, Multithreading, Java Collections, Java Streams, Software Engineering.</em></p>

        <h2 style="margin-top: 30px;">Table of Contents</h2>
        <table>
            <thead>
                <tr>
                    <th>Chapter &amp; Section Title</th>
                    <th style="width: 120px; text-align: center;">Page Reference</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Chapter 1: Introduction (Background, Problem Statement, Objectives, Scope)</td><td style="text-align: center;">5</td></tr>
                <tr><td>Chapter 2: Literature Review / Existing Systems (Manual, Desktop POS, Gap)</td><td style="text-align: center;">7</td></tr>
                <tr><td>Chapter 3: System Requirements &amp; Technology Stack (Hardware, Software, Stack)</td><td style="text-align: center;">8</td></tr>
                <tr><td>Chapter 4: System Design &amp; Architecture (Architecture, Class Diagram, Flow)</td><td style="text-align: center;">9</td></tr>
                <tr><td>Chapter 5: Module-Wise Description &amp; Terminal Outputs (Modules 1–4, Figures)</td><td style="text-align: center;">11</td></tr>
                <tr><td>Chapter 6: Implementation Details (OOP, Collections, Threads, File I/O, JDBC)</td><td style="text-align: center;">16</td></tr>
                <tr><td>Chapter 7: Testing &amp; Quality Assurance (Test Matrix, Verification)</td><td style="text-align: center;">18</td></tr>
                <tr><td>Chapter 8: Advantages &amp; Limitations (Benefits, Current Limits)</td><td style="text-align: center;">19</td></tr>
                <tr><td>Chapter 9: Future Scope &amp; Conclusion (Roadmap, Academic Learnings)</td><td style="text-align: center;">20</td></tr>
                <tr><td>Chapter 10: References</td><td style="text-align: center;">21</td></tr>
            </tbody>
        </table>
    </div>

    <!-- PAGE 5: CHAPTER 1 & CHAPTER 2 -->
    <div class="report-page">
        <h2>Chapter 1: Introduction</h2>
        <h3>1.1 Background and Motivation</h3>
        <p>Laundry and dry cleaning services form an essential segment of daily urban commerce. In a typical dry cleaning facility, hundreds of garments move through diverse cleaning cycles every single day. Despite the high volume of daily transactions, a vast majority of small-to-medium dry cleaning businesses continue to manage operations using physical paper notebooks, carbon-copy receipts, and manual calculation. This operational model suffers from severe vulnerabilities: ink smudging in humid environments, misplaced clothing tags, billing arithmetic discrepancies, and lost customer histories.</p>

        <p>The motivation behind this project is to develop an automated, lightweight, zero-dependency console application in <strong>Core Java</strong> that digitizes the entire lifecycle of a laundry order. By applying core computer science concepts—particularly Object-Oriented Programming (OOP), Java Collections, defensive Exception Handling, and File I/O—the system transforms manual, error-prone record-keeping into a predictable, transparent, and persistent software process.</p>

        <h3>1.2 Problem Statement</h3>
        <p>Traditional paper-based laundry management suffers from several critical bottlenecks:</p>
        <ul>
            <li><strong>Physical Record Degradation &amp; Loss:</strong> Paper registers deteriorate rapidly in laundry environments exposed to steam, water, and cleaning solvents.</li>
            <li><strong>Garment Tracking Failures:</strong> When garments move between washing machines, chemical dry-cleaning tanks, and steam irons, workers frequently lose track of their current stage, resulting in lost clothes.</li>
            <li><strong>Manual Billing Discrepancies:</strong> Calculating per-garment service rates by hand during peak rush hours leads to calculation errors, undercharging customers or causing disputes.</li>
            <li><strong>Payment Disorganization:</strong> Tracking credit balances and knowing whether an order is <code>Paid</code> or <code>Pending</code> becomes chaotic across hundreds of open orders.</li>
        </ul>

        <h3>1.3 Project Objectives</h3>
        <p>The overarching objective is to build an automated, reliable, and user-friendly console application using standard Java. Specific technical objectives include:</p>
        <ul>
            <li><strong>Digital Customer Management:</strong> Store customer identity in encapsulated data structures.</li>
            <li><strong>Automated Sequential ID Generation:</strong> Issue unique sequential 4-digit identifiers starting from 1001.</li>
            <li><strong>Dynamic Pricing Engine:</strong> Compute totals automatically using OOP polymorphism based on service rates (Quantity × Rate).</li>
            <li><strong>Lifecycle Tracking:</strong> Monitor order progress across four standard stages (<code>Received</code>, <code>Washing</code>, <code>Ready</code>, <code>Delivered</code>).</li>
            <li><strong>Payment Settlement:</strong> Maintain transparent accounting records toggling orders between <code>Pending</code> and <code>Paid</code>.</li>
            <li><strong>Permanent File Persistence:</strong> Serialize records into flat text files (<code>orders.txt</code>) using character streams.</li>
            <li><strong>Automated Byte-Stream Backup:</strong> Duplicate data into <code>orders_backup.txt</code> using low-level byte streams.</li>
            <li><strong>Real-Time Stream Analytics:</strong> Use Java 8 Streams to generate business summaries displaying order counts, revenues, and top-value transactions.</li>
        </ul>
    </div>

    <!-- PAGE 6: CHAPTER 3 & CHAPTER 4 -->
    <div class="report-page">
        <h2>Chapter 3: System Requirements &amp; Technology Stack</h2>
        <h3>3.1 Hardware Requirements</h3>
        <ul>
            <li><strong>Processor:</strong> Intel Core i3 / AMD Ryzen 3 (1.5 GHz or higher, x86_64 or ARM64).</li>
            <li><strong>RAM:</strong> Minimum 2 GB (4 GB recommended for smooth multi-tasking and compilation).</li>
            <li><strong>Storage:</strong> Minimum 100 MB free hard disk space for JDK installation and runtime data files (<code>orders.txt</code>).</li>
            <li><strong>Display:</strong> Any standard monitor supporting 1024x768 resolution or higher.</li>
        </ul>

        <h3>3.2 Software Requirements &amp; Stack</h3>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Tool / Technology</th>
                    <th>Architectural Justification</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Language</strong></td>
                    <td>Java SE (JDK 8+)</td>
                    <td>Strong type safety, platform independence ("Write Once, Run Anywhere"), and native OOP support.</td>
                </tr>
                <tr>
                    <td><strong>Collections</strong></td>
                    <td><code>ArrayList</code>, <code>HashMap</code>, <code>TreeSet</code></td>
                    <td>Fast in-memory operations: dynamic lists, instant O(1) ID lookups, and sorted catalogs.</td>
                </tr>
                <tr>
                    <td><strong>File I/O</strong></td>
                    <td><code>BufferedReader</code>, <code>PrintWriter</code></td>
                    <td>High-performance buffered character streams reading and writing pipe-delimited records.</td>
                </tr>
                <tr>
                    <td><strong>Backup I/O</strong></td>
                    <td><code>FileInputStream</code>, <code>FileOutputStream</code></td>
                    <td>Low-level byte streams creating exact binary duplicates without encoding corruption.</td>
                </tr>
                <tr>
                    <td><strong>Analytics</strong></td>
                    <td>Java 8+ Stream API</td>
                    <td>Declarative stream pipelines calculating total revenues and finding top orders with lambdas.</td>
                </tr>
            </tbody>
        </table>

        <h2>Chapter 4: System Design &amp; Architecture</h2>
        <div class="figure-container">
            ${fig41}
            <div class="figure-caption">Fig 4.1 - End-to-end System Architecture and Data Flow Diagram showing user interaction, controller dispatching, OOP domain models, in-memory collections, and dual-layer file persistence.</div>
        </div>
    </div>

    <!-- PAGE 7: CHAPTER 5 (MODULES 1 & 2 TERMINAL OUTPUTS) -->
    <div class="report-page">
        <h2>Chapter 5: Module-Wise Description &amp; Terminal Outputs</h2>
        <h3>5.1 Module 1: Customer &amp; Service Management (Tanmay Arora)</h3>
        <p>Module 1 collects customer contact details and defines laundry services. Every customer is represented by an encapsulated <code>Customer</code> object containing private <code>name</code> and <code>phone</code> fields. Three services inherit from an abstract parent <code>LaundryService</code>:</p>
        <ul>
            <li><strong>Washing Service:</strong> Rs. 50.00 per garment for everyday casual wear.</li>
            <li><strong>Dry Cleaning Service:</strong> Rs. 100.00 per garment for delicate garments like suits and blazers.</li>
            <li><strong>Ironing Service:</strong> Rs. 30.00 per garment for crisp steam press and wrinkle removal.</li>
        </ul>

        <div class="figure-container">
            ${fig51}
            <div class="figure-caption">Fig 5.1 - Terminal Output demonstrating application startup, loading of previous records, and the 8-option main menu.</div>
        </div>

        <h3>5.2 Module 2: Order Management &amp; Pricing (Ansh Arora)</h3>
        <p>Module 2 orchestrates the order creation workflow. When the user selects Option 1, the system gathers customer information, garment descriptions, service choice, and quantity. It computes the total bill as: <code>Total = Quantity × Rate</code>, assigns a unique sequential Order ID (1001, 1002...), and launches an asynchronous background notification thread.</p>

        <div class="figure-container">
            ${fig52}
            <div class="figure-caption">Fig 5.2 - Terminal Output for Option 1: Customer intake, service selection, automated bill computation (Rs. 150.00), and multithreaded notification alert.</div>
        </div>
    </div>

    <!-- PAGE 8: CHAPTER 5 (MODULES 3 & 4 TERMINAL OUTPUTS) -->
    <div class="report-page">
        <h3>5.3 Module 3: Order Tracking &amp; Payment Settlement (Jaskaran Singh Bhinder)</h3>
        <p>Module 3 handles order searching, lifecycle tracking, and payment processing. Orders can be searched instantly using <code>HashMap</code> and Order ID. Status transitions sequentially through <code>Received</code> ➔ <code>Washing</code> ➔ <code>Ready</code> ➔ <code>Delivered</code>. Option 5 toggles payment status from <code>Pending</code> to <code>Paid</code> and locks the transaction against duplicate charges.</p>

        <div class="figure-container">
            ${fig53}
            <div class="figure-caption">Fig 5.3 - Terminal Output for Options 2 &amp; 3: Full order listing and instant search by Order ID 1001.</div>
        </div>

        <div class="figure-container">
            ${fig54}
            <div class="figure-caption">Fig 5.4 - Terminal Output for Option 4: Order status lifecycle transition to "Ready".</div>
        </div>

        <div class="figure-container">
            ${fig55}
            <div class="figure-caption">Fig 5.5 - Terminal Output for Option 5: Recording payment settlement and confirming status change to "Paid".</div>
        </div>
    </div>

    <!-- PAGE 9: CHAPTER 5 (PERSISTENCE & EXCEPTIONS) -->
    <div class="report-page">
        <h3>5.4 Module 4: File Persistence, Backup &amp; Analytics (Vishal)</h3>
        <p>Module 4 implements permanent character-stream storage in <code>orders.txt</code>, creates automated binary backups in <code>orders_backup.txt</code> using byte streams, and computes analytical summaries via Java Streams.</p>

        <div class="figure-container">
            ${fig56}
            <div class="figure-caption">Fig 5.6 - Terminal Output for Option 6: Business Summary Analytics calculating paid orders, revenues, and identifying the highest-value order.</div>
        </div>

        <div class="figure-container">
            ${fig57}
            <div class="figure-caption">Fig 5.7 - Terminal Output for Options 7 &amp; 8: Permanent file saving in orders.txt and binary backup duplication.</div>
        </div>

        <div class="figure-container">
            ${fig58}
            <div class="figure-caption">Fig 5.8 - Terminal Output showing input validation handling non-numeric entries, quantity checks, and missing Order IDs via InvalidOrderException.</div>
        </div>
    </div>

    <!-- PAGE 10: CHAPTER 6 (IMPLEMENTATION) -->
    <div class="report-page">
        <h2>Chapter 6: Implementation Details</h2>
        <h3>6.1 Object-Oriented Principles in Source Code</h3>
        <p>The implementation adheres strictly to standard Object-Oriented Programming (OOP) paradigms:</p>
        
        <p><strong>1. Encapsulation:</strong> All critical attributes in <code>Customer</code> and <code>Order</code> are declared <code>private</code> and exposed only via public accessors:</p>
<pre>static class Customer {
    private String name;
    private String phone;
    Customer(String name, String phone) { this.name = name; this.phone = phone; }
    String getName() { return name; }
    String getPhone() { return phone; }
}</pre>

        <p><strong>2. Inheritance &amp; Abstraction:</strong> An abstract base class <code>LaundryService</code> defines the contract, while subclasses provide concrete implementations:</p>
<pre>static abstract class LaundryService {
    abstract String getName();
    abstract double getRate();
}
static class WashingService extends LaundryService {
    String getName() { return "Washing"; }
    double getRate() { return 50.0; }
}</pre>

        <p><strong>3. Polymorphism:</strong> An array of parent references <code>LaundryService[]</code> enables dynamic method dispatch at runtime:</p>
<pre>LaundryService selectedService = serviceOptions[serviceChoice - 1];
double amount = selectedService.getRate() * quantity;</pre>

        <p><strong>4. Interfaces:</strong> The <code>Trackable</code> interface formalizes status update capabilities:</p>
<pre>interface Trackable { void updateStatus(String newStatus); }</pre>

        <h3>6.2 Multithreading &amp; Concurrency</h3>
        <p>An asynchronous Java <code>Thread</code> handles real-time order alerts without blocking the console interaction:</p>
<pre>Thread notificationThread = new Thread(() -&gt;
    System.out.println("[Notification] Order " + order.getId()
            + " has been received for " + order.getCustomerName() + "."));
notificationThread.start();</pre>
    </div>

    <!-- PAGE 11: CHAPTER 7, 8, 9, 10 -->
    <div class="report-page">
        <h2>Chapter 7: Testing &amp; Quality Assurance</h2>
        <table>
            <thead>
                <tr>
                    <th style="width: 70px; text-align: center;">Test ID</th>
                    <th>Test Scenario</th>
                    <th>Input / Action</th>
                    <th>Expected Result</th>
                    <th style="width: 80px; text-align: center;">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: center;">TC-01</td>
                    <td>Non-numeric menu input</td>
                    <td>Enters 'abc'</td>
                    <td>Rejects entry, displays error, reprompts safely</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
                <tr>
                    <td style="text-align: center;">TC-02</td>
                    <td>Sequential ID Assignment</td>
                    <td>Creates orders sequentially</td>
                    <td>Order 1 gets 1001, Order 2 gets 1002</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
                <tr>
                    <td style="text-align: center;">TC-03</td>
                    <td>Bill Calculation (Washing)</td>
                    <td>3 shirts × Washing (Rs. 50)</td>
                    <td>Total Amount = Rs. 150.00</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
                <tr>
                    <td style="text-align: center;">TC-04</td>
                    <td>Search Missing Order ID</td>
                    <td>Searches for Order ID 9999</td>
                    <td>Throws InvalidOrderException gracefully</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
                <tr>
                    <td style="text-align: center;">TC-05</td>
                    <td>Payment Toggle &amp; Lock</td>
                    <td>Records payment for Order 1001</td>
                    <td>Status updates to Paid; second attempt prevented</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
                <tr>
                    <td style="text-align: center;">TC-06</td>
                    <td>File Persistence &amp; Reload</td>
                    <td>Restarts application</td>
                    <td>Previous orders loaded automatically from file</td>
                    <td style="text-align: center; color: green; font-weight: bold;">Pass</td>
                </tr>
            </tbody>
        </table>

        <h2>Chapter 8: Advantages &amp; Limitations</h2>
        <p><strong>Key Advantages:</strong> High usability, elimination of manual arithmetic mistakes, real-time lifecycle visibility, persistent file storage, and zero hardware overhead.</p>
        <p><strong>Limitations (v1.0):</strong> Console-based interaction, local text-file storage, and manual payment recording.</p>

        <h2>Chapter 9: Future Scope &amp; Conclusion</h2>
        <p><strong>Future Roadmap:</strong> Developing a JavaFX desktop GUI, integrating MySQL via scaffolded JDBC methods, embedding online UPI payments, and automated WhatsApp/SMS notifications.</p>
        <p><strong>Conclusion:</strong> The project successfully demonstrates how Core Java solves real-world operational challenges. Developing this system provided invaluable practical experience in Object-Oriented design, collections, streams, file I/O, and group software development.</p>

        <h2>Chapter 10: References</h2>
        <ol>
            <li>Oracle Java SE 21 Documentation: <code>https://docs.oracle.com/en/java/javase/21/docs/api/</code></li>
            <li>Deitel, P., &amp; Deitel, H.: <em>Java: How to Program</em>, 11th Edition. Pearson Education.</li>
            <li>Bloch, J.: <em>Effective Java</em>, 3rd Edition. Addison-Wesley Professional.</li>
            <li>Chitkara University Academic Course Project Evaluation Criteria, Department of CSE (AI &amp; ML).</li>
        </ol>
    </div>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'Laundry_Project_Report.html'), htmlContent, 'utf8');
console.log('Successfully updated Laundry_Project_Report.html with exact FEE project table structure.');
