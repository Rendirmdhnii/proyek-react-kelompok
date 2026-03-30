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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex justify-center items-center p-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* BACK */}
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 mb-5"
        >
          <FaArrowLeft /> Kembali
        </Link>

        {/* CARD */}
        <div className="backdrop-blur-lg bg-white/70 border border-white/40 shadow-2xl rounded-3xl p-6 relative overflow-hidden">

          {/* FOTO */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl"
          >
            <img
              src="/Krisna Aji.jpeg"
              alt="Krisna"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* NAMA */}
          <div className="text-center mt-4">
            <h1 className="text-2xl font-extrabold text-slate-800">
              Krisna Aji Dharma Jati
            </h1>
            <p className="text-indigo-600 text-xs font-bold tracking-widest mt-1">
              MAHASISWA IT
            </p>
          </div>

          {/* INFO */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl shadow-sm">
              <FaIdBadge className="text-indigo-500" />
              <span className="text-sm font-semibold">Kelas T2F</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl shadow-sm">
              <FaGraduationCap className="text-indigo-500" />
              <span className="text-sm font-semibold">Teknologi Informasi</span>
            </div>
            <div className="flex items-center gap-3 bg-white/80 p-3 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-indigo-500" />
              <span className="text-sm font-semibold">Malang, Jawa Timur</span>
            </div>
          </div>

          {/* DESKRIPSI */}
          <p className="text-sm text-slate-600 mt-6 leading-relaxed text-justify">
            Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam
  pengembangan web dan teknologi digital. Saya sedang mempelajari ReactJS
  untuk membuat tampilan website yang interaktif, responsif, dan mudah
  digunakan. Selain itu, saya juga tertarik pada desain antarmuka agar
  aplikasi terlihat lebih modern dan nyaman bagi pengguna. Saya senang
  belajar hal baru, mampu bekerja secara mandiri maupun dalam tim, serta
  berusaha untuk terus meningkatkan kemampuan di bidang teknologi.
  Dengan semangat belajar yang tinggi, saya berharap dapat mengembangkan
  keterampilan dan memberikan kontribusi yang bermanfaat di dunia IT.
          </p>

          {/* FITUR REAL */}
          <div className="mt-6 space-y-3">

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaEnvelope /> Kirim Email
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              <FaWhatsapp /> Chat WhatsApp
            </a>

            {/* COPY EMAIL */}
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition"
            >
              <FaCopy /> Salin Email
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default KrisnaProfile;