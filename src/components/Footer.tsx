const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Prasad</span>
              <span className="text-white/30 text-sm ml-2" style={{ fontFamily: "'Inter', sans-serif" }}>Photography</span>
            </div>
            <p
              className="text-sm text-white/30 leading-relaxed max-w-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Based in Hyderabad. Capturing light, emotion, and the stories that deserve to be remembered.
            </p>
          </div>

          <div>
            <h4
              className="text-xs text-white/20 tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Contact'].map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs text-white/20 tracking-[0.4em] uppercase mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Follow
            </h4>
            <ul className="space-y-3">
              {['Instagram', '500px', 'Behance', 'LinkedIn'].map(s => (
                <li key={s}>
                  <span
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span
            className="text-xs text-white/20"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Prasad Photography. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span
                key={item}
                className="text-xs text-white/20 hover:text-white/50 transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
