import { Logger } from '../utils/logger.js';
import { formatPrompt } from '../templates/prompts.js';

/**
 * Class representing a Note Summarizer.
 */
export class NoteSummarizer {
  /**
   * Create a Note Summarizer.
   * @param {Object} config - Configuration options.
   * @param {string} config.language - The language for summarization.
   */
  constructor(config = {}) {
    this.config = config;
  }

  /**
   * Summarize the given text.
   * @param {string} text - The text to summarize.
   * @returns {Promise<string>} The summarized text.
   * @throws Will throw an error if summarization fails.
   */
  async summarize(text) {
    try {
      Logger.log('Starting note summarization');

      const prompt = formatPrompt(text, this.config.language);
      const result = await NotePlan.ai(prompt);

      Logger.log('Summarization completed');
      return `${result}\n\n${text}`;
    } catch (error) {
      Logger.error('Failed to summarize note', error);
      throw new Error('Failed to summarize note: ' + error.message);
    }
  }
}

/**
 * Summarize the selected text in the editor.
 * @returns {Promise<void>}
 */
export async function summarizeNote() {
  const selectedText = Editor.selectedText;
  if (!selectedText) {
    Editor.showMessage('Please select text to summarize');
    return;
  }

  let lang = DataStore.settings.summarizeLanguage;
  if (!lang || lang === 'system') {
    lang = DataStore.settings.summarizeLanguage;
  }

  const summarizer = new NoteSummarizer({ language: lang });

  try {
    const result = await summarizer.summarize(selectedText);
    Editor.replaceSelectionWithText(result);
  } catch (error) {
    Logger.error('Command execution failed', error);
    Editor.showMessage('Failed to summarize note: ' + error.message);
  }
}
