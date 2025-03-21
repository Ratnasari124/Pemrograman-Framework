"use client";

import { useState } from "react";

// Daftar Artikel
const essays = [
  { id: 1, title: "Pemrograman Fungsional", content: "Penjelasan lebih lanjut tentang pemrograman fungsional..." },
  { id: 2, title: "Mengenal Tailwind CSS", content: "Tailwind CSS adalah framework CSS yang berbasis utility-first..." },
  { id: 3, title: "Next.js untuk Pemula", content: "Panduan langkah demi langkah untuk memulai proyek dengan Next.js..." },
];

export default function Essays() {
  // State untuk menyimpan artikel yang dipilih
  const [selectedEssay, setSelectedEssay] = useState<{ id: number; title: string; content: string } | null>(null);

  return (
    <div className="mt-16 px-8">
      <header className="mb-8">
        <h1 className="font-bold text-4xl text-black">Essai</h1>
      </header>

      {selectedEssay ? (
        // Tampilan Detail Artikel
        <div className="p-6 bg-white shadow-lg rounded-lg border">
          <button
            onClick={() => setSelectedEssay(null)}
            className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            ← Kembali
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">{selectedEssay.title}</h2>
          <p className="mt-4 text-gray-700">{selectedEssay.content}</p>
        </div>
      ) : (
        // Tampilan Daftar Artikel
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essays.map((essay) => (
            <div
              key={essay.id}
              className="p-6 bg-white shadow-lg rounded-lg border hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedEssay(essay)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{essay.title}</h2>
              <p className="text-gray-600 mt-2">{essay.content.substring(0, 50)}...</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Baca Selengkapnya
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
