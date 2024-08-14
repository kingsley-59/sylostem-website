

/**
 * Accepted Formats:
 * International format: +2348123456789
 * Local format with area code: 08123456789
 * Other variations with separators: 234-812-345-6789, (234) 812-345-6789, 234.812.345.6789, 234 812 345 6789
 * Standard US format: 123-456-7890, (123) 456-7890
 * @param phone 
 * @returns 
 */
export function isValidPhoneNumber(phone: string) {
    return /^(\+?\d{1,3})?[-.\s]?(\d{3})?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(phone) ||
        /^\d{11}$/.test(phone);
}