import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Golden Hour Series',
    category: 'Landscape',
    year: '2025',
    img: 'https://picsum.photos/seed/golden01/800/600',
  },
  {
    id: 2,
    title: 'Arjun & Priya Wedding',
    category: 'Wedding',
    year: '2025',
    img: 'https://picsum.photos/seed/wedding01/800/600',
  },
  {
    id: 3,
    title: 'The Quiet City',
    category: 'Street',
    year: '2024',
    img: 'https://picsum.photos/seed/street01/800/600',
  },
  {
    id: 4,
    title: 'Anika — Portrait',
    category: 'Portrait',
    year: '2024',
    img: 'https://picsum.photos/seed/portrait01/800/600',
  },
  {
    id: 5,
    title: 'Zara Brand Campaign',
    category: 'Commercial',
    year: '2024',
    img: 'https://picsum.photos/seed/commercial01/800/600',
  },
  {
    id: 6,
    title: 'Monsoon Light',
    category: 'Landscape',
    year: '2023',
    img: 'https://picsum.photos/seed/monsoon01/800/600',
  },
];

const categories = ['All', 'Portrait', 'Wedding', 'Landscape', 'Street', 'Commercial'];

const Portfolio = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div>
            <span
              className="text-xs text-white/30 tracking-[0.4em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gallery
            </span>
            <h2
              className="mt-4 text-5xl text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Selected work
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-300 ${
                  active === cat
                    ? 'bg-white text-black'
                    : 'border border-white/20 text-white/40 hover:text-white hover:border-white/50'
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30"
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span
          className="text-xs text-white/40 tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {project.category} · {project.year}
        </span>
        <h3
          className="mt-1 text-xl text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white text-lg"
      >
        ↗
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
