import { useState } from 'react';
import { Check, Phone, X, Menu, Star, Edit, CheckCircle, PenTool, Handshake, ShoppingCart } from 'lucide-react';

const PricingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Landing Page');

  const tabs = [
    'Landing Page',
    'Web Company Profile',
    'Web Travel & Tour',
    'Web Toko Online',
    'Optimasi SEO',
    'Optimasi Ads',
    'Socal Media Management'
  ];

  const defaultPackages = [
    {
      name: 'Starter',
      price: 'Rp 1.500.000',
      badge: '',
      description: 'Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.',
      features: [
        { text: 'Free Domain (.com)', included: true },
        { text: 'Shared Hosting (6 Bulan)', included: true },
        { text: 'Desain Responsif (Mobile & Desktop)', included: true },
        { text: '1 Halaman Landing Page (scroll panjang)', included: true },
        { text: '1 Email Bisnis', included: true },
        { text: '1 GB Disk Storage', included: true },
        { text: 'Free SSL', included: true },
        { text: '1x Revisi Gratis', included: true },
        { text: 'Garansi Maintenance 15 Hari', included: true },
        { text: 'Video Panduan Akses Website', included: true }
      ],
      notes: 'Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.'
    },
    {
      name: 'Growth',
      price: 'Rp 2.750.000',
      badge: 'RECOMMENDED',
      popular: true,
      description: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.',
      features: [
        { text: 'Semua yang ada di Starter, plus:', included: true, bold: true },
        { text: 'Hosting 1 Tahun', included: true },
        { text: 'Desain Visual Lebih Kompleks (CTA, Form, Galeri)', included: true },
        { text: 'Direct WhatsApp Chat', included: true },
        { text: '2 Email Bisnis', included: true },
        { text: '10 GB Disk Storage', included: true },
        { text: 'Free SSL', included: true },
        { text: '3x Revisi Gratis', included: true },
        { text: 'SEO On-Page Basic', included: true },
        { text: 'Garansi Maintenance 1 Bulan', included: true }
      ],
      notes: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.'
    },
    {
      name: 'Ultimate',
      price: 'Rp 3.750.000',
      badge: '',
      description: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.',
      features: [
        { text: 'Semua yang ada di Growth, plus:', included: true, bold: true },
        { text: 'Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)', included: true },
        { text: 'Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)', included: true },
        { text: 'Desain Interaktif (Animated Scroll, Parallax, dll)', included: true },
        { text: 'Speed Optimization (Lazy Load + Caching Tools)', included: true },
        { text: '5x Revisi Gratis', included: true },
        { text: 'Garansi Maintenance 1,5 Bulan', included: true }
      ],
      notes: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.'
    }
  ];


  interface PricingFeature {
    text: string;
    included?: boolean;
    bold?: boolean;
  }

  interface PricingPackage {
    name: string;
    price: string;
    badge?: string; // Optional because not all have it
    description: string;
    features: (string | PricingFeature)[];
    notes: string;
    popular?: boolean; // From defaultPackages
    isPopular?: boolean; // From pricingData structure (some inconsistencies)
  }

  const pricingData: { [key: string]: PricingPackage[] } = {
    'Landing Page': [
      {
        name: 'Starter',
        price: 'Rp 1.500.000',
        description: 'Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.',
        features: [
          'Free Domain (.com)',
          'Shared Hosting (6 Bulan)',
          'Desain Responsif (Mobile & Desktop)',
          '1 Halaman Landing Page (scroll panjang)',
          '1 Email Bisnis',
          '1 GB Disk Storage',
          'Free SSL',
          '1x Revisi Gratis',
          'Garansi Maintenance 15 Hari',
          'Video Panduan Akses Website'
        ],
        notes: 'Cocok untuk bisnis baru yang ingin langsung tampil online dengan landing page elegan.'
      },
      {
        name: 'Growth',
        price: 'Rp 2.750.000',
        description: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.',
        features: [
          'Semua yang ada di Starter, plus:',
          'Hosting 1 Tahun',
          'Desain Visual Lebih Kompleks (CTA, Form, Galeri)',
          'Direct WhatsApp Chat',
          '2 Email Bisnis',
          '10 GB Disk Storage',
          '3x Revisi Gratis',
          'Free SSL',
          'SEO On-Page Basic',
          'Garansi Maintenance 1 Bulan'
        ],
        notes: 'Buat kamu yang pengen tampil lebih profesional dan punya kontrol lebih atas fitur & brand.',
        isPopular: true
      },
      {
        name: 'Ultimate',
        price: 'Rp 3.750.000',
        description: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.',
        features: [
          'Semua yang ada di Growth, plus:',
          'Up to 2 Halaman Tambahan (About / FAQ / Blog Preview)',
          'Request Fitur Khusus (Popup, Accordion, Pricing Table, dll)',
          'Desain Interaktif (Animated Scroll, Parallax, dll)',
          'Speed Optimization (Lazy Load + Caching Tools)',
          '5x Revisi Gratis',
          'Garansi Maintenance 1,5 Bulan'
        ],
        notes: 'Solusi landing page all-in-one buat bisnis digital yang pengen konversi tinggi + tampil premium.'
      }
    ],
    'Web Company Profile': [
      {
        name: 'Starter',
        price: 'Rp 2.500.000',
        description: 'Cocok untuk perusahaan yang ingin membangun kredibilitas online.',
        features: [
          'Free Domain (.com)',
          'Hosting 1 Tahun',
          'Desain Responsif (Mobile & Desktop)',
          '5 Halaman (Home, About, Service, Gallery, Contact)',
          '3 Email Bisnis',
          '2 GB Disk Storage',
          'Free SSL',
          '2x Revisi Gratis',
          'Garansi Maintenance 1 Bulan'
        ],
        notes: 'Cocok untuk perusahaan yang ingin membangun kredibilitas online.'
      },
      {
        name: 'Growth',
        price: 'Rp 4.500.000',
        description: 'Untuk perusahaan yang membutuhkan fitur lebih lengkap dan performa tinggi.',
        features: [
          'Semua yang ada di Starter, plus:',
          'Hosting Premium 1 Tahun',
          'Desain Custom Exclusive',
          'Integrasi Google Maps & Social Media',
          '5 Email Bisnis',
          '5 GB Disk Storage',
          '5x Revisi Gratis',
          'SEO On-Page Basic',
          'Garansi Maintenance 3 Bulan'
        ],
        notes: 'Untuk perusahaan yang membutuhkan fitur lebih lengkap dan performa tinggi.',
        isPopular: true
      },
      {
        name: 'Ultimate',
        price: 'Rp 7.500.000',
        description: 'Solusi lengkap untuk perusahaan skala besar dengan kebutuhan khusus.',
        features: [
          'Semua yang ada di Growth, plus:',
          'Unlimited Pages',
          'Fitur Khusus (Booking System, Calculator, dll)',
          'Prioritas Support',
          'Speed Optimization',
          'Unlimited Revisi',
          'Garansi Maintenance 6 Bulan'
        ],
        notes: 'Solusi lengkap untuk perusahaan skala besar dengan kebutuhan khusus.'
      }
    ],
    'Web Travel & Tour': [
      {
        name: 'Starter',
        price: 'Rp 3.000.000',
        description: 'Paket dasar untuk agen travel pemula.',
        features: [
          'Free Domain (.com)',
          'Hosting 1 Tahun',
          'Desain Responsif',
          'Halaman Paket Wisata',
          'Form Booking WhatsApp',
          'Galeri Foto',
          '2x Revisi Gratis'
        ],
        notes: 'Paket dasar untuk agen travel pemula.'
      },
      {
        name: 'Growth',
        price: 'Rp 5.500.000',
        description: 'Untuk agen travel yang ingin sistem yang lebih terintegrasi.',
        features: [
          'Semua yang ada di Starter, plus:',
          'Sistem Itinerary Detail',
          'Filter Pencarian Paket',
          'Integrasi Payment Gateway (Opsional)',
          'Blog Section untuk SEO',
          '5x Revisi Gratis'
        ],
        notes: 'Untuk agen travel yang ingin sistem yang lebih terintegrasi.',
        isPopular: true
      },
      {
        name: 'Ultimate',
        price: 'Rp 9.000.000',
        description: 'Sistem travel & tour lengkap dengan manajemen booking.',
        features: [
          'Semua yang ada di Growth, plus:',
          'Sistem Booking & Invoice Otomatis',
          'Member Area',
          'Multi Currency',
          'Multi Language',
          'Prioritas Support'
        ],
        notes: 'Sistem travel & tour lengkap dengan manajemen booking.'
      }
    ],
    'Web Toko Online': [
      {
        name: 'Starter',
        price: 'Rp 3.500.000',
        description: 'Toko online simpel untuk mulai jualan.',
        features: [
          'Free Domain (.com)',
          'Hosting 1 Tahun',
          'Desain Toko Online Standard',
          'Upload s/d 50 Produk',
          'Keranjang Belanja WhatsApp',
          'Ongkir Manual',
          '2x Revisi Gratis'
        ],
        notes: 'Toko online simpel untuk mulai jualan.'
      },
      {
        name: 'Growth',
        price: 'Rp 6.500.000',
        description: 'Toko online profesional dengan fitur lengkap.',
        features: [
          'Semua yang ada di Starter, plus:',
          'Upload Unlimited Produk',
          'Integrasi RajaOngkir (Cek Ongkir Otomatis)',
          'Payment Gateway (Midtrans/Xendit)',
          'Laporan Penjualan Basic',
          '5x Revisi Gratis'
        ],
        notes: 'Toko online profesional dengan fitur lengkap.',
        isPopular: true
      },
      {
        name: 'Ultimate',
        price: 'Rp 10.000.000+',
        description: 'E-commerce skala besar dengan fitur custom.',
        features: [
          'Semua yang ada di Growth, plus:',
          'Aplikasi Android (Webview)',
          'Sistem Member & Reseller',
          'Flash Sale System',
          'Integrasi Marketplace (Opsional)',
          'Full Support & Maintenance'
        ],
        notes: 'E-commerce skala besar dengan fitur custom.'
      }
    ],
    'Optimasi SEO': [
      {
        name: 'Basic',
        price: 'Rp 2.000.000/bln',
        description: 'Optimasi dasar untuk kata kunci low competition.',
        features: [
          'Audit Website',
          'Keyword Research (5 Keywords)',
          'On-Page Optimization',
          'Content Writing (2 Artikel/bln)',
          'Monthly Report'
        ],
        notes: 'Optimasi dasar untuk kata kunci low competition.'
      },
      {
        name: 'Advance',
        price: 'Rp 4.000.000/bln',
        description: 'Optimasi agresif untuk kata kunci medium competition.',
        features: [
          'Deep Audit Website',
          'Keyword Research (15 Keywords)',
          'On-Page & Off-Page SEO',
          'Content Writing (5 Artikel/bln)',
          'Backlink Building Basic',
          'Bi-Weekly Report'
        ],
        notes: 'Optimasi agresif untuk kata kunci medium competition.',
        isPopular: true
      },
      {
        name: 'Enterprise',
        price: 'Call Us',
        description: 'Strategi SEO komprehensif untuk dominasi pasar.',
        features: [
          'Full SEO Strategy',
          'Unlimited Keywords',
          'High Quality Backlinks',
          'Technical SEO Fixes',
          'Competitor Analysis',
          'Weekly Report'
        ],
        notes: 'Strategi SEO komprehensif untuk dominasi pasar.'
      }
    ],
    'Optimasi Ads': [
      {
        name: 'Setup',
        price: 'Rp 1.000.000',
        description: 'Jasa setup akun iklan Google/Meta Ads.',
        features: [
          'Pembuatan Akun Iklan',
          'Setup Pixel/Conversion Tracking',
          'Audience Research',
          'Setup 1 Campaign',
          'Tanpa Monitoring Bulanan'
        ],
        notes: 'Jasa setup akun iklan Google/Meta Ads.'
      },
      {
        name: 'Monthly',
        price: 'Rp 2.500.000/bln',
        description: 'Jasa manage iklan bulanan (belum termasuk budget iklan).',
        features: [
          'Monitoring & Optimasi Harian',
          'A/B Testing Creatives',
          'Audience Targeting Adjustment',
          'Scale Up Winning Campaign',
          'Laporan Kinerja Bulanan'
        ],
        notes: 'Jasa manage iklan bulanan (belum termasuk budget iklan).',
        isPopular: true
      }
    ],
    'Socal Media Management': [
      {
        name: 'Silver',
        price: 'Rp 2.500.000/bln',
        description: 'Menjaga keaktifan sosial media.',
        features: [
          '12 Feed Post',
          'Copywriting & Hashtag',
          'Basic Admin (Balas Komen/DM)',
          'Content Planning',
          'Monthly Report'
        ],
        notes: 'Menjaga keaktifan sosial media.'
      },
      {
        name: 'Gold',
        price: 'Rp 4.500.000/bln',
        description: 'Meningkatkan engagement dan branding.',
        features: [
          '20 Feed Post',
          '5 Reels/TikTok Video',
          'Copywriting & Hashtag',
          'Admin Fast Response',
          'Content Strategy',
          'Monthly Report'
        ],
        notes: 'Meningkatkan engagement dan branding.',
        isPopular: true
      }
    ]
  };

  const pricingPackages = pricingData[activeTab] || defaultPackages;

  const portfolioGallery = [
    { title: "Landing Page Travel", image: "https://fauzanlabz.my.id/wp-content/uploads/2025/08/Landing-Page-Travel-Simple-scaled.webp", category: "Travel" },
    { title: "Website Travel Tour", image: "https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Travel-Tour-scaled.webp", category: "Travel" },
    { title: "Landing Page Toko Online", image: "https://fauzanlabz.my.id/wp-content/uploads/2025/08/Landing-Page-Toko-Online-scaled.webp", category: "E-Commerce" },
    { title: "Website Toko Online", image: "https://fauzanlabz.my.id/wp-content/uploads/2025/08/Website-Toko-Online-scaled.webp", category: "E-Commerce" },
    { title: "Toko Online + Payment Gateway", image: "/images/tokoonline2.png", category: "E-Commerce" }
  ];

  const advantages = [
    {
      icon: <Edit size={40} className="text-cyan-400" />,
      title: 'Free Copywriting',
      description: 'Desain menarik saja tidak cukup. Kami bantu siapkan copywriting yang meyakinkan dan mampu meningkatkan konversi.'
    },
    {
      icon: <CheckCircle size={40} className="text-cyan-400" />,
      title: 'Kualitas Terjamin',
      description: 'Website kamu akan dirancang dengan standar profesional: cepat, mobile-friendly, dan SEO-ready.'
    },
    {
      icon: <PenTool size={40} className="text-cyan-400" />,
      title: 'Tinggal Terima Beres',
      description: 'Mulai dari desain, isi konten, sampai setting domain, semuanya kami handle. Kamu tinggal terima jadi.'
    },
    {
      icon: <Handshake size={40} className="text-cyan-400" />,
      title: 'Full Support',
      description: 'Bingung atau ada kendala? Kami selalu siap bantu bahkan setelah website selesai dikerjakan.'
    }
  ];



  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <header className="fixed top-0 left-0 right-0 w-full bg-transparent z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-cyan-400 tracking-tighter">
              &lt;FauzanLabz /&gt;
            </a>

            <button
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="/" className="hover:text-cyan-400 transition">_home</a>
              <a href="#portfolio" className="hover:text-cyan-400 transition">_portfolio</a>
              <a href="#pricing" className="hover:text-cyan-400 transition">_pricing</a>
              <a href="#kontak" className="bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-bold hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                ./contact_us
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="/" className="block hover:text-cyan-400 transition">_home</a>
              <a href="#portfolio" className="block hover:text-cyan-400 transition">_portfolio</a>
              <a href="#pricing" className="block hover:text-cyan-400 transition">_pricing</a>
              <a href="#kontak" className="block bg-cyan-500 text-slate-950 px-6 py-2 rounded-lg font-bold text-center hover:bg-cyan-400">
                ./contact_us
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f61a,transparent)]"></div>

        <div className="container mx-auto px-4 z-10 text-center relative">
          <div className="inline-block px-4 py-1.5 mb-6 border border-cyan-900/50 rounded-full bg-cyan-950/30 backdrop-blur-sm">
            <span className="text-cyan-400 font-bold text-sm tracking-wide">Professional Web Development Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white font-sans">
            Jasa Pembuatan Website<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Profesional & Mobile-Friendly</span>
          </h1>
          <p className="text-sm text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Butuh website untuk bisnis kamu? <span className="text-cyan-400 font-bold">FauzanLabz</span> siap bantu buatkan website company profile, landing page, hingga toko online yang optimal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285363407399?text=Halo%20kak!%20Saya%20tertarik%20mau%20buat%20website%20yaa...!"
              className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold text-sm hover:bg-cyan-400 transition transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
            >
              <Phone className="inline" size={20} />
              Konsultasi WhatsApp
            </a>
            <a
              href="#pricing"
              className="border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-full font-bold text-sm hover:bg-cyan-950/50 hover:border-cyan-400 transition"
            >
              Lihat Harga
            </a>
          </div>
        </div>
      </section>

      {/* Kenapa Harus Section */}
      <section className="py-20 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-move opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Kenapa Harus <span className="text-cyan-400">FauzanLabz?</span>
          </h2>
          <p className="text-center text-slate-300 text-sm leading-relaxed mb-12">Inilah alasan kenapa banyak klien puas dengan FauzanLabz:</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition text-center group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                <div className="mb-4 flex justify-center transform group-hover:scale-110 transition duration-300">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{advantage.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section id="portfolio" className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            <span className="text-cyan-400">Project Showcase</span>
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed text-center mb-12 max-w-2xl mx-auto">
            Berikut hasil pembuatan website yang telah saya kerjakan untuk berbagai jenis bisnis.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {portfolioGallery.map((item, index) => (
              <div key={index} className="group rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-slate-900 hover:border-cyan-500/50 transition-all">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 text-center bg-slate-950 border-t border-slate-800">
                  <span className="text-cyan-400 text-xs mb-1 block">{item.category}</span>
                  <h3 className="font-bold text-white group-hover:text-cyan-400 transition-colors text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section with Tabs */}
      <section id="pricing" className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-6xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === tab
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-cyan-400 border border-slate-800'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pricing Content */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 animate-fade-in">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-slate-900 ${pkg.popular
                  ? 'border-2 border-cyan-500 scale-105 z-10 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  : 'border border-slate-800 hover:border-cyan-500/30'
                  } rounded-2xl p-8 transition duration-300`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full text-center">
                    <span className="bg-cyan-500 text-slate-950 px-6 py-2 rounded-full font-bold text-sm inline-flex items-center gap-1 shadow-lg">
                      <Star size={16} fill="currentColor" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold mb-2 text-white">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{pkg.price}</div>
                  <p className="text-slate-300 text-sm h-10 leading-relaxed">{pkg.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature: { text?: string; included?: boolean; bold?: boolean } | string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-0.5 text-cyan-400">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      {typeof feature === 'string' ? (
                        <span className="text-sm text-slate-300">{feature}</span>
                      ) : (
                        <span className={`text-sm ${feature.bold ? 'font-bold text-cyan-400' : 'text-slate-300'}`}>
                          {feature.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="bg-slate-950/50 rounded-lg p-4 mb-6 border border-slate-800">
                  <p className="text-xs text-slate-400 italic">
                    <span className="font-semibold text-cyan-400 not-italic">Note:</span> {pkg.notes}
                  </p>
                </div>

                <a
                  href={`https://wa.me/6285363407399?text=Halo%20kak!%20Saya%20tertarik%20dengan%20paket%20${pkg.name}%20untuk%20${activeTab}`}
                  className={`block text-center font-bold py-4 rounded-full transition transform hover:scale-105 flex items-center justify-center gap-2 ${pkg.popular
                    ? 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25'
                    : 'bg-transparent border border-cyan-500/50 text-cyan-400 hover:bg-cyan-950 hover:border-cyan-400'
                    }`}
                >
                  <ShoppingCart size={18} />
                  Order Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-12 text-center relative overflow-hidden backdrop-blur-sm">
            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 text-white">
              Siap Bikin Website Profesional untuk Bisnismu?
            </h2>
            <p className="text-lg text-slate-400 mb-8 relative z-10">
              FauzanLabz siap bantu kamu punya website yang tampil meyakinkan, cepat, dan siap promosi!
              Mulai dari company profile, landing page, sampai toko online — semua bisa kamu dapatkan dengan mudah dan tanpa ribet.
            </p>

            <div className="mb-8 relative z-10">
              <p className="text-cyan-400 font-bold text-xl mb-2">Gratis konsultasi & penawaran cepat via WhatsApp!</p>
              <p className="text-slate-500">Klik tombol di bawah untuk mulai diskusi sekarang.</p>
            </div>

            <div className="flex justify-center relative z-10">
              <a
                href="https://wa.me/6285363407399?text=Halo%20kak!%20Saya%20tertarik%20mau%20buat%20website%20yaa...!"
                className="bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 transition transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <Phone className="inline" size={20} />
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 font-sans">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">&lt;FauzanLabz /&gt;</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Jasa pembuatan website profesional untuk membantu bisnis Anda berkembang di era digital.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Menu</h4>
              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li><a href="/" className="hover:text-cyan-400 transition">Home</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-cyan-400 transition">Harga</a></li>
                <li><a href="#kontak" className="hover:text-cyan-400 transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white">Hubungi Kami</h4>
              <ul className="space-y-2 text-slate-300 text-sm leading-relaxed">
                <li>WhatsApp: 0853-6340-7399</li>
                <li>Email: admin@fauzanlabz.my.id</li>
                <li>Jam Kerja: 09:00 - 21:00 WIB</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; 2026 FauzanLabz | Professional Web Development</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6285363407399?text=Halo+Kak%21+Saya+mau+bikin+website+yaa%21"
        className="fixed bottom-6 right-6 bg-cyan-500 text-slate-950 p-4 rounded-full shadow-lg hover:bg-cyan-400 transition transform hover:scale-110 z-50 flex items-center justify-center shadow-cyan-500/20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Phone size={30} fill="currentColor" />
      </a>
    </div>
  );
};

export default PricingPage;
