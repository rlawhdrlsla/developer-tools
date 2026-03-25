import React from 'react';
import { Code2, Zap, Lock, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-4">
          <Code2 size={24} className="text-white" strokeWidth={2} />
        </div>
        <h1 className="text-3xl font-bold text-white mb-3">About DevKit</h1>
        <p className="text-gray-400 leading-relaxed">
          DevKit is a collection of free, browser-based developer tools. No accounts, no tracking, no nonsense.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {[
          { icon: Zap, title: 'Fast & Instant', desc: 'All tools run entirely in your browser with no server round-trips.' },
          { icon: Lock, title: 'Private', desc: 'Your data never leaves your device. Everything stays on your machine.' },
          { icon: Globe, title: 'Always Available', desc: 'No login, no rate limits. Open the site and start working immediately.' },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card p-5">
            <Icon size={20} className="text-cyan-400 mb-3" strokeWidth={1.5} />
            <h3 className="font-semibold text-white mb-1.5 text-sm">{title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="font-bold text-white mb-3">Tools included</h2>
        <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-400">
          {['JSON Formatter','UUID Generator','Hash Generator','Base64 Encode/Decode','Password Generator','Regex Tester','Cron Explainer','URL Encode/Decode','JWT Decoder','Diff Checker','Markdown Preview'].map(t => (
            <li key={t} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Questions or feedback? Reach us at{' '}
          <a href="mailto:rlawhdrl3702@gmail.com" className="text-cyan-400 hover:underline">rlawhdrl3702@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
