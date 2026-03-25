import React, { useState } from 'react';
import { Binary, Copy, ArrowLeftRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Base64Tool() {
  const [mode, setMode] = useState('encode'); // encode | decode
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  function process() {
    setError('');
    if (!input.trim()) return;
    try {
      if (mode === 'encode') {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input.trim()))));
      }
    } catch {
      setError(mode === 'decode' ? 'Invalid Base64 string.' : 'Encoding failed.');
      setOutput('');
    }
  }

  function swap() {
    setInput(output);
    setOutput('');
    setError('');
    setMode(mode === 'encode' ? 'decode' : 'encode');
  }

  function copy() {
    if (!output) return;
    navigator.clipboard.writeText(output);
    toast.success('Copied!');
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 flex items-center justify-center">
            <Binary size={16} className="text-white" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-bold text-white">Base64 Encode / Decode</h1>
        </div>
        <p className="text-gray-400 text-sm">Encode plain text to Base64 or decode Base64 back to text.</p>
      </div>

      <div className="card p-6">
        {/* Mode toggle */}
        <div className="flex items-center gap-2 mb-5">
          {['encode', 'decode'].map(m => (
            <button
              key={m}
              onClick={() => { setMode(m); setInput(''); setOutput(''); setError(''); }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                mode === m ? 'bg-cyan-600 text-white' : 'bg-dark-700 text-gray-400 hover:text-white'
              }`}
            >
              {m}
            </button>
          ))}
          {output && (
            <button onClick={swap} className="ml-auto btn-secondary flex items-center gap-1.5">
              <ArrowLeftRight size={13} /> Swap
            </button>
          )}
        </div>

        <label className="label">{mode === 'encode' ? 'Plain text' : 'Base64 string'}</label>
        <textarea
          className="textarea h-36 mb-4"
          placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter Base64 to decode...'}
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <button onClick={process} className="btn-primary w-full mb-5 capitalize">{mode}</button>

        {error && (
          <div className="p-3 bg-red-900/20 border border-red-800/50 rounded-xl mb-4">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {output && (
          <>
            <div className="flex items-center justify-between mb-2">
              <label className="label mb-0">{mode === 'encode' ? 'Base64 output' : 'Decoded text'}</label>
              <button onClick={copy} className="copy-btn flex items-center gap-1"><Copy size={11} /> Copy</button>
            </div>
            <pre className="bg-dark-700 rounded-xl p-4 text-sm text-cyan-300 font-mono break-all whitespace-pre-wrap">{output}</pre>
          </>
        )}
      </div>
    </div>
  );
}
