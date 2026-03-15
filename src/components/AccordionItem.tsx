"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-secondary pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v12M6 12h12"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
