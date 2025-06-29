import React, { useState, useEffect } from 'react';

const prompts = [
  "What’s one thing that made you smile today?",
  "What are you feeling right now and why?",
  "Describe a challenge you faced recently and how you handled it.",
  "Write a letter to your future self.",
  "What are 3 things you're grateful for today?"
];

const GuidedJournal = () => {
  const [prompt, setPrompt] = useState('');
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(randomPrompt);
    const stored = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setEntries(stored.reverse());
  }, []);

  const handleSave = () => {
    const newEntry = {
      date: new Date().toLocaleString(),
      prompt,
      entry: entry.trim()
    };
    if (!newEntry.entry) return;

    const updatedEntries = [newEntry, ...entries];
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
    setSaved(true);
    setEntry('');
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-blue-600 mb-1">Today's Prompt</h4>
        <p className="italic text-gray-700 mb-4">{prompt}</p>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="6"
          placeholder="Write your thoughts here..."
        />
        <button
          onClick={handleSave}
          className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Entry
        </button>
        {saved && <p className="text-green-600 mt-2">Entry saved!</p>}
      </div>

      {entries.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">📓 Past Entries</h4>
          <div className="max-h-64 overflow-y-auto space-y-4 pr-2 bg-white bg-opacity-100">
            {entries.map((e, idx) => (
              <div key={idx} className="border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-sm">
                <p className="text-sm text-gray-500">{e.date}</p>
                <p className="text-sm text-blue-600 italic mb-2">Prompt: {e.prompt}</p>
                <p className="text-gray-800 whitespace-pre-wrap">{e.entry}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GuidedJournal;
