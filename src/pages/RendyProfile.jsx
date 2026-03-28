export default function RendyProfile() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Tombol Kembali ke Home (Opsional) */}
      <div className="max-w-4xl mx-auto mb-6">
        <a href="/" className="text-blue-600 hover:underline font-medium">← Kembali ke Utama</a>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header Warna */}
        <div className="h-40 bg-linear-to-r from-blue-600 to-indigo-700"></div>

        <div className="px-8 pb-10">
          {/* Foto & Nama */}
          <div className="relative -mt-20 mb-6 flex flex-col md:flex-row items-end gap-6">
            <img 
              src="/foto-rendy.jpg" // Pastikan file ada di folder public
              alt="Muhammad Rendy Ramadhani" 
              className="w-40 h-40 rounded-2xl border-4 border-white shadow-lg object-cover bg-gray-200"
            />
            <div className="pb-2">
              <h1 className="text-3xl font-bold text-gray-900">Muhammad Rendy Ramadhani</h1>
              <p className="text-lg text-blue-600 font-semibold">D3 Teknologi Informasi - Kelas T2F</p>
            </div>
          </div>

          {/* Info Detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-4 bg-blue-50 rounded-xl">
              <span className="block text-sm text-blue-500 uppercase font-bold tracking-wider">Jurusan</span>
              <span className="text-gray-800 font-medium text-lg">Teknologi Informasi</span>
            </div>
            <div className="p-4 bg-indigo-50 rounded-xl">
              <span className="block text-sm text-indigo-500 uppercase font-bold tracking-wider">Domisili</span>
              <span className="text-gray-800 font-medium text-lg">Malang, Jawa Timur</span>
            </div>
          </div>

          {/* Deskripsi (Wajib > 100 Kata) */}
          <div className="border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">Tentang Saya</h3>
            <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
              <p>
                Nama saya Muhammad Rendy Ramadhani, seorang mahasiswa program studi D3 Teknologi Informasi di Universitas Brawijaya. 
                Sebagai bagian dari kelas T2F, saya memiliki ketertarikan yang sangat mendalam pada dunia pengembangan perangkat lunak, 
                khususnya dalam membangun antarmuka web yang interaktif dan responsif. Proyek ini merupakan salah satu langkah awal 
                saya dalam menguasai ekosistem ReactJS serta implementasi styling menggunakan Tailwind CSS versi terbaru.
              </p>
              <p>
                Selama masa studi di UB, saya tidak hanya belajar mengenai teknis pemrograman, tetapi juga cara berkolaborasi secara 
                profesional dalam sebuah tim melalui GitHub. Saya percaya bahwa kemampuan komunikasi dan kerjasama tim sama pentingnya 
                dengan kemampuan teknis dalam industri teknologi saat ini. Melalui tugas project-based ini, saya berharap dapat 
                memperdalam pemahaman saya mengenai Git workflow, manajemen branch, serta teknik-teknik modern dalam front-end development. 
                Ke depannya, saya bercita-cita untuk menjadi seorang pengembang web yang kompeten dan mampu memberikan solusi digital 
                yang inovatif serta bermanfaat bagi masyarakat luas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}