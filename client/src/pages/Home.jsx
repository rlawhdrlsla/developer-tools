import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, ArrowRight, Hash, Key, Lock, Search, Clock, Link2, Shield, GitCompare, FileText, Binary
} from 'lucide-react';

const tools = [
  { path: '/json',       icon: Code2,       color: 'from-cyan-600 to-cyan-400',    label: 'JSON Formatter',      desc: 'Format, minify, and validate JSON with syntax highlighting.' },
  { path: '/uuid',       icon: Hash,        color: 'from-blue-600 to-blue-400',    label: 'UUID Generator',      desc: 'Generate RFC 4122 compliant UUIDs instantly.' },
  { path: '/hash',       icon: Shield,      color: 'from-violet-600 to-violet-400',label: 'Hash Generator',      desc: 'Compute SHA-256 and SHA-512 hashes of any text.' },
  { path: '/base64',     icon: Binary,      color: 'from-emerald-600 to-emerald-400',label: 'Base64',            desc: 'Encode and decode text or files to/from Base64.' },
  { path: '/password',   icon: Lock,        color: 'from-rose-600 to-rose-400',    label: 'Password Generator',  desc: 'Generate strong, random passwords with custom rules.' },
  { path: '/regex',      icon: Search,      color: 'from-amber-600 to-amber-400',  label: 'Regex Tester',        desc: 'Test regular expressions against text in real time.' },
  { path: '/cron',       icon: Clock,       color: 'from-pink-600 to-pink-400',    label: 'Cron Explainer',      desc: 'Translate cron expressions into plain English.' },
  { path: '/url-encode', icon: Link2,       color: 'from-teal-600 to-teal-400',   label: 'URL Encode/Decode',   desc: 'Encode or decode URLs and query parameters.' },
  { path: '/jwt',        icon: Key,         color: 'from-orange-600 to-orange-400',label: 'JWT Decoder',         desc: 'Decode and inspect JWT tokens without a secret.' },
  { path: '/diff',       icon: GitCompare,  color: 'from-indigo-600 to-indigo-400',label: 'Diff Checker',        desc: 'Compare two blocks of text and highlight differences.' },
  { path: '/markdown',   icon: FileText,    color: 'from-lime-600 to-lime-400',    label: 'Markdown Preview',    desc: 'Write Markdown and see the rendered preview live.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-dark-900 pt-16 pb-14 px-4 border-b border-dark-700">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-400 text-xs font-semibold mb-5 border border-cyan-800/50">
            <Code2 size={12} strokeWidth={2.5} />
            Developer Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Tools for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              developers
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            JSON, UUID, Hash, Base64, Regex, JWT and more — all free, no login required.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(({ path, icon: Icon, color, label, desc }) => (
            <Link
              key={path}
              to={path}
              className="card p-5 hover:border-cyan-700 transition-all duration-200 group hover:-translate-y-1"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4`}>
                <Icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <h2 className="font-semibold text-white text-sm mb-1.5 group-hover:text-cyan-400 transition-colors">
                {label}
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">{desc}</p>
              <div className="flex items-center gap-1 text-xs text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                Open tool <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-dark-800/50 border-y border-dark-700 py-12 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
          {[
            { title: 'Always Free', desc: 'Every tool is free to use with no hidden costs.' },
            { title: 'No Login Required', desc: 'No account, no signup, just open and use.' },
            { title: 'Privacy First', desc: 'Everything runs in your browser. Nothing is sent to our servers.' },
          ].map(f => (
            <div key={f.title} className="p-6 card">
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
