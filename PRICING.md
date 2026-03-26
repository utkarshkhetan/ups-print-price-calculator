# Pricing Configuration Guide

All calculator pricing is now centralized in `pricing-config.js`.

## How to edit prices

- Open `pricing-config.js`.
- Update the relevant section (for example `standardPrints`, `largeFormat`, `mailboxes`, etc.).
- Save and refresh the app.

## Main sections

- `standardPrints`: paper prices, size multipliers, special text pricing, bulk tiers, service fee, cutting fee.
- `largeFormat`: price-per-sq-ft, foam-core rate, service fee, cutting fee.
- `businessCards`: base matrix, option multipliers, quantity adjustments.
- `stickers`: stickers-per-sheet and tier pricing.
- `shredding`: tier rates and breakpoints.
- `mailboxes`: month-rate matrix, package tiers, included counts, setup/key fees, additional pricing text.
- `boxesPacking`: simple box and packing-service calculators (including fragile handling fee).
- `scanning`: standard and large-format scan pricing tiers.
- `graphicDesign`: pricing tiers by minutes.
- `threeDPrints`: setup fee and per-gram rate.
- `stamps`: face value, retail-per-stamp, and weight tables.
- `faxing`: first-page/additional-page rates and volume-discount behavior.
- `laminations`: size/thickness matrix and labels.
- `passportPhotos`: base by type and digital/print add-on pricing.
- `coilBinding`: page tiers, over-100 behavior, covers price, bulk tiers.
- `bigHeads`: per-size prices and subtotal discount tiers.
- `displayTables`: display-only labels/notes and helper rows for table rendering.
- `displayLabels`: heading/subtitle labels (cutting fee text, foam-core label, stamp subtitles).
- `boxesPackingTables`: full table source for standard/art/long/inserts matrix (all `data-price` values).

## Notes

- Keep keys and naming stable unless you also update `index.html` logic.
- Core calculations now read from the same config values that table renderers use.
- Some entries are display text only (notes/titles), while numeric pricing entries drive both display and math.
