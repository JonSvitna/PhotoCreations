import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EditorialSection from './components/EditorialSection';
import GalleryPreview from './components/GalleryPreview';
import Testimonials from './components/Testimonials';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <EditorialSection />
      <GalleryPreview />
      <Testimonials />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
