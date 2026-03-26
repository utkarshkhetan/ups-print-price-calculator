window.PRICING_CONFIG = {
    standardPrints: {
        paperTypes: {
            '20lb Text': { color: 0.59 },
            '28lb Text': { color: 0.64 },
            '60lb Cover': { color: 0.96 },
            '70lb Matte Cover': { color: 1.12 },
            '80lb Cover': { color: 1.24 },
            '80lb Gloss Cover': { color: 1.28 },
            '100lb Cover': { color: 1.36 },
            '100lb Gloss Cover': { color: 1.4 },
            '110lb Cover': { color: 1.72 },
            '110lb Gloss Cover': { color: 2.11 },
            '120lb Cover': { color: 1.84 },
            '120lb Gloss Cover': { color: 2.21 },
            'Kromekote Photo Paper': { color: 3.49 }
        },
        sizeMultipliers: {
            bw: {
                '8.5x11': 0.5,
                '8.5x14': 0.75,
                '11x17': 1,
                '12x18': 1.5
            },
            color: {
                '8.5x11': 1,
                '8.5x14': 1.5,
                '11x17': 2,
                '12x18': 3
            }
        },
        specialTextPricing: {
            '20lb Text': {
                color: { onePage: 1.0, flatMaxQty: 3, flatPrice: 2.0, incrementalStartQty: 4, incrementalRate: 0.59 },
                bw: { onePage: 1.0, flatMaxQty: 4, flatPrice: 2.0, incrementalStartQty: 5, incrementalRate: 0.24 }
            },
            '28lb Text': {
                color: { onePage: 1.0, flatMaxQty: 3, flatPrice: 2.0, incrementalStartQty: 4, incrementalRate: 0.64 },
                bw: { onePage: 1.0, flatMaxQty: 3, flatPrice: 2.0, incrementalStartQty: 4, incrementalRate: 0.32 }
            }
        },
        bulkDiscountTiers: [
            { minQty: 1000, percent: 50 },
            { minQty: 500, percent: 40 },
            { minQty: 250, percent: 30 },
            { minQty: 100, percent: 20 },
            { minQty: 50, percent: 10 }
        ],
        serviceFee: { threshold: 15, amount: 2.0 },
        cuttingFeePerCut: 0.1
    },
    largeFormat: {
        papersPerSqFt: {
            '20lb': 3.0,
            '24lb': 3.5,
            '28lb': 4.0,
            'Satin Photo Paper': 6.0,
            'Kromekote Glossy Photo Paper': 6.5,
            'Adhesive Paper': 7.5,
            'Scrim Vinyl Banner': 9.0,
            Canvas: 12.5,
            'Fine Art Paper': 11.0
        },
        foamCorePerSqFt: 2.0,
        serviceFee: { threshold: 30, amount: 5.0 },
        cuttingFeePerCut: 1.0
    },
    businessCards: {
        quantities: [50, 100, 250, 500, 1000],
        basePrices: {
            '14pt': [20, 30, 45, 75, 135],
            '16pt': [25, 37, 56, 92, 165]
        },
        optionMultiplier: { start: 1.25, stepDownPerOption: 0.025 },
        quantityAdjustments: {
            500: { minSubtract: 3, floorMultiplier: 0.95 },
            1000: { minSubtract: 6, floorMultiplier: 0.92 }
        }
    },
    stickers: {
        data: {
            '1x2.625-matte': { stickersPerSheet: 30, finish: 'matte' },
            '1.5x4-gloss': { stickersPerSheet: 12, finish: 'gloss' },
            '2-circle-gloss': { stickersPerSheet: 20, finish: 'gloss' },
            '2x3-gloss': { stickersPerSheet: 10, finish: 'gloss' },
            '2x4-gloss': { stickersPerSheet: 10, finish: 'gloss' },
            '2.5x6-matte': { stickersPerSheet: 4, finish: 'matte' },
            '8.5x11-gloss': { stickersPerSheet: 1, finish: 'gloss' }
        },
        pricingTiers: [
            { minQty: 100, matte: 2.0, gloss: 3.0 },
            { minQty: 25, matte: 3.0, gloss: 4.0 },
            { minQty: 10, matte: 4.0, gloss: 5.0 },
            { minQty: 1, matte: 5.0, gloss: 6.0 }
        ]
    },
    shredding: {
        tiers: {
            'self-service': [
                { range: '1 - 25', price: 0.99 },
                { range: '26 - 100', price: 0.85 },
                { range: '100+', price: 0.75 }
            ],
            'white-glove': [
                { range: '1 - 25', price: 1.29 },
                { range: '26 - 100', price: 1.15 },
                { range: '100+', price: 0.99 }
            ]
        },
        breakpoints: { tier1Max: 25, tier2Max: 100 }
    },
    mailboxes: {
        monthlyRates: {
            small: { '1-2': 30, '3-5': 26, '6-11': 25, '12+': 22 },
            medium: { '1-2': 35, '3-5': 32, '6-11': 31, '12+': 27 },
            large: { '1-2': 45, '3-5': 41, '6-11': 40, '12+': 36 }
        },
        packageTierMonthly: { basic: 0, standard: 4, premium: 8 },
        included: {
            personal: { holders: 2, additionalHolderPerMonth: 3 },
            business: { holders: 3, additionalHolderPerMonth: 2 },
            keys: 2
        },
        additionalKeyFee: 5,
        setupFee: 20,
        additionalPricingItems: [
            { label: 'One Time Setup Fee', value: '$20' },
            { label: 'Package Overage Fee', value: '$2 per package above package tier threshold' },
            { label: '2 Box Holders Included', value: '$3 per month for additional box holders' },
            { label: 'Package Storage Fee', value: '$2 per day after 5 days of storage' },
            { label: '3 Businesses Included', value: '$2 per month for additional businesses' },
            { label: '2 Keys Included', value: '$5 each for additional keys' },
            { label: '3 Week Grace Period After Renewal Deadline', value: '$25 late fee after grace period' },
            { label: 'Lock Change Fee', value: '$20 per lock change, 2 keys included' },
            { label: 'Mail Forwarding Fee', value: '$3 not including packaging/shipping' },
            { label: 'Excess Mail Fee', value: '$5 per circumstance' }
        ]
    },
    boxesPacking: {
        boxPrices: { small: 3.5, medium: 4.75, large: 6.25, xlarge: 8.5 },
        packServicePrices: { basic: 5.0, professional: 8.5, premium: 12.0 },
        fragileHandlingFee: 15.0
    },
    scanning: {
        largeFormatTiers: [
            { minQty: 100, price: 3.0 },
            { minQty: 25, price: 4.0 },
            { minQty: 10, price: 5.0 },
            { minQty: 1, price: 6.0 }
        ],
        standard: {
            adf: {
                flat: { upTo: 6, price: 3.0 },
                mid: { upTo: 10, rate: 0.5 },
                high: { rate: 0.25 }
            },
            manual: {
                firstPage: 2.0,
                mid: { upTo: 49, rate: 1.0 },
                high: { rate: 0.5 }
            }
        }
    },
    graphicDesign: {
        tiers: [
            { time: 15, price: 20 },
            { time: 30, price: 35 },
            { time: 60, price: 60 }
        ]
    },
    threeDPrints: {
        setupFee: 5.0,
        pricePerGram: 0.1
    },
    stamps: {
        stampFaceValue: 0.78,
        retailPerStamp: 1.25,
        booksOf20Price: 19.0,
        weightPricing: {
            small: [
                { range: '0-1', customer: 1.23, postage: 0.78 },
                { range: '1-2', customer: 1.72, postage: 1.07 },
                { range: '2-3', customer: 2.2, postage: 1.36 },
                { range: '3-3.5', customer: 2.68, postage: 1.65 },
                { range: '3.5-4', customer: 4.07, postage: 2.44 },
                { range: '4-5', customer: 4.53, postage: 2.72 },
                { range: '5-6', customer: 5.0, postage: 3.0 },
                { range: '6-7', customer: 5.47, postage: 3.28 },
                { range: '7-8', customer: 5.93, postage: 3.56 },
                { range: '8-9', customer: 6.4, postage: 3.84 },
                { range: '9-10', customer: 6.9, postage: 4.14 },
                { range: '10-11', customer: 7.4, postage: 4.44 },
                { range: '11-12', customer: 7.9, postage: 4.74 },
                { range: '12-13', customer: 8.4, postage: 5.04 }
            ],
            large: [
                { range: '0-1', customer: 2.72, postage: 1.63 },
                { range: '1-2', customer: 3.17, postage: 1.9 },
                { range: '2-3', customer: 3.62, postage: 2.17 },
                { range: '3-4', customer: 4.07, postage: 2.44 },
                { range: '4-5', customer: 4.53, postage: 2.72 },
                { range: '5-6', customer: 5.0, postage: 3.0 },
                { range: '6-7', customer: 5.47, postage: 3.28 },
                { range: '7-8', customer: 5.93, postage: 3.56 },
                { range: '8-9', customer: 6.4, postage: 3.84 },
                { range: '9-10', customer: 6.9, postage: 4.14 },
                { range: '10-11', customer: 7.4, postage: 4.44 },
                { range: '11-12', customer: 7.9, postage: 4.74 },
                { range: '12-13', customer: 8.4, postage: 5.04 }
            ]
        }
    },
    faxing: {
        types: {
            local: { firstPage: 2.0, additionalPage: 1.0 },
            'long-distance': { firstPage: 3.0, additionalPage: 1.5 },
            international: { firstPage: 5.0, additionalPage: 2.5 }
        },
        volumeDiscount: { startsAtPage: 11, additionalRateMultiplier: 0.5 }
    },
    laminations: {
        prices: {
            'id-card': { '3mil': 1.5, '5mil': 2.0, '7mil': 2.5 },
            '5x7': { '3mil': 2.5, '5mil': 3.0, '7mil': 3.5 },
            '8.5x11': { '3mil': 3.5, '5mil': 4.5, '7mil': 5.5 },
            '11x17': { '3mil': 6.0, '5mil': 7.0, '7mil': 8.0 }
        },
        sizeLabels: {
            'id-card': 'ID Card',
            '5x7': '5x7',
            '8.5x11': '8.5x11',
            '11x17': '11x17'
        }
    },
    passportPhotos: {
        baseByType: { us: 14.99, international: 19.99 },
        printOnlyPerPhoto: 10.0,
        digitalOnly: { uncropped: 10.0, cropped: 15.0 },
        digitalAddon: { uncropped: 5.0, cropped: 10.0 }
    },
    coilBinding: {
        pageTiers: [
            { min: 1, max: 25, price: 6 },
            { min: 26, max: 50, price: 8 },
            { min: 51, max: 75, price: 10 },
            { min: 76, max: 100, price: 12 }
        ],
        over100: { blockSize: 25, extraPerBlock: 2, baseAt100: 12 },
        coverPrice: 4,
        bulkDiscountTiers: [
            { minQty: 100, percent: 40 },
            { minQty: 50, percent: 30 },
            { minQty: 25, percent: 20 },
            { minQty: 10, percent: 10 },
            { minQty: 5, percent: 5 }
        ]
    },
    bigHeads: {
        prices: { small: 25.0, medium: 40.0, large: 65.0, xl: 95.0 },
        subtotalDiscounts: [
            { minSubtotal: 250, percent: 20 },
            { minSubtotal: 100, percent: 10 }
        ]
    },
    displayTables: {
        largeFormatScans: {
            note: 'Flat Rate Pricing',
            rows: [
                { quantity: '1+ pages', price: 6.0 },
                { quantity: '10+ pages', price: 5.0 },
                { quantity: '25+ pages', price: 4.0 },
                { quantity: '100+ pages', price: 3.0 }
            ]
        },
        graphicDesign: {
            note: 'Flat Rate Pricing',
            rows: [
                { time: '15 mins+', price: 20.0 },
                { time: '30 mins+', price: 35.0 },
                { time: '1 hour+', price: 60.0 }
            ]
        },
        threeDPrints: {
            materialLabel: 'PLA Filament',
            note: '$5 setup fee + $0.10/gram'
        },
        stickers: {
            note: 'Flat Rate Pricing',
            rows: [
                { quantity: '1+', matte: 5.0, gloss: 6.0 },
                { quantity: '10+', matte: 4.0, gloss: 5.0 },
                { quantity: '25+', matte: 3.0, gloss: 4.0 },
                { quantity: '100+', matte: 2.0, gloss: 3.0 }
            ]
        },
        faxing: {
            note: 'Cumulative Tiered Pricing',
            rows: [
                { typeHtml: 'Local<br><small>(Same Area Code)</small>', firstPage: 2.0, pages2to10: 1.0, pages11Plus: 0.5 },
                { typeHtml: 'Long Distance<br><small>(Domestic)</small>', firstPage: 3.0, pages2to10: 1.5, pages11Plus: 0.75 },
                { typeHtml: 'International<br><small>(Worldwide)</small>', firstPage: 5.0, pages2to10: 2.5, pages11Plus: 1.25 }
            ]
        },
        laminations: {
            rows: [
                { thickness: '3mil', idCard: 1.5, fiveBySeven: 2.5, letter: 3.5, tabloid: 6.0 },
                { thickness: '5mil', idCard: 2.0, fiveBySeven: 3.0, letter: 4.5, tabloid: 7.0 },
                { thickness: '7mil', idCard: 2.5, fiveBySeven: 3.5, letter: 5.5, tabloid: 8.0 }
            ]
        },
        passportPhotos: {
            rows: [
                { service: 'Passport Photos (2"x2")', priceText: '$14.99' },
                { service: 'International Sizes', priceText: '$19.99' },
                { service: 'Additional Copies/Only Printing', priceText: '+$10.00' },
                { service: 'Digital Copy (uncropped)', priceText: '+$5.00' },
                { service: 'Digital Copy (cropped)', priceText: '+$10.00' },
                { service: 'Digital Copy Only (uncropped)', priceText: '$10.00' },
                { service: 'Digital Copy Only (cropped)', priceText: '$15.00' }
            ]
        },
        coilBinding: {
            noteLines: ['Every 25 pages adds $2 per booklet', 'Covers add $4.00 per booklet'],
            bulkDiscountNote: 'Bulk discounts automatically applied to orders'
        },
        bigHeads: {
            rows: [
                { size: 'Small', dimensions: '12"×18"', price: 25.0 },
                { size: 'Medium', dimensions: '18"×24"', price: 40.0 },
                { size: 'Large', dimensions: '24"×36"', price: 65.0 },
                { size: 'Extra Large', dimensions: '36"×48"', price: 95.0 }
            ],
            bulkDiscountNote: 'Bulk discounts automatically applied based on order total'
        },
        mailboxes: {
            durationRows: [
                { label: '1-2 months', key: '1-2' },
                { label: '3-5 months', key: '3-5' },
                { label: '6-11 months', key: '6-11' },
                { label: '12+ months', key: '12+' }
            ],
            packageTierRows: [
                { tier: 'Basic', priceText: 'Free!', packages: '0 - 15' },
                { tier: 'Standard', priceText: '$4/mo', packages: '16 - 59' },
                { tier: 'Premium', priceText: '$8/mo', packages: '60 - 120' }
            ]
        }
    },
    displayLabels: {
        standardCuttingFeeTitle: 'Add cutting fee? ($0.10/cut)',
        largeFormatCuttingFeeTitle: 'Add cutting fee? ($1.00/cut)',
        foamCoreLabel: 'Foam-core/polystyrene board? (+$2.00 per sq ft)',
        individualStampSubtitle: '($1.25 each)',
        booksOf20Subtitle: '$19 ($0.95 each)'
    },
    boxesPackingTables: {
        standard: [
            { sizeHtml: '6x6x6', boxOnly: 3.99, voidFill: 1.99, basic: 3.99, fragile: 5.99, custom: 8.99 },
            { sizeHtml: '8x8x8', boxOnly: 4.99, voidFill: 2.49, basic: 4.99, fragile: 6.99, custom: 9.99 },
            { sizeHtml: '9x6.5x3 (Tuck)', boxOnly: 3.99, voidFill: 1.99, basic: 3.99, fragile: 5.99, custom: 8.99 },
            { sizeHtml: '10x10x10', boxOnly: 5.99, voidFill: 2.99, basic: 5.99, fragile: 7.99, custom: 10.99 },
            { sizeHtml: '12x9x3*', boxOnly: 4.49, voidFill: 2.49, basic: 4.49, fragile: 6.99, custom: 9.99 },
            { sizeHtml: '12x6x6', boxOnly: 4.99, voidFill: 2.99, basic: 4.99, fragile: 7.99, custom: 10.99 },
            { sizeHtml: '12.5x10x3 (Tuck)', boxOnly: 5.99, voidFill: 2.99, basic: 4.99, fragile: 6.99, custom: 9.99 },
            { sizeHtml: '12x12x6', boxOnly: 6.99, voidFill: 2.99, basic: 5.99, fragile: 7.99, custom: 10.99 },
            { sizeHtml: '12x12x12', boxOnly: 7.99, voidFill: 3.99, basic: 6.99, fragile: 8.99, custom: 12.99 },
            { sizeHtml: '14x13.5x4 (Tuck)', boxOnly: 7.99, voidFill: 3.49, basic: 5.99, fragile: 7.99, custom: 10.99 },
            { sizeHtml: '14x14x14', boxOnly: 9.99, voidFill: 4.99, basic: 7.99, fragile: 10.99, custom: 16.99 },
            { sizeHtml: '16x16x4', boxOnly: 8.49, voidFill: 3.99, basic: 5.99, fragile: 8.99, custom: 12.99 },
            { sizeHtml: '16x16x10^', boxOnly: 9.99, voidFill: 4.99, basic: 8.49, fragile: 11.49, custom: 15.99 },
            { sizeHtml: '16x16x16', boxOnly: 10.99, voidFill: 5.99, basic: 9.99, fragile: 12.99, custom: 18.99 },
            { sizeHtml: '18x12x5', boxOnly: 8.99, voidFill: 3.99, basic: 5.99, fragile: 8.99, custom: 12.99 },
            { sizeHtml: '18x12x12', boxOnly: 9.99, voidFill: 4.99, basic: 8.99, fragile: 11.99, custom: 16.99 },
            { sizeHtml: '18x18x18', boxOnly: 11.99, voidFill: 6.99, basic: 12.99, fragile: 15.99, custom: 22.49 },
            { sizeHtml: '20x12x12*', boxOnly: 10.49, voidFill: 4.99, basic: 9.99, fragile: 12.99, custom: 16.99 },
            { sizeHtml: '20x20x12', boxOnly: 12.49, voidFill: 5.99, basic: 10.99, fragile: 13.99, custom: 19.99 },
            { sizeHtml: '20x20x20 DW', boxOnly: 18.99, voidFill: 8.99, basic: 13.99, fragile: 17.99, custom: 24.99 },
            { sizeHtml: '24x12x12', boxOnly: 11.99, voidFill: 5.99, basic: 10.99, fragile: 13.99, custom: 18.99 },
            { sizeHtml: '24x16x13*', boxOnly: 12.99, voidFill: 6.99, basic: 11.99, fragile: 14.99, custom: 19.99 },
            { sizeHtml: '24x18x6^', boxOnly: 10.99, voidFill: 4.99, basic: 8.99, fragile: 12.49, custom: 16.99 },
            { sizeHtml: '24x18x18', boxOnly: 13.99, voidFill: 7.99, basic: 12.99, fragile: 16.99, custom: 23.99 },
            { sizeHtml: '24x24x16', boxOnly: 14.99, voidFill: 9.99, basic: 15.99, fragile: 20.99, custom: 27.99 },
            { sizeHtml: '24x24x24 DW', boxOnly: 24.99, voidFill: 11.99, basic: 19.99, fragile: 26.99, custom: 36.99 },
            { sizeHtml: '28x14x9', boxOnly: 11.99, voidFill: 4.99, basic: 10.99, fragile: 13.99, custom: 18.99 },
            { sizeHtml: '30x24x6^', boxOnly: 14.99, voidFill: 6.99, basic: 11.99, fragile: 15.99, custom: 20.99 },
            { sizeHtml: '30x24x12 (Suitcase Box)', boxOnly: 16.99, voidFill: 9.99, basic: 14.99, fragile: 19.99, custom: 25.99 },
            { sizeHtml: '30x30x30 DW', boxOnly: 34.99, voidFill: 15.99, basic: 34.99, fragile: 44.99, custom: 74.99 },
            { sizeHtml: '36x21x20', boxOnly: 22.99, voidFill: 12.99, basic: 21.99, fragile: 27.99, custom: 41.99 },
            { sizeHtml: '46x20x12 (Guitar Box)', boxOnly: 21.99, voidFill: 10.99, basic: 18.99, fragile: 24.99, custom: 32.99 }
        ],
        artSpecialty: [
            { sizeHtml: 'Small Art Box<br>23x4.5x27', boxOnly: 19.99, voidFill: 14.99, basic: 29.99, fragile: 35.99, custom: 43.99 },
            { sizeHtml: 'Medium Art Box<br>38x28x5.5', boxOnly: 24.99, voidFill: 15.99, basic: 31.99, fragile: 41.99, custom: 48.99 },
            { sizeHtml: 'Large Art Box<br>42x32x6', boxOnly: 33.99, voidFill: 15.99, basic: 33.99, fragile: 44.99, custom: 53.99 },
            { sizeHtml: 'X-Large Art Box<br>45x36x5.5', boxOnly: 36.99, voidFill: 16.99, basic: 38.99, fragile: 52.99, custom: 60.99 },
            { sizeHtml: 'Bicycle Box<br>54x28x8.5*', boxOnly: 48.99, voidFill: 17.99, basic: 42.3, fragile: 56.99, custom: 65.99 }
        ],
        long: [
            { sizeHtml: '24x8x8*', boxOnly: 9.99, voidFill: 6.99, basic: 12.99, fragile: 18.99, custom: 24.99 },
            { sizeHtml: '36x4x4', boxOnly: 10.99, voidFill: 7.99, basic: 12.99, fragile: 19.99, custom: 26.99 },
            { sizeHtml: '36x8x8', boxOnly: 11.99, voidFill: 8.99, basic: 13.99, fragile: 21.99, custom: 28.99 },
            { sizeHtml: '44x12x12*', boxOnly: 17.99, voidFill: 9.99, basic: 15.99, fragile: 23.99, custom: 30.99 },
            { sizeHtml: '48x6x6*<br>(Golf Club)', boxOnly: 12.99, voidFill: 8.99, basic: 14.99, fragile: 21.99, custom: 28.99 },
            { sizeHtml: '48x15x15<br>(Golf Bag Box)', boxOnly: 19.99, voidFill: 10.99, basic: 16.99, fragile: 24.99, custom: 31.99 },
            { sizeHtml: '54x6x6<br>(Golf Club)', boxOnly: 13.99, voidFill: 11.99, basic: 17.99, fragile: 26.99, custom: 33.99 },
            { sizeHtml: '87x7x4', boxOnly: 20.99, voidFill: 13.99, basic: 19.99, fragile: 27.99, custom: 35.99 }
        ],
        inserts: [
            { insertSizeHtml: '5x5.5 Small', insertOnly: 7.99, outerBoxText: '6x6x6 - $3.99', outerBoxPrice: 3.99 },
            { insertSizeHtml: '8x4.5 Medium', insertOnly: 9.99, outerBoxText: '12x6x6 - $4.99', outerBoxPrice: 4.99 },
            { insertSizeHtml: '16x12 Large', insertOnly: 12.99, outerBoxText: '16x16x4 - $8.49', outerBoxPrice: 8.49 }
        ]
    }
};
