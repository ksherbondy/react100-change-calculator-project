/**
 * Universal Input Sanitizer
 * * Logic is driven dynamically by the HTML element's own attributes (type, min, max, pattern).
 * This ensures data integrity before it reaches the application state.
 * * @param {string|number|boolean} value - The raw value received from the input event.
 * @param {HTMLInputElement} element - The actual DOM element to extract validation constraints.
 * @returns {string|number|boolean|FileList} The "Cleaned" and type-cast value.
 */
export function sanitizeInput(value, element) {
  const { type, min, max, pattern, required } = element;
  let cleanValue = value;

  switch (type) {
    // 1. NUMERIC FAMILY (number, range)
    case 'number':
    case 'range':
      if (value === "") return "";
      cleanValue = parseFloat(value);
      if (isNaN(cleanValue)) return min || 0; 
      if (min !== "") cleanValue = Math.max(cleanValue, parseFloat(min));
      if (max !== "") cleanValue = Math.min(cleanValue, parseFloat(max));
      return cleanValue;

    // 2. TEXT & SECURITY FAMILY (text, password, search, tel, url, email)
    case 'text':
    case 'password':
    case 'search':
    case 'tel':
    case 'url':
    case 'email':
      // Strip HTML tags (XSS Protection) and trim whitespace
      cleanValue = value.replace(/<[^>]*>?/gm, '').trim();
      // If there's a Regex pattern attribute, we test against it
      if (pattern && !new RegExp(pattern).test(cleanValue)) {
         console.warn(`Input does not match pattern: ${pattern}`);
      }
      return cleanValue;

    // 3. SELECTION FAMILY (checkbox, radio, color)
    case 'checkbox':
      return element.checked; // Returns true/false
    case 'color':
      // Ensures it's a valid Hex code (e.g., #000000)
      return /^#[0-9A-F]{6}$/i.test(value) ? value : '#000000';

    // 4. TEMPORAL FAMILY (date, time, week, month, datetime-local)
    case 'date':
    case 'time':
    case 'month':
    case 'week':
    case 'datetime-local':
      // Basic check: is it a valid date string?
      return isNaN(Date.parse(value)) && value !== "" ? "" : value;

    // 5. FILE & SPECIALTY (file, image, hidden)
    case 'file':
      // For files, we usually want the file list, not the string path
      return element.files;

    default:
      return cleanValue;
  }
}