import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const Demo = () => (
  <section className="py-24 relative">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        Así puede <span className="text-gradient">cambiar tu negocio</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-destructive/30 bg-card p-8"
        >
          <div className="text-destructive font-display font-bold text-lg mb-6 flex items-center gap-2">
            <X className="w-5 h-5" /> Web actual
          </div>
          <ul className="space-y-4 text-muted-foreground">
            {["Diseño anticuado", "No adaptada a móviles", "Sin llamada a la acción", "Carga lenta", "No genera confianza"].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-primary/30 bg-card p-8 glow-cyan"
        >
          <div className="text-primary font-display font-bold text-lg mb-6 flex items-center gap-2">
            <Check className="w-5 h-5" /> Web optimizada
          </div>
          <ul className="space-y-4 text-foreground">
            {["Diseño moderno y profesional", "Perfecta en cualquier dispositivo", "Botones de contacto claros", "Velocidad de carga óptima", "Transmite confianza al instante"].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Demo;
