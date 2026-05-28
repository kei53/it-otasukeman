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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
