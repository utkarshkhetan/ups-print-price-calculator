# CLAUDE.md

Project instructions for Claude Code when working with this repository.

## Project Overview

Single-page print price calculator web app with 18 service calculators, shopping cart system, price logging, PWA support, and three hidden arcade games. Built as standalone HTML file with vanilla JavaScript, no dependencies or build process.

**File**: `index.html` (19,333 lines: HTML + embedded CSS + JavaScript)

**Tech**: Vanilla JS (ES6+), CSS3, HTML5 Canvas, Service Worker, LocalStorage

## Architecture

**18 Service Pages** (sidebar navigation):
1. Home (`homepage`) - Service dashboard
2. Standard Prints (`standardCalculator`) - Paper printing
3. Large Format (`largeFormatCalculator`) - Custom dimensions, sq ft pricing
4. Business Cards (`businessCardsCalculator`) - **⚠️ MISSING CART INTEGRATION**
5. Stickers (`stickerSheetsCalculator`) - 7 size variants
6. Stamps (`stampsCalculator`) - USPS postage
7. Mailboxes (`mailboxesCalculator`) - Monthly rental tiers
8. Boxes & Packing (`boxesPackingCalculator`) - Interactive tables, 32+ box types
9. Faxing (`faxingCalculator`) - Local/long distance/international
10. Shredding (`shreddingCalculator`) - Self-service/white-glove
11. Scanning (`scanningCalculator`) - ADF/Manual mode toggle
12. Laminations (`laminationsCalculator`) - 4 sizes × 3 thicknesses
13. Passport Photos (`passportPhotosCalculator`) - US/international
14. Coil Binding (`coilBindingCalculator`) - 6 sizes
15. Big Heads (`bigHeadsCalculator`) - Custom cutouts
16. 3D Prints (`3dPrintsCalculator`) - PLA filament by gram
17. Graphic Design (`graphicDesignCalculator`) - $75/hour billing
18. Industry Norms (`industryNorms`) - Paper weight reference

**Hidden Features**: Shopping cart (header icon), 3 arcade games (Galaga, Pacman, Asteroids via easter egg)

## Critical Pricing Logic

### Special Text Paper Pricing (8.5x11 ONLY)
**20lb Text:**
- 1 sheet: $1.00 flat rate
- 2-4 sheets: $2.00 for first 4, then incremental
- 5+ sheets: Color $0.59/page, B&W $0.295/page

**28lb Text:**
- 1 sheet: $1.00 flat rate
- 2-3 sheets: $2.00 for first 3, then incremental
- 4+ sheets: Color $0.64/page, B&W $0.32/page

### Bulk Discounts (Standard & Large Format)
- 50-99: 10% off
- 100-249: 20% off
- 250-499: 30% off
- 500-999: 40% off
- 1000+: 50% off

### Service Fees
- Standard prints: $2.00 if order < $15
- Large format: $5.00 if order < $30

### Scanning Modes (Standard)
**ADF Mode:**
- 1-6 pages: $3.00 flat
- 7-10 pages: $3.00 + $0.50/page (after 6)
- 11+ pages: $3.00 + $2.00 (pages 7-10) + $0.25/page (after 10)

**Manual Mode:**
- 1 page: $2.00
- 2-49 pages: $2.00 + $1.00/page (after 1)
- 50+ pages: $2.00 + $48.00 (pages 2-49) + $0.50/page (after 49)

Use `toggleScanMode(mode)` to switch, `calculateStandardScans()` uses `currentScanMode` variable.

### Other Pricing Notes
- **Large Format**: Per sq ft pricing ($3-$6.50), optional foam core +$2/sq ft
- **Business Cards**: Options add percentages (Glossy +10%, Color +20%, Double-sided +30%, Full bleed +15%)
- **Stickers**: Pricing by finish type and quantity tiers, `stickerData` object holds stickers-per-sheet counts
- **Stamps**: Two envelope sizes (small/large), pricing by oz weight (1-13 oz), Forever stamps $0.78
- **Mailboxes**: 2 sizes × 4 tiers, $25 setup fee, $5/holder, $5/key
- **Faxing**: Bulk pricing after page 10
- **Shredding**: Tiered by weight (1-25, 26-100, 100+), two service types
- **Laminations**: Matrix pricing (4 sizes × 3 thicknesses)

## Key Components & Patterns

### UI Structure
- **Standard Calculator Flow**: Paper → Color → Size → Quantity → Results
- **Large Format Flow**: Paper → Dimensions (inches/feet) → Results
- **Navigation**: `toggleSection(sectionId)` switches between all pages, `updateActiveNavItem()` highlights active
- **Selection Changes**: Dropdown editors allow changing paper/color/size without reset via `changeSelection(type)`
- **Result Bubbles**: Green bubbles for final prices, animated entrance

### Function Naming Patterns
- `calculate[Service]Price()` - Main calculation for each service
- `reset[Service]Calculator()` - Reset specific calculator
- `add[Service]ToCart()` - Add item to shopping cart
- `select[Option](value)` - Selection handlers
- `goBackTo[Step]()` - Navigation within calculator flows

