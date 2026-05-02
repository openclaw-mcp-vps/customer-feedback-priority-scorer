import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackScore — Score feedback by revenue impact and effort",
  description: "Automatically score customer feedback using customer LTV, implementation effort, and request frequency to prioritize what to build next."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d3f89d82-7223-4c3c-ac3e-e5c1728d5598"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
