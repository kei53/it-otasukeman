"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4">
        {/* テキスト */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-400/20 text-yellow-300 text-sm font-bold px-4 py-1 rounded-full mb-4">
            お問い合わせ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            まずは無料相談から
          </h2>
          <div className="bg-white/10 rounded-2xl p-5 text-left mb-2">
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              「これ自動化できるかな？」
              <br />
              「ITに詳しい人に少し相談したい」
              <br />
              そんな段階でも大丈夫です。
              <br />
              <span className="text-yellow-300 font-bold">
                お気軽にご相談ください。
              </span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-blue-200 text-xs">
            <span>✓ 30分無料相談</span>
            <span>✓ 強引な営業なし</span>
            <span>✓ オンライン対応</span>
          </div>
        </div>

        {/* フォーム */}
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-black text-gray-800 mb-2">
              送信完了しました！
            </h3>
            <p className="text-gray-500 text-sm">
              内容を確認の上、2営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5"
          >
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                会社名
              </label>
              <input
                type="text"
                placeholder="株式会社〇〇"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="山田 太郎"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="example@company.co.jp"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                相談内容 <span className="text-red-400">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="例：毎月Excelで集計作業があり、自動化できないか相談したい。現在は手作業で2時間ほどかかっています。"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black py-4 rounded-xl text-base shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              無料相談を申し込む →
            </button>

            <p className="text-center text-gray-400 text-xs">
              ※ 強引な営業は一切行いません。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
