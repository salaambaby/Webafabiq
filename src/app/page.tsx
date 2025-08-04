import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TransactionSection from '../components/TransactionSection';
import HowToPlaySection from '../components/HowToPlaySection';
import FAQSection from '../components/FAQSection';
import DownloadAppSection from '../components/DownloadAppSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <TransactionSection />
      <HowToPlaySection />
      <FAQSection />
      <DownloadAppSection />
      <Footer />
      </main>
  );
}
