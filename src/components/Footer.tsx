import { MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WHATSAPP_URL = "https://wa.me/34612277780?text=Hola,%20he%20visto%20tu%20web%20y%20quiero%20información";
const PHONE_URL = "tel:+34612277780";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="doverJoa" className="h-8 w-8 rounded-full" />
        <span className="font-display font-bold text-foreground">
          dover<span className="text-gradient">Joa</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#20BD5A] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href={PHONE_URL}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
      </div>
    </div>
    <div className="container mt-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} doverJoa. Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
