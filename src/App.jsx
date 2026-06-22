import { useState } from 'react';

const quickPrompts = [
  'What is React?',
  'Give me a study tip',
  'How do components work?',
];

const starterMessages = [
  {
    id: 1,
    text: 'Hi! I am your React helper. Ask me about components, props, or study tips.',
    sender: 'bot',
    time: 'Now',
  },
];

function App() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState('');

  function getBotReply(message) {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('react')) {
      return 'React helps you build user interfaces by breaking the screen into reusable components.';
    }

    if (lowerMessage.includes('component')) {
      return 'A component is a small reusable piece of UI. Think of it like a custom HTML tag you create.';
    }

    if (lowerMessage.includes('tip') || lowerMessage.includes('study')) {
      return 'Practice by building tiny projects. Change one thing, run it, and notice what happened.';
    }

    return `Nice question: "${message}". Try asking me about React, components, or study tips.`;
  }

  function getTime() {
    return new Intl.DateTimeFormat('en', {
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date());
  }

  function sendMessage(messageText) {
    const trimmedInput = messageText.trim();
    if (!trimmedInput) {
      return;
    }

    const time = getTime();

    setMessages((currentMessages) => [
      ...currentMessages,
      { id: crypto.randomUUID(), text: trimmedInput, sender: 'user', time },
      {
        id: crypto.randomUUID(),
        text: getBotReply(trimmedInput),
        sender: 'bot',
        time,
      },
    ]);
    setInput('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <main className="app-shell">
      <div className="app-intro">
        <p className="eyebrow">React practice project</p>
        <h1>Smart Chatbot UI</h1>
        <p>
          A clean chat interface with quick prompts, friendly replies, and a
          responsive layout.
        </p>
      </div>

      <section className="chatbot-container" aria-label="Chatbot">
        <header className="chatbot-header">
          <div>
            <p className="chatbot-title">React Helper</p>
            <p className="chatbot-status">Online and ready</p>
          </div>
          <span className="status-dot" aria-label="Online" />
        </header>

        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              className={`message-row ${
                message.sender === 'user' ? 'message-row-user' : ''
              }`}
              key={message.id}
            >
              <p
                className={`message-bubble ${
                  message.sender === 'user' ? 'message-user' : 'message-bot'
                }`}
              >
                {message.text}
              </p>
              <span className="message-time">{message.time}</span>
            </div>
          ))}
        </div>

        <div className="quick-prompts" aria-label="Quick prompts">
          {quickPrompts.map((prompt) => (
            <button
              className="quick-prompt"
              key={prompt}
              onClick={() => sendMessage(prompt)}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        <form className="chatbot-input-area" onSubmit={handleSubmit}>
          <input
            className="chatbot-input"
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a message..."
            type="text"
            value={input}
          />
          <button
            className="chatbot-send-btn"
            disabled={!input.trim()}
            type="submit"
          >
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
