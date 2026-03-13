import Navbar from './Navbar';
import BizContent from './BizContent';
import Footer from './Footer';

const BizLp = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <BizContent />
      </main>
      <Footer />
    </div>
  );
};

export default BizLp;
