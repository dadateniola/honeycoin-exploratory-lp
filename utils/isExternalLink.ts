/**
 * Checks if a URL is an external link (pointing outside the current domain).
 *
 * @param {string} href - The URL to check
 * @returns {boolean} True if the link is external, false if internal
 *
 * @example
 * isExternalLink('/about') // false
 * isExternalLink('#section') // false
 * isExternalLink('https://example.com') // true
 * isExternalLink('http://google.com') // true
 * isExternalLink('mailto:test@example.com') // true
 * isExternalLink('tel:+1234567890') // true
 */
export const isExternalLink = (href: string): boolean => {
  // Internal links start with '/', '#', or are relative paths
  if (href.startsWith("/") || href.startsWith("#") || !href.includes(":")) {
    return false;
  }

  // External links typically start with http://, https://, mailto:, tel:, etc.
  return /^(https?:|mailto:|tel:)/i.test(href);
};
