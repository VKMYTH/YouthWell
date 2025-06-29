import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdHeart, IoMdMusicalNotes, IoMdBrush, IoMdClose } from 'react-icons/io';

const CopingToolkit = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [journalEntry, setJournalEntry] = useState('');

  const closeModal = () => {
    setActiveTool(null);
    setJournalEntry('');
  };

  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTool('breathing')}
          className="cursor-pointer bg-[#f9fbff] rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4"
        >
          <IoMdHeart className="text-primary text-3xl" />
          <h4 className="text-lg font-semibold text-heroBg">Breathing Exercise</h4>
          <p className="text-gray-600 text-sm">Click to begin a calming guided breathing session.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTool('music')}
          className="cursor-pointer bg-[#f9fbff] rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4"
        >
          <IoMdMusicalNotes className="text-primary text-3xl" />
          <h4 className="text-lg font-semibold text-heroBg">Grounding Playlist</h4>
          <p className="text-gray-600 text-sm">Click to open a relaxing Spotify playlist.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => setActiveTool('journal')}
          className="cursor-pointer bg-[#f9fbff] rounded-lg shadow-md p-6 flex flex-col items-center text-center space-y-4"
        >
          <IoMdBrush className="text-primary text-3xl" />
          <h4 className="text-lg font-semibold text-heroBg">Journaling Prompt</h4>
          <p className="text-gray-600 text-sm">Reflect and write through emotions with a prompt.</p>
        </motion.div>
      </div>

      {activeTool === 'breathing' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-10 text-center max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <IoMdClose size={24} />
            </button>
            <h3 className="text-2xl font-semibold text-primary mb-4">Breathe with the Circle</h3>
            <motion.div
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 bg-primary rounded-full mx-auto"
            />
            <p className="mt-4 text-gray-600">Inhale... Exhale... Follow the circle.</p>
          </div>
        </div>
      )}

      {activeTool === 'music' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <IoMdClose size={24} />
            </button>
            <h3 className="text-2xl font-semibold text-primary mb-4">Relaxing Playlist</h3>
            <iframe
              className="rounded-lg w-full"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0"
              width="100%"
              height="380"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      {activeTool === 'journal' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <IoMdClose size={24} />
            </button>
            <h3 className="text-2xl font-semibold text-primary mb-4">Journaling Prompt</h3>
            <p className="mb-3 text-gray-700 italic">"What’s something small that brought you joy today?"</p>
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write your thoughts here..."
              rows={6}
              className="w-full border border-gray-300 p-3 rounded resize-none"
            ></textarea>
            <button
              onClick={() => {
                alert("Entry saved! (Locally - backend not implemented)");
                closeModal();
              }}
              className="mt-4 bg-primary text-white px-5 py-2 rounded hover:bg-primary/90"
            >
              Save Entry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CopingToolkit;
