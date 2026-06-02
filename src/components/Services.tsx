import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Portrait Sessions',
    description:
      'Individual, couple, and family portraits crafted with natural light and thoughtful direction. Every sitting is relaxed, personal, and built around you.',
    img: 'https://picsum.photos/seed/portrait01/600/400',
  },
  {
    number: '02',
    title: 'Commercial & Brand',
    description:
      'Product photography, corporate headshots, and campaign imagery that elevates your brand and communicates your values at a glance.',
    img: 'https://picsum.photos/seed/commercial02/600/400',
  },
  {
    number: '03',
    title: 'Wedding & Events',
    description:
      'Candid storytelling through your most important day. I blend into the background so your moments stay authentic — and beautifully documented.',
    img: 'https://picsum.photos/seed/wedding03/600/400',
  },
  {
    number: '04',
    title: 'Landscape & Travel',
    description:
      'Fine-art landscape prints and travel documentary work. Available as limited-edition prints for homes and offices.',
    img: 'https://picsum.photos/seed/landscape04/600/400',
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
      <div className="p-8">
        <span
          className="text-xs text-white/20 tracking-[0.4em]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.number}
        </span>
        <h3
          className="mt-3 text-2xl text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {service.title}
        </h3>
        <p
          className="mt-3 text-sm text-white/40 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {service.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors duration-300">
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Book now
          </span>
          <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span
            className="text-xs text-white/30 tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            What I Offer
          </span>
          <h2
            className="mt-4 text-5xl text-white max-w-xl leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sessions for every story
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
