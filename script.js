async function summarizeNote() {
  const selectedText = Editor.selectedText;
  const lang = DataStore.settings.summarizeLanguage || NotePlan.environment.preferredLanguages.first;

  const prompt = `
  Analyze the following meeting note and extract the required information:

0. **Title**: Provide a title for the meeting. Should start with date and then the topic. i.e. 2021-12-31 - Weekly Team Meeting
1. **Date**: Extract the date of the meeting from the title in format [[2021-12-31]].
1. **Duration**: Estimate the duration of the meeting based on the transcript or any explicit mentions of time.
2. **Participants**: Identify all participants mentioned in the meeting. Convert names in the format <Name Surname> to <@Name_Surname>.
3. **Key Points**: Summarize the key discussion points in a concise list.
4. **Tasks**: Extract actionable tasks from the meeting in the following format:
  * Fix issues with component hour tracking [should start with asterisk]
    - Responsible participant(s): @Name_Surname [one or more]
    - Priority: #High [or #Medium, #Low]
    - Tags: #finance #documentation [one or more]
    - Due Date: [[2021-12-31]] [if applicable]
5. **Summary**: Provide a short summary of the meeting in 2-3 sentences.
6. **Tags**: Generate relevant tags for this meeting, including topics discussed or areas of focus. You can use nested tags for better organization. [i.e. #project #marketing #team #timeline #campaign #finance/balance #documentation/notes]


IMPORTANT:
- use markdown syntax for formatting
- make sure to include all the required information
- use emojis to make the summary more engaging
- respond in "${lang}" language/code for better results

EXAMPLE:
---
# 2021-12-31 - Weekly Team Meeting

**Date**: [[2021-12-31]]

**Duration**: 1 hour / about 20 minutes / 5 and a half hours

**Participants**: @Alice_Smith, @Bob_Jones, @Charlie_Brown
## **Key Points**:
  - Discussed the new project timeline
  - Reviewed the marketing campaign
  - Agreed on the next steps for the team
## **Tasks**:
  * Fix issues with component hour tracking
    - Responsible participant(s): @Alice_Smith
    - Priority: #High
    - Tags: #finance #documentation
    - Due Date: [[2021-12-31]]

  * Prepare the presentation for the client meeting
    - Responsible participant(s): @Bob_Jones
    - Priority: #Medium
    - Tags: #marketing #presentation
    - Due Date: [[2021-12-31]]
## **Summary**: 
The team discussed the project timeline and marketing campaign, agreeing on the next steps. Tasks assigned for tracking hours and preparing the client presentation.

**Tags**: #project #marketing #team #timeline #campaign 
---

-------------------------
TEXT:
${selectedText}
`

  console.log(prompt);

  const result = await NotePlan.ai(prompt);
  const note = `${result}\n\n${selectedText}`;


  Editor.replaceSelectionWithText(note);
}
