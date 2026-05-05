export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Chrome Extension for Developers &amp; QA Testers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Record Browser Actions Into<br />
          <span className="text-[#58a6ff]">Reusable Automation Scripts</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Click record, interact with any website, and instantly get production-ready Playwright or Puppeteer scripts. No manual coding required.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start Recording — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⏺", title: "One-Click Record", desc: "Capture clicks, form fills, and navigation automatically" },
          { icon: "📜", title: "Script Export", desc: "Export to Playwright or Puppeteer with a single click" },
          { icon: "☁️", title: "Cloud Storage", desc: "All scripts saved and accessible from your dashboard" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited script recordings",
              "Playwright &amp; Puppeteer export",
              "Cloud script storage",
              "Script version history",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which browsers and script formats are supported?",
              a: "The Chrome extension works on any Chromium-based browser. Scripts are exported in Playwright (TypeScript/JavaScript) and Puppeteer (JavaScript) formats."
            },
            {
              q: "Do I need coding experience to use this?",
              a: "No. Just install the extension, hit record, and interact with the page. The script is generated automatically. Developers can also edit the output directly."
            },
            {
              q: "Can I cancel my subscription at any time?",
              a: "Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Browser Automation Recorder Lite. All rights reserved.
      </footer>
    </main>
  );
}
