import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const EditorialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 font-light">
              Our Philosophy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We believe in capturing the essence of moments that matter. Each frame tells a story,
              each image preserves a memory that transcends time.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our approach is simple: authenticity over artifice, emotion over perfection,
              and timeless elegance in every shot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=800&q=80"
              alt="Photography philosophy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[600px] overflow-hidden order-2 md:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
              alt="Our approach"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="order-1 md:order-2"
          >
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 font-light">
              Our Approach
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every project begins with understanding your vision. We listen, we plan, and we create
              images that reflect your unique story.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From intimate portraits to grand celebrations, we bring a refined aesthetic and
              meticulous attention to detail.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
