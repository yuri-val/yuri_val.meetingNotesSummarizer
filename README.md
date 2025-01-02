# ✨ Meeting Notes Summarizer

A NotePlan plugin that helps summarize meeting notes using AI, providing structured output with key information, action items, and tags.

## Features

- Automatically extracts and formats meeting information
- Supports multiple languages
- Generates structured summaries including:
  - Meeting title and date
  - Duration
  - Participants (with @mentions)
  - Key discussion points
  - Action items with assignments
  - Meeting summary
  - Relevant tags

## Installation

1. Open NotePlan
2. Go to Settings → Plugins
3. Find "Note Summarizer" and click Install

## Usage

1. Select the text you want to summarize
2. Use one of these commands:
   - `/summarize`
   - `/s`
   - `/sum`

## Configuration

In NotePlan's plugin settings, you can configure:

- **Summary Language**: Set your preferred language for summaries
  - Supports language codes (en, es, uk) or full names (english, spanish, ukrainian)
  - Defaults to your system language

## Output Format

The plugin generates a structured summary in this format:

```markdown
# YYYY-MM-DD - Meeting Title

**Date**: [[YYYY-MM-DD]]

**Duration**: Estimated meeting duration

**Participants**: @Name_Surname, @Name_Surname

## Key Points:
- Point 1
- Point 2

## Tasks:
* Task description
  - Responsible participant(s): @Name_Surname
  - Priority: #Priority
  - Tags: #tag1 #tag2
  - Due Date: [[YYYY-MM-DD]]

## Summary:
Brief meeting overview

**Tags**: #relevant #tags
```

## Requirements

- NotePlan v3.0.21 or later
- macOS 10.15.7 or later
- iOS 14 or later

## Support

For issues or feature requests, please contact the developer.
