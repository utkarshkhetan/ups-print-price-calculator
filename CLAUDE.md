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

## Key Components

### User Interface Structure
- **Standard Calculator Sections**: `paperSelection`, `colorSection`, `sizeSection`, `quantitySection`, `resultsSection`
- **Large Format Sections**: `lfPaperSelection`, `lfDimensionSection`, `lfResultsSection`
- **Navigation**: Modal-style workflow with back buttons and section switching
- **Toggle Button**: Header button to switch between standard and large format modes

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