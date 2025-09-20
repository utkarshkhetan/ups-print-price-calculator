# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a single-page print price calculator web application that helps customers calculate printing costs for different paper types, sizes, and quantities. The application is built as a standalone HTML file with embedded CSS and JavaScript.

## Architecture

The application consists of:
- Single HTML file (`index.html`) containing all code and styles
- Two main calculation modes:
  - **Standard printing**: Traditional paper sizes (8.5x11, 8.5x14, 11x17, 12x18) with various paper types
  - **Large format printing**: Custom dimensions with square footage pricing
- Static UPS logo asset (`ups-logo_white_01.png`)

## Application Pages and Navigation

The application consists of 11 main service pages accessible via sidebar navigation:

1. **Home** (`homepage`) - Service selection dashboard with button grid
2. **Standard Prints** (`standardCalculator`) - Traditional paper printing calculator
3. **Large Format Prints** (`largeFormatCalculator`) - Custom dimension printing
4. **Business Cards** (`businessCardsCalculator`) - Business card pricing with options
5. **Stickers** (`stickerSheetsCalculator`) - Sticker sheet calculator with size variants
6. **Stamps** (`stampsCalculator`) - Individual stamp calculator for postage
7. **Faxing** (`faxingCalculator`) - Fax service pricing calculator
8. **Shredding** (`shreddingCalculator`) - Document destruction services
9. **Scanning** (`scanningCalculator`) - Document scanning services
10. **Graphic Design** (`graphicDesignCalculator`) - Design time calculator
11. **Industry Norms** (`industryNorms`) - Paper recommendations reference

## Key Components

### User Interface Structure
- **Standard Calculator Sections**: `paperSelection`, `colorSection`, `sizeSection`, `quantitySection`, `resultsSection`
- **Large Format Sections**: `lfPaperSelection`, `lfDimensionSection`, `lfResultsSection`
- **Navigation**: Sidebar navigation with 11 service buttons, collapsible mobile menu
- **Header**: Fixed header with dynamic titles and UPS logo positioning

### Pricing Structure
- **paperTypes**: Base prices for different paper weights and finishes (20lb Text through Kromekote Photo Paper)
- **sizeMultipliers**: Price multipliers based on color type (B&W vs Color) and paper size
- **largeFormatPapers**: Per-square-foot pricing for large format materials

### Core Functions
- `selectPaper()`, `selectColor()`, `selectSize()`: Standard printing workflow
- `selectLargeFormatPaper()`, `calculateLargeFormatPrice()`: Large format workflow
- `calculatePrice()`: Main pricing calculation with bulk discounts and service fees
- Navigation functions: `showSection()`, `goBackTo*()`, `resetCalculator()`, `toggleSection()`

### Business Logic
- **Service fees**: $2.00 for orders under $15 (standard), $5.00 for orders under $30 (large format)
- **Bulk discounts**: 10% for 50+ sheets, 20% for 100+ sheets, 30% for 250+ sheets, 40% for 500+ sheets, 50% for 1000+ sheets
- **Special pricing for text papers** (8.5x11 only):
  - 20lb Text: $1.00 for single sheet, $2.00 for first 4 sheets + incremental rates (color: $0.59, B&W: $0.24)
  - 28lb Text: $1.00 for single sheet, $2.00 for first 3 sheets + incremental rates (color: $0.64, B&W: $0.32)
- **Large format options**: Optional foam core backing (+$2.00/sq ft), supports both inches and feet units

## Development

This is a static site with no build process or dependencies. To work with it:
- Open `index.html` directly in a browser
- All modifications are made to the single HTML file
- No package management or build tools required

The application uses vanilla JavaScript with no external dependencies or frameworks.

## Additional Calculator Services

### Individual Stamps Calculator
- **Location**: Stamps section in main navigation
- **Purpose**: Calculate postage requirements and stamp quantities for mailing
- **Features**:
  - Weight input for mail items (in ounces)
  - Two envelope size categories: Small (up to 6.125" x 11.5") and Large (over those dimensions)
  - Dynamic pricing charts showing USPS postage rates
  - Four result bubbles displaying:
    1. Number of stamps needed
    2. Customer price (stamp cost)
    3. Postage amount required (USPS rate)
    4. Postage amount fulfilled (stamp value: stamps × $0.78)
- **Pricing**: Forever stamps valued at $0.78 each
- **UI Pattern**: Input field with real-time calculation and bubble display layout

### Document Shredding Services
- **Location**: Shredding section in main navigation
- **Purpose**: Calculate pricing for document destruction services
- **Service Types**:
  - **Self-Service Shredding**: Customer brings documents to facility
    - 1-25 lbs: $0.99/lb
    - 26-100 lbs: $0.85/lb
    - 100+ lbs: $0.75/lb
  - **White-Glove Service**: Full-service document pickup and destruction
    - 1-25 lbs: $1.29/lb
    - 26-100 lbs: $1.14/lb
    - 100+ lbs: $0.99/lb
- **UI Pattern**: Toggle switch, tiered pricing table, weight input calculator
- **Layout**: Follows spacious graphic design page layout (max-width: 1400px)
- **Features**: Real-time price calculation with automatic tier detection

