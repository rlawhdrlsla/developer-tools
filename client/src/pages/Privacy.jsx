import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: March 2025</p>

      <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">No data collection</h2>
          <p>DevKit does not collect, store, or transmit any personal data or tool inputs. All processing happens locally in your browser. We have no access to anything you type or paste into our tools.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Analytics</h2>
          <p>We collect anonymous, aggregated visit counts to understand how many people use the site. No cookies, no fingerprinting, no IP address logging tied to individuals. We cannot identify any individual user.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Advertising</h2>
          <p>We use Google AdSense to display ads. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out at <a href="https://www.google.com/settings/ads" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">google.com/settings/ads</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Third-party links</h2>
          <p>Our site may contain links to external websites. We are not responsible for the privacy practices of those sites.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>If you have questions about this privacy policy, contact us at <a href="mailto:rlawhdrl3702@gmail.com" className="text-cyan-400 hover:underline">rlawhdrl3702@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
