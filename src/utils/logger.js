/**
 * Logger utility for the NoteSummarizer plugin.
 */
export const Logger = {
  /**
   * Log a message to the console.
   * @param {string} message - The message to log.
   * @param {*} [data] - Optional additional data to log.
   */
  log(message, data) {
    console.log(`[NoteSummarizer] ${message}`, data || '');
  },

  /**
   * Log an error message to the console.
   * @param {string} message - The error message to log.
   * @param {Error} [error] - Optional error object to log.
   */
  error(message, error) {
    console.error(`[NoteSummarizer] Error: ${message}`, error || '');
  }
};