### Business Cards Calculator
- **Location**: Business Cards section in main navigation
- **Purpose**: Calculate pricing for custom business card orders
- **Paper Types**: 14pt and 16pt cardstock options
- **Quantities**: 50, 100, 250, 500, 1000 cards
- **Options & Pricing Modifiers**:
  - Glossy finish: +10%
  - Full color printing: +20%
  - Double-sided printing: +30%
  - Full bleed design: +15%
- **Base Prices**: 14pt ($20-$135), 16pt ($25-$165) based on quantity
- **UI Pattern**: Checkbox options with real-time price calculation

### Sticker Sheets Calculator
- **Location**: Stickers section in main navigation
- **Purpose**: Calculate pricing for adhesive sticker sheet printing
- **Size Options**: 7 different sticker formats with varying quantities per sheet:
  - 1x2.625 matte (30 stickers/sheet)
  - 1.5x4 gloss (12 stickers/sheet)
  - 2" circle gloss (20 stickers/sheet)
  - 2x3 gloss (10 stickers/sheet)
  - 2x4 gloss (10 stickers/sheet)
  - 2.5x6 matte (4 stickers/sheet)
  - 8.5x11 full sheet (1 sticker/sheet)
- **Tiered Pricing**: Quantity-based pricing (100+: $2-$3, 25+: $3-$4, 10+: $4-$5, 1+: $5-$6)
- **Features**: Visual sticker size selection with image previews, automatic sheet calculation
- **Easter Egg**: Secret button sequence unlocks special celebration images

### Faxing Calculator
- **Location**: Faxing section in main navigation  
- **Purpose**: Calculate costs for fax transmission services
- **Service Types**:
  - **Local Fax**: $2.00 first page, $1.00 additional
  - **Long Distance**: $3.00 first page, $1.50 additional  
  - **International**: $5.00 first page, $2.50 additional
- **Volume Discounts**: Pages 11+ charged at half the additional page rate
- **UI Pattern**: Service type selection, page quantity input, automatic calculation

### Scanning Services Calculator
- **Location**: Scanning section in main navigation
- **Purpose**: Calculate pricing for document digitization services
- **Service Types**:
  - **Standard Document Scanning**: Flat rate and per-page pricing tiers
    - 1-6 pages: $3.00 flat rate
    - 7+ pages: $3.00 + $0.50 each additional
    - 11+ pages: $5.00 (10 pages) + $0.25 each additional
  - **Large Format Scanning**: Per-page pricing
    - 1st page: $2.00
    - 2-49 pages: $2.00 + $1.00 each
    - 50+ pages: $50.00 (49 pages) + $0.50 each additional
- **UI Pattern**: Toggle switch between services, tiered pricing display, quantity calculator

### Graphic Design Services Calculator  
- **Location**: Graphic Design section in main navigation
- **Purpose**: Calculate billable hours for professional design services
- **Pricing**: $75 per hour for all design work
- **Features**: Time input (hours and minutes), automatic cost calculation
- **Use Case**: Estimates for logo design, marketing materials, layout work
- **UI Pattern**: Time input fields, hourly rate display, total calculation

### Industry Norms Reference
- **Location**: Industry Norms section in main navigation
- **Purpose**: Educational reference for paper weight recommendations
- **Content**: Detailed recommendations for different document types:
  - **Text Papers**: 20lb (everyday documents), 28lb (professional documents)
  - **Cover Papers**: 60lb (business cards), 80lb+ (premium materials)
  - **Photo Papers**: Specialty options for photography and marketing
- **Format**: Informational cards with paper descriptions and use cases
- **No Calculator**: Static reference page, no pricing calculations

### Technical Implementation Notes
- **Layout Consistency**: All pages follow either standard calculator or spacious graphic design layout patterns
- **CSS Patterns**: 
  - Full-height tables using flexbox (`display: flex; flex-direction: column; height: 100%`)
  - Responsive grid systems for calculators and content
  - Toggle button styling for service type selection
- **JavaScript Functions**: 
  - `calculateStampRequirements()`: USPS postage calculations with tiered rates
  - `toggleShreddingMode()`: Service type switching for shredding services
  - `calculateShreddingPrice()`: Tiered weight-based pricing
  - `calculateFaxPrice()`: Multi-tier fax pricing with volume discounts
  - `calculateScanPrice()`: Tiered document scanning calculations
  - `calculateGraphicDesignTime()`: Hourly billing calculations
  - `calculateBusinessCardPrice()`: Option-based pricing with modifiers
  - `calculateStickerPrice()`: Quantity and finish-based sticker pricing
- **Data Structures**: 
  - `stampPricing`: USPS postage rates for small/large envelopes by weight
  - `shreddingPricing`: Tiered pricing for self-service vs white-glove shredding
  - `faxPrices`: Multi-tier pricing structure for local/long-distance/international
  - `businessCardPrices`: Quantity-based pricing matrix for different cardstock
  - `stickerPricing`: Tiered pricing based on quantity and finish type
  - `stickerData`: Stickers per sheet data for different size options
- **Special Features**:
  - **Price Calculation Logger**: Comprehensive tracking system for all calculations
  - **Secret Code System**: Easter egg functionality in sticker calculator
  - **Bulk Discount System**: Automatic percentage discounts for large quantities
  - **Service Fee Logic**: Automatic minimum order fees for small transactions