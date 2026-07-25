export const createEmailPromptTemplate = ({ recipient, subject, purpose }) => {
  return `
Write a professional email.

Recipient: ${recipient}
Subject: ${subject}
Purpose: ${purpose}

Write a clear and polite email.
`;
};
