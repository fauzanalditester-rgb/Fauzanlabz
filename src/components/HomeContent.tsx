import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, Zap, Shield, Layout, ClipboardCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomeContent = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
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

  const [activeTab, setActiveTab] = useState('Landing Page');

  const pricingCategories = [
    'Landing Page',
    'Web Company Profile',
    'Web Travel & Tour',
    'Web Toko Online',
    'Optimasi SEO',
    'Optimasi Ads',
    'Social Media Management'
  ];

  const pricingData = {
    'Landing Page': [
      {
        name: 'STARTER',
        desc: 'Cocok untuk bisnis baru yang ingin langsung tampil online.',
        price: '1.500.000',
        features: [
          "Free Domain (.com)",
          "Shared Hosting (6 Bulan)",
          "Desain Responsif (Mobile & Desktop)",
          "1 Halaman Landing Page (scroll panjang)",
          "1 Email Bisnis",
          "1 GB Disk Storage",
          "Free SSL",
          "1x Revisi Gratis",
          "Garansi Maintenance 15 Hari",
          "Video Panduan Akses Website"
        ],
        isBestSeller: false
      },
      {
        name: 'GROWTH',
        desc: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.',
        price: '2.750.000',
        features: [
          "Semua yang ada di Starter, plus:",
          "Hosting 1 Tahun",
          "Desain Visual Lebih Kompleks (CTA, Form, Galeri)",
          "Direct WhatsApp Chat",
          "2 Email Bisnis",
          "10 GB Disk Storage",
          "3x Revisi Gratis",
          "Free SSL",
          "SEO On-Page Basic",
          "Garansi Maintenance 1 Bulan"
        ],
        isBestSeller: true
      },
      {
        name: 'ULTIMATE',
        desc: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.',
        price: '3.750.000',
        features: [
          "Semua yang ada di Growth, plus:",
          "Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)",
          "Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)",
          "Desain Interaktif (Animated Scroll, Parallax, dll)",
          "Speed Optimization (Lazy Load + Caching Tools)",
          "5x Revisi Gratis",
          "Garansi Maintenance 1,5 Bulan"
        ],
        isBestSeller: false
      }
    ],
    'Web Company Profile': [
      {
        name: 'BASIC',
        desc: 'Company profile sederhana untuk membangun kredibilitas awal.',
        price: '2.000.000',
        features: [
          "Free Domain (.com)",
          "Hosting 1 Tahun",
          "Hingga 5 Halaman Utama",
          "Desain Clean & Professional",
          "Mobile Friendly",
          "Integrasi Google Maps",
          "Tombol WhatsApp",
          "2x Revisi"
        ],
        isBestSeller: false
      },
      {
        name: 'BUSINESS',
        desc: 'Paket standar perusahaan dengan fitur lebih lengkap.',
        price: '3.500.000',
        features: [
          "Semua fitur Basic",
          "Hingga 10 Halaman",
          "Fitur Blog / Berita Terbaru",
          "Galeri Foto & Video",
          "3 Email Bisnis Professional",
          "SEO On-Page Basic",
          "Google Analytics Setup",
          "3x Revisi"
        ],
        isBestSeller: true
      },
      {
        name: 'CORPORATE',
        desc: 'Solusi lengkap untuk perusahaan skala menengah ke atas.',
        price: '5.500.000',
        features: [
          "Unlimited Halaman (Fair Usage)",
          "Desain Premium Custom",
          "Fitur Multibahasa (ID/EN)",
          "Integrasi CRM (Opsional)",
          "Priority Support",
          "Training Admin Website",
          "Maintenance 3 Bulan",
          "5x Revisi"
        ],
        isBestSeller: false
      }
    ],
    'Web Travel & Tour': [
      {
        name: 'TRAVEL LITE',
        desc: 'Website travel basic untuk menampilkan paket wisata.',
        price: '2.500.000',
        features: [
          "Free Domain & Hosting 1 Tahun",
          "Listing Paket Wisata",
          "Detail Itinerary Harian",
          "Booking via WhatsApp",
          "Galeri Destinasi",
          "Mobile Responsive",
          "2x Revisi"
        ],
        isBestSeller: false
      },
      {
        name: 'TRAVEL PRO',
        desc: 'Website travel profesional dengan fitur pencarian paket.',
        price: '4.500.000',
        features: [
          "Semua fitur Lite",
          "Filter Pencarian Paket",
          "Kategori (Open Trip, Private, Honeymoon)",
          "Testimoni Video Youtube",
          "Blog Travel Guide",
          "SEO Travel Basic",
          "Integrasi Google Maps API",
          "Maintenance 1 Bulan"
        ],
        isBestSeller: true
      },
      {
        name: 'TRAVEL ELITE',
        desc: 'Sistem travel agent lengkap dengan fitur booking engine.',
        price: '7.500.000',
        features: [
          "Custom Design Premium",
          "Sistem Booking Online (Form)",
          "Hitung Harga Otomatis (Pax)",
          "Database Pelanggan",
          "Email Konfirmasi Otomatis",
          "Payment Gateway Ready (Midtrans/Xendit)",
          "Training Pengelolaan Website",
          "Prioritas Support"
        ],
        isBestSeller: false
      }
    ],
    'Web Toko Online': [
      {
        name: 'SHOP START',
        desc: 'Toko online simpel dengan checkout ke WhatsApp.',
        price: '2.500.000',
        features: [
          "Free Domain & Hosting 1 Tahun",
          "Upload hingga 50 Produk",
          "Kategori Produk",
          "Checkout Langsung ke WhatsApp",
          "Desain Mobile First",
          "Tombol Chat CS",
          "Tutorial Upload Produk"
        ],
        isBestSeller: false
      },
      {
        name: 'SHOP GROW',
        desc: 'Toko online dengan keranjang belanja dan hitung ongkir.',
        price: '4.500.000',
        features: [
          "Upload hingga 500 Produk",
          "Sistem Keranjang Belanja (Cart)",
          "Integrasi Ongkir Otomatis (RajaOngkir)",
          "Manajemen Stok Sederhana",
          "Laporan Penjualan Basic",
          "Kupon Diskon",
          "SEO Produk Basic"
        ],
        isBestSeller: true
      },
      {
        name: 'SHOP MALL',
        desc: 'E-commerce lengkap dengan payment gateway otomatis.',
        price: '8.000.000',
        features: [
          "Unlimited Produk",
          "Payment Gateway (OVO, Dana, QRIS, VA)",
          "Member Area & Wishlist",
          "Flash Sale System",
          "Integrasi Facebook Pixel / TikTok Pixel",
          "Laporan Penjualan Lengkap",
          "Aplikasi Android (Webview)",
          "Maintenance 2 Bulan"
        ],
        isBestSeller: false
      }
    ],
    'Optimasi SEO': [
      {
        name: 'SEO BASIC',
        desc: 'Fondasi SEO untuk website baru agar terindeks Google.',
        price: '1.500.000',
        features: [
          "Audit Website Sederhana",
          "Riset 5 Keyword Utama",
          "Optimasi Meta Title & Description",
          "Setup Google Search Console",
          "Setup Google Analytics",
          "Submit Sitemap XML",
          "Perbaikan Broken Link"
        ],
        isBestSeller: false
      },
      {
        name: 'SEO GROWTH',
        desc: 'Meningkatkan ranking kata kunci di halaman pencarian.',
        price: '3.000.000',
        features: [
          "Deep Site Audit",
          "Riset 15 Keyword Potensial",
          "Optimasi Konten On-Page",
          "Optimasi Kecepatan Website",
          "5 Artikel SEO Friendly / Bulan",
          "Backlink Profile Building (Basic)",
          "Laporan Bulanan"
        ],
        isBestSeller: true
      },
      {
        name: 'SEO AUTHORITY',
        desc: 'Dominasi pasar dengan strategi SEO komprehensif.',
        price: '5.500.000',
        features: [
          "Strategi Keyword Kompetitif",
          "Technical SEO Advanced",
          "10 Artikel Pilar / Bulan",
          "High Authority Backlink (PBN/Media)",
          "Competitor Analysis",
          "Local SEO (Google Maps Optimization)",
          "Konsultasi Strategi Konten",
          "Laporan Analitik Mendalam"
        ],
        isBestSeller: false
      }
    ],
    'Optimasi Ads': [
      {
        name: 'ADS SETUP',
        desc: 'Setup akun iklan yang benar untuk menghindari boncos.',
        price: '1.000.000',
        features: [
          "Setup Akun Google/FB Ads",
          "Instalasi Pixel / Tag Manager",
          "Riset Audience / Keyword",
          "Setup 1 Campaign Iklan",
          "Copywriting Iklan Basic",
          "Monitoring 1 Minggu"
        ],
        isBestSeller: false
      },
      {
        name: 'ADS MANAGED',
        desc: 'Jasa kelola iklan bulanan untuk hasil maksimal.',
        price: '2.500.000',
        features: [
          "Management Fee (Diluar Budget Iklan)",
          "Setup Multi Campaign (A/B Testing)",
          "Desain Banner Iklan (3 variasi)",
          "Copywriting Persuasif",
          "Optimasi Bid & Budget Harian",
          "Laporan Performa Mingguan",
          "Strategi Retargeting"
        ],
        isBestSeller: true
      },
      {
        name: 'ADS SCALING',
        desc: 'Fokus scaling untuk meningkatkan omzet bisnis.',
        price: '4.500.000',
        features: [
          "Advanced Funnel Strategy",
          "Custom Audience Creation",
          "Landing Page Optimization Advice",
          "Video Ads Creative Editing",
          "Cross-Platform Ads (FB + IG + Google)",
          "Real-time Dashboard Report",
          "Konsultasi Bisnis Digital"
        ],
        isBestSeller: false
      }
    ],
    'Social Media Management': [
      {
        name: 'SOSMED STARTER',
        desc: 'Menjaga akun tetap aktif dengan konten rutin.',
        price: '1.500.000',
        features: [
          "12 Feed Design / Bulan",
          "Caption Copywriting",
          "Riset Hashtag Relevan",
          "Admin Posting Terjadwal",
          "Revisi Desain Minor",
          "Laporan Akhir Bulan"
        ],
        isBestSeller: false
      },
      {
        name: 'SOSMED PRO',
        desc: 'Meningkatkan engagement dan branding bisnis.',
        price: '3.000.000',
        features: [
          "20 Feed Design / Bulan",
          "4 Reels Video (Editing Basic)",
          "Content Planning & Strategy",
          "Interaksi Dasar (Reply Comment)",
          "Optimasi Bio & Highlight",
          "Laporan Insight Bulanan"
        ],
        isBestSeller: true
      },
      {
        name: 'SOSMED ELITE',
        desc: 'Full service social media handling.',
        price: '5.500.000',
        features: [
          "Daily Content (Feed/Story)",
          "8 Reels Video (High Quality)",
          "Professional Photoshoot (Produk dikirim)",
          "Admin Respon Chat & Comment",
          "Kolaborasi Influencer (Management)",
          "Monthly Strategy Meeting",
          "Laporan Pertumbuhan Akun"
        ],
        isBestSeller: false
      }
    ]
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f61a,transparent)]"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >

            <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
              ʙᴜɪʟᴅ ᴄᴜꜱᴛᴏᴍ ᴀᴘᴘs <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ʙᴀsᴇᴅ ᴏɴ ʏᴏᴜʀ ʀᴇǫᴜᴇsᴛ</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Punya <span className="text-cyan-400 font-bold">ide aplikasi hebat</span> untuk bisnis tapi terhambat masalah teknis? Cukup ceritakan konsepnya, biarkan kami yang <span className="text-cyan-400 font-bold">bangun sistemnya sampai siap pakai</span>.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => navigate('/bantu-bisnis')}
                className="bg-cyan-500 text-slate-950 font-bold py-4 px-10 rounded-full hover:bg-cyan-400 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
              >
                <Zap size={20} className="fill-slate-950" />
                Mulai Proyek Sekarang
              </button>
              <button
                onClick={() => navigate('/bantu-bisnis#portfolio-section')}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-slate-300 font-bold py-4 px-10 rounded-full hover:bg-slate-800 hover:text-white transition-all"
              >
                Lihat Portfolio
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[80px] fill-slate-900">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Tentang <span className="text-cyan-400">FauzanLabz</span> </h2>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  <strong className="text-white">FauzanLabz</strong> adalah layanan <em className="text-cyan-400 not-italic">jasa pembuatan aplikasi custom</em> yang dikelola oleh saya, Fauzan Aldi seorang developer yang fokus membantu UMKM dan bisnis lokal membangun sistem digital yang rapi, cepat, dan siap dipakai operasional.
                </p>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  Mulai dari aplikasi mobile, web app dashboard, sampai sistem kasir (POS), saya siap bantu kamu punya aplikasi yang:
                </p>

                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Desain UI/UX modern, jelas, dan mudah dipakai",
                    "Fitur dibuat sesuai alur kerja bisnis kamu",
                    "Siap integrasi (pembayaran, WhatsApp, admin panel) sesuai kebutuhan"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInLeft}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                      <span className="text-sm text-slate-200 font-medium leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="grid grid-cols-2 gap-6 mt-12"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={scaleUp} className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                      <div className="text-slate-400 text-sm">Proyek Selesai</div>
                    </motion.div>
                  </motion.div>
                  <motion.div variants={scaleUp} className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                      <div className="text-slate-400 text-sm">Klien Puas</div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                alt="Coding Setup"
                className="relative rounded-2xl shadow-2xl border border-slate-700/50"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kenapa Harus <span className="text-cyan-400">FauzanLabz?</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Inilah alasan kenapa banyak klien puas dengan FauzanLabz:</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Free Copywriting",
                desc: "Bukan cuma bikin aplikasi. Kami bantu rapikan flow fitur, CTA, dan narasi supaya user paham dan mau pakai.",
                icon: <Code size={32} />
              },
              {
                title: "Kualitas Terjamin",
                desc: "Aplikasi dibuat dengan standar rapi: performa oke, UI jelas, dan mudah dikembangkan ke versi berikutnya.",
                icon: <CheckCircle size={32} />
              },
              {
                title: "Tinggal Terima Beres",
                desc: "Mulai dari perencanaan, desain, development, sampai rilis. Kamu tinggal fokus ke bisnis.",
                icon: <Shield size={32} />
              },
              {
                title: "Full Support",
                desc: "Butuh revisi atau ada kendala? Kami siap bantu bahkan setelah aplikasi live.",
                icon: <Zap size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all text-center group hover:border-cyan-500/50"
              >
                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-cyan-500/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Custom Services Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ʟᴀʏᴀɴᴀɴ <span className="text-cyan-400">ᴄᴜsᴛᴏᴍ sᴏғᴛᴡᴀʀᴇ</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Solusi digital yang dibuat khusus mengikuti alur bisnis unik Anda.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Sistem Manajemen Internal (ERP)",
                desc: "Satukan urusan stok, keuangan, dan karyawan dalam satu aplikasi. Tidak ada lagi data yang berantakan di kertas atau Excel.",
                icon: <Layout size={32} />
              },
              {
                title: "Bangun Produk Digital (SaaS)",
                desc: "Wujudkan ide startup Anda menjadi platform siap pakai yang bisa diakses ribuan orang.",
                icon: <Zap size={32} />
              },
              {
                title: "Sistem Kasir Pintar (POS)",
                desc: "Kelola transaksi dan laporan harian lebih cepat, ringan, dan akurat di setiap cabang.",
                icon: <ClipboardCheck size={32} />
              },
              {
                title: "Pusat Data & Laporan (Dashboard)",
                desc: "Lihat perkembangan bisnis secara real-time lewat grafik yang mudah dipahami di HP atau Laptop.",
                icon: <Code size={32} />
              },
              {
                title: "Aplikasi Mobile (Android & iOS)",
                desc: "Buat bisnismu lebih profesional dan mudah dijangkau pelanggan langsung dari smartphone mereka.",
                icon: <Shield size={32} />
              },
              {
                title: "Sistem Keamanan & Integrasi",
                desc: "Pastikan data aman dari hacker dan terhubung otomatis dengan sistem pembayaran atau WhatsApp.",
                icon: <CheckCircle size={32} />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all group hover:border-cyan-500/50"
              >
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-cyan-500/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors mb-6">{item.desc}</p>
                <a
                  href={`https://wa.me/6285363407399?text=Halo%20kak!%20Saya%20tertarik%20mau%20buat%20${encodeURIComponent(item.title)}%20yaa...!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors group/btn"
                >
                  Konsultasi Sekarang
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Pricing Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricelist <span className="text-cyan-400">Layanan</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm leading-relaxed">Solusi lengkap untuk bantu bisnis anda eksis di dunia digital!</p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-3 p-2 rounded-2xl max-w-5xl mx-auto backdrop-blur-sm">
              {pricingCategories.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-105' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab} // Add key to trigger animation on tab change
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {pricingData[activeTab as keyof typeof pricingData]?.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={`bg-slate-900 rounded-2xl shadow-lg border overflow-hidden flex flex-col transition-all group ${pkg.isBestSeller ? 'border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.1)] transform md:-translate-y-4 z-10' : 'border-slate-800 hover:border-cyan-500/30'}`}
              >
                {pkg.isBestSeller && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                    Best Seller
                  </div>
                )}
                <div className="p-8 flex-grow">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.isBestSeller ? 'text-cyan-400' : 'text-slate-300'}`}>/ {pkg.name}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{pkg.desc}</p>
                  <div className="mb-6">
                    <span className="text-sm text-slate-500 align-top">Rp</span>
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <motion.ul
                    className="space-y-4 mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {pkg.features.map((feature, i) => (
                      <motion.li key={i} variants={fadeInLeft} className={`flex items-start gap-3 text-sm transition-colors ${pkg.isBestSeller ? 'text-slate-300 font-medium' : 'text-slate-400 group-hover:text-slate-300'}`}>
                        <CheckCircle size={16} className={`${pkg.isBestSeller ? 'text-cyan-400' : 'text-cyan-500'} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <a
                    href={`https://wa.me/6285363407399?text=Halo%20kak!%20Saya%20tertarik%20dengan%20paket%20${pkg.name}%20untuk%20${activeTab}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center w-full py-3 px-6 rounded-lg font-bold transition-all text-sm ${pkg.isBestSeller ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25' : 'border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50'}`}
                  >
                    Order Sekarang
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-center relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Siap Punya Aplikasi untuk <span className="text-cyan-400">Bisnismu?</span></h2>
            <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              FauzanLabz siap bantu kamu punya aplikasi yang rapi, cepat, dan siap dipakai untuk operasional maupun jualan online. <br className="hidden md:block" />
              Mulai dari aplikasi katalog produk, order, sistem kasir (POS), sampai dashboard admin. <span className="text-white font-medium">Semua dibuat sesuai kebutuhan bisnis kamu.</span>
            </p>
            <p className="text-cyan-300 text-lg font-bold mb-10">
              &gt; Gratis konsultasi & penawaran cepat via WhatsApp!
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6285363407399&text=Halo%20kak!%20Saya%20tertarik%20mau%20buat%20aplikasi%20yaa...!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-500 text-slate-950 font-bold py-4 px-12 rounded-full hover:bg-cyan-400 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(6,182,212,0.4)] text-lg group"
            >
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
              Konsultasi via WhatsApp
            </a>
          </motion.div>
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

export default HomeContent;
