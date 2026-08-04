import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg,#000000,#1a1a1a,#7f1d1d)",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 82,
            fontWeight: 800,
          }}
        >
          ArtAle
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 38,
            color: "#ef4444",
          }}
        >
          International Circus Duo
        </div>

        <div
          style={{
            marginTop: 50,
            fontSize: 28,
          }}
        >
          Hand to Hand • Aerial • Shows • Events
        </div>

        <div
          style={{
            marginTop: 70,
            fontSize: 24,
            opacity: 0.7,
          }}
        >
          duoartale.com
        </div>
      </div>
    ),
    size
  );
}