export const Logger = {
  log(message, data) {
    console.log(`[NoteSummarizer] ${message}`, data || '');
  },

  error(message, error) {
    console.error(`[NoteSummarizer] Error: ${message}`, error || '');
  }
};
