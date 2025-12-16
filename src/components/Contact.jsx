import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="contact" className="py-32 px-6 bg-luxury-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 font-light"
        >
          Let's Create Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
        >
          Whether it's a wedding, portrait session, or special event, we'd love to discuss your vision
          and create something beautiful together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <a
            href="mailto:info@photocreations.com"
            className="inline-block text-sm tracking-widest uppercase border-b-2 border-white pb-1 hover:border-luxury-gold hover:text-luxury-gold transition-colors duration-300"
          >
            Get In Touch
          </a>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
            <a href="mailto:info@photocreations.com" className="hover:text-luxury-gold transition-colors">
              info@photocreations.com
            </a>
            <span className="hidden md:block">•</span>
            <a href="tel:5551234567" className="hover:text-luxury-gold transition-colors">
              (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
