export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* ロゴ */}
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            IT
          </div>
          <span className="font-bold text-lg text-blue-800">ITお助けマン</span>
        </div>
        <a
          href="#contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-2 rounded-full text-sm transition-colors shadow-sm"
        >
          無料相談する
        </a>
      </div>
    </header>
  );
}
