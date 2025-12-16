import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const galleries = [
  {
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    description: 'Timeless wedding photography',
  },
  {
    title: 'Portraits',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=80',
    description: 'Editorial portrait sessions',
  },
  {
    title: 'Engagements',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&q=80',
    description: 'Capturing your love story',
  },
];

const GalleryPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="galleries" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-4 font-light">
            Our Galleries
          </h2>
          <p className="text-gray-600 text-lg">Explore our curated collections</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleries.map((gallery, index) => (
            <motion.a
              key={gallery.title}
              href={`#gallery-${gallery.title.toLowerCase()}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-[600px] overflow-hidden cursor-pointer"
            >
              <img
                src={gallery.image}
                alt={gallery.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <motion.h3
                  className="font-playfair text-3xl md:text-4xl mb-2 font-light"
                  whileHover={{ y: -5 }}
                >
                  {gallery.title}
                </motion.h3>
                <p className="text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {gallery.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
