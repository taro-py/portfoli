import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,108,240,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,240,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c6cf0]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7c6cf0]/30 bg-[#7c6cf0]/10 text-[#a89cf5] text-xs mb-8 tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7c6cf0] animate-pulse" />
          Disponible para nuevos proyectos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1 }}
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-[#7c6cf0] to-[#a89cf5] bg-clip-text text-transparent">
            Neizan Roggie
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#a89cf5] mb-3"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)", fontWeight: 500 }}
        >
          Estudiante de Ingeniería del Software · Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)" }}
        >
          Estudiante de 3º en la UHU. Especializado en Backend, IA, Redes y Ciberseguridad. Bilingüe con mentalidad proactiva y experiencia internacional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 rounded-lg bg-[#7c6cf0] text-white text-sm hover:bg-[#6a5be0] transition-colors"
          >
            Ver proyectos
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 rounded-lg border border-white/15 text-white/80 text-sm hover:border-[#7c6cf0]/60 hover:text-white transition-colors"
          >
            Contactar
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com/taro-py", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/neizan-roggie-martinez-60962b2a7", label: "LinkedIn" },
            { icon: Mail, href: "mailto:neizanroggie7@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#a89cf5] transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}
