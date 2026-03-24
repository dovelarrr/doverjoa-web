import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Analizo tu negocio", desc: "Estudio tu sector, competencia y objetivos para crear la estrategia perfecta" },
  { icon: PenTool, num: "02", title: "Diseño tu web a medida", desc: "Creo una web profesional, rápida y optimizada para convertir visitas en clientes" },
  { icon: Rocket, num: "03", title: "Empiezas a recibir clientes", desc: "Tu web empieza a trabajar para ti 24/7, generando contactos y ventas" },
];

const Process = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        Así <span className="text-gradient">trabajo</span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center bg-card">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 font-display text-xs font-bold bg-gradient-brand text-primary-foreground w-7 h-7 rounded-full flex items-center justify-center">
                {step.num}
              </span>
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
