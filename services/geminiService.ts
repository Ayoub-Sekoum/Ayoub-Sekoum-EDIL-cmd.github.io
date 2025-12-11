import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client Lazily
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (ai) return ai;
  
  const apiKey = process.env.API_KEY;
  // Prevent crash if API key is empty/missing
  if (!apiKey || apiKey.trim() === '') {
    console.warn("API Key mancante o non configurata correttamente.");
    return null;
  }
  
  try {
    ai = new GoogleGenAI({ apiKey });
    return ai;
  } catch (e) {
    console.error("Errore critico inizializzazione AI:", e);
    return null;
  }
}

export const generateConsultationResponse = async (
  userMessage: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  const client = getAiClient();
  
  // 1. Gestione errore configurazione (API Key mancante)
  if (!client) {
    return "⚠️ L'assistente virtuale non è attivo al momento (Configurazione API mancante). Siamo comunque a tua disposizione! Per un preventivo rapido o informazioni urgenti, chiamaci allo +39 0461 123 456 o scrivici nella sezione Contatti.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: `Sei "EdilBot", un assistente virtuale esperto e professionale per l'impresa edile "EdilTrento". 
        Il tuo obiettivo è aiutare i potenziali clienti a capire i servizi di ristrutturazione, costruzione e manutenzione in Trentino Alto Adige.
        
        Linee guida:
        1. Rispondi sempre in Italiano.
        2. Sii cortese, professionale e rassicurante.
        3. Se chiedono preventivi specifici, dai stime molto approssimative (range) e invita sempre a contattare l'ufficio per un sopralluogo gratuito.
        4. I nostri servizi includono: Ristrutturazioni alpine, Bioedilizia, CasaClima, Impianti (elettrico/idraulico), Tetti in legno.
        5. Non inventare prezzi fissi bassi. Sottolinea la qualità dei materiali.
        
        Rispondi in modo conciso ma utile.`
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: userMessage });
    return result.text || "Non ho capito bene, potresti riformulare la domanda?";
    
  } catch (error) {
    console.error("Errore durante la generazione della risposta:", error);
    
    // 2. Gestione errore generico (es. API down, quota superata, errore rete)
    return "Mi scuso, ma al momento i miei sistemi sono sovraccarichi o in manutenzione. Ti prego di riprovare tra qualche minuto. Se hai urgenza, i nostri uffici sono operativi: contattaci direttamente al telefono o via email.";
  }
};