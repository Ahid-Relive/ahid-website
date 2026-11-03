import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

export const alt = "Ahid — find trusted local brands and businesses near you";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function dataUri(file: string) {
  const buffer = await readFile(path.join(process.cwd(), "public/assets", file));
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const [logo, phone] = await Promise.all([
    dataUri("ahid_logo.png"),
    dataUri("(Brands) Home.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 40,
            width: 700,
            height: 700,
            borderRadius: 700,
            background: "#d9f7f4",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 700,
            padding: "0 40px 0 72px",
          }}
        >
          <img src={logo} width={150} height={55} alt="" style={{ marginBottom: 40 }} />
          <div style={{ fontSize: 64, fontWeight: 800, color: "#0f2f2d", lineHeight: 1.1, letterSpacing: -2 }}>
            Find trusted local brands near you
          </div>
          <div style={{ fontSize: 26, color: "#5a6e6c", marginTop: 24, lineHeight: 1.35 }}>
            Verified businesses. Real posts. Free app.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignSelf: "flex-start",
              background: "#30d5c7",
              color: "#0f2f2d",
              fontSize: 26,
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: 16,
            }}
          >
            Get it on Google Play
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 90,
            top: 60,
            width: 330,
            display: "flex",
            border: "8px solid #0f2f2d",
            borderRadius: 44,
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <img src={phone} width={314} height={680} alt="" />
        </div>
      </div>
    ),
    size,
  );
}
