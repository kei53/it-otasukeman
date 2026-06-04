import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | ITお助けマン",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
            IT
          </div>
          <Link href="/" className="font-bold text-lg text-blue-800 hover:text-blue-600 transition-colors">
            ITお助けマン
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 mb-8">
          プライバシーポリシー
        </h1>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-8 text-gray-700 text-sm md:text-base leading-relaxed">

          <section>
            <h2 className="text-lg font-black text-gray-800 mb-3">1. 個人情報の収集について</h2>
            <p>
              ITお助けマン（以下「当サービス」）は、お問い合わせフォームを通じて以下の個人情報を収集することがあります。
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
              <li>お名前</li>
              <li>会社名</li>
              <li>メールアドレス</li>
              <li>お問い合わせ内容</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-gray-800 mb-3">2. 個人情報の利用目的</h2>
            <p>収集した個人情報は、以下の目的のみに使用します。</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
              <li>お問い合わせへの回答・連絡</li>
              <li>サービスのご案内</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black text-gray-800 mb-3">3. 個人情報の第三者提供</h2>
            <p>
              当サービスは、法令に基づく場合を除き、収集した個人情報を第三者に提供・開示することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-gray-800 mb-3">4. 個人情報の管理</h2>
            <p>
              収集した個人情報は適切に管理し、不正アクセス・紛失・漏洩等が起きないよう適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-black text-gray-800 mb-3">5. お問い合わせ</h2>
            <p>
              個人情報の取り扱いに関するご質問・ご相談は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <p className="text-gray-400 text-xs pt-4 border-t border-gray-100">
            制定日：2026年6月2日
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors"
          >
            ← トップページに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
