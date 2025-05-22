// This utility file encapsulates the Gemini API call logic.
export const generateAIUseCases = async (industryChallenge) => {
  const prompt = `As an AI implementation consultant for a company specializing in system administration and cloud solutions (especially Azure), suggest 3-5 practical AI use cases for a business in the following context: "${industryChallenge}". Focus on applications that enhance efficiency, automate processes, or provide a competitive advantage. Present the use cases as a numbered list with a brief explanation for each.`;
  
  let chatHistory = [];
  chatHistory.push({ role: "user", parts: [{ text: prompt }] });
  const payload = { contents: chatHistory };
  const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      return result.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Failed to generate AI use cases: Unexpected API response structure.");
    }
  } catch (err) {
    console.error("Error calling Gemini API:", err);
    throw new Error("An error occurred while connecting to the AI service.");
  }
};
