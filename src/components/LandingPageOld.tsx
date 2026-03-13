import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Check, Plus, Minus, Phone, ArrowUp, Briefcase, Handshake, Scale, ListTodo, Wrench } from 'lucide-react';
import { Play } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path: string, id?: string) => {
    if (location.pathname !== path) {
      navigate(path);
      if (id) {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      if (id) {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const portfolioItems = [
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Landing-Page-Travel-Simple-scaled.webp',
      title: 'Landing Page Travel',
      category: 'Travel',
      description: 'Landing page travel dengan desain visual yang kuat dan informatif'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Travel-Tour-scaled.webp',
      title: 'Website Travel Tour',
      category: 'Travel',
      description: 'Website tour & travel lengkap dengan fitur booking'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Interior-Design-scaled.webp',
      title: 'Website Interior Design',
      category: 'Services',
      description: 'Website jasa interior dengan galeri portofolio yang elegan'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Landing-Page-Sekolah-scaled.webp',
      title: 'Landing Page Sekolah',
      category: 'Education',
      description: 'Landing page pendaftaran sekolah yang informatif'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Landing-Page-Toko-Online-scaled.webp',
      title: 'Landing Page Toko Online',
      category: 'E-Commerce',
      description: 'Landing page untuk promosi produk toko online'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Toko-Online-scaled.webp',
      title: 'Website Toko Online',
      category: 'E-Commerce',
      description: 'Toko online full fitur dengan katalog produk'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Toko-Online-Paymen.webp',
      title: 'Toko Online + Payment',
      category: 'E-Commerce',
      description: 'Toko online dengan integrasi payment gateway'
    }
  ];

  const adResults = [
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Iklan-300rb.webp',
      title: 'Iklan 375 Ribu Dapet Leads 89'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Iklan-2.webp',
      title: 'Iklan 1.7 Juta Dapet Omset 2.8 Juta'
    },
    {
      image: 'https://fauzanlabz.my.id/wp-content/uploads/2025/08/Iklan-140-Ribu.webp',
      title: 'Iklan 140 Ribu Dapet Banyak Leads'
    }
  ];

  const testimonials = [
    {
      name: 'Budi Santoso',
      business: 'Owner - Toko Furniture',
      image: '/images/interior1.png',
      text: 'Website yang dibuat sangat profesional dan membantu bisnis saya berkembang pesat!'
    },
    {
      name: 'Siti Rahayu',
      business: 'Founder - Fashion Store',
      image: '/images/landingpageproduk1.png',
      text: 'Pelayanan sangat memuaskan, hasil sesuai ekspektasi bahkan lebih!'
    }
  ];

  const problems = [
    {
      title: 'Konten susah diatur, promosi gak jalan.',
      solution: 'Dibuat berdasarkan riset & strategi bisnis, bukan asal template.'
    },
    {
      title: 'Tiap mau update isi website, harus bayar orang lagi.',
      solution: 'Disertai video tutorial praktis supaya kamu bisa kelola sendiri, tanpa ribet panggil orang lagi.'
    },
    {
      title: 'Uang sudah keluar banyak, tapi omzet segitu-segitu aja.',
      solution: 'Langsung siap dipakai untuk jual produk atau jasa begitu live.'
    }
  ];

  const benefits = [
    {
      title: 'Dibuat Sesuai Bisnismu',
      description: 'Bukan website jadi-jadian yang mirip sama orang lain.',
      icon: Briefcase
    },
    {
      title: 'Mudah Dipakai',
      description: 'Kamu bisa update sendiri tanpa harus panggil orang setiap kali.',
      icon: Wrench
    },
    {
      title: 'Gratis Konsultasi',
      description: 'Saya gak ninggalin kamu begitu saja, ada panduan dan support.',
      icon: Handshake
    },
    {
      title: 'Jujur dan Jelas',
      description: 'Gak ada biaya aneh-aneh, semua transparan dari awal.',
      icon: Scale
    },
    {
      title: 'Terima Beres',
      description: 'Kamu fokus bisnis, saya yang beresin website. Jadi ga bikin pusing kepala',
      icon: ListTodo
    }
  ];

  const bonuses = [
    'Gratis Domain .com (1 Tahun)',
    'Gratis Hosting (1 Tahun)',
    'Gratis SSL (Keamanan Website)',
    'Gratis Konsultasi Selamanya',
    'Video Panduan Edit Website'
  ];

  const faqs = [
    {
      question: 'Bisa konsultasi dulu sebelum mulai?',
      answer: 'Tentu. Setelah kamu isi form, saya akan hubungi untuk ngobrol santai dan memahami kebutuhan bisnismu.'
    },
    {
      question: 'Berapa lama pengerjaan website?',
      answer: 'Rata-rata 7–14 hari kerja, tergantung fitur dan seberapa kompleks websitenya.'
    },
    {
      question: 'Saya gaptek, apa bisa kelola website sendiri?',
      answer: 'Justru itu saya bantu. Kamu akan dapat video panduan lengkap yang gampang diikuti, jadi bisa update sendiri kapan saja.'
    },
    {
      question: 'Bisa request desain sesuai brand saya?',
      answer: 'Bisa banget. Website dibuat menyesuaikan warna, gaya, dan identitas bisnismu.'
    },
    {
      question: 'Ada support setelah website selesai?',
      answer: 'Ya, saya gak akan ninggalin kamu. Ada support ringan + panduan yang bisa kamu pakai 24/7.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">FauzanLabz</div>

            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => goTo('/', 'portfolio')} className="text-blue-600 font-medium hover:text-blue-800 transition">Bantu Bisnis Kamu Jualan Online Lewat Website</button>
              <button onClick={() => goTo('/pricing', 'top')} className="text-gray-600 font-medium hover:text-blue-600 transition">Jasa Pembuatan Website Profesional</button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 bg-white border-t border-gray-100">
              <button onClick={() => { setIsMenuOpen(false); goTo('/', 'portfolio'); }} className="block w-full text-left px-4 py-2 text-blue-600 font-medium">Bantu Bisnis Kamu Jualan Online Lewat Website</button>
              <button onClick={() => { setIsMenuOpen(false); goTo('/pricing', 'top'); }} className="block w-full text-left px-4 py-2 text-gray-600 font-medium">Jasa Pembuatan Website Profesional</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA..."
          >
            <source src="https://fauzanlabz.my.id/wp-content/uploads/2025/08/daystarbg-1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 z-20 text-center max-w-5xl relative">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <span className="text-[#fffe1f]">Naikkan Omset & Profesionalisme</span><br />
            Bisnismu Lewat Website yang Kerja 24/7
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto">
            Saya bantu kamu bangun website yang gak cuma keren, tapi juga siap pakai dan mudah kamu kelola sendiri. Sudah lebih dari <span className="text-[#fffe1f] font-bold">50+ bisnis saya bantu untuk masuk ke dunia digital marketing secara praktis.</span>
          </p>

          <div className="flex justify-center mb-12">
            <a
              href="#form"
              className="bg-[#fffe1f] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition shadow-[0_5px_10px_0_rgba(255,254,31,0.5)]"
            >
              Buat Website Sekarang!
            </a>
          </div>

          {/* Video Placeholder */}
          <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-[#fffe1f]/20 bg-black aspect-video group cursor-pointer" onClick={() => setOpen(true)}>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition z-10"></div>
            <img src="https://fauzanlabz.my.id/wp-content/uploads/2025/08/Thumbnail-LP.webp" alt="Video Thumbnail" className="w-full h-full object-cover opacity-80" />

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-[#fffe1f] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,254,31,0.6)] animate-pulse">
                <Play className="w-8 h-8 text-black ml-1 fill-black" />
              </div>
            </div>
          </div>

          {/* Modal Video */}
          {open && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-4">
              <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
                <button
                  onClick={(e) => { e.stopPropagation(); setOpen(false); }}
                  className="absolute top-4 right-4 text-white hover:text-[#fffe1f] z-50 bg-black/50 rounded-full p-2"
                >
                  <X size={24} />
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/uN8OG6u5hqk?autoplay=1"
                  title="YouTube video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Previous Work Section */}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-bold text-gray-900 mb-2">MASIH GA PERCAYA SAMA HASILNYA? 👀</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="bg-yellow-400 px-2 text-black">Lihat Hasil Kerja Saya</span> Sebelumnya dan Nilai Sendiri
            </h2>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 text-left max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <Check className="text-gray-800 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Website yang clean, cepat, dan jelas arah CTA-nya</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-gray-800 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Disesuaikan dengan karakter brand tiap klien</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-gray-800 w-6 h-6 flex-shrink-0" />
                <span className="text-lg">Siap langsung digunakan untuk keperluan bisnis</span>
              </div>
            </div>

            <div className="flex justify-end gap-4 max-w-4xl mx-auto mb-12">
              <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded text-sm font-bold text-gray-700">
                <X className="w-4 h-4" /> Bukan Pakai Template
              </button>
              <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded text-sm font-bold text-gray-700">
                <Check className="w-4 h-4" /> Disesuaikan dengan Kebutuhan Bisnis
              </button>
            </div>
          </div>

          <div className="relative max-w-full mx-auto mb-20 overflow-hidden">
            <div className="flex overflow-hidden relative fade-mask-x">
              <motion.div
                className="flex gap-4 min-w-full"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30, // Adjust speed here, higher = slower
                    ease: "linear",
                  },
                }}
              >
                {[...portfolioItems, ...portfolioItems].map((item, index) => (
                  <div key={index} className="min-w-[300px] md:min-w-[400px] flex-shrink-0 p-2">
                    <div className="bg-gray-50 rounded-xl overflow-hidden h-full flex flex-col border border-gray-200 hover:border-blue-500 transition-colors">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full aspect-[1517/2560] object-cover object-top"
                      />
                      <div className="p-4 bg-white border-t border-gray-100 flex-grow">
                        <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{item.category}</span>
                        <h3 className="text-lg font-bold mt-1 mb-2 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Ad Results Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
              <span className="text-[#fffe1f] bg-black px-2">Hasil</span> Iklan Client
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {adResults.map((item, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                  <img src={item.image} alt={item.title} className="w-full h-auto" />
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-center">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-yellow-400">150+ Klien</span> Telah Percaya
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black border border-yellow-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-xl mb-2">Website Selesai</div>
              <p className="text-gray-400">Berbagai industri dan skala bisnis</p>
            </div>
            <div className="bg-black border border-yellow-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-xl mb-2">Tingkat Kepuasan</div>
              <p className="text-gray-400">Client puas dengan hasil kerja kami</p>
            </div>
            <div className="bg-black border border-yellow-500/20 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-xl mb-2">Rating Review</div>
              <p className="text-gray-400">Dari testimoni client kami</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-yellow-400">Testimonial</span> Client
          </h2>
          <p className="text-gray-400 text-center mb-12">Langsung dari client yang telah sukses dengan website kami</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden border border-yellow-500/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-64 object-cover bg-gray-800"
                  loading="lazy"
                />
                <div className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-bold text-yellow-400">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* Masalah Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-red-500">Masalah</span> yang Sering Dialami Pemilik Bisnis
              </h2>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 bg-gray-900/50 p-4 rounded-lg border border-red-500/20">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold">
                        ✕
                      </div>
                    </div>
                    <p className="text-lg text-gray-300">{problem.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solusi Section */}
            <div>
              <div className="mb-6">
                <p className="font-bold text-gray-400 mb-2 uppercase tracking-wider">Solusi Digital Yang Saya Tawarkan</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Website Bukan Sekadar Jadi, Tapi Benar-Benar Jadi <span className="text-[#fffe1f]">Alat Bisnismu</span>
                </h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Saya bukan sekadar <span className="text-[#fffe1f] font-bold italic">"tukang bikin website"</span>.
                  Saya bantu kamu dari awal sampai akhir supaya websitemu:
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="text-[#fffe1f] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Dibuat berdasarkan riset & strategi bisnis, bukan asal template.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#fffe1f] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Langsung siap dipakai untuk jual produk atau jasa begitu live.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#fffe1f] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Disertai video tutorial praktis supaya kamu bisa kelola sendiri, tanpa ribet panggil orang lagi.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-[#fffe1f] w-6 h-6 flex-shrink-0 mt-1" />
                  <span className="text-lg">Terintegrasi dengan kebutuhan digital marketing & branding bisnismu.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="layanan" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Apa yang <span className="text-yellow-400">Bikin Saya Berbeda</span> dari Jasa Website Lain?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-400 transition transform hover:scale-105">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-black font-bold" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-yellow-400">Bonus & After Sales</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Website selesai bukan berarti hubungan kita selesai juga.<br />Saya tetap dampingi kamu biar gak bingung setelahnya.</p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-8">
              <div className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                      <Check size={16} className="text-black font-bold" />
                    </div>
                    <p className="text-gray-200 text-lg">{bonus}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-300 text-center">
                  Jadi, kamu gak perlu takut website cuma jadi pajangan. Kamu benar-benar bisa pakai websitemu untuk jalanin bisnis sehari-hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="text-yellow-400">Formulir Serius</span>
            </h2>
            <p className="text-gray-400 text-center mb-12">
              Saya hanya ingin bekerja dengan orang yang serius ingin scale bisnisnya.<br />
              <span className="text-[#fffe1f] font-bold">Kalau kamu siap, isi formulir di bawah ini:</span>
            </p>

            <form className="bg-gray-900 rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="Nama Lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Aktif</label>
                <input
                  type="email"
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="Email Aktif Anda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">WhatsApp</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="WhatsApp Aktif Anda (Agar bisa dihubungi)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Deskripsi Singkat Kebutuhan Website</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-yellow-400 focus:outline-none"
                  placeholder="Jelaskan Secara Singkat Kebutuhan Website Anda"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition transform hover:scale-105"
              >
                Saya Siap Bangun Website
              </button>

              <p className="text-sm text-gray-400 text-center">
                Data Anda aman dan tidak akan disebarkan ke pihak ketiga
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-yellow-400">FAQ</span>
          </h2>
          <p className="text-gray-400 text-center mb-12">Pertanyaan Yang Sering Ditanyakan</p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-yellow-500/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800 transition"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {expandedFaq === index ? (
                    <Minus size={20} className="text-yellow-400 flex-shrink-0" />
                  ) : (
                    <Plus size={20} className="text-yellow-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-yellow-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">FauzanLabz</h3>
              <p className="text-gray-400">
                Jasa pembuatan website profesional untuk membantu bisnis Anda berkembang di era digital.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => goTo('/', 'portfolio')} className="hover:text-yellow-400 transition text-left">Portfolio</button></li>
                <li><button onClick={() => goTo('/', 'layanan')} className="hover:text-yellow-400 transition text-left">Layanan</button></li>
                <li><button onClick={() => goTo('/pricing', 'top')} className="hover:text-yellow-400 transition text-left">Harga</button></li>
                <li><button onClick={() => goTo('/', 'kontak')} className="hover:text-yellow-400 transition text-left">Kontak</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: 0853-6340-7399</li>
                <li>Email: hello@fauzanlabz.my.id</li>
                <li>Jam Kerja: 09:00 - 21:00 WIB</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FauzanLabz.</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/6285363407399?text=Halo+Kak%21+Saya+mau+bikin+website+yaa%21"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110 z-50"
        aria-label="WhatsApp"
      >
        <Phone size={28} />
      </a>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
