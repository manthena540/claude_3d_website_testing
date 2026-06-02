import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote:
      "Prasad captured our wedding day better than we ever imagined. Every photo feels like a painting. We couldn't stop crying looking through the gallery — in the best possible way.",
    name: 'Ananya & Rohit',
    title: 'Wedding clients, 2025',
    avatar: 'https://picsum.photos/seed/client1/200/200',
  },
  {
    id: 2,
    quote:
      "The brand shoot Prasad delivered transformed how we present ourselves online. Our conversion rate jumped 40% in the first month after we updated the website with his images.",
    name: 'Vikram Nair',
    title: 'Founder, Verdant Co.',
    avatar: 'https://picsum.photos/seed/client2/200/200',
  },
  {
    id: 3,
    quote:
      "I've worked with many photographers, but Prasad has a rare ability to make you feel completely at ease in front of the camera. The portraits he produced are absolutely stunning.",
    name: 'Divya Menon',
    title: 'Portrait client, 2024',
    avatar: 'https://picsum.photos/seed/client3/200/200',
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(i => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-black py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-xs text-white/30 tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Client Stories
          </span>
          <h2
            className="mt-4 text-5xl text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Words from those I've worked with
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-5xl text-white/10 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
              <p
                className="text-xl md:text-2xl text-white/70 leading-relaxed italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {testimonials[current].quote}
              </p>
              <div className="mt-10 flex flex-col items-center gap-3">
                <img
                  src={testimonials[current].avatar}
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="text-white font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {testimonials[current].name}
                  </div>
                  <div className="text-white/30 text-xs mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {testimonials[current].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 text-white/40 hover:text-white hover:border-white/50 transition-all duration-300 flex items-center justify-center"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white w-6' : 'bg-white/20 w-1.5'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 text-white/40 hover:text-white hover:border-white/50 transition-all duration-300 flex items-center justify-center"
            >
              →
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 grid grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden"
        >
          {[
            { label: 'Client Satisfaction', value: '98%' },
            { label: 'Repeat Bookings', value: '74%' },
            { label: 'On-time Delivery', value: '100%' },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`py-10 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}
            >
              <div
                className="text-4xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item.value}
              </div>
              <div
                className="mt-2 text-xs text-white/30 tracking-wider uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
