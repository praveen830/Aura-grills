/**
 * Google Ads Conversion Tracking Helper
 * Google Tag ID: AW-17577365128
 * Contact Conversion ID: AW-17577365128/8IR5CP_Oq64dEIidxbIB (Call & WhatsApp Clicks)
 * Submit Lead Form Conversion ID: AW-17577365128/L7frCKKGr64dEIidxbIB (Quotation / Survey Form Submissions)
 */

/**
 * Fires the Google Ads conversion event for Contact clicks (Call & WhatsApp).
 * If called without a url parameter, it notifies Google Ads of the conversion
 * without overriding or delaying native browser actions (such as tel: links
 * opening the phone dialer, or WhatsApp links opening in a new tab).
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 */
export function gtag_report_conversion(url) {
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    return window.gtag_report_conversion(url);
  }
}

/**
 * Fires the Google Ads conversion event for Quotation / Book Site Survey Form submissions.
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 */
export function gtag_report_lead_form(url) {
  if (typeof window !== 'undefined' && typeof window.gtag_report_lead_form === 'function') {
    return window.gtag_report_lead_form(url);
  }
}

export const reportConversion = gtag_report_conversion;
export const reportLeadForm = gtag_report_lead_form;
export default gtag_report_conversion;
