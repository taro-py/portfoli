import { motion } from "motion/react";

const categories = [
  {
    title: "Lenguajes & Backend",
    color: "#7c6cf0",
    skills: [
      { name: "C++ / C", level: 90 },
      { name: "Python / Java", level: 85 },
      { name: "SQL (Bases de Datos)", level: 88 },
      { name: "Node.js / TypeScript", level: 75 },
    ],
  },
  {
    title: "Especialidades & Frontend",
    color: "#4fc3f7",
    skills: [
      { name: "IA & Machine Learning", level: 85 },
      { name: "Estructuras de Datos / POO", level: 90 },
      { name: "JavaScript / HTML / CSS", level: 80 },
      { name: "PySide 6", level: 70 },
    ],
  },
  {
    title: "Infraestructura & Seguridad",
    color: "#69f0ae",
    skills: [
      { name: "Linux (Ubuntu / Kali)", level: 85 },
      { name: "Ciberseguridad / Pentesting", level: 80 },
      { name: "Cisco Networking", level: 75 },
      { name: "Wireshark / Git", level: 80 },
    ],
  },
];

const badges = [
  "C++", "C", "Python", "Java", "SQL", "Node.js", "TypeScript",
  "IA", "Machine Learning", "POO", "Data Structures", "JavaScript",
  "HTML", "CSS", "PySide 6", "Linux", "Kali Linux", "Ubuntu",
  "Ciberseguridad", "Cisco", "Wireshark", "Git", "Matlab"
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  let label = "Uso Moderado";
  if (level >= 90) label = "Uso Frecuente";
  else if (level >= 80) label = "Conocimientos Sólidos";

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-white/70">{name}</span>
        <span className="text-white/40 text-[10px] uppercase tracking-wider">{label}</span>
      </div>
      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

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
          <p className="text-white/40 mt-3 max-w-2xl text-sm leading-relaxed">
            El nivel de las barras refleja el foco de estudio y la frecuencia de uso en proyectos académicos y personales.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="rounded-xl border border-white/8 bg-white/3 p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <h3 className="text-white text-sm" style={{ fontWeight: 600 }}>{cat.title}</h3>
              </div>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} {...s} color={cat.color} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {badges.map((b, i) => (
            <motion.span
              key={b}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="px-3 py-1.5 rounded-md border border-white/10 bg-white/4 text-white/60 text-xs hover:border-[#7c6cf0]/50 hover:text-white/80 transition-colors cursor-default"
            >
              {b}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
