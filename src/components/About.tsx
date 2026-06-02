import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Sessions Completed' },
  { value: '6 yrs', label: 'Experience' },
  { value: '120+', label: 'Happy Clients' },
  { value: '8', label: 'Awards Won' },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="text-xs text-white/30 tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            About Prasad
          </span>
          <h2
            className="mt-4 text-5xl leading-tight text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Every frame tells a story worth keeping
          </h2>
          <p
            className="mt-6 text-base text-white/40 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            I'm Prasad — a photographer based in Hyderabad with a passion for finding the extraordinary in the everyday. My work spans portrait, landscape, and commercial photography, always guided by a single principle: light is everything.
          </p>
          <p
            className="mt-4 text-base text-white/40 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            With over six years behind the lens, I've worked with individuals, brands, and editorial clients across India and internationally — delivering images that are honest, timeless, and alive.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="border-t border-white/10 pt-4"
              >
                <div
                  className="text-4xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </div>
                <div
                  className="mt-1 text-xs text-white/30 tracking-wider uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://picsum.photos/seed/prasadportrait/700/933"
              alt="Prasad — Photographer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 w-44 h-44 rounded-xl overflow-hidden border-4 border-black shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/prasadcamera/400/400"
              alt="Behind the lens"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border border-white/10 flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest uppercase text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
              Est.<br />2019
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
