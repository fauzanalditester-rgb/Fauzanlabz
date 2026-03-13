import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-transparent z-50 transition-all duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400 tracking-tighter cursor-pointer flex items-center gap-2" onClick={() => goTo('/')}>
            <span className="text-white">&lt;</span>FauzanLabz <span className="text-white">/&gt;</span>
          </div>

          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => goTo('/')}
              className={`font-medium text-sm leading-relaxed transition-colors ${location.pathname === '/' ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Jasa Pembuatan Aplikasi Custom
            </button>
            <button
              onClick={() => goTo('/bantu-bisnis')}
              className={`font-medium text-sm leading-relaxed transition-colors ${location.pathname === '/bantu-bisnis' ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-400'}`}
            >
              Bantu Bisnis Kamu Jualan Online Lewat Aplikasi
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6 space-y-3 bg-slate-900/95 backdrop-blur-xl border border-slate-800 absolute left-4 right-4 p-4 shadow-2xl rounded-2xl ring-1 ring-white/10">
            <button
              onClick={() => goTo('/')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm leading-relaxed transition-colors ${location.pathname === '/' ? 'bg-slate-800 text-cyan-400' : 'text-slate-300 hover:bg-slate-800'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => goTo('/bantu-bisnis')}
              className="block w-full text-left px-4 py-3 rounded-lg bg-cyan-500 text-slate-950 text-sm leading-relaxed font-bold hover:bg-cyan-400 transition-colors shadow-lg mt-2"
            >
              Bantu Bisnis Kamu Jualan Online Lewat Aplikasi
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
