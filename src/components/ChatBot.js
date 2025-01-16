import React, { useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export function Chatbox({ moodEntries }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");


  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_GENERATIVE_AI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchResponse = async (input) => {
    try {
      const moodContext =
        moodEntries.length > 0
          ? `The user's last mood was ${moodEntries[moodEntries.length - 1].mood}.`
          : "";

      // Construct the prompt
      const prompt = `${moodContext} User said: "${input}". Respond empathetically.`;

      // Call the Gemini API
      const result = await model.generateContent(prompt);

      // Extract and return the response
      return result.response.text();
    } catch (error) {
      console.error("Error fetching response from Gemini:", error);
      // Handle quota limit exceeded error
      if (error.response && error.response.status === 429) {
        return "Quota exceeded. Please try again later.";
      }
      return "Sorry, I couldn't process your request. Please try again.";
    }
  };

  const handleChatOpen = async () => {
    setIsOpen(true);

    if (messages.length === 0) {
      // Construct the initial prompt
      const initialPrompt =
        moodEntries.length > 0
          ? `The user's recent mood history is as follows: ${moodEntries
              .slice(-5)
              .map((entry) => `${entry.mood} (${entry.note})`)
              .join(", ")}. Start the conversation by acknowledging the user's mood.`
          : "The user has no mood history. Ask them how they are feeling today.";

      // Fetch the bot's initial response
      const botReply = await fetchResponse(initialPrompt);

      // Add the bot's initial message to the chat
      setMessages([{ sender: "bot", text: botReply }]);
    }
  };

  const handleChatClose = () => {
    setIsOpen(false);
    setMessages([]);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user's message to the chat
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    // Fetch bot response
    const userPrompt = `The user said: "${userInput}". Respond empathetically.`;
    const botReply = await fetchResponse(userPrompt);
    setMessages([...newMessages, { sender: "bot", text: botReply }]);
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={handleChatOpen}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        💬 Chat
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white dark:bg-gray-800 w-80 h-96 shadow-lg rounded-lg flex flex-col">
          {/* Chat Header */}
          <div className="p-4 bg-blue-500 text-white font-bold flex justify-between items-center">
            <span>Talk with Moodie</span>
            <button onClick={handleChatClose} className="text-white">
              ✖
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-100 self-end"
                    : "bg-gray-200 self-start"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-4 border-t flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
