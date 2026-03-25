import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

const allTools = [
  { label: 'JSON Formatter', path: '/json' },
  { label: 'UUID Generator', path: '/uuid' },
  { label: 'Hash Generator', path: '/hash' },
  { label: 'Base64', path: '/base64' },
  { label: 'Password Generator', path: '/password' },
  { label: 'Regex Tester', path: '/regex' },
  { label: 'Cron Explainer', path: '/cron' },
  { label: 'URL Encode/Decode', path: '/url-encode' },
  { label: 'JWT Decoder', path: '/jwt' },
  { label: 'Diff Checker', path: '/diff' },
  { label: 'Markdown Preview', path: '/markdown' },
];

const navTools = allTools.slice(0, 5);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/90 backdrop-blur border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Code2 size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white">DevKit</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navTools.map(t => (
            <Link
              key={t.path}
              to={t.path}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                location.pathname === t.path
                  ? 'bg-cyan-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              {t.label}
            </Link>
          ))}
          <Link to="/" className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-dark-700 transition-colors">
            All Tools
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-800 border-b border-dark-700 px-4 py-3 space-y-1">
          {allTools.map(tool => (
            <Link
              key={tool.path}
              to={tool.path}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-dark-700 transition-colors"
            >
              {tool.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
