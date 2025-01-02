import { Logger } from '../utils/logger.js';
import { formatPrompt } from '../templates/prompts.js';

export class NoteSummarizer {
  constructor(config = {}) {
    this.config = config;
  }

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

export async function summarizeNote() {
  const selectedText = Editor.selectedText;
  if (!selectedText) {
    Editor.showMessage('Please select text to summarize');
    return;
  }

  const lang = DataStore.settings.summarizeLanguage ||
    NotePlan.environment.preferredLanguages[0];

  const summarizer = new NoteSummarizer({ language: lang });

  try {
    const result = await summarizer.summarize(selectedText);
    Editor.replaceSelectionWithText(result);
  } catch (error) {
    Logger.error('Command execution failed', error);
    Editor.showMessage('Failed to summarize note: ' + error.message);
  }
}
