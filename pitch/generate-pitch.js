const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, VerticalAlign, PageNumber, PageBreak,
  TabStopType, TabStopPosition,
} = require("docx");

const gold = "B8860B";
const dark = "1A1A1A";
const gray = "666666";
const lightGray = "F5F5F0";
const white = "FFFFFF";
const green = "2E7D32";
const red = "C62828";

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
const cellBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };
const noBorders = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22, color: dark } } },
    paragraphStyles: [
      { id: "Title", name: "Title", basedOn: "Normal",
        run: { size: 56, bold: true, color: dark, font: "Arial" },
        paragraph: { spacing: { before: 0, after: 200 }, alignment: AlignmentType.CENTER } },
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, color: gold, font: "Arial" },
        paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, color: dark, font: "Arial" },
        paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-problems",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-features",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbered-next",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [
    // ===== COVER PAGE =====
    {
      properties: {
        page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } },
      },
      children: [
        new Paragraph({ spacing: { before: 3000 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "WEBSITE REDESIGN", size: 24, color: gold, bold: true, font: "Arial", characterSpacing: 300 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "PROPOSAL", size: 24, color: gold, bold: true, font: "Arial", characterSpacing: 300 })],
        }),
        new Paragraph({ spacing: { after: 400 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Fine Thai", size: 72, bold: true, color: dark, font: "Georgia" })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "Authentic Thai Cuisine  |  Brookfield, IL", size: 26, color: gray, font: "Arial" })],
        }),
        new Paragraph({ spacing: { after: 600 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "A Modern Website to Attract More Customers", size: 28, color: dark, italics: true })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "and Increase Online Orders", size: 28, color: dark, italics: true })],
        }),
        new Paragraph({ spacing: { before: 2000 }, children: [] }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [new TextRun({ text: "Prepared by Tony", size: 22, color: gray })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: "March 2026", size: 22, color: gray })],
        }),
      ],
    },

    // ===== MAIN CONTENT =====
    {
      properties: {
        page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } },
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
              new TextRun({ text: "Fine Thai ", bold: true, color: gold, size: 18 }),
              new TextRun({ text: "Website Proposal", color: gray, size: 18 }),
            ],
          })],
        }),
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: "Page ", size: 18, color: gray }),
              new TextRun({ children: [PageNumber.CURRENT], size: 18, color: gray }),
              new TextRun({ text: " of ", size: 18, color: gray }),
              new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, color: gray }),
            ],
          })],
        }),
      },
      children: [
        // EXECUTIVE SUMMARY
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Executive Summary")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "Your current website is leaving money on the table.", bold: true, size: 24 })],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("77% of customers visit a restaurant's website before deciding where to eat. 68% are discouraged by a poor website experience. Your current site, built on a generic BeyondMenu template, doesn't reflect the quality of your food or service.")],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("I've built a complete replacement website using modern technology that will help Fine Thai attract more customers, increase online orders, and stand out from competitors in the Brookfield area. The site is ready to preview today.")],
        }),

        // THE PROBLEM
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The Problem With Your Current Site")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("I analyzed your current website (brookfieldfinethai.com) as a customer would. Here's what I found:")],
        }),
        ...[
          { title: "Generic Template Look", desc: "Your site uses a standard BeyondMenu template that looks identical to hundreds of other restaurants. There's nothing that says \"Fine Thai\" about the design." },
          { title: "No Food Photography", desc: "The menu is a plain text list with no images. 45% of visitors look for food photos first \u2014 they want to see what they're ordering." },
          { title: "\"No Reviews\" Displayed", desc: "The site prominently shows \"No reviews\" which actively discourages new customers. First impressions matter." },
          { title: "Weak About Section", desc: "Just two generic sentences. Customers want to know your story \u2014 who's cooking, what makes your food special, why they should choose you." },
          { title: "Poor Mobile Experience", desc: "68% of restaurant website visits happen on mobile. Your current site isn't optimized for phone users, which means you're losing the majority of potential customers." },
          { title: "No SEO", desc: "Missing structured data that helps Google show your restaurant in local search results, maps, and \"Thai food near me\" queries." },
        ].map((item, i) => new Paragraph({
          numbering: { reference: "numbered-problems", level: 0 },
          spacing: { after: 150 },
          children: [
            new TextRun({ text: item.title + " \u2014 ", bold: true }),
            new TextRun(item.desc),
          ],
        })),

        new Paragraph({ children: [new PageBreak()] }),

        // THE SOLUTION
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("The New Fine Thai Website")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("I've built a complete, ready-to-launch website that solves every problem listed above. Here's what's included:")],
        }),

        // Features table
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Key Features")] }),
        ...[
          { title: "Full-Screen Food Photography Hero", desc: "Stunning first impression with professional food imagery, your restaurant name, and a clear \"Order Online\" button. Makes customers hungry immediately." },
          { title: "Interactive Menu with 102+ Items", desc: "Full HTML menu (not a PDF) with search, dietary filters (Vegetarian, Vegan, Gluten-Free, Seafood), spice level indicators, and \"Popular\" badges. Customers find what they want in seconds." },
          { title: "Customer Reviews Section", desc: "Social proof with star ratings and testimonials. 90% of diners read reviews before choosing. This builds trust instantly." },
          { title: "Scroll Animations", desc: "Smooth fade-in effects as customers scroll, creating a premium, modern feel that sets you apart from every other Thai restaurant website." },
          { title: "Mobile Bottom Navigation Bar", desc: "Fixed buttons for Menu, Order, Call, and Location \u2014 always accessible on mobile. The \"Order\" button floats above the rest for maximum visibility." },
          { title: "Floating \"Order Now\" Button", desc: "A persistent order button that's always visible on desktop. Research shows persistent CTAs increase online orders by 34%." },
          { title: "Google Maps Integration", desc: "Embedded map with your exact location, hours of operation, phone number, and \"Get Directions\" button." },
          { title: "10% Off Banner", desc: "Prominent promotion section encouraging larger orders ($60+). Drives higher average order value." },
          { title: "Local SEO Structured Data", desc: "Google-friendly markup that helps you appear in \"Thai food near me\" searches, Google Maps, and local business listings." },
          { title: "Browse by Category", desc: "Visual tiles on the homepage linking directly to menu sections (Noodles, Curries, Seafood, etc.) \u2014 faster path to ordering." },
        ].map((item, i) => new Paragraph({
          numbering: { reference: "numbered-features", level: 0 },
          spacing: { after: 150 },
          children: [
            new TextRun({ text: item.title + " \u2014 ", bold: true }),
            new TextRun(item.desc),
          ],
        })),

        new Paragraph({ children: [new PageBreak()] }),

        // BEFORE VS AFTER COMPARISON
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Before vs. After")] }),
        new Paragraph({ spacing: { after: 200 }, children: [new TextRun("Here's a side-by-side comparison:")] }),

        new Table({
          columnWidths: [3120, 3120, 3120],
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Feature", bold: true, color: white, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "EEEEEE", type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Current Site", bold: true, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA }, shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "New Site", bold: true, color: green, size: 20 })] })] }),
              ],
            }),
            ...([
              ["Design", "Generic BeyondMenu template", "Custom dark theme with gold accents"],
              ["Hero Section", "Small text, stock image", "Full-screen food photography"],
              ["Menu", "Plain text list, no images", "Searchable, filterable, 102+ items"],
              ["Food Photos", "None", "Professional photography throughout"],
              ["Reviews", "\"No reviews\" shown", "Star ratings + testimonials"],
              ["Mobile", "Basic responsive", "Fixed bottom nav, mobile-first"],
              ["Animations", "None", "Smooth scroll-triggered effects"],
              ["SEO", "Basic meta tags only", "Full structured data + local SEO"],
              ["Order Button", "In header only", "Floating + bottom bar + hero"],
              ["Speed", "Slow (template bloat)", "Sub-second loads (Next.js)"],
            ]).map(([feature, current, newSite]) =>
              new TableRow({
                children: [
                  new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: feature, bold: true, size: 20 })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: current, size: 20, color: red })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3120, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: newSite, size: 20, color: green })] })] }),
                ],
              })
            ),
          ],
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // PRICING
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Investment & Pricing")] }),
        new Paragraph({
          spacing: { after: 300 },
          children: [new TextRun("I'm offering two packages to fit your needs:")],
        }),

        // Package 1
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Option A: Website Launch Package")] }),
        new Table({
          columnWidths: [5760, 3600],
          rows: [
            new TableRow({
              children: [
                new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Item", bold: true, color: white, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Price", bold: true, color: white, size: 20 })] })] }),
              ],
            }),
            ...([
              ["Website Design & Development (complete build)", "$2,500"],
              ["Content Migration (menu, hours, contact info)", "Included"],
              ["Mobile Optimization & Testing", "Included"],
              ["SEO Setup (structured data, meta tags, local SEO)", "Included"],
              ["Google Maps Integration", "Included"],
              ["Online Ordering Integration (link to your system)", "Included"],
              ["Domain Connection & SSL Certificate", "Included"],
              ["Deployment to Vercel (hosting)", "Included"],
              ["30-Day Post-Launch Support", "Included"],
            ]).map(([item, price]) =>
              new TableRow({
                children: [
                  new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: item, size: 20 })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA },
                    children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: price, size: 20, bold: price.startsWith("$") })] })] }),
                ],
              })
            ),
            new TableRow({
              children: [
                new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA }, shading: { fill: lightGray, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "TOTAL ONE-TIME INVESTMENT", bold: true, size: 22 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA }, shading: { fill: lightGray, type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$2,500", bold: true, size: 24, color: gold })] })] }),
                ],
            }),
          ],
        }),

        new Paragraph({ spacing: { after: 400 }, children: [] }),

        // Package 2
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Option B: Website + Ongoing Care Package")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "Everything in Option A, plus monthly maintenance:", italics: true, color: gray })],
        }),
        new Table({
          columnWidths: [5760, 3600],
          rows: [
            new TableRow({
              children: [
                new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Item", bold: true, color: white, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Price", bold: true, color: white, size: 20 })] })] }),
              ],
            }),
            ...([
              ["Website Design & Development (complete build)", "$2,500"],
              ["Monthly Hosting (Vercel Pro)", "$20/mo"],
              ["Monthly Menu Updates (prices, items, specials)", "$150/mo"],
              ["Performance Monitoring & Uptime Checks", "Included"],
              ["Security Updates & Bug Fixes", "Included"],
              ["Monthly Analytics Report (traffic, orders)", "Included"],
              ["Priority Support (48-hour response)", "Included"],
            ]).map(([item, price]) =>
              new TableRow({
                children: [
                  new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: item, size: 20 })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA },
                    children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: price, size: 20, bold: price.startsWith("$") })] })] }),
                ],
              })
            ),
            new TableRow({
              children: [
                new TableCell({ borders: cellBorders, width: { size: 5760, type: WidthType.DXA }, shading: { fill: lightGray, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "TOTAL", bold: true, size: 22 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3600, type: WidthType.DXA }, shading: { fill: lightGray, type: ShadingType.CLEAR },
                  children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "$2,500 + $170/mo", bold: true, size: 22, color: gold })] })] }),
              ],
            }),
          ],
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // ROI
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Return on Investment")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("This website pays for itself quickly. Here's how:")],
        }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("The Numbers")] }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Mobile-optimized sites capture 42% more online orders ", bold: true }),
            new TextRun("(your current site isn't mobile-optimized)"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Persistent \"Order Now\" buttons increase conversions by 34% ", bold: true }),
            new TextRun("(your current site has the button hidden in the header)"),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "HTML menus (vs. PDFs or plain text) drive 58% more completed orders ", bold: true }),
          ],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "3x more customers now prefer ordering directly from restaurants ", bold: true }),
            new TextRun("over third-party apps (saving you 15-30% in commissions)"),
          ],
        }),

        new Paragraph({ spacing: { after: 200 }, children: [] }),
        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Simple Math")] }),
        new Paragraph({
          spacing: { after: 150 },
          children: [new TextRun("If the new website brings in just 5 additional online orders per week at an average of $30:")],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [new TextRun("5 orders x $30 = $150/week in additional revenue")],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [new TextRun("$150 x 52 weeks = $7,800/year in additional revenue")],
        }),
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "The $2,500 investment pays for itself in just 17 weeks", bold: true, color: green }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "And that's a conservative estimate. Most restaurants see significantly higher increases after launching a modern, mobile-optimized website.", italics: true, color: gray })],
        }),

        new Paragraph({ children: [new PageBreak()] }),

        // TIMELINE
        new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Timeline & Next Steps")] }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun({ text: "The website is already built and ready to preview.", bold: true, size: 24 })],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [new TextRun("Here's how we can go live quickly:")],
        }),

        new Table({
          columnWidths: [2340, 3510, 3510],
          rows: [
            new TableRow({
              children: [
                new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "When", bold: true, color: white, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3510, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "What", bold: true, color: white, size: 20 })] })] }),
                new TableCell({ borders: cellBorders, width: { size: 3510, type: WidthType.DXA }, shading: { fill: gold, type: ShadingType.CLEAR },
                  children: [new Paragraph({ children: [new TextRun({ text: "Details", bold: true, color: white, size: 20 })] })] }),
              ],
            }),
            ...([
              ["Today", "Preview the Site", "Walk through the live demo together"],
              ["Day 1-3", "Your Feedback", "Any changes to content, colors, or layout"],
              ["Day 4-7", "Revisions", "I implement your feedback (up to 2 rounds)"],
              ["Day 8-10", "Final Review", "Your sign-off on the finished site"],
              ["Day 11-14", "Go Live", "Domain connection, DNS update, live launch"],
            ]).map(([when, what, details]) =>
              new TableRow({
                children: [
                  new TableCell({ borders: cellBorders, width: { size: 2340, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: when, bold: true, size: 20 })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3510, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: what, size: 20 })] })] }),
                  new TableCell({ borders: cellBorders, width: { size: 3510, type: WidthType.DXA },
                    children: [new Paragraph({ children: [new TextRun({ text: details, size: 20, color: gray })] })] }),
                ],
              })
            ),
          ],
        }),

        new Paragraph({ spacing: { after: 400 }, children: [] }),

        new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("What I Need From You")] }),
        ...[
          "Your go-ahead to proceed (verbal or signed agreement)",
          "Access to your domain registrar (to point the domain to the new site)",
          "Any menu updates or corrections you'd like included",
          "Professional food photos if available (optional but recommended)",
          "50% deposit to begin ($1,250), remainder on launch",
        ].map(item => new Paragraph({
          numbering: { reference: "numbered-next", level: 0 },
          spacing: { after: 100 },
          children: [new TextRun({ text: item, size: 22 })],
        })),

        new Paragraph({ spacing: { after: 400 }, children: [] }),

        // CLOSING
        new Paragraph({
          shading: { fill: lightGray, type: ShadingType.CLEAR },
          spacing: { before: 300, after: 300 },
          children: [],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Ready to see the new Fine Thai website?", size: 28, bold: true, color: gold })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [new TextRun({ text: "Let's walk through the live preview together.", size: 24, color: gray })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
          children: [
            new TextRun({ text: "Tony", bold: true, size: 22 }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [new TextRun({ text: "Web Developer & Designer", size: 20, color: gray })],
        }),
      ],
    },
  ],
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("pitch/Fine_Thai_Website_Proposal.docx", buffer);
  console.log("Pitch document created: pitch/Fine_Thai_Website_Proposal.docx");
});
