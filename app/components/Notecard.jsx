import React from "react";
import { motion } from "framer-motion";
import { Trash } from "lucide-react";

export default function NoteCard({ note, onDelete }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -3 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="relative backdrop-blur-2xl bg-white/10 border border-white/10 
      shadow-xl rounded-3xl p-6 h-full group overflow-hidden"
    >
    
      <div className="absolute bottom-0 left-0 w-full h-20 
      bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

      <h2 className="text-2xl font-bold text-white tracking-wide">
        {note.title}
      </h2>

      <p className="text-gray-300 mt-3 leading-relaxed">
        {note.content}
      </p>

   
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          console.log("NoteCard button clicked, id:", note.id);
          onDelete(note.id);
        }}
        className="mt-6 px-4 py-2 flex items-center gap-2 rounded-xl
        text-red-300 bg-red-500/10 hover:bg-red-500/30 transition 
        border border-red-500/20 shadow-red-500/10 shadow-sm pointer-events-auto relative z-20"
      >
        <Trash size={18} />
        Delete
      </motion.button>

      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-3xl border border-transparent 
      group-hover:border-white/20 transition-all duration-300"></div>
    </motion.div>
  );
}
