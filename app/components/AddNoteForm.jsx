"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    onAdd(newNote);
    setTitle("");
    setContent("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl 
      rounded-3xl p-6 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] 
      transition-all duration-300"
    >
   
      <div className="relative">
        <input
          type="text"
          className="w-full p-3 rounded-xl bg-black/30 text-white border border-white/10 
          focus:border-pink-500/60 focus:ring-2 focus:ring-pink-500/30 
          outline-none transition placeholder-transparent"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className={`absolute left-3 top-3 text-gray-400 pointer-events-none transition-all
          ${title ? "text-xs -top-2 bg-black/50 px-2 rounded-md" : ""}`}>
          Note title
        </label>
      </div>

     
      <div className="relative mt-4">
        <textarea
          className="w-full p-3 rounded-xl bg-black/30 text-white border border-white/10 
          focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/30 
          outline-none transition placeholder-transparent"
          placeholder="Write your note..."
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label className={`absolute left-3 top-3 text-gray-400 pointer-events-none transition-all
          ${content ? "text-xs -top-2 bg-black/50 px-2 rounded-md" : ""}`}>
          Write your note...
        </label>
      </div>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="mt-5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
        py-3 rounded-xl font-bold text-white shadow-lg shadow-pink-500/20 
        hover:shadow-pink-500/40 transition"
      >
        Add Note
      </motion.button>
    </motion.form>
  );
}
