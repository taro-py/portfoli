import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "app_rutina",
    description:
      "Aplicación basada en Agentes Inteligentes ejecutada en Node.js para organizar rutinas estructuradas.",
    stack: ["Node.js", "TypeScript", "IA"],
    stars: 0,
    featured: true,
    github: "https://github.com/taro-py/app_rutina",
    live: null,
    gradient: "from-[#7c6cf0]/20 to-[#4fc3f7]/10",
  },
  {
    title: "MinMax-Poda-Alfa-Beta",
    description:
      "Implementación del clásico algoritmo MinMax con Poda Alfa-Beta para IA y toma de decisiones.",
    stack: ["IA", "C++", "Estructuras de Datos"],
    stars: 0,
    featured: true,
    github: "https://github.com/taro-py/MinMax-Poda-Alfa-Beta",
    live: null,
    gradient: "from-[#4fc3f7]/20 to-[#69f0ae]/10",
  },
  {
    title: "DIVIDE_Y_VENCERAS",
    description:
      "Análisis empírico de complejidad mediante conteo de Operaciones Elementales (OE).",
    stack: ["C++", "Algoritmia"],
    stars: 0,
    featured: false,
    github: "https://github.com/taro-py/DIVIDE_Y_VENCERAS",
    live: null,
    gradient: "from-[#69f0ae]/20 to-[#7c6cf0]/10",
  },
  {
    title: "Practica2_MP",
    description:
      "Prácticas de Programación Orientada a Objetos en Java con estructuras complejas.",
    stack: ["Java", "POO"],
    stars: 0,
    featured: false,
    github: "https://github.com/taro-py/Practica2_MP",
    live: null,
    gradient: "from-[#f48fb1]/20 to-[#7c6cf0]/10",
  },
  {
    title: "MP-prac1",
    description:
      "Proyecto en C++ usando herencia, polimorfismo y sobrecarga simulando una compañía telefónica.",
    stack: ["C++", "POO"],
    stars: 0,
    featured: false,
    github: "https://github.com/taro-py/MP-prac1",
    live: null,
    gradient: "from-[#ffcc80]/20 to-[#4fc3f7]/10",
  },
  {
    title: "inicio_programacion_web",
    description:
      "Primeros pasos y toma de contacto con desarrollo Frontend estático.",
    stack: ["HTML", "CSS"],
    stars: 0,
    featured: false,
    github: "https://github.com/taro-py/inicio_programacion_web",
    live: null,
    gradient: "from-[#a89cf5]/20 to-[#69f0ae]/10",
  },
];

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0c0c14] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c6cf0] text-xs uppercase tracking-widest mb-2">Trabajo</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Proyectos destacados
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl border border-white/10 bg-gradient-to-br ${p.gradient} p-6 group hover:border-white/20 transition-colors`}
            >
              <div className="absolute inset-0 rounded-xl bg-[#0c0c14]/60" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white" style={{ fontWeight: 600 }}>{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/30 text-xs">
                    <Star size={12} className="fill-white/30" />
                    {p.stars}
                  </div>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-xs bg-white/8 text-white/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/50 hover:text-white text-xs transition-colors">
                    <Github size={14} /> Código
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-white/50 hover:text-[#a89cf5] text-xs transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl border border-white/8 bg-white/3 p-5 hover:border-white/15 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white text-sm" style={{ fontWeight: 600 }}>{p.title}</h4>
                <div className="flex items-center gap-1 text-white/25 text-xs">
                  <Star size={11} className="fill-white/25" />
                  {p.stars}
                </div>
              </div>
              <p className="text-white/45 text-xs leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {p.stack.slice(0, 3).map((t) => (
                  <span key={t} className="px-1.5 py-0.5 rounded text-xs bg-white/6 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors">
                  <Github size={14} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#a89cf5] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