### Critical Functions
- `calculatePrice()` - Standard prints (handles special text paper logic)
- `calculateLargeFormatPrice()` - Square footage calculations
- `resetAllCalculators()` - Global reset (called on navigation)
- `toggleScanMode(mode)` - Switch between 'adf' and 'manual' scanning
- `updateStandardScanPricingTable()` - Update table based on scan mode

## Shopping Cart System

**Status**: 17 of 18 services implemented. **Business Cards missing** `addBusinessCardToCart()` function and UI button.

**Architecture**:
- **ShoppingCartManager class** (`cartManager` instance)
- Session-only (in-memory, no localStorage)
- Cart state: `shoppingCart = []`, `cartBadgeCount = 0`
- Item structure: `{ id, calculatorType, description, details, price, addedAt }`

**Key Methods**:
- `cartManager.addToCart(type, details, price)` - Add item
- `cartManager.formatItemDescription(type, details)` - Service-specific formatting
- Each service has `add[Service]ToCart()` function (except Business Cards)

**Add to Cart Buttons**:
- Float on top-right of price bubbles
- Dynamic sizing (40-80px based on bubble height)
- Only visible when price > $0.00
- `updateAddToCartButton(buttonId, bubbleElementId, priceText)` manages visibility/sizing
- `resizeAddToCartButton(buttonId, bubbleElement)` handles dynamic resizing

**Cart Page**: `shoppingCart` section, accessible via header icon, shows line items with formatted descriptions, subtotal, and actions.

## Special Features

### Easter Eggs
- **Secret Code**: Enter "42069" in sticker quantity → unlocks export button + fireworks
- **Secret Sequence**: Click sticker buttons in pattern (1.5x4-gloss, 1x2.625-matte, repeat) → unlocks export
- **Celebration**: `launchFireworks()` creates canvas-based particle animation

### Arcade Games
Three complete games (Galaga, Pacman, Asteroids) with Canvas rendering, collision detection, localStorage leaderboards, lives systems. Accessible via unlocked export button.

### Price Calculation Logger
**PriceCalculationLogger class** tracks all calculations:
- Session-based tracking with unique IDs
- LocalStorage persistence (1000 record limit)
- Commits on navigation/page close via event handlers
- CSV export via unlocked button
- Privacy-conscious (truncated user agent, no personal data)

### PWA Support
- Service worker for offline capability
- `manifest.json` with app metadata
- Icon assets (152, 167, 180, 192, 512px PNG/SVG)
- iOS-specific meta tags

### Advanced UI Features
- **Boxes & Packing**: Interactive tables with clickable cells, multi-selection, sticky headers
- **Mailboxes**: Smooth column ↔ full-width layout animations
- **Inline Editors**: Quantity editing with auto-save
- **Recommendation System**: Industry Norms page suggests papers, one-click selection

## Development Guidelines

### File Structure
Single file: `index.html` (HTML + `<style>` + `<script>` blocks)
No build process, no dependencies, open directly in browser.

### Code Organization (within index.html)
- **HTML**: Header, sidebar (18 nav buttons), main (18 sections), hidden sections (games, cart)
- **CSS** (~4000 lines): Design system (blue color palette, spacing, shadows), animations, responsive layouts
- **JavaScript** (~15000 lines): Data structures, calculations, navigation, UI, ShoppingCartManager, PriceCalculationLogger, games, easter eggs

### Best Practices
- Follow existing naming patterns (`calculate*`, `reset*`, `add*ToCart`, `select*`)
- Test calculations with edge cases (bulk discounts, service fees, special text paper pricing)
- Mobile-first responsive design (breakpoints: 768px, 1024px)
- Document complex business logic in comments
- Group related functions together

### Common Tasks

**Add New Calculator**:
1. Add button to sidebar and homepage grid
2. Create section in main HTML
3. Implement `calculate[Service]Price()` function
4. Add `reset[Service]Calculator()` and add to `resetAllCalculators()`
5. Create `add[Service]ToCart()` function
6. Add formatter to `ShoppingCartManager.formatItemDescription()`
7. Update CLAUDE.md

**Modify Pricing**:
1. Update pricing data structure (e.g., `paperTypes`, `businessCardPrices`)
2. Verify calculation logic handles edge cases
3. Test bulk discounts and service fees
4. Update CLAUDE.md pricing section

**Fix Business Cards Cart Integration** (Outstanding Task):
1. Implement `addBusinessCardToCart()` function
2. Add cart button to business cards result bubble
3. Test with all options (Glossy, Color, Double-sided, Full bleed)

### CSS Design System Reference
- Colors: `--primary-navy`, `--primary-blue`, `--success-green`, `--gray-*` (50-900)
- Spacing: `--space-xs` to `--space-3xl` (4px to 64px)
- Shadows: `--shadow-sm` to `--shadow-2xl`
- Transitions: `--transition-fast/base/slow`
- Animations: `bubbleEntrance`, `priceUpdate`, `cartPulse`, `celebration-popup`, etc.

### Important Reminders
- **Special text paper pricing** (20lb/28lb) only applies to 8.5x11 size
- **Scan mode** (`currentScanMode` variable) affects standard scanning calculations
- **Cart integration** missing for Business Cards calculator
- **Session-only cart** - clears on page refresh
- **Easter egg unlocks** price logger export functionality
