import Image from "next/image";

const skills = ["RPA", "Excel自動化", "AI活用", "人と話すこと"];

export default function Staff() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1 rounded-full mb-4">
            作業スタッフ
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-800">
            担当者紹介
          </h2>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* 顔写真 */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile.jpg"
                alt="福岡敬祐"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 情報 */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-bold text-blue-600 mb-1">代表</p>
            <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
              福岡 敬祐
            </h3>

            {/* スキルタグ */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full border border-blue-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 一言コメント */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-blue-100 relative">
              <div className="absolute -top-3 left-6 w-4 h-4 bg-white border-l border-t border-blue-100 rotate-45" />
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                まずは無料で相談できるのでお気軽にご相談ください。
                <br />
                ヒアリングをしっかりして、その会社様や人に合わせて最適なご提案をさせていただきます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
