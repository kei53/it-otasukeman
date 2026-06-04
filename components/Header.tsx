"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            IT
          </div>
          <span className="font-bold text-lg text-blue-800">ITお助けマン</span>
        </div>

        {/* PC用ナビ */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-blue-700 transition-colors">サービス</a>
          <a href="#pricing" className="hover:text-blue-700 transition-colors">料金</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">お問い合わせ</a>
          <a
            href="https://www.instagram.com/it_otasukeman/?hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-pink-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span>Instagram</span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-sm"
          >
            無料相談する
          </a>

          {/* ハンバーガーボタン（スマホのみ） */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="メニュー"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* スマホ用ドロップダウン */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm font-medium text-gray-700 hover:text-blue-700 border-b border-gray-50 transition-colors"
          >
            サービス
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm font-medium text-gray-700 hover:text-blue-700 border-b border-gray-50 transition-colors"
          >
            料金
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="py-3 text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      )}
    </header>
  );
}
