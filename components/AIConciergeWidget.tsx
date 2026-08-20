"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const WELCOME: Message = {
  role: "assistant",
  text: "Good evening. I'm your OPV concierge guardian. How may I arrange something extraordinary for you today?",
};

const QUICK_PROMPTS = [
  "Book a private yacht",
  "Arrange private dining",
  "VIP security detail",
  "Luxury stay request",
];

export default function AIConciergeWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      const reply =
        data?.reply ||
        "Your request has been received. A dedicated guardian will be in touch within 15 minutes. Is there anything else I can assist you with?";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Your request has been received. A dedicated guardian will be in touch within 15 minutes.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open concierge chat"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-primary-container text-2xl">
          {open ? "close" : "chat"}
        </span>
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-28 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[360px] max-h-[580px] flex flex-col bg-[#0f1928] border border-outline-variant/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant/20 bg-surface-container-low">
            <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center text-[10px] font-bold text-secondary shrink-0">
              OPV
            </div>
            <div className="flex-1">
              <p className="text-on-surface font-label-caps text-xs tracking-widest">OPV CONCIERGE</p>
              <p className="text-secondary text-[10px] font-label-caps flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                Available 24 / 7
              </p>
            </div>
            <button onClick={() => setOpen(false)} className="text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 min-h-0">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center text-[8px] font-bold text-secondary shrink-0 mr-2 mt-1">O</div>
                )}
                <div
                  className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-secondary text-primary-container font-medium"
                      : "bg-surface-container-low text-on-surface border border-outline-variant/20"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-end gap-2">
                <div className="w-6 h-6 rounded-full border border-secondary flex items-center justify-center text-[8px] font-bold text-secondary shrink-0">O</div>
                <div className="bg-surface-container-low border border-outline-variant/20 px-4 py-3 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick prompts — shown only at start */}
          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className="text-[10px] font-label-caps border border-outline-variant/30 text-on-surface-variant hover:border-secondary hover:text-secondary px-3 py-1.5 transition-colors"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="border-t border-outline-variant/20 flex items-center px-4 py-3 gap-3 bg-surface-container-low">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Type your request..."
              className="flex-1 bg-transparent text-on-surface text-sm placeholder:text-on-surface-variant/40 focus:outline-none"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
              className="w-8 h-8 bg-secondary flex items-center justify-center hover:opacity-90 disabled:opacity-30 transition-opacity shrink-0"
            >
              <span className="material-symbols-outlined text-primary-container text-lg">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
