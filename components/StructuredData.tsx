import { SITE_URL } from "@/lib/site";
import { faqs } from "@/lib/faq-data";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ITお助けマン",
  url: SITE_URL,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ITお助けマン",
  description:
    "姫路市を中心に、Excel・RPA・AI・Pythonを活用して毎月の面倒な定型業務やITの困りごとを解決します。社内IT担当を雇うほどではない中小企業に、ちょうどいいITサポートを提供します。",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "姫路市",
    addressRegion: "兵庫県",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.8194,
    longitude: 134.6838,
  },
  areaServed: [
    {
      "@type": "City",
      name: "姫路市",
    },
    {
      "@type": "State",
      name: "兵庫県",
    },
  ],
  availableLanguage: "ja",
  priceRange: "¥5,000〜",
  serviceType: "ITサポート・業務自動化・AI導入支援",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "ITお助けマン サービスプラン",
    itemListElement: [
      {
        "@type": "Offer",
        name: "IT顧問プラン",
        description: "社内IT相談・軽微修正・ITサポート・業務改善提案・チャット相談対応",
        price: "30000",
        priceCurrency: "JPY",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "30000",
          priceCurrency: "JPY",
          unitText: "月額",
        },
      },
      {
        "@type": "Offer",
        name: "業務自動化プラン",
        description: "RPA構築・Excel自動化・Salesforce更新自動化・定型業務自動化・保守運用対応",
        price: "50000",
        priceCurrency: "JPY",
      },
      {
        "@type": "Offer",
        name: "AI導入支援",
        description: "ChatGPT導入・AI業務改善・AI活用提案・AIフロー構築",
        price: "20000",
        priceCurrency: "JPY",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20000",
          priceCurrency: "JPY",
          unitText: "月額",
        },
      },
      {
        "@type": "Offer",
        name: "スポット対応",
        description: "単発修正・軽微開発・Excel対応・トラブル対応",
        price: "5000",
        priceCurrency: "JPY",
      },
    ],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "ITお助けマンへのご相談から導入までの流れ",
  description: "無料相談から導入・運用まで5つのステップで完結します。",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "無料相談",
      text: "まずは現在の業務内容や困りごとをヒアリングします。",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "改善提案",
      text: "自動化できる業務や、ITで効率化できるポイントを提案します。",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "お見積り",
      text: "作業内容・運用方法に応じて料金を提示します。",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "作成・導入",
      text: "RPA、Excel、AI、システムなどを構築します。",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "運用・改善",
      text: "導入後も必要に応じて保守・改善を行います。",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
