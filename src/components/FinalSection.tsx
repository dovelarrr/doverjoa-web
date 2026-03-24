import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34612277780?text=Hola,%20he%20visto%20tu%20web%20y%20quiero%20información";

const FinalSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.03] to-transparent pointer-events-none" />
    <div className="container relative text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-10 leading-snug"
      >
        Tu competencia ya está en internet.{" "}
        <span className="text-gradient">La diferencia es quién convierte mejor.</span>
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-10 py-5 text-xl font-bold text-white hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6" />
        Hablemos por WhatsApp
      </motion.a>
    </div>
  </section>
);

export default FinalSection;
