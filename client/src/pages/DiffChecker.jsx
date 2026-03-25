import React, { useState, useMemo } from 'react';
import { GitCompare } from 'lucide-react';
import * as Diff from 'diff';

export default function DiffChecker() {
  const [left, setLeft]   = useState('');
  const [right, setRight] = useState('');
  const [mode, setMode]   = useState('words'); // words | lines | chars

  const diffs = useMemo(() => {
    if (!left && !right) return [];
    if (mode === 'lines') return Diff.diffLines(left, right);
    if (mode === 'chars') return Diff.diffChars(left, right);
    return Diff.diffWords(left, right);
  }, [left, right, mode]);

  const added   = diffs.filter(d => d.added).length;
  const removed = diffs.filter(d => d.removed).length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center">
            <GitCompare size={16} className="text-white" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-bold text-white">Diff Checker</h1>
        </div>
        <p className="text-gray-400 text-sm">Compare two blocks of text and highlight differences.</p>
      </div>

      {/* Mode */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm text-gray-400">Compare by:</span>
        {['words', 'lines', 'chars'].map(m => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1.5 rounded-lg text-sm capitalize border transition-colors ${
              mode === m ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-dark-600 text-gray-400 hover:text-white'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div className="card p-4">
          <p className="text-xs font-semibold text-gray-400 mb-2">Original</p>
          <textarea
            className="textarea h-52"
            placeholder="Paste original text here..."
            value={left}
            onChange={e => setLeft(e.target.value)}
          />
        </div>
        <div className="card p-4">
          <p className="text-xs font-semibold text-gray-400 mb-2">Modified</p>
          <textarea
            className="textarea h-52"
            placeholder="Paste modified text here..."
            value={right}
            onChange={e => setRight(e.target.value)}
          />
        </div>
      </div>

      {/* Stats */}
      {diffs.length > 0 && (
        <div className="flex gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs border border-green-800/40">
            +{added} added
          </span>
          <span className="px-3 py-1 rounded-full bg-red-900/30 text-red-400 text-xs border border-red-800/40">
            -{removed} removed
          </span>
        </div>
      )}

      {/* Diff output */}
      {diffs.length > 0 && (
        <div className="card p-5">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Diff</p>
          <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-words">
            {diffs.map((part, i) => (
              <span
                key={i}
                className={
                  part.added   ? 'bg-green-900/40 text-green-300' :
                  part.removed ? 'bg-red-900/40 text-red-300 line-through opacity-70' :
                  'text-gray-400'
                }
              >
                {part.value}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
