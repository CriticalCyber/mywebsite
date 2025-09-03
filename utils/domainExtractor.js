/**
 * Extracts the hostname (domain with subdomains) from a URL string.
 *
 * @param {string} urlString The URL string to parse.
 * @returns {string|null} The hostname (e.g., "www.taskvare.com") or null if the URL is invalid.
 */
export function getDomainFromUrl(urlString) {
  try {
    const url = new URL(urlString);
    return url.hostname;
  } catch (error) {
    console.error(`Invalid URL ('${urlString}'):`, error.message);
    return null;
  }
}
