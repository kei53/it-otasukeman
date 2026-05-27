export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* ロゴ */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
              IT
            </div>
            <div>
              <div className="text-white font-black text-base">ITお助けマン</div>
              <div className="text-gray-500 text-xs">中小企業向け 業務自動化・ITサポート</div>
            </div>
          </div>

          {/* ナビ */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
            <a href="#services" className="hover:text-white transition-colors">
              サービス
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              料金
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-600">
          © 2024 ITお助けマン. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
