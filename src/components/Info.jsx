import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Info = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="info" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-playfair text-2xl mb-4 font-light">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Wedding Photography</li>
            <li>Portrait Sessions</li>
            <li>Engagement Photography</li>
            <li>Editorial Work</li>
            <li>Fine Art Prints</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="font-playfair text-2xl mb-4 font-light">Experience</h3>
          <p className="text-gray-600 leading-relaxed">
            With over 15 years of experience capturing life's most precious moments,
            we bring expertise and artistry to every project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="font-playfair text-2xl mb-4 font-light">Location</h3>
          <p className="text-gray-600 leading-relaxed">
            Based in Creative City, we travel worldwide for destination
            weddings and special assignments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
