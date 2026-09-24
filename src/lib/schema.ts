export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MovingCompany',
    name: 'Sridurga Packers & Movers',
    image: 'https://sridurgapackers.com/images/hero/sridurga-hero-truck.webp',
    telephone: '+91-8500144488',
    url: 'https://sridurgapackers.com',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Main Road, Near RTC Complex',
      addressLocality: 'Vizianagaram',
      addressRegion: 'Andhra Pradesh',
      postalCode: '535002',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.1067',
      longitude: '83.3956',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    areaServed: [
      'Vizianagaram',
      'Visakhapatnam',
      'Srikakulam',
      'Andhra Pradesh',
      'India',
    ],
    foundingDate: '2014',
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
