'use client';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-16 px-8">
     <h1 className="font-bold text-4xl text-black">Tentang Saya</h1><br />
      <img src="/imgp4/profile.jpg" alt="Foto Profil Ratna" className="w-30 h-50 rounded-full shadow-lg border-4 border-gray-300" />
      <h1 className="mt-4 text-3xl font-bold text-gray-800">RATNASARI</h1>
      <p className="text-gray-600 text-center mt-2 max-w-md">
        Saya merupakan seorang Mahasiswa Jurusan Teknologi Informasi dengan Program Studi D4 Teknik Informatika di Politeknik Negeri Malang.
      </p> 
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Keahlian</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Desaign UI/UX</li>
            <li>Frontend</li>
          </ul>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700">Kontak</h2>
          <p className="text-gray-600 mt-2">📧 224172007@student.polinema.ac.id</p>
          <p className="text-gray-600">📍 Malang, Indonesia</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-4">
        <a
          href="https://linkedin.com/in/ratnasari124"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ratnasari124"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition"
          target="_blank"
        >
          GitHub
        </a>
      </div><br />
    </div>
  );
}
