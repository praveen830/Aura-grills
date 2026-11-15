/**
 * Google Ads Conversion Tracking Helper
 * Google Tag ID: AW-17577365128
 * Contact Conversion ID: AW-17577365128/8IR5CP_Oq64dEIidxbIB (Call & WhatsApp Clicks)
 * Submit Lead Form Conversion ID: AW-17577365128/L7frCKKGr64dEIidxbIB (Quotation / Survey Form Submissions)
 */

let lastContactCall = 0;
let lastLeadCall = 0;

/**
 * Fires the Google Ads conversion event for Contact clicks (Call & WhatsApp).
 * Debounced to guarantee execution fires ONLY ONCE per click.
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 */
export function gtag_report_conversion(url) {
  const now = Date.now();
  if (now - lastContactCall < 1000) {
    return false;
  }
  lastContactCall = now;

  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    return window.gtag_report_conversion(url);
  }
}

/**
 * Fires the Google Ads conversion event for Quotation / Book Site Survey Form submissions.
 * Debounced to guarantee execution fires ONLY ONCE per submit.
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 * @param {Object} [userData] - Optional customer data ({ phone, name }) for Google Ads Enhanced Conversions
 */
export function gtag_report_lead_form(url, userData) {
  const now = Date.now();
  if (now - lastLeadCall < 1500) {
    return false;
  }
  lastLeadCall = now;

  if (typeof window !== 'undefined' && typeof window.gtag_report_lead_form === 'function') {
    return window.gtag_report_lead_form(url, userData);
  }
}

export const reportConversion = gtag_report_conversion;
export const reportLeadForm = gtag_report_lead_form;
export default gtag_report_conversion;
