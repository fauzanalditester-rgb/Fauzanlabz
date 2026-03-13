const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-8 border-t border-slate-800 font-sans">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-2 text-sm text-slate-300 leading-relaxed">
          &copy; {currentYear} <span className="text-cyan-400 font-bold">FauzanLabz</span>. All rights reserved.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Professional App Developer & Digital Solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
