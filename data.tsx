import { Hammer, Ruler, Zap, Truck, Home, PenTool, Mountain, Thermometer } from 'lucide-react';
import { Project, Testimonial, TeamMember, FAQItem } from './types';

// --- INFORMAZIONI AZIENDALI ---
export const COMPANY_INFO = {
  name: "EdilTrento",
  full_name: "EdilTrento Costruzioni S.r.l.",
  tagline: "L'Arte di Costruire nelle Dolomiti",
  description: "Fusione tra tradizione alpina e innovazione futuristica. Case in legno, pietra e vetro ad altissima efficienza energetica.",
  founded_year: "1998",
  address: "Via delle Dolomiti 42, 38122 Trento (TN)",
  phone: "+39 0461 123 456",
  email: "info@ediltrento.it",
  email_quotes: "preventivi@ediltrento.it",
  hours_week: "Lunedì - Venerdì: 08:00 - 18:00",
  hours_weekend: "Sabato: Su appuntamento",
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#"
  }
};

// --- IMMAGINI TRENTINO VIBE ---
export const IMAGES = {
  // Immagine di montagne/chalet moderno per l'header
  hero_bg: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop", 
  // Immagine team/lavoro
  about_hero: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"  
};

// --- I TUOI PROGETTI (PORTFOLIO) ---
export const PORTFOLIO_CATEGORIES = ['Tutti', 'Chalet & Baite', 'Ristrutturazioni', 'CasaClima', 'Commerciale'];

export const PROJECTS: Project[] = [
  { 
    id: 1, 
    title: 'Chalet Vista Brenta', 
    category: 'Chalet & Baite', 
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop', 
    description: 'Nuova costruzione in bioedilizia con ampie vetrate sulle Dolomiti.',
    panoramaUrl: 'https://images.unsplash.com/photo-1596263576924-4af87786ef48?q=80&w=2670&auto=format&fit=crop',
    location: "Madonna di Campiglio (TN)",
    completionYear: "2023",
    tags: ["Legno Lamellare", "Triplo Vetro", "Geotermia", "Tetto in Scajole"]
  },
  { 
    id: 2, 
    title: 'Recupero Maso Antico', 
    category: 'Ristrutturazioni', 
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop', 
    description: 'Risanamento conservativo di un maso del \'700 con isolamento naturale.',
    location: "Val di Fiemme (TN)",
    completionYear: "2022",
    tags: ["Pietra Locale", "Intonaco Calce", "Restauro", "Isolamento Fibra Legno"]
  },
  { 
    id: 3, 
    title: 'Residence "Larice"', 
    category: 'CasaClima', 
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-2495db98dada?q=80&w=2688&auto=format&fit=crop', 
    description: 'Complesso residenziale certificato CasaClima A Gold.',
    location: "Trento Collina",
    completionYear: "2024",
    tags: ["CasaClima Gold", "Fotovoltaico", "VMC", "Domotica Avanzata"]
  }
];

// --- I TUOI SERVIZI ---
export const SERVICES = [
  {
    title: "Bioedilizia & Legno",
    desc: "Costruzioni sostenibili in legno X-Lam e telaio, per un comfort abitativo superiore e rispetto dell'ambiente trentino.",
    icon: <Mountain className="w-8 h-8" />
  },
  {
    title: "Ristrutturazioni Alpine",
    desc: "Recupero di masi e baite con materiali locali (pietra, larice) integrati con tecnologie domotiche moderne.",
    icon: <Hammer className="w-8 h-8" />
  },
  {
    title: "Efficienza Energetica",
    desc: "Cappotti termici, tetti ventilati e serramenti triplo vetro per affrontare gli inverni rigidi risparmiando.",
    icon: <Thermometer className="w-8 h-8" />
  },
  {
    title: "Impianti & Domotica",
    desc: "Il futuro in casa: controllo remoto riscaldamento, fotovoltaico e gestione intelligente dell'energia.",
    icon: <Zap className="w-8 h-8" />
  },
  {
    title: "Interni di Design",
    desc: "Finiture di pregio che uniscono il calore della tradizione alla pulizia delle linee moderne.",
    icon: <Ruler className="w-8 h-8" />
  },
  {
    title: "Scavi in Pendenza",
    desc: "Parco macchine specializzato per operare anche su terreni montani difficili e ripidi.",
    icon: <Truck className="w-8 h-8" />
  }
];

// --- STATISTICHE CHI SIAMO ---
export const STATS = [
  { value: "25+", label: "Anni sul Territorio", color: "text-primary" },
  { value: "A+", label: "Efficienza Media", color: "text-secondary" },
  { value: "100%", label: "Materiali Certificati", color: "text-primary" },
  { value: "30", label: "Artigiani Esperti", color: "text-secondary" }
];

// --- CARATTERISTICHE HOME PAGE ---
export const HOME_FEATURES = [
  {
    icon: <Home className="h-10 w-10 text-secondary" />,
    title: "Stile Alpino Moderno",
    desc: "Il calore del legno incontra il design contemporaneo e le grandi vetrate panoramiche."
  },
  {
    icon: <PenTool className="h-10 w-10 text-secondary" />,
    title: "Virtual Reality",
    desc: "Visualizza la tua futura casa in anteprima con i nostri rendering e tour virtuali 3D."
  },
  {
    icon: <Truck className="h-10 w-10 text-secondary" />,
    title: "Affidabilità Trentina",
    desc: "Precisione, puntualità e solidità. Costruiamo per durare generazioni."
  }
];

// --- NUOVI DATI PER COMPLETEZZA ---

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Giuseppe R.",
    role: "Proprietario Baita",
    content: "Hanno trasformato il mio vecchio rudere in un gioiello. La cura per la pietra e il legno antico è stata maniacale. Consigliatissimi.",
    rating: 5
  },
  {
    id: 2,
    name: "Arch. Luisa M.",
    role: "Studio Architettura Trento",
    content: "Collaboro con EdilTrento da anni. La precisione tecnica e il rispetto dei tempi di consegna sono una rarità in questo settore.",
    rating: 5
  },
  {
    id: 3,
    name: "Famiglia Costa",
    role: "Nuova Costruzione",
    content: "Volevamo una casa passiva senza rinunciare allo stile. Il risultato ha superato le aspettative e le bollette sono azzerate!",
    rating: 5
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Marco Rossi",
    role: "Fondatore & Capomastro",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
  },
  {
    name: "Ing. Elena Bianchi",
    role: "Direttore Tecnico",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
  },
  {
    name: "Roberto Neri",
    role: "Capo Cantiere",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quanto costa un preventivo?",
    answer: "Il preventivo e il primo sopralluogo tecnico sono sempre gratuiti e senza impegno. Crediamo nella trasparenza fin dal primo incontro."
  },
  {
    question: "Vi occupate anche delle pratiche burocratiche?",
    answer: "Sì, offriamo un servizio 'chiavi in mano'. Il nostro ufficio tecnico gestisce permessi, SCIA, CILA e pratiche per le detrazioni fiscali."
  },
  {
    question: "Quali sono i tempi medi per una ristrutturazione completa?",
    answer: "Dipende dalla metratura, ma generalmente garantiamo la consegna tra i 3 e i 6 mesi per un appartamento standard, con penali a nostro carico in caso di ritardo."
  },
  {
    question: "Operate solo a Trento?",
    answer: "Lavoriamo principalmente in Trentino Alto Adige, ma valutiamo progetti di pregio anche nelle regioni limitrofe."
  }
];