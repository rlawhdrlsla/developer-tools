import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-gray-500 text-sm mb-10">Last updated: March 2025</p>

      <div className="space-y-8 text-gray-400 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Use of service</h2>
          <p>DevKit provides free online developer tools for personal and professional use. By using this site you agree to use it lawfully and not attempt to reverse-engineer, disrupt, or misuse any part of the service.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">No warranty</h2>
          <p>All tools are provided "as is" without any warranty. We do not guarantee the accuracy, completeness, or reliability of any output. Always verify critical results independently.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Limitation of liability</h2>
          <p>DevKit and its operators are not liable for any damages arising from the use or inability to use the tools on this site.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Changes</h2>
          <p>We may update these terms at any time. Continued use of the site constitutes acceptance of any changes.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>For questions, contact <a href="mailto:rlawhdrl3702@gmail.com" className="text-cyan-400 hover:underline">rlawhdrl3702@gmail.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
