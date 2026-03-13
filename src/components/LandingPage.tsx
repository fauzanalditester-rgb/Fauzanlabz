import Navbar from './Navbar';
import HomeContent from './HomeContent';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
