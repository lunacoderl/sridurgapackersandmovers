const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/data/services.json', 'utf8'));

const header = "import { ServiceItem } from '@/types/service';\n\nexport const services: ServiceItem[] = " + JSON.stringify(data, null, 2) + ";\n\n";
const footer = "export function getServiceBySlug(slug: string): ServiceItem | undefined {\n  return services.find((s) => s.slug === slug);\n}\n\nexport function getAllServiceSlugs(): string[] {\n  return services.map((s) => s.slug);\}\n";

fs.writeFileSync('src/data/services.ts', header + footer);
console.log('Compiled src/data/services.ts successfully!');