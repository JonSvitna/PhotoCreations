import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "The most beautiful images we could have ever imagined. Every moment captured with such artistry and grace.",
    author: "Sarah & Michael",
  },
  {
    quote: "A true artist with the camera. The portraits are breathtaking and timeless.",
    author: "Jennifer Thompson",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="mb-24 text-center"
          >
            <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 text-gray-800">
              "{testimonial.quote}"
            </blockquote>
            <p className="text-sm tracking-widest uppercase text-gray-600">
              — {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
