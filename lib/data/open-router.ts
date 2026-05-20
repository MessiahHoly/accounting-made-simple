export const fetchOpenRouter = async () => {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      // 'HTTP-Referer': `${process.env.YOUR_SITE_URL}`, // Optional. Site URL for rankings on openrouter.ai.
      // 'X-OpenRouter-Title': `${process.env.YOUR_SITE_NAME}`, // Optional. Site title for rankings on openrouter.ai.
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemma-4-31b-it:free',
      messages: [
        {
          role: 'user',
          content: 'What is the meaning of life?',
        },
      ],
    }),
    next: { revalidate: 3600 },
  });
  const data = await response.json();
  // console.log(data);
  const completionText = data.choices[0].message.content;
  // console.log('OpenRouter response:', completionText);
};