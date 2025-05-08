import React, { useState, useEffect } from 'react';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hi, I am your Truck Assistant. Type 'help' to see what I can do or 'quit' to exit." },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const trucks = [
    { name: "Mercedes Actros 2020", price: "$85,000", status: "Available" },
    { name: "Volvo FH 2021", price: "$92,000", status: "Available" },
    { name: "Scania R500 2019", price: "$78,000", status: "Sold Out" },
    { name: "MAN TGX 2022", price: "$88,000", status: "Available" }
  ];

  const pairs = [
    [/(hi|hello|hey)/i, ["Hi! How can I assist with your truck needs today?"]],
    [/how are you\?/i, ["I'm here and ready to help you import trucks!"]],
    [/am good/i, ["That's great to hear. Are you looking for a truck?"]],
    [/name/i, ["I'm called TruckBot, your truck import assistant."]],
    [/help/i, [
      "You can ask things like:\n- 'list trucks'\n- 'import process'\n- 'payment options'\n- 'contact info'"
    ]],
    [/list.*trucks/i, [trucks.map(t => `${t.name} - ${t.price} (${t.status})`).join('\n')]],
    [/brands|types/i, ["We deal with Mercedes, Volvo, Scania, MAN, and DAF trucks."]],
    [/import process/i, [
      "Choose a truck, make payment, we handle documents, and ship to you. Shipping takes 4–6 weeks."
    ]],
    [/payment/i, [
      "We accept bank transfers, mobile money, and use escrow services for security."
    ]],
    [/shipping time/i, ["Shipping to East Africa typically takes 4–6 weeks."]],
    [/contact/i, ["Call us at +254-700-000-000 or email: trucks@example.com"]],
    [/quit/i, ["Goodbye! Come back anytime for truck import assistance."]],
    [/(.*)/, ["Hmm, I didn't get that. You can type 'help' to see options."]],
  ];

  const getBotResponse = (input) => {
    for (let [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, something went wrong.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotResponse(input);
      const botMessage = { sender: 'bot', text: botText };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800); // simulate typing delay
  };

  return (
    <div className="minee">
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-body">
            <h5 className="card-title">Truck Import Assistant</h5>
            <div className="border p-2 mb-3" style={{ height: '300px', overflowY: 'auto' }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`d-flex mb-2 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`p-2 rounded ${
                      msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light text-dark'
                    }`}
                    style={{ maxWidth: '75%' }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="d-flex justify-content-start">
                  <div className="p-2 rounded bg-light text-dark" style={{ maxWidth: '75%' }}>
                    Typing...
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about trucks..."
              />
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBot;
