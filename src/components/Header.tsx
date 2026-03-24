import logo from "@/assets/logo.jpg";
import { Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34612277780?text=Hola,%20he%20visto%20tu%20web%20y%20quiero%20información";
const PHONE_URL = "tel:+34612277780";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-glass">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <img src={logo} alt="doverJoa" className="h-10 w-10 rounded-full" />
        <span className="font-display font-bold text-lg text-foreground">
          dover<span className="text-gradient">Joa</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={PHONE_URL}
          className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-4 h-4" />
          Llamar
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:bg-[#20BD5A] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </header>
);

export default Header;
