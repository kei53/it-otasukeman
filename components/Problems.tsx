const problems = [
  {
    icon: "📊",
    text: "毎月同じExcel作業に時間がかかっている",
  },
  {
    icon: "🔄",
    text: "Salesforceやシステムへのデータ更新が面倒",
  },
  {
    icon: "🤷",
    text: "社内にITに詳しい人がいない",
  },
  {
    icon: "🤖",
    text: "RPAやAIを使いたいけど何から始めればいいか分からない",
  },
  {
    icon: "💬",
    text: "小さなIT相談を気軽にできる相手がほしい",
  },
];

export default function Problems() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            こんなお悩みありませんか？
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800">
            あなたの会社にも
            <br className="md:hidden" />
            当てはまりませんか？
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 flex items-start gap-3 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl flex-shrink-0">{problem.icon}</span>
              <p className="text-gray-700 text-sm md:text-base font-medium leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-700 text-white rounded-2xl px-8 py-6 max-w-lg">
            <p className="text-lg md:text-xl font-bold leading-relaxed">
              そのお悩み、
              <br />
              <span className="text-yellow-300 text-2xl">ITお助けマン</span>が解決します！
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
