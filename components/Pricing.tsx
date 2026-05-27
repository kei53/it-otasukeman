const plans = [
  {
    name: "無料相談",
    price: "30分 無料",
    priceNote: "",
    highlight: false,
    icon: "🎁",
    items: [
      "業務課題ヒアリング",
      "自動化相談",
      "AI活用相談",
      "IT改善提案",
    ],
    cta: "無料相談する",
    ctaHref: "#contact",
    badge: null,
  },
  {
    name: "IT顧問プラン",
    price: "月額 3万円〜",
    priceNote: "",
    highlight: true,
    icon: "🏢",
    items: [
      "社内IT相談",
      "軽微修正",
      "ITサポート",
      "業務改善提案",
      "チャット相談対応",
    ],
    cta: "相談する",
    ctaHref: "#contact",
    badge: "人気",
  },
  {
    name: "業務自動化プラン",
    price: "初期費用 5万円〜",
    priceNote: "月額保守 1万円〜",
    highlight: false,
    icon: "⚙️",
    items: [
      "RPA構築",
      "Excel自動化",
      "Salesforce更新自動化",
      "定型業務自動化",
      "保守・運用対応",
    ],
    cta: "相談する",
    ctaHref: "#contact",
    badge: null,
  },
  {
    name: "AI導入支援",
    price: "月額 2万円〜",
    priceNote: "個別見積も可",
    highlight: false,
    icon: "🤖",
    items: [
      "ChatGPT導入",
      "AI業務改善",
      "AI活用提案",
      "AIフロー構築",
    ],
    cta: "相談する",
    ctaHref: "#contact",
    badge: null,
  },
  {
    name: "スポット対応",
    price: "5,000円〜",
    priceNote: "単発・都度払い",
    highlight: false,
    icon: "🔧",
    items: [
      "単発修正",
      "軽微開発",
      "Excel対応",
      "トラブル対応",
    ],
    cta: "相談する",
    ctaHref: "#contact",
    badge: null,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            料金プラン
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
            用途に合わせて選べる
            <br className="md:hidden" />
            プランをご用意
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            まずは無料相談から。お気軽にどうぞ。
          </p>
        </div>

        {/* 料金カードグリッド */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col transition-shadow hover:shadow-xl ${
                plan.highlight
                  ? "bg-blue-700 text-white shadow-xl ring-4 ring-yellow-400"
                  : "bg-white text-gray-800 shadow-md border border-gray-100"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-black px-4 py-1 rounded-full shadow">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* アイコン & プラン名 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{plan.icon}</span>
                <h3
                  className={`font-black text-lg ${
                    plan.highlight ? "text-white" : "text-gray-800"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              {/* 価格 */}
              <div className="mb-5">
                <div
                  className={`text-2xl font-black ${
                    plan.highlight ? "text-yellow-300" : "text-blue-700"
                  }`}
                >
                  {plan.price}
                </div>
                {plan.priceNote && (
                  <div
                    className={`text-xs mt-1 ${
                      plan.highlight ? "text-blue-200" : "text-gray-400"
                    }`}
                  >
                    {plan.priceNote}
                  </div>
                )}
              </div>

              {/* 内容 */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-sm ${
                      plan.highlight ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    <span
                      className={`${
                        plan.highlight ? "text-yellow-400" : "text-blue-500"
                      } flex-shrink-0`}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`block text-center font-bold py-3 rounded-xl transition-all hover:scale-105 text-sm ${
                  plan.highlight
                    ? "bg-yellow-400 hover:bg-yellow-300 text-gray-900"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          ※ 料金はすべて税別表示です。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
