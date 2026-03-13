import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PricingPage from './components/PricingPage';
import BizLp from './components/BizLp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/bantu-bisnis" element={<BizLp />} />
      </Routes>
    </Router>
  );
}

export default App;
