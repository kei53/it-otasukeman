import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ITお助けマン | 姫路・兵庫県の中小企業向け 業務自動化・ITサポート";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
          padding: "60px",
        }}
      >
        {/* バッジ */}
        <div
          style={{
            background: "#facc15",
            color: "#111827",
            fontSize: 24,
            fontWeight: 700,
            padding: "8px 28px",
            borderRadius: 999,
            marginBottom: 36,
          }}
        >
          中小企業向け 業務自動化・ITサポート
        </div>

        {/* メインコピー */}
        <div
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          ITのお困りごと、
          <br />
          <span style={{ color: "#fde047" }}>まるっとお助け</span>します
        </div>

        {/* サブコピー */}
        <div
          style={{
            color: "#bfdbfe",
            fontSize: 28,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          姫路・兵庫県対応 ／ 初回相談30分無料
        </div>

        {/* ロゴ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#facc15",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
              fontWeight: 900,
            }}
          >
            IT
          </div>
          <span style={{ color: "white", fontSize: 36, fontWeight: 900 }}>
            ITお助けマン
          </span>
        </div>
      </div>
    ),
    size
  );
}
