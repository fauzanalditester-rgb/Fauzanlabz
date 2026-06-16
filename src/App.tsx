import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

const LandingPage = React.lazy(() => import('./components/LandingPage'));
const PricingPage = React.lazy(() => import('./components/PricingPage'));
const BizLp = React.lazy(() => import('./components/BizLp'));


const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.2, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Suspense fallback={<div className="h-screen w-full bg-slate-950 flex items-center justify-center text-cyan-500">Loading...</div>}><LandingPage /></Suspense></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Suspense fallback={<div className="h-screen w-full bg-slate-950 flex items-center justify-center text-cyan-500">Loading...</div>}><PricingPage /></Suspense></PageWrapper>} />
        <Route path="/bantu-bisnis" element={<PageWrapper><Suspense fallback={<div className="h-screen w-full bg-slate-950 flex items-center justify-center text-cyan-500">Loading...</div>}><BizLp /></Suspense></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
