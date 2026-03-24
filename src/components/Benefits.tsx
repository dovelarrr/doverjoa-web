import { motion } from "framer-motion";
import { Users, Shield, Smartphone, Trophy, TrendingUp } from "lucide-react";

const items = [
  { icon: Users, title: "Más clientes desde internet", desc: "Atrae personas que buscan tus servicios en Google y redes sociales" },
  { icon: Shield, title: "Imagen profesional", desc: "Genera confianza desde el primer segundo con un diseño de alto nivel" },
  { icon: Smartphone, title: "Adaptada a móviles", desc: "La mayoría de tus clientes te buscan desde el móvil. Tu web estará lista" },
  { icon: Trophy, title: "Diferenciación total", desc: "Destaca frente a tu competencia con una web que realmente convierte" },
  { icon: TrendingUp, title: "Mayor conversión", desc: "Cada elemento diseñado para que el visitante te contacte" },
];

const Benefits = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl sm:text-4xl font-bold text-center mb-16"
      >
        ¿Qué <span className="text-gradient">consigues</span>?
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:glow-cyan"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
