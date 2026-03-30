import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaIdBadge,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaCopy,
} from "react-icons/fa";

const KrisnaProfile = () => {
  const email = "krisnaaji@email.com"; // GANTI EMAIL KAMU
  const phone = "6281234567890"; // GANTI NOMOR WA (pakai 62)

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email berhasil disalin!");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-center p-6 font-sans antialiased">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* BACK */}
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 mb-5 transition-colors uppercase tracking-widest"
        >
          <FaArrowLeft /> Kembali
        </Link>

        {/* CARD */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-2xl rounded-[2.5rem] p-8 relative overflow-hidden">

          {/* FOTO */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-40 h-40 mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
          >
            <img
              src="/Krisna Aji.jpeg"
              alt="Krisna"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Krisna+Aji&background=4F46E5&color=fff"; }}
            />
          </motion.div>

          {/* NAMA */}
          <div className="text-center mt-6">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">
              Krisna Aji Dharma Jati
            </h1>
            <p className="text-indigo-600 text-[10px] font-black tracking-[0.3em] mt-2 uppercase bg-indigo-50 w-fit mx-auto px-4 py-1 rounded-full">
              MAHASISWA IT
            </p>
          </div>

          {/* INFO */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-4 bg-white/90 p-4 rounded-2xl shadow-sm border border-white/50 hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500">
                <FaIdBadge size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Kelas</p>
                <p className="text-sm font-bold text-slate-700">T2F</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white/90 p-4 rounded-2xl shadow-sm border border-white/50 hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500">
                <FaGraduationCap size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Program Studi</p>
                <p className="text-sm font-bold text-slate-700">Teknologi Informasi</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/90 p-4 rounded-2xl shadow-sm border border-white/50 hover:border-indigo-200 transition-colors">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Domisili</p>
                <p className="text-sm font-bold text-slate-700">Malang, Jawa Timur</p>
              </div>
            </div>
          </div>

          {/* DESKRIPSI */}
          <div className="mt-8 p-5 bg-slate-50/50 rounded-2xl border border-slate-100">
            <p className="text-sm text-slate-500 leading-relaxed text-justify italic font-medium">
              "Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam pengembangan web dan teknologi digital. Saya sedang mempelajari ReactJS untuk membuat tampilan website yang interaktif, responsif, dan mudah digunakan."
            </p>
          </div>

          {/* FITUR REAL */}
          <div className="mt-8 space-y-3">
            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-3 py-4 bg-linear-to-r from-blue-500 to-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-indigo-200 transition-all hover:-translate-y-1"
            >
              <FaEnvelope /> Kirim Email
            </a>

            <div className="grid grid-cols-2 gap-3">
               {/* WHATSAPP */}
              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-2xl font-bold shadow-md hover:bg-green-600 transition-all"
              >
                <FaWhatsapp size={20} /> WhatsApp
              </a>

              {/* COPY EMAIL */}
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 py-3 bg-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-300 transition-all"
              >
                <FaCopy size={18} /> Salin Email
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-center text-slate-400 text-[10px] mt-8 font-bold tracking-[0.4em] uppercase">
          © 2026 Krisna Aji Dharma Jati
        </p>
      </motion.div>
    </div>
  );
};

export default KrisnaProfile;