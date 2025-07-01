"use client";

import { useState } from "react";

// Daftar Artikel
const essays = [
  {
    id: 1,
    title: "Mengenal Konsep Pemrograman Fungsional",
    content: "Pemrograman fungsional menekankan pada penggunaan fungsi murni dan stateless. Artikel ini membahas bagaimana paradigma ini dapat meningkatkan kualitas kode dan mempermudah debugging."
  },
  {
    id: 2,
    title: "Tailwind CSS: Revolusi Desain Front-End",
    content: "Framework utility-first ini memungkinkan developer membangun antarmuka dengan cepat tanpa harus menulis banyak kode CSS kustom. Simak kelebihan dan cara implementasinya di proyekmu."
  },
  {
    id: 3,
    title: "Membangun Aplikasi Web dengan Next.js",
    content: "Next.js menawarkan SSR, SSG, dan routing otomatis yang menjadikannya pilihan ideal untuk membangun aplikasi web modern. Pelajari struktur dasar dan praktik terbaik dalam pengembangannya."
  },
  {
    id: 4,
    title: "Mengapa Banyak Developer Beralih ke Functional Programming",
    content: "Artikel ini mengulas alasan di balik pergeseran paradigma dari OOP ke functional programming di kalangan perusahaan teknologi besar seperti Facebook dan Twitter."
  },
  {
    id: 5,
    title: "Tailwind CSS vs CSS Tradisional: Mana yang Lebih Baik?",
    content: "Perbandingan antara pendekatan utility-first dan penulisan CSS konvensional. Temukan mana yang lebih cocok untuk gaya kerja dan kebutuhan proyekmu."
  },
  {
    id: 6,
    title: "Cara Deploy Aplikasi Next.js ke Vercel Secara Gratis",
    content: "Panduan praktis mulai dari instalasi Next.js hingga deployment langsung ke Vercel dengan custom domain dan pengaturan environment variables."
  }
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
