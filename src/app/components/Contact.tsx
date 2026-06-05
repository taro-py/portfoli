import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import DOMPurify from "dompurify";

const socials = [
  { icon: Github, label: "GitHub", handle: "@taro-py", href: "https://github.com/taro-py" },
  { icon: Linkedin, label: "LinkedIn", handle: "Neizan Roggie Martínez", href: "https://www.linkedin.com/in/neizan-roggie-martinez-60962b2a7" },
  { icon: Mail, label: "Email", handle: "neizanroggie7@gmail.com", href: "mailto:neizanroggie7@gmail.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sanitización preventiva estricta contra XSS (Arquitectura Blindada)
    const sanitizedForm = {
      name: DOMPurify.sanitize(form.name),
      email: DOMPurify.sanitize(form.email),
      message: DOMPurify.sanitize(form.message),
    };
    console.log("Datos sanitizados listos para envío seguro:", sanitizedForm);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0f] px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[#7c6cf0] text-xs uppercase tracking-widest mb-2">Contacto</p>
          <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
            Hablemos
          </h2>
          <p className="text-white/40 mt-3 max-w-lg text-sm leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar? Escríbeme y te respondo en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle size={48} className="text-[#69f0ae]" />
                <p className="text-white" style={{ fontWeight: 600 }}>¡Mensaje enviado!</p>
                <p className="text-white/40 text-sm">Me pondré en contacto contigo pronto.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs text-[#7c6cf0] hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs mb-1.5">Nombre</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full rounded-lg border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7c6cf0]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full rounded-lg border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7c6cf0]/60 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/50 text-xs mb-1.5">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full rounded-lg border border-white/10 bg-white/4 px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#7c6cf0]/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#7c6cf0] text-white text-sm hover:bg-[#6a5be0] transition-colors"
                >
                  <Send size={15} /> Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {socials.map(({ icon: Icon, label, handle, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-[#7c6cf0]/40 hover:bg-[#7c6cf0]/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7c6cf0]/15 flex items-center justify-center shrink-0 group-hover:bg-[#7c6cf0]/25 transition-colors">
                  <Icon size={18} className="text-[#a89cf5]" />
                </div>
                <div>
                  <p className="text-white text-sm" style={{ fontWeight: 500 }}>{label}</p>
                  <p className="text-white/40 text-xs">{handle}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
