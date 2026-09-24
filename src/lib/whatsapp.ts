export interface MoveEnquiryData {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  serviceType: string;
  moveDate?: string;
  message?: string;
}

export const OFFICIAL_PHONE = '085001 44488';
export const OFFICIAL_PHONE_CLEAN = '918500144488';
export const OFFICIAL_WHATSAPP_NUMBER = '918500144488';

export function generateWhatsAppLink(data?: Partial<MoveEnquiryData>): string {
  if (!data || !data.name) {
    const defaultText = 'Hello Sridurga Packers & Movers, I would like to enquire about relocation services in Vizianagaram.';
    return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
  }

  const lines: string[] = [
    '*NEW RELOCATION ENQUIRY*',
    '*Sridurga Packers & Movers*',
    '--------------------------',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone ? data.phone.trim() : 'Not provided'}`,
    `Service: ${data.serviceType || 'Household Shifting'}`,
    `Moving From: ${data.movingFrom ? data.movingFrom.trim() : 'Vizianagaram'}`,
    `Moving To: ${data.movingTo ? data.movingTo.trim() : 'TBD'}`,
  ];

  if (data.moveDate) {
    lines.push(`Preferred Date: ${data.moveDate}`);
  }

  if (data.message) {
    lines.push(`Additional Notes: ${data.message.trim()}`);
  }

  lines.push('--------------------------');
  lines.push('Sent via official website enquiry');

  return `https://wa.me/${OFFICIAL_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}
