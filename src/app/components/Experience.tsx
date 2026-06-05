import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    role: "Erasmus (Ingeniería Informática)",
    company: "UiS Stavanger, Noruega",
    period: "Ago 2026 — Jun 2027",
    description: "Intercambio académico enfocado en potenciar habilidades internacionales e ingeniería avanzada.",
  },
  {
    role: "Grado en Ingeniería Informática",
    company: "Universidad de Huelva (UHU)",
    period: "2023 — 2028",
    description: "Formación sólida en programación, arquitectura de software, bases de datos y principios de ingeniería.",
  },
  {
    role: "Bachillerato (Science)",
    company: "IES Clara Campoamor",
    period: "2021 — 2023",
    description: "Bachillerato en ciencias con enfoque analítico y matemático.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0f] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c6cf0] text-xs uppercase tracking-widest mb-2">Formación</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Educación
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />
            <div className="flex flex-col gap-10">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#7c6cf0] border-2 border-[#0a0a0f]" />
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={13} className="text-[#7c6cf0]" />
                    <span className="text-[#7c6cf0] text-xs">{edu.period}</span>
                  </div>
                  <h3 className="text-white mb-0.5" style={{ fontWeight: 600 }}>{edu.role}</h3>
                  <p className="text-white/40 text-sm mb-3">{edu.company}</p>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={16} className="text-[#7c6cf0]" />
              <h3 className="text-white text-sm" style={{ fontWeight: 600 }}>Certificaciones</h3>
            </div>
            <div className="flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-white/8 bg-white/3 p-4"
              >
                <p className="text-white text-sm mb-0.5" style={{ fontWeight: 500 }}>APTIS ESOL</p>
                <p className="text-white/40 text-xs">British Council</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
