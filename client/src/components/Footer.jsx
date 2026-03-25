import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

const col1 = [
  { label: 'JSON Formatter', path: '/json' },
  { label: 'UUID Generator', path: '/uuid' },
  { label: 'Hash Generator', path: '/hash' },
  { label: 'Base64', path: '/base64' },
  { label: 'Password Generator', path: '/password' },
  { label: 'Regex Tester', path: '/regex' },
];

const col2 = [
  { label: 'Cron Explainer', path: '/cron' },
  { label: 'URL Encode/Decode', path: '/url-encode' },
  { label: 'JWT Decoder', path: '/jwt' },
  { label: 'Diff Checker', path: '/diff' },
  { label: 'Markdown Preview', path: '/markdown' },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-700 bg-dark-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Code2 size={14} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white">DevKit</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">Free online developer tools. No login, no tracking.</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Tools</h3>
            <ul className="space-y-2">
              {col1.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">More Tools</h3>
            <ul className="space-y-2">
              {col2.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3 text-sm">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
              ].map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-gray-500 hover:text-cyan-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-6 text-center">
          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} DevKit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
