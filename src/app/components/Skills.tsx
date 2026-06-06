import { motion } from "motion/react";

const categories = [
  {
    title: "Lenguajes & Backend",
    color: "#7c6cf0",
    skills: [
      "C++", "C", "Python", "Java", "SQL", "JSON"
    ],
  },
  {
    title: "Especialidades & Frontend",
    color: "#4fc3f7",
    skills: [
      "Inteligencia Artificial", "Machine Learning", "Estructuras de Datos", "POO", "Figma", "Diseño de APIs"
    ],
  },
  {
    title: "Infraestructura & Seguridad",
    color: "#69f0ae",
    skills: [
      "Linux (Kali / Ubuntu / Arch)", "Ciberseguridad", "Cisco Networking", "Wireshark", "Bases de Datos", "Git", "PuTTY"
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0c0c14] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c6cf0] text-xs uppercase tracking-widest mb-2">Stack técnico</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Habilidades & Tecnologías
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-xl border border-white/8 bg-white/3 p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <h3 className="text-white text-sm" style={{ fontWeight: 600 }}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs transition-colors cursor-default"
                    style={{ borderColor: `color-mix(in srgb, ${cat.color} 30%, transparent)` }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.borderColor = cat.color;
                      (e.target as HTMLElement).style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.borderColor = `color-mix(in srgb, ${cat.color} 30%, transparent)`;
                      (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
