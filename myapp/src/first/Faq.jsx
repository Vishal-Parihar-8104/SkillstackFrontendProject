/* global Puter */
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronDown, Send } from "lucide-react";

// ✅ FAQ Data
const faqData = [
  { question: "Are the courses online or in-person?", answer: "Our courses are fully online, allowing you to learn from anywhere, anytime. Some live sessions may be scheduled for real-time interaction." },
  { question: "How long is the duration of each course?", answer: "Each course typically ranges between 4 to 12 weeks depending on the topic and intensity level." },
  { question: "Do you offer any certifications?", answer: "Yes, upon successful completion of a course, you'll receive a verifiable certificate." },
  { question: "Can I enroll in multiple courses at once?", answer: "Yes, you can enroll in as many courses as you like based on your comfort and time availability." },
  { question: "Do you need prior experience to join a course?", answer: "Not necessarily. Many of our beginner courses start from scratch, but we also have intermediate and advanced levels." },
  { question: "What if I miss a class?", answer: "All live classes are recorded. You can access them anytime in your dashboard." },
  { question: "How can I register for a course?", answer: "Click on the course you're interested in and hit the 'Enroll Now' button. Follow the steps for payment and confirmation." },
  { question: "Can I get a refund if I change my mind?", answer: "Yes, we offer a 7-day money-back guarantee if you’re unsatisfied with the course." },
  { question: "Can I work on live projects during the course?", answer: "Yes, most of our courses include hands-on project work to apply your knowledge in real-time scenarios." },
  { question: "Do you provide project assistance for college students?", answer: "Absolutely! We assist students with project work and help with documentation if needed." },
  { question: "Will I get practical experience with industry tools?", answer: "Yes, our platform emphasizes hands-on experience with tools like Git, VS Code, Figma, Postman, etc." },
  { question: "Do you offer free resources or workshops?", answer: "Yes, we regularly conduct free workshops and offer downloadable materials to help you learn more." },
];

// ✅ Chatbot Component
function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I'm your study assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiReady, setAiReady] = useState(false);
  const chatEndRef = useRef(null);

  // 🔹 Check AI readiness
  useEffect(() => {
    const checkReady = setInterval(() => {
      if (window.Puter?.ai?.chat?.completions?.create) {
        console.log("✅ Puter loaded:", window.Puter);
        setAiReady(true);
        clearInterval(checkReady);
      } else {
        console.log("⏳ Waiting for Puter...");
      }
    }, 500);
    return () => clearInterval(checkReady);
  }, []);

  // 🔹 Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Normalize AI response
  const normalizeAIResponse = (resp) => {
    if (!resp) return "";
    if (typeof resp === "string") return resp.trim();
    if (Array.isArray(resp)) return resp.map(normalizeAIResponse).join("\n\n");
    if (typeof resp === "object") {
      if (resp.message) return normalizeAIResponse(resp.message);
      if (resp.text) return normalizeAIResponse(resp.text);
      if (resp.content) return normalizeAIResponse(resp.content);
      if (resp.output) return normalizeAIResponse(resp.output);
      if (resp.choices?.[0]?.message?.content) return normalizeAIResponse(resp.choices[0].message.content);
      if (resp.choices?.[0]?.text) return normalizeAIResponse(resp.choices[0].text);
      return JSON.stringify(resp, null, 2);
    }
    return String(resp);
  };

  // 🔹 Send message
  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const updatedMessages = [...newMessages];

      // ✅ Check FAQ first
      const faqMatch = faqData.find((faq) =>
        faq.question.toLowerCase().includes(input.toLowerCase())
      );

      if (faqMatch) {
        updatedMessages.push({ sender: "bot", text: faqMatch.answer });
      } 
      // ✅ Use Puter AI if available
      else if (aiReady) {
        const response = await window.Puter.ai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: input }]
        });

        const reply = normalizeAIResponse(response) || "Sorry, I couldn’t understand that.";
        updatedMessages.push({ sender: "bot", text: reply });
      } 
      // ✅ AI not available
      else {
        updatedMessages.push({
          sender: "bot",
          text: "⚠️ AI is not available. Please check that Puter.js is correctly included."
        });
      }

      setMessages(updatedMessages);
    } catch (err) {
      console.error("AI Error:", err);
      setMessages([...newMessages, { sender: "bot", text: "⚠️ Error connecting to AI." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-600">
        Study Assistant Chatbot
      </h2>
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
        {/* Chat area */}
        <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-2xl max-w-xs text-sm shadow bg-gray-200 text-gray-500">
                Typing...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input area */}
        <div className="flex items-center border-t border-gray-200 bg-white p-3">
          <input
            type="text"
            className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="ml-2 p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
            onClick={sendMessage}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ✅ Main FAQ Component
function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Chatbot Section */}
      <Chatbot />

      {/* FAQ Section */}
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-xl overflow-hidden shadow-md ${
              activeIndex === index
                ? "bg-blue-100"

                : "bg-blue-50 hover:bg-blue-100"
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4 font-medium text-blue-900 text-lg"
              onClick={() => toggleFaq(index)}
            >
              {item.question}
              {activeIndex === index ? (
                <ChevronDown size={22} />
              ) : (
                <ChevronRight size={22} />
              )}
            </button>

            {activeIndex === index && (
              <div className="px-6 pb-5 text-gray-700 text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
