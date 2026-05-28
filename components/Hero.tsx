export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center overflow-hidden pt-16">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-10 w-56 h-56 bg-blue-400/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24 text-center">
        {/* バッジ */}
        <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-md">
          中小企業向け 業務自動化・ITサポート
        </div>

        {/* メインコピー */}
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
          ITのお困りごと、
          <br />
          <span className="text-yellow-300">まるっとお助け</span>します
        </h1>

        {/* 説明文 */}
        <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          Excel・RPA・AI・Pythonを活用して、毎月の面倒な定型業務やITの困りごとを解決します。
        </p>
        <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          社内IT担当を雇うほどではない会社に、ちょうどいいITサポートを提供します。
        </p>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            無料相談する →
          </a>
          <a
            href="#services"
            className="bg-white/15 hover:bg-white/25 text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 transition-all hover:scale-105"
          >
            サービスを見る
          </a>
        </div>

        {/* 信頼バッジ */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">✓</span>
            初回相談30分無料
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">✓</span>
            IT知識不要
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">✓</span>
            オンライン対応
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-yellow-400 text-lg">✓</span>
            姫路・兵庫県対応
          </div>
        </div>
      </div>

      {/* 波形装飾 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-white">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
