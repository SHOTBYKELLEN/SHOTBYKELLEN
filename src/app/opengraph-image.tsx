import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050505",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          ShotByKellen
        </div>
      </div>
    ),
    { ...size }
  );
}
