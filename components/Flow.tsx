const steps = [
  {
    step: "STEP 1",
    title: "無料相談",
    desc: "まずは現在の業務内容や困りごとをヒアリングします。",
    icon: "💬",
    color: "bg-blue-500",
  },
  {
    step: "STEP 2",
    title: "改善提案",
    desc: "自動化できる業務や、ITで効率化できるポイントを提案します。",
    icon: "💡",
    color: "bg-yellow-400",
  },
  {
    step: "STEP 3",
    title: "お見積り",
    desc: "作業内容・運用方法に応じて料金を提示します。",
    icon: "📝",
    color: "bg-green-500",
  },
  {
    step: "STEP 4",
    title: "作成・導入",
    desc: "RPA、Excel、AI、システムなどを構築します。",
    icon: "🔨",
    color: "bg-purple-500",
  },
  {
    step: "STEP 5",
    title: "運用・改善",
    desc: "導入後も必要に応じて保守・改善を行います。",
    icon: "🔄",
    color: "bg-orange-500",
  },
];

export default function Flow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            導入の流れ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800">
            ご相談から導入まで
            <br className="md:hidden" />
            かんたん5ステップ
          </h2>
        </div>

        {/* ステップリスト */}
        <div className="relative">
          {/* 縦線 (PC) */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gray-200 -translate-x-1/2" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 md:gap-6 items-start">
                {/* アイコン */}
                <div
                  className={`${step.color} w-14 h-14 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center text-white flex-shrink-0 shadow-lg z-10`}
                >
                  <span className="text-lg">{step.icon}</span>
                </div>

                {/* コンテンツ */}
                <div className="bg-gray-50 rounded-2xl p-4 md:p-5 flex-1 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="text-xs font-bold text-gray-400 mb-1">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-gray-800 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full text-base shadow-lg transition-all hover:scale-105"
          >
            まずは無料相談する →
          </a>
        </div>
      </div>
    </section>
  );
}
