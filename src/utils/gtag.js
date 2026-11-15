/**
 * Google Ads Conversion Tracking Helper
 * Google Tag ID: AW-17577365128
 * Contact Conversion ID: AW-17577365128/8IR5CP_Oq64dEIidxbIB (Call & WhatsApp Clicks)
 * Submit Lead Form Conversion ID: AW-17577365128/L7frCKKGr64dEIidxbIB (Quotation / Survey Form Submissions)
 */

/**
 * Fires the Google Ads conversion event for Contact clicks (Call & WhatsApp).
 * Timestamp-locked to guarantee execution fires ONLY ONCE per 2000ms window,
 * even if multiple click handlers, touch events, or delegated listeners trigger.
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 */
export function gtag_report_conversion(url) {
  if (typeof window !== 'undefined') {
    if (window.__lastConv && Date.now() - window.__lastConv < 2000) {
      return false;
    }
    window.__lastConv = Date.now();
  }

  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    return window.gtag_report_conversion(url);
  }
}

/**
 * Fires the Google Ads conversion event for Quotation / Book Site Survey Form submissions.
 * Timestamp-locked to guarantee execution fires ONLY ONCE per 2000ms window.
 *
 * @param {string} [url] - Optional URL to redirect to after reporting
 * @param {Object} [userData] - Optional customer data ({ phone, name }) for Google Ads Enhanced Conversions
 */
export function gtag_report_lead_form(url, userData) {
  if (typeof window !== 'undefined') {
    if (window.__lastLeadConv && Date.now() - window.__lastLeadConv < 2000) {
      return false;
    }
    window.__lastLeadConv = Date.now();
  }

  if (typeof window !== 'undefined' && typeof window.gtag_report_lead_form === 'function') {
    return window.gtag_report_lead_form(url, userData);
  }
}

export const reportConversion = gtag_report_conversion;
export const reportLeadForm = gtag_report_lead_form;
export default gtag_report_conversion;

