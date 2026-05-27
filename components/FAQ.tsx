"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            よくある質問
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800">
            Q&A
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 flex items-start justify-between gap-3 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    Q
                  </span>
                  <span className="font-bold text-gray-800 text-sm md:text-base leading-relaxed">
                    {faq.q}
                  </span>
                </div>
                <span
                  className={`flex-shrink-0 text-blue-500 text-xl font-bold transition-transform ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5">
                  <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                    <span className="flex-shrink-0 w-7 h-7 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      A
                    </span>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
