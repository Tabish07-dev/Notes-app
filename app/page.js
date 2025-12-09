"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AddNoteForm from "./components/AddNoteForm";
import NoteCard from "./components/Notecard";
import { getNotes, saveNotes } from "./utils/storage";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [notes, setNotes] = useState(() => getNotes());

  const addNote = (note) => {
    const updatedNotes = [note, ...notes];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    console.log("deleteNote called with id:", id);
    const updatedNotes = notes.filter((note) => String(note.id) !== String(id));
    console.log("updatedNotes length:", updatedNotes.length);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 drop-shadow-lg">
          My Notes App
        </h1>
        <p className="mt-2 text-gray-300 text-lg">
          Keep your ideas organized ✨
        </p>
      </header>

      <div className="max-w-3xl mx-auto mb-10">
        <AddNoteForm onAdd={addNote} />
      </div>

      {notes.length === 0 ? (
        <div className="flex flex-col items-center mt-16 opacity-90">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4076/4076503.png"
              alt="empty"
              width={150}
              height={150}
              className="opacity-70"
            />
          </motion.div>

          <p className="text-gray-400 text-xl mt-4">
            No notes yet. Start writing something...
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <AnimatePresence>
            {notes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <NoteCard note={note} onDelete={deleteNote} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
