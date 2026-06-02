import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
  };

  return (
    <section id="contact" className="bg-black py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <span
            className="text-xs text-white/30 tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Book a Session
          </span>
          <h2
            className="mt-4 text-5xl text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's create something beautiful together
          </h2>
          <p
            className="mt-6 text-base text-white/40 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Whether it's a portrait, your wedding day, or a commercial campaign — I'd love to hear about your vision. Fill out the form and I'll get back to you within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: 'Email', value: 'hello@prasadphotography.in' },
              { label: 'Location', value: 'Hyderabad, India · Available Worldwide' },
              { label: 'Availability', value: 'Booking open for 2025–2026' },
            ].map(item => (
              <div key={item.label} className="flex gap-4 items-start border-b border-white/5 pb-4">
                <span
                  className="text-xs text-white/20 tracking-widest uppercase w-24 pt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </span>
                <span
                  className="text-sm text-white/60"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-10"
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="text-5xl mb-6">✦</div>
              <h3
                className="text-2xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Request received
              </h3>
              <p
                className="mt-3 text-white/40 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 text-xs text-white/30 hover:text-white/60 transition-colors tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="text-xs text-white/30 tracking-widest uppercase block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Arjun Sharma"
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="text-xs text-white/30 tracking-widest uppercase block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="arjun@email.com"
                  required
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <div>
                <label
                  className="text-xs text-white/30 tracking-widest uppercase block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Session Type
                </label>
                <select
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white/60 text-sm focus:outline-none focus:border-white/30 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="">Select a session type</option>
                  <option>Portrait</option>
                  <option>Wedding</option>
                  <option>Commercial / Brand</option>
                  <option>Landscape / Travel</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label
                  className="text-xs text-white/30 tracking-widest uppercase block mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tell me more
                </label>
                <textarea
                  rows={3}
                  placeholder="Share your vision or any details about the shoot..."
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white text-black py-3.5 text-sm font-medium hover:bg-white/90 active:bg-white/80 transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Send Enquiry
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
