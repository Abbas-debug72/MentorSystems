import { ImageResponse } from "next/og";

export const alt =
  "Mentor Systems — Software Engineering & AI Automation in Lahore, Pakistan";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type FontSource = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 600;
  style: "normal";
};

/**
 * Load Inter from Google Fonts so the card matches the site's typography.
 * Requests the woff format (satori cannot parse woff2) and falls back to
 * satori's built-in font if the network is unavailable.
 */
async function loadFonts(): Promise<FontSource[]> {
  try {
    const fetchFont = async (weight: 400 | 600): Promise<FontSource | null> => {
      // An older browser UA makes Google Fonts serve woff instead of woff2.
      const css = await fetch(
        `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&display=swap`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
          },
        }
      ).then((res) => res.text());

      const url = css.match(
        /url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff)\)/
      )?.[1];
      if (!url) return null;

      const data = await fetch(url).then((res) => res.arrayBuffer());
      return { name: "Inter", data, weight, style: "normal" };
    };

    const fonts = await Promise.all([fetchFont(400), fetchFont(600)]);
    return fonts.filter((font): font is FontSource => font !== null);
  } catch {
    return [];
  }
}

export default async function OgImage() {
  const fonts = await loadFonts();
  const fontFamily = fonts.length ? "Inter" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0a0d14 0%, #05060a 55%)",
          color: "#f4f6fb",
          fontFamily,
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              fontSize: 30,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            M
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 600,
                letterSpacing: -0.5,
                color: "#ffffff",
              }}
            >
              Mentor Systems
            </span>
            <span style={{ fontSize: 18, color: "#9aa3b2" }}>
              Software Engineering &amp; AI Automation
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <span
            style={{
              fontSize: 66,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.08,
              color: "#ffffff",
            }}
          >
            We build software that
            <br />
            moves your business forward.
          </span>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              "Websites",
              "Web Apps",
              "Mobile Apps",
              "AI Agents",
            ].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.18)",
                  fontSize: 18,
                  color: "#c7d2fe",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 20, color: "#a5b4fc" }}>
            Based in Lahore, Pakistan · Serving clients worldwide
          </span>
          <span style={{ fontSize: 20, color: "#9aa3b2" }}>
            mentorsystems.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    }
  );
}
