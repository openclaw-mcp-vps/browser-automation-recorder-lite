import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browser Automation Recorder Lite",
  description: "Record browser actions into reusable Playwright and Puppeteer scripts. The easiest way for developers and QA testers to automate repetitive browser tasks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c91ac7a-23ca-4ddb-8aef-bd85ec713ca6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
