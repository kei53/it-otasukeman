const services = [
  {
    number: "①",
    icon: "⚙️",
    title: "業務自動化サポート",
    description: "毎月発生する定型業務を自動化します。",
    items: [
      "Excel自動化",
      "CSV加工",
      "Salesforce更新",
      "RPA作成",
      "メール自動処理",
      "データ整理",
      "AI活用による効率化",
    ],
    color: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    number: "②",
    icon: "💻",
    title: "社内ITサポート",
    description: "社内IT担当のような立ち位置でサポートします。",
    items: [
      "IT相談",
      "PC設定",
      "Google Workspace",
      "アカウント管理",
      "ツール導入支援",
      "トラブル対応",
      "業務改善提案",
    ],
    color: "from-green-500 to-green-700",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    number: "③",
    icon: "🤖",
    title: "AI導入・活用支援",
    description: "AIを使った業務改善を支援します。",
    items: [
      "ChatGPT導入",
      "AI活用相談",
      "AIによる業務効率化",
      "社内向けAI活用提案",
      "AI自動化フロー構築",
    ],
    color: "from-purple-500 to-purple-700",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    number: "④",
    icon: "🔧",
    title: "スポット対応",
    description: "小さな困りごとも対応可能です。",
    items: [
      "Excel修正",
      "VBA修正",
      "Python修正",
      "エラー調査",
      "データ変換",
      "軽微な開発",
    ],
    color: "from-orange-400 to-yellow-500",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            サービス内容
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-3">
            ITお助けマンでできること
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
            Excel・RPA・AI・Pythonを活用し、幅広いIT課題に対応します
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className={`${service.bg} ${service.border} border-2 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}
            >
              {/* カードヘッダー */}
              <div className={`bg-gradient-to-r ${service.color} p-5 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <div className="text-sm opacity-80">{service.number}</div>
                    <h3 className="text-lg font-black">{service.title}</h3>
                  </div>
                </div>
                <p className="mt-2 text-sm opacity-90">{service.description}</p>
              </div>

              {/* 対応例 */}
              <div className="p-5">
                <p className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">
                  対応例
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
