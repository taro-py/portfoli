import { motion } from "motion/react";
import { GraduationCap, MapPin, Globe } from "lucide-react";

const stats = [
  { value: "3", label: "Idiomas (ES, EN, Aprendiendo NO)" },
  { value: "10+", label: "Proyectos Universitarios" },
  { value: "15+", label: "Tecnologías Dominadas" },
  { value: "APTIS", label: "Certificación ESOL" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c6cf0] text-xs uppercase tracking-widest mb-2">Sobre mí</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Mi perfil profesional
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 leading-relaxed mb-6">
              A lo largo de mi carrera he consolidado una base técnica robusta en el desarrollo de sistemas, arquitectura de software e ingeniería de datos. Mi área de especialización abarca el desarrollo Backend/Frontend, la Inteligencia Artificial (Big O, algoritmia y agentes), el diseño de Bases de Datos y Gestión de redes y Sistemas Operativos.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Como profesional bilingüe con experiencia internacional, aporto una mentalidad proactiva y orientada a la resolución de problemas complejos. Combino mi rigor académico en estructuras de datos, patrones de diseño y experiencia en lenguajes fuertemente tipados con un fuerte aprendizaje autodidacta, ofreciendo gran adaptabilidad.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: "Granada y alrededores, España" },
                { icon: GraduationCap, text: "Ingeniería Informática — UHU (2023 - 2028)" },
                { icon: Globe, text: "Próximamente: Erasmus en UiS Stavanger, Noruega (2026-2027)" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-white/50 text-sm">
                  <Icon size={16} className="text-[#7c6cf0] shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-xl border border-white/8 bg-white/3 p-6 text-center"
              >
                <p
                  className="text-[#a89cf5] mb-1"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 700 }}
                >
                  {s.value}
                </p>
                <p className="text-white/40 text-xs leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
