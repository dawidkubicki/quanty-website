/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";

export const runtime = "edge";
export const alt = "Quanty - AI-Powered Fundamental Analysis Platform";
export const contentType = "image/png";

export default async function OG() {
  // Font
  const interSemiBold = await fetch(
    new URL("./fonts/Inter-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #032E46 25%, #ffffff 50%, #23B684 75%)",
        }}
      >
        <img
          src={new URL(
            "../public/apple-touch-icon.png",
            import.meta.url
          ).toString()}
          alt="Quanty Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            background:
              "linear-gradient(to bottom right, #032E46 21.66%, #23B684 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Quanty - AI-Powered Fundamental Analysis Platform
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
        },
      ],
    }
  );
}
