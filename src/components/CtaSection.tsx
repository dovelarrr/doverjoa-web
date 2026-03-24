import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34612277780?text=Hola,%20he%20visto%20tu%20web%20y%20quiero%20información";
const PHONE_URL = "tel:+34612277780";

const CtaSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-brand p-[1px]"
      >
        <div className="rounded-2xl bg-card p-10 sm:p-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Mira cómo podría ser tu web{" "}
            <span className="text-gradient">antes de pagar</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Sin compromiso. Te muestro una propuesta personalizada para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white hover:bg-[#20BD5A] transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={PHONE_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-primary/50 px-8 py-4 text-lg font-semibold text-primary hover:bg-primary/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              Llamar
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
