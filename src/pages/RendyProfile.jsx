import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaArrowLeft, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGraduationCap, 
  FaUserAlt, 
  FaBriefcase, 
  FaCode, 
  FaAward, 
  FaBroadcastTower, 
  FaUsers, 
  FaLandmark,
  FaExternalLinkAlt
} from "react-icons/fa";

export default function RendyProfile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const hoverEffect = {
    whileHover: { y: -4, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] font-sans p-4 md:p-8 lg:p-12 selection:bg-indigo-200 antialiased">
      
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        
        <motion.aside variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-12 h-fit">
          <Link 
            to="/" 
            className="flex items-center gap-2 w-fit bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-200 text-sm font-semibold text-slate-600 hover:text-[#6366F1] hover:border-indigo-200 hover:shadow-md transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>

          <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col items-center text-center">
            
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="w-36 h-36 rounded-full overflow-hidden mb-5 border-4 border-indigo-50 shadow-md"
            >
              <img 
                src="/fotorendy.jpg" 
                alt="Muhammad Rendy Ramadhani" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} 
              />
            </motion.div>
            
            <h1 className="text-xl font-bold tracking-tight leading-tight mb-2">
              Muhammad Rendy Ramadhani
            </h1>
            
            <div className="bg-indigo-50 text-[#6366F1] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <FaGraduationCap size={14} /> D3 Teknologi Informasi
            </div>

            <div className="w-full border-t border-slate-100 pt-6 flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg text-[#6366F1]"><FaMapMarkerAlt size={14} /></div>
                <span className="font-medium">Malang, Jawa Timur</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="p-2 bg-slate-50 rounded-lg text-[#6366F1]"><FaEnvelope size={14} /></div>
                <a href="mailto:mrendyrmdhni.ub.ac.id" className="font-medium hover:text-[#6366F1] transition-colors">
                  mrendyrmdhni.ub.ac.id
                </a>
              </div>
            </div>

          </div>
        </motion.aside>


        <motion.main className="lg:col-span-8 flex flex-col gap-6">
          <motion.section variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FaUserAlt className="text-[#6366F1]" /> Tentang Saya
            </h2>
            <div className="text-[14px] text-slate-600 leading-relaxed space-y-3 text-justify font-medium">
              <p>
                Sebagai mahasiswa Teknologi Informasi, saya memiliki minat pada pengembangan sistem digital, baik pada sisi frontend maupun backend, dengan pendekatan yang berfokus pada keterpaduan fungsi dan pengalaman pengguna. Saya memandang proses pengembangan perangkat lunak sebagai upaya menyusun solusi yang terstruktur, efisien, dan dapat diandalkan.
              </p>
              <p>
                Pemahaman teknis saya berkembang melalui praktik langsung serta keterlibatan dalam lingkungan komunikasi berbasis Jaringan & frekuensi radio yang beroperasi dalam ekosistem regulasi Kementerian Komunikasi dan Digital. Pengalaman tersebut membantu saya memahami pentingnya stabilitas sistem, manajemen komunikasi, serta kepatuhan terhadap standar. Saya terbiasa bekerja mandiri maupun dalam tim dengan fokus pada kualitas implementasi dan keberlanjutan sistem.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <FaBriefcase className="text-[#6366F1]" /> Pengalaman
            </h2>
            
            <div className="flex flex-col gap-4">
              <motion.div {...hoverEffect} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="mt-1 p-3 bg-white rounded-lg text-[#6366F1] shadow-sm border border-slate-100 h-fit shrink-0">
                  <FaBroadcastTower size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">IKRAP – Radio Communication & Signal Operations<span className="font-normal text-slate-500"></span></h3>
                  <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                    Terlibat dalam operasional komunikasi berbasis frekuensi yang berjalan dalam sistem komunikasi nasional sesuai ketentuan yang berlaku. Dalam peran ini, saya mengoperasikan perangkat komunikasi untuk mendukung pertukaran informasi secara real-time, <i>wireless communication</i> dan <i>signal management</i> di lapangan.
                  </p>
                </div>
              </motion.div>

              <motion.div {...hoverEffect} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="mt-1 p-3 bg-white rounded-lg text-[#6366F1] shadow-sm border border-slate-100 h-fit shrink-0">
                  <FaUsers size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Himpunan Mahasiswa TI – Hubungan Eksternal</h3>
                  <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                    Berpartisipasi aktif dalam program kerja berbasis teknologi untuk mendukung dan memfasilitasi komunikasi eksternal organisasi dengan berbagai pemangku kepentingan dan instansi terkait.
                  </p>
                </div>
              </motion.div>

              <motion.div {...hoverEffect} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-100 hover:shadow-sm transition-all">
                <div className="mt-1 p-3 bg-white rounded-lg text-[#6366F1] shadow-sm border border-slate-100 h-fit shrink-0">
                  <FaLandmark size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">Dewan Perwakilan Mahasiswa (DPM) Vokasi UB</h3>
                  <p className="text-[13px] text-slate-600 mt-2 leading-relaxed">
                    Terlibat dalam kegiatan representasi mahasiswa serta mendukung penyampaian aspirasi secara terstruktur dalam lingkungan organisasi kampus guna menciptakan tata kelola yang transparan.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <FaCode className="text-[#6366F1]" /> Highlight Project
            </h2>
            
            <motion.div {...hoverEffect} className="group relative bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
              <a href="https://pahamin.my.id" target="_blank" rel="noreferrer" className="absolute top-6 right-6 p-2 bg-white rounded-lg shadow-sm text-slate-400 hover:text-[#6366F1] transition-colors">
                <FaExternalLinkAlt size={14} />
              </a>
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">pahamin.my.id</h3>
              <p className="text-[10px] font-bold text-[#6366F1] uppercase tracking-widest mb-3 bg-indigo-50 w-fit px-2 py-1 rounded">Independent Solo Project</p>
              <p className="text-[13px] text-slate-600 leading-relaxed font-medium">
                Platform edukasi berbasis web yang dirancang dan dikembangkan sepenuhnya secara mandiri. Proyek ini berfokus pada implementasi UI/UX yang bersih, optimalisasi performa frontend, dan penciptaan pengalaman pengguna yang stabil serta responsif.
              </p>
            </motion.div>
          </motion.section>

          <motion.section variants={itemVariants} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
              <FaAward className="text-[#6366F1]" /> Sertifikasi
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-xl border border-slate-200 aspect-4/3 bg-slate-100 cursor-pointer">
                <img 
                  src="/S1.jpeg" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt="Sertifikat Komdigi Utama" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=S1.jpeg+Missing"; }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0F172A]/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Komdigi Utama</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-xl border border-slate-200 aspect-4/3 bg-slate-100 cursor-pointer">
                <img 
                  src="/S2.jpeg" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt="Sertifikat Tech-Inf Prof" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=S2.jpeg+Missing"; }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0F172A]/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Tech-Inf Prof</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-xl border border-slate-200 aspect-4/3 bg-slate-100 cursor-pointer">
                <img 
                  src="/S3.jpeg" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt="Sertifikat Digital Award" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=S3.jpeg+Missing"; }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0F172A]/80 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[10px] font-bold text-white uppercase tracking-wider">Digital Award</p>
                </div>
              </motion.div>
            </div>
          </motion.section>

        </motion.main>
      </motion.div>
    </div>
  );
}