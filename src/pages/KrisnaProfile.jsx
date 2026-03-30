import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaIdBadge, FaGraduationCap, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const KrisnaProfile = () => {
  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] font-sans p-4 md:p-8 lg:p-12 flex justify-center items-center antialiased">
      
      {/* Wrapper Animasi */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Tombol Kembali ke Beranda */}
        <Link 
          to="/" 
          className="flex items-center gap-2 w-fit bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 text-xs font-bold text-slate-600 hover:text-[#6366F1] transition-all mb-6 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Beranda Kelompok
        </Link>

        {/* Card Profil Utama */}
        <div className="bg-white shadow-xl rounded-[2.5rem] p-8 border border-slate-100 overflow-hidden relative">
          {/* Dekorasi Gradient Biru khas Krisna (Tipis-tipis biar mewah) */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

          {/* FOTO PROFIL */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-50 shadow-lg mb-6"
          >
            <img
              src="/Krisna Aji.jpeg" 
              alt="Krisna Aji"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }}
            />
          </motion.div>

          {/* NAMA & STATUS */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-slate-900 leading-tight px-2">
              Krisna Aji Dharma Jati
            </h1>
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">
              IT Enthusiast
            </p>
          </div>

          {/* INFO DETAILS */}
          <div className="grid grid-cols-1 gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 mb-6">
            <div className="flex items-center gap-3 text-slate-600">
              <FaIdBadge className="text-blue-500 shrink-0" />
              <span className="text-sm font-semibold">Kelas T2F</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <FaGraduationCap className="text-blue-500 shrink-0" />
              <span className="text-sm font-semibold">Teknologi Informasi</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <FaMapMarkerAlt className="text-blue-500 shrink-0" />
              <span className="text-sm font-semibold">Malang, Jawa Timur</span>
            </div>
          </div>

          {/* DESKRIPSI (TENTANG SAYA) */}
          <div className="text-slate-500 text-[13px] leading-relaxed text-justify px-2 mb-8">
            <p>
              Saya adalah mahasiswa Teknologi Informasi yang memiliki minat besar
              dalam pengembangan web dan teknologi digital. Saya tertarik
              mempelajari **ReactJS** untuk membangun aplikasi yang interaktif dan
              responsif. Saya juga senang mendesain tampilan agar aplikasi terlihat
              modern dan nyaman digunakan. Saya pribadi yang disiplin, bertanggung
              jawab, dan selalu ingin belajar hal baru.
            </p>
          </div>

          {/* BUTTON HUBUNGI */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all flex items-center justify-center gap-2"
          >
            <FaEnvelope /> Hubungi Saya
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default KrisnaProfile;