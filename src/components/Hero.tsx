import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34612277780?text=Hola,%20he%20visto%20tu%20web%20y%20quiero%20información";
const PHONE_URL = "tel:+34612277780";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Background glow effects */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Consigo clientes para negocios locales con{" "}
          <span className="text-gradient glow-text">páginas web que convierten</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Diseño webs modernas, rápidas y enfocadas en generar contactos reales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Hablar por WhatsApp
          </a>
          <a
            href={PHONE_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 px-8 py-4 text-lg font-semibold text-primary hover:bg-primary/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
        </motion.div>
      </div>

      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <div className="rounded-xl border border-border bg-card p-2 glow-cyan">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-2 text-xs text-muted-foreground">tunegocio.com</span>
          </div>
          <div className="aspect-video bg-gradient-to-br from-secondary to-background rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-brand mx-auto mb-4 animate-float" />
              <div className="h-4 w-48 bg-primary/20 rounded mx-auto mb-3" />
              <div className="h-3 w-36 bg-primary/10 rounded mx-auto mb-6" />
              <div className="h-10 w-32 bg-gradient-brand rounded-lg mx-auto" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
