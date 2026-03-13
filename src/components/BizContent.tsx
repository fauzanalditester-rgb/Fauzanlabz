import { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Send,
  Zap,
  MessageCircle,
  Scale,
  ClipboardCheck,
  Layout,
  CheckCircle,
  X
} from 'lucide-react';

const BizContent = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${formState.name}. Email: ${formState.email}. WA: ${formState.whatsapp}. Pesan: ${formState.message}`;
    const url = `https://wa.me/6285363407399?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Hero Section */}
      <section className="relative bg-slate-950 pt-32 pb-24 px-6 lg:px-12 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-cyan-400">Naikkan Omset & Profesionalisme</span> Bisnismu Lewat Aplikasi yang Kerja 24/7
          </h1>
          <p className="text-sm text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Saya bantu kamu bangun aplikasi yang gak cuma keren, tapi juga siap pakai dan mudah kamu kelola sendiri. Sudah lebih dari 50+ bisnis saya bantu untuk masuk ke dunia digital marketing secara praktis.
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.open('https://wa.me/6285363407399?text=Halo+Kak%21+Saya+mau+pesan+aplikasi+sekarang', '_blank')}
              className="bg-cyan-500 text-slate-950 font-bold py-4 px-10 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-lg"
            >
              Buat Aplikasi Sekarang!
            </button>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="px-6 -mt-16 relative z-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto aspect-video bg-slate-950 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-slate-800 flex items-center justify-center relative overflow-hidden group hover:border-cyan-500/50 transition-all"
        >
          <div className="w-full h-full bg-black flex items-center justify-center">
            <div className="text-slate-800 font-bold">Video Coming Soon</div>
          </div>
        </motion.div>
      </section>

      {/* Proof/Comparison Section */}
      <section id="portfolio-section" className="pt-20 pb-0 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Text Content */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
                <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                  MASIH GA PERCAYA SAMA HASILNYA? <span className="text-lg">👀</span>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Lihat Hasil Kerja Saya <br />
                <span className="text-cyan-400">Sebelumnya</span> dan Nilai Sendiri
              </h2>

              <ul className="space-y-4">
                {[
                  "Aplikasi yang clean, cepat, dan jelas arah CTA-nya",
                  "Disesuaikan dengan karakter brand tiap klien",
                  "Siap langsung digunakan untuk keperluan bisnis"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side: Visual Comparison Elements */}
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-6 max-w-md mx-auto">
                {/* Negative Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl border border-cyan-500/30 bg-slate-900/50 flex items-center gap-4 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-cyan-500/20">
                    <X className="w-5 h-5 text-cyan-500" />
                  </div>
                  <span className="text-cyan-500 font-bold text-lg">Bukan Pakai Template</span>
                </motion.div>

                {/* Positive Box */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-cyan-400 flex items-center gap-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] transform translate-x-4 md:translate-x-8"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-950/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-slate-950" />
                  </div>
                  <span className="text-slate-950 font-bold text-lg">Disesuaikan dengan Kebutuhan Bisnis</span>
                </motion.div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/20 blur-[100px] -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="pt-8 pb-20 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move"></div>
        <div className="container mx-auto px-6 relative z-10">

          <div className="relative max-w-7xl mx-auto">
            {/* Projects Data */}
            {(() => {
              const projects = [
                { title: "Landing Page Sekolah", img: "/images/landingpagesekolah12.png", cat: "Web Company Profile" },
                { title: "Website Toko Online", img: "/images/websitetokoonline1.png", cat: "Toko Online" },
                { title: "Website UMKM", img: "/images/umkmwebsite1.png", cat: "Web UMKM" },
                { title: "Landing Page Travel", img: "/images/Landingpagetravel.png", cat: "Web Travel" },
                { title: "Toko Online + Payment", img: "/images/tokoonline2.png", cat: "Toko Online" },
                { title: "Landing Page Produk", img: "/images/landingpageproduk1.png", cat: "Landing Page" },
                { title: "Landing Page Jasa", img: "/images/landingpagejasa1.png", cat: "Landing Page" },
                { title: "Website Interior", img: "/images/interior1.png", cat: "Company Profile" }
              ];

              const maxIndex = Math.max(0, projects.length - itemsPerView);

              return (
                <>
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCurrentProjectIndex(prev => prev === 0 ? maxIndex : prev - 1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={() => setCurrentProjectIndex(prev => prev === maxIndex ? 0 : prev + 1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="overflow-hidden px-2" ref={carouselRef}>
                    <motion.div
                      className="flex gap-6"
                      animate={{
                        x: `calc(-${currentProjectIndex} * ((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView} + 24px))`
                      }}
                      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
                    >
                      {projects.map((item, idx) => (
                        <motion.div
                          key={idx}
                          className={`flex-shrink-0 group`}
                          style={{
                            width: itemsPerView === 1 ? "100%" : `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`
                          }}
                        >
                          <div className="relative overflow-hidden h-96 md:h-[600px] rounded-xl border border-slate-800 shadow-lg bg-slate-900 group-hover:border-cyan-500/50 transition-all">
                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover object-top origin-top transform group-hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="mt-5 text-center">
                            <h3 className="font-bold text-white text-xl mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                            <span className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs">
                              {item.cat}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Pagination Dots */}
                  <div className="flex justify-center gap-2 mt-10">
                    {Array.from({ length: projects.length - itemsPerView + 1 }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentProjectIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${currentProjectIndex === idx ? 'bg-cyan-500 w-8' : 'bg-slate-700 w-2 hover:bg-slate-600'}`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>



      {/* Pain Points Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative max-w-md mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] aspect-[5/4]">
                <div className="absolute inset-0 bg-slate-950/20 z-10"></div>
                <img
                  src="/images/foto11.png"
                  alt="Stressed Business Owner"
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-slate-900 border border-slate-800 mb-6">
                <span className="text-cyan-400 font-bold text-xs tracking-wider uppercase flex items-center gap-2">
                  PERMASALAHAN BISNIS OWNER!
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Kenapa Banyak <span className="text-cyan-400">Bisnis Online</span> <br />Gagal Tumbuh?
              </h2>

              <div className="space-y-4">
                {[
                  "Pengen mulai digital marketing, tapi bingung harus mulai dari mana.",
                  "Sudah bikin aplikasi, tapi cuma jadi pajangan tanpa hasil.",
                  "Konten susah diatur, promosi gak jalan.",
                  "Tiap mau update isi aplikasi, harus bayar orang lagi.",
                  "Uang sudah keluar banyak, tapi omzet segitu-segitu aja."
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                        <X className="w-3 h-3 text-red-500" />
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Aplikasi Bukan Sekadar Jadi, Tapi Benar-Benar Jadi <span className="text-cyan-400">Alat Bisnismu</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Saya bukan sekadar <span className="font-bold text-white">"tukang bikin aplikasi"</span>.
                Saya bantu kamu dari awal sampai akhir supaya aplikasimu:
              </p>

              <div className="space-y-4">
                {[
                  "Dibuat berdasarkan riset & strategi bisnis, bukan asal template.",
                  "Langsung siap dipakai untuk jual produk atau jasa begitu live.",
                  "Disertai video tutorial praktis supaya kamu bisa kelola sendiri, tanpa ribet panggil orang lagi.",
                  "Terintegrasi dengan kebutuhan digital marketing & branding bisnismu."
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative max-w-md mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(6,182,212,0.15)] group aspect-[5/4]">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10"></div>
                <img
                  src="/images/foto12.png"
                  alt="Professional Web Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-500/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* USP Section (Why Me) */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-cyan-200 font-bold tracking-wider uppercase text-sm">Kenapa Harus Saya?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mt-2 mb-4">Apa yang Bikin Saya Berbeda dari Jasa Aplikasi Lain?</h2>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Banyak orang bisa bikin aplikasi, tapi gak semua ngerti cara bantu bisnismu benar-benar jalan.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              {
                title: "Dibuat Sesuai Bisnismu",
                desc: "Bukan aplikasi jadi-jadian yang mirip sama orang lain.",
                icon: <Layout className="w-8 h-8" />
              },
              {
                title: "Mudah Dipakai",
                desc: "Kamu bisa update sendiri tanpa harus panggil orang setiap kali.",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Gratis Konsultasi",
                desc: "Saya gak ninggalin kamu begitu saja, ada panduan dan support.",
                icon: <MessageCircle className="w-8 h-8" />
              },
              {
                title: "Jujur dan Jelas",
                desc: "Gak ada biaya aneh-aneh, semua transparan dari awal.",
                icon: <Scale className="w-8 h-8" />
              },
              {
                title: "Terima Beres",
                desc: "Kamu fokus bisnis, saya yang beresin aplikasi. Jadi ga bikin pusing kepala.",
                icon: <ClipboardCheck className="w-8 h-8" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition-all group flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 bg-cyan-900/20 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 leading-tight">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bonus & After Sales Section */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">Bonus & After Sales</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Aplikasi selesai bukan berarti hubungan kita selesai juga.
              Saya tetap dampingi kamu biar gak bingung setelahnya.
            </p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block text-left"
            >
              <ul className="space-y-6">
                {[
                  {
                    title: "Video Panduan Lengkap",
                    desc: "Cara edit halaman, ganti foto, update produk/layanan, semua dijelaskan step by step."
                  },
                  {
                    title: "Panduan 24/7",
                    desc: "Bisa diputar ulang kapan saja kalau lupa."
                  },
                  {
                    title: "Support Ringan Pasca Proyek",
                    desc: "Kalau ada kendala kecil, saya tetap siap bantu."
                  }
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={fadeInLeft}
                    className="flex items-start gap-3 text-left"
                  >
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      <span className="block text-white font-bold text-base mb-1">{item.title}</span>
                      <span className="text-slate-300">{item.desc}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <p className="mt-10 text-slate-300 text-sm leading-relaxed italic max-w-2xl mx-auto">
              "Jadi, kamu gak perlu takut aplikasi cuma jadi pajangan. Kamu benar-benar bisa pakai aplikasimu untuk jalanin bisnis sehari-hari."
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-slate-950 py-20 px-6 relative">
        <div className="max-w-5xl mx-auto bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-800 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-2">Formulir Serius</h2>

            <p className="mt-4 text-slate-300 text-sm leading-relaxed">
              Saya hanya ingin bekerja dengan orang yang serius ingin scale bisnisnya.
              <br />
              <strong className="text-white">Kalau kamu siap, isi formulir di bawah ini:</strong>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nama Lengkap"
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-slate-950 text-white focus:bg-slate-950 placeholder-slate-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Aktif</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email Aktif Anda"
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-slate-950 text-white focus:bg-slate-950 placeholder-slate-600"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-300 mb-2">WhatsApp</label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                placeholder="WhatsApp Aktif Anda (Agar bisa dihubungi)"
                value={formState.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-slate-950 text-white focus:bg-slate-950 placeholder-slate-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Deskripsi Kebutuhan</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Jelaskan Secara Singkat Kebutuhan Aplikasi Anda"
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all bg-slate-950 text-white focus:bg-slate-950 placeholder-slate-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              Saya Siap Bangun Aplikasi
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto bg-slate-950">
        <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400">Pertanyaan Yang Sering Ditanyakan</h2>
        <div className="space-y-4">
          <AccordionItem
            question="Bisa konsultasi dulu sebelum mulai?"
            answer="Tentu. Setelah kamu isi form, saya akan hubungi untuk ngobrol santai dan memahami kebutuhan bisnismu."
          />
          <AccordionItem
            question="Berapa lama pengerjaan aplikasi?"
            answer="Rata-rata 7–14 hari kerja, tergantung fitur dan seberapa kompleks aplikasinya."
          />
          <AccordionItem
            question="Saya gaptek, apa bisa kelola aplikasi sendiri?"
            answer="Justru itu saya bantu. Kamu akan dapat video panduan lengkap yang gampang diikuti, jadi bisa update sendiri kapan saja."
          />
          <AccordionItem
            question="Bisa request desain sesuai brand saya?"
            answer="Bisa banget. Aplikasi dibuat menyesuaikan warna, gaya, dan identitas bisnismu."
          />
          <AccordionItem
            question="Ada support setelah website selesai?"
            answer="Ya, saya gak akan ninggalin kamu. Ada support ringan + panduan yang bisa kamu pakai 24/7."
          />
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285363407399?text=Halo+Kak%21+Saya+mau+bikin+aplikasi+yaa%21"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 hover:opacity-90 transition-opacity"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          className="w-14 h-14"
        />
      </a>
    </div>
  );
};

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 rounded-lg shadow-sm border border-slate-800 overflow-hidden hover:shadow-md transition-shadow group hover:border-cyan-500/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-800 transition-colors"
      >
        <span className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-cyan-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default BizContent;
