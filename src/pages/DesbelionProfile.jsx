const hobbies = [
  "Gaming",
  "Reading",
  "Music"
];

export default function DesbellionProfile() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-purple-900 to-gray-900 py-16 px-6 font-sans antialiased">
      
      <div className="max-w-4xl mx-auto">
        
        {/* CARD UTAMA */}
        <div className="bg-linear-to-br from-gray-800 to-gray-900 shadow-2xl rounded-2xl overflow-hidden border border-purple-500/30">
          
          {/* BANNER GRADIENT */}
          <div className="h-48 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>
          </div>

          {/* PROFILE SECTION */}
          <div className="px-8 pb-8 -mt-16 relative">
            
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
              
              {/* FOTO PROFIL */}
              <div className="shrink-0">
                <img
                  src="/desbellion.jpeg"
                  alt="profile"
                  className="w-37 h-44 rounded-2xl border-4 border-purple-400 shadow-2xl object-cover hover:scale-105 transition-transform bg-gray-800"
                  onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Desbellion&background=6B46C1&color=fff"; }}
                />
              </div>

              <div className="grow">
                {/* NAMA */}
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  Desbellion Seccar Ramis
                </h1>

                {/* INSTITUSI */}
                <p className="text-gray-300 font-medium">
                  Universitas Brawijaya | Fakultas Vokasi
                </p>
              </div>
            </div>

            {/* INFO GRID */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 bg-gray-900/50 p-6 rounded-xl border border-purple-500/20">
              <div className="hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Kelas</p>
                <p className="text-white text-lg font-bold">T2F</p>
              </div>
              <div className="hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Program Studi</p>
                <p className="text-white text-lg font-bold">Teknologi Informasi</p>
              </div>
              <div className="hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Domisili</p>
                <p className="text-white text-lg font-bold">Trenggalek, Jawa Timur</p>
              </div>
            </div>

          </div>

          {/* ABOUT SECTION */}
          <div className="border-t border-purple-500/30 px-8 py-8 bg-gray-800/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">💭</span> Tentang Diri
            </h2>
            <p className="text-gray-300 leading-relaxed text-justify italic text-base md:text-lg mb-4">
              Saya adalah mahasiswa Teknologi Informasi yang memiliki minat besar dalam bidang pengembangan web, khususnya pada bagian frontend development. Saya terbiasa menggunakan teknologi seperti HTML, CSS, JavaScript, ReactJS, dan Tailwind CSS untuk membangun tampilan aplikasi yang modern dan responsif. Selain itu, saya juga tertarik dalam mempelajari UI/UX design agar dapat menciptakan pengalaman pengguna yang lebih baik. Saya memiliki semangat belajar yang tinggi dan selalu berusaha mengikuti perkembangan teknologi terbaru di dunia IT. Saya juga senang mengerjakan proyek kolaborasi maupun individu untuk meningkatkan keterampilan saya.
            </p>
          </div>

          {/* HOBBIES SECTION */}
          <div className="border-t border-purple-500/30 px-8 py-8 bg-gray-800/30">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">🎯</span> Hobi & Minat
            </h2>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="px-5 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:scale-105 transition-all cursor-default"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="border-t border-purple-500/30 px-8 py-8 bg-linear-to-r from-purple-900/40 to-blue-900/40">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-3xl">📞</span> Kontak
            </h2>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:desbellionsr06@gmail.com" className="px-6 py-3 bg-red-600/90 text-white rounded-xl font-bold hover:bg-red-700 hover:-translate-y-1 transition-all shadow-lg">
                📧 Email
              </a>
              <a href="https://www.linkedin.com/in/desbellion-seccar-7489443ba" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600/90 text-white rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-lg">
                🔗 LinkedIn
              </a>
              <a href="https://github.com/desbellionsr06" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-700/90 text-white rounded-xl font-bold hover:bg-gray-600 hover:-translate-y-1 transition-all shadow-lg">
                💻 GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm font-medium tracking-widest uppercase">
          <p>© 2026 Desbellion Seccar Ramis | Universitas Brawijaya</p>
        </div>

      </div>
    </div>
  );
}
