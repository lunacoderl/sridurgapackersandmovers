const fs = require('fs');

const services = [
  {
    id: 'service-01',
    slug: 'household-shifting',
    title: 'Household Shifting',
    shortTitle: 'Home Moving',
    tagline: 'Move your home with care, protection, and peace of mind.',
    category: 'residential',
    iconName: 'Home',
    heroImage: '/images/services/household/hero.webp',
    shortDescription: 'Carefully planned and executed household relocation with multi-layer packing, detailed inventory, and gentle handling.',
    fullDescription: 'At Sridurga Packers & Movers, we understand that your household items are your cherished possessions and memories. Our experienced Vizianagaram crew packs every room with precision, using high-density bubble wrap, edge protectors, waterproof cartons, and soft blankets to ensure zero scratches and zero damage.',
    highlights: [
      'Multi-layer protective packing for furniture and appliances',
      'Dedicated pre-move survey and transparent quotation',
      'Gentle loading and secure strapping in covered trucks',
      'Room-by-room unboxing and placement assistance'
    ],
    whatWeHandle: [
      { title: 'Heavy Furniture', description: 'Sofas, dining tables, wardrobes, and beds disassembled and protected.', icon: 'Armchair' },
      { title: 'Kitchenware & Crockery', description: 'Glassware, china, utensils, and spices packed in reinforced boxes.', icon: 'Utensils' },
      { title: 'Home Appliances', description: 'Refrigerators, washing machines, microwaves, and ACs safeguarded.', icon: 'Tv' },
      { title: 'Electronics & TVs', description: 'LED/OLED TVs in custom foam cases with delicate screen protection.', icon: 'Monitor' },
      { title: 'Clothing & Linen', description: 'Wardrobe cartons keep attire wrinkle-free and clean throughout transit.', icon: 'Shirt' },
      { title: 'Pooja & Sacred Items', description: 'Exclusive white-glove packing for mandir figurines, lamps, and sacred artifacts.', icon: 'Sparkles' }
    ],
    careDetails: {
      title: 'Why Household Handling Requires Professional Care',
      description: 'Unorganized movers cram furniture without buffering, leading to dents, scratches, and broken prized heirlooms. Our 10+ years of experience guarantees that every item is wrapped, labeled, and stowed with scientific load distribution.',
      image: '/images/services/household/care.webp',
      bulletPoints: [
        'Double-corrugated checked cartons for maximum stacking strength',
        'Five-layer furniture padding with corner resistance guards',
        'High-strength polyester tie-downs inside our dedicated covered trucks',
        'Dedicated supervisor attending your move from start to finish'
      ]
    },
    process: [
      { step: '01', title: 'Pre-Move Survey', description: 'We evaluate the volume of items and provide a fixed, transparent written estimate.' },
      { step: '02', title: 'Custom Packing', description: 'Our uniformed pros arrive with high-grade bubble wrap, tapes, and boxes.' },
      { step: '03', title: 'Inventory Coding', description: 'Each box is numbered and labeled by room to ensure everything is tracked.' },
      { step: '04', title: 'Safe Loading', description: 'Heavy items ground first, tied-down with safety belts inside our truck.' },
      { step: '05', title: 'Secure Transit', description: 'Punctual driving by experienced relocation chauffeurs across Andhra & India.' },
      { step: '06', title: 'Unloading & Setup', description: 'We unload and place furniture where you want it in your new home.' }
    ],
    benefits: [
      { title: 'Zero Damage Promise', description: 'Systematic cushioning and safety belts protect every surface.', icon: 'ShieldCheck' },
      { title: 'On-Time Arrival', description: 'We adhere to committed delivery schedules for local and intercity shifting.', icon: 'Clock' },
      { title: 'Complete Coordination', description: 'One point of contact for your entire moving day peace of mind.', icon: 'UserCheck' },
      { title: 'Transparent Rates', description: 'All-inclusive quotes with zero hidden charges or last-minute surprises.', icon: 'CreditCard' }
    ],
    gallery: [
      { src: '/images/services/household/household-01.webp', alt: 'Sridurga packing wooden dining table', caption: 'Careful cushioning for premium wooden furniture' },
      { src: '/images/services/household/household-02.webp', alt: 'Team packing kitchenware in cartons', caption: 'Boxed kitchenware with plastic wrap' },
      { src: '/images/services/household/household-03.webp', alt: 'Sofa sets wrapped in heavy stretch film', caption: 'Multi-layer wrapping against dust and damage' },
      { src: '/images/services/household/household-04.webp', alt: 'Secure loading inside our truck', caption: 'Systematic lashing and stacking inside covered vehicle' }
    ],
    faqs: [
      { question: 'How many days in advance should I book Household Shifting?', answer: 'For local moves in Vizianagaram or Vizag, 2-3 days notice is ideal. For interstate relocations, 5-7 days advance booking provides your preferred truck slot.' },
      { question: 'Do I need to pack anything myself?', answer: 'No, our professional packing crew brings all materials and handles everything from glassware to wardrobes. You only need to safekeep your valuables like gold, cash, and personal documents.' },
      { question: 'How do you protect fragile items?', answer: 'We use three-layer protection: bubble wrap, corrugated sheets, and filler pads to eliminate vibration during transit.' },
      { question: 'Do you help with unboxing at the new house?', answer: 'Yes, our crew unloads every box, places furniture in your designated rooms, and removes debris upon request.' }
    ],
    relatedServiceSlugs: ['packing-unpacking', 'local-shifting', 'vehicle-transportation'],
    seo: {
      title: 'Household Shifting Services in Vizianagaram',
      description: 'Premium Household Shifting in Vizianagaram by Sridurga Packers & Movers. Safe packing, zero damage, on-time home relocation.',
      keywords: ['Household Shifting Vizianagaram', 'Home Relocation Vizianagaram', 'Packers and Movers Vizianagaram', 'Sridurga Packers'],
      ogImage: '/images/services/household/hero.webp'
    }
  },
  {
    id: 'service-02',
    slug: 'office-relocation',
    title: 'Office Relocation',
    shortTitle: 'Office Moving',
    tagline: 'Minimize business downtime with scheduled commercial shifting.',
    category: 'commercial',
    iconName: 'Building2',
    heroImage: '/images/services/office/hero.webp',
    shortDescription: 'Swift, organized relocation for offices, corporate branches, IT servers, and banks.',
    fullDescription: 'Commercial relocation demands absolute understanding of timelines and asset confidentiality. Sridurga Packers & Movers provides weekend or after-hours office shifting across Vizianagaram, Vizag, and southern India so your business resumes without interruption.',
    highlights: [
      'Weekend and overnight execution for zero working downtime',
      'Critical IT hardware, monitor, and server rack protection',
      'Organized desk-by-desk labeling for quick reassembly',
      'Confidential document and file handling arrangements'
    ],
    whatWeHandle: [
      { title: 'IT Equipment & Servers', description: 'Anti-static bubble packing for servers, pcs, laptops, and printers.', icon: 'Cpu' },
      { title: 'Modular Office Workstations', description: 'Disassembly and reassembly of cubicles and partitions.', icon: 'Laptop' },
      { title: 'Conference & Cabinets', description: 'Boardroom tables, chairs, and executive suite protection.', icon: 'Armchair' },
      { title: 'Archives & Records', description: 'Coded cartons for legal, accounting, and company files.', icon: 'FileText' },
      { title: 'Pantry & Appliances', description: 'Coffee machines, water dispensers, and breakroom items.', icon: 'Coffee' },
      { title: 'Safes & Heavy Filers', description: 'Hydraulic trolleys for fire-proof safes and steel lockers.', icon: 'Safe' }
    ],
    careDetails: {
      title: 'Systematic Management of Company Assets',
      description: 'Losing an important document or damaging an employee system costs time and money. Sridurga tracks every office unit with dedicated lot codes so each employee finds their workspace ready at their new desk.',
      image: '/images/services/office/care.webp',
      bulletPoints: [
        'Desktop systems packed with anonymous cable tags',
        'Anti-static foam for server racks and networking switches',
        'Overnight shifting so your team logs in on Monday morning',
        'Dedicated corporate move supervisor onsite'
      ]
    },
    process: [
      { step: '01', title: 'Site Inspection', description: 'Mapping out workstations, IT, and space planning.' },
      { step: '02', title: 'Move Phasing', description: 'Scheduling shifts to prevent business hours disruption.' },
      { step: '03', title: 'IT & File Packing', description: 'Systematic labeling of each workstation and cables.' },
      { step: '04', title: 'Furniture Handling', description: 'Disassembling partitions, tables, and conference assets.' },
      { step: '05', title: 'Secure Fleet Transit', description: 'Dedicated covered logistics vehicles with GPS monitoring.' },
      { step: '06', title: 'Reassembly & Setup', description: 'Setting up desks and placing systems ready for use.' }
    ],
    benefits: [
      { title: 'Zero Downtime', description: 'Weekend and night shifts so your clients never feel a pause.', icon: 'Clock' },
      { title: 'IT Safety', description: 'Anti-static packing for all servers and computers.', icon: 'Shield' },
      { title: 'Organized Inventory', description: 'Every box tagged by department and employee ID along the way.', icon: 'ListCheck' },
      { title: 'GST-Compliant Billing', description: 'Proper corporate invoices for easy business accounting.', icon: 'Receipt' }
    ],
    gallery: [
      { src: '/images/services/office/office-01.webp', alt: 'Office IT systems wrapped safely', caption: 'Corporate IT relocation with custom boxing' },
      { src: '/images/services/office/office-02.webp', alt: 'Modular office desk disassembly', caption: 'Workstation disassembly by experienced team' },
      { src: '/images/services/office/office-03.webp', alt: 'Safe office cabinet loading', caption: 'High-density steel filer handling' },
      { src: '/images/services/office/office-04.webp', alt: 'Setting up new conference room', caption: 'Onsite reassembly at new company premises' }
    ],
    faqs: [
      { question: 'Can you shift our office during the weekend?', answer: 'Yes, most office shifts are executed Friday evening through Sunday night so your team begins working on Monday morning with zero interruption.' },
      { question: 'How do you secure sensitive company documents?', answer: 'We use tamper-evident sealed cartons and provide a signed chain-of-custody manifest for all files and financial records.' },
      { question: 'Do you relocate IT servers and racks?', answer: 'Absolutely. Our specialized tech-packing uses static-dissipative bubble wrap and vibration-dampening pads for network servers.' }
    ],
    relatedServiceSlugs: ['household-shifting', 'packing-unpacking', 'local-shifting'],
    seo: {
      title: 'Office Relocation Services in Vizianagaram',
      description: 'Corporate and Office Relocation in Vizianagaram with zero downtime by Sridurga Packers & Movers.',
      keywords: ['Office Relocation Vizianagaram', 'Corporate Shifting', 'IT Equipment Movers', 'Sridurga Packers'],
      ogImage: '/images/services/office/hero.webp'
    }
  },
