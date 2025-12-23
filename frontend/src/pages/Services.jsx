// pages/Services.jsx
import { useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

export default function Services() {
  useEffect(() => {
    // Set page title
    document.title = "Våra Tjänster | Ecoventilation";

    // Set meta description dynamically
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Utforska Ecoventilations professionella tjänster: ventilation, avlopp, centraldammsugare, elservice och mer för hem och företag i Sverige.";
    document.head.appendChild(meta);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const services = [
    {
      title: "Rensning imkanal",
      description:
        "Imkanal är den kanal som går från spisfläkten. Imkanal är en ventilationskanal som ska föra bort luft från ett utrymme där du lagar mat. Med tiden samlas flott och fett som uppstår vid matlagning vilket ökar risken för en brand."
    },
    {
      title: "Rensning frånluft",
      description:
        "Frånluftsventilation är en typ av ventilationssystem där luften avlägsnas från ett rum och leds ut genom en kanal. Detta skapar ett undertryck som drar in frisk luft från andra öppningar i byggnaden. Det är vanligt i bostäder och andra byggnader och hjälper till att hålla luften fräsch och hälsosam."
    },
    {
      title: "Rensning tilluft",
      description:
        "Tilluft är den luft som tillförs en byggnad eller ett utrymme för att ventilera och reglera temperaturen. Tilluft i en bostad är viktigt för att hålla en god inomhusluftkvalitet och för att skapa en behaglig atmosfär."
    },
    {
      title: "Rensning luft luft",
      description:
        "En luftvärmepump ser oftast ut som en rektangulär enhet som monteras på en vägg eller ställs på marken utanför huset. Den har vanligtvis ett antal ventilationsöppningar på framsidan och kan variera i storlek beroende på modell och kapacitet."
    },
    {
      title: "FTX/värmeväxlare",
      description:
        "Med fläktsystem som styr både till- och frånluften. Då systemet kopplas till värmeåtervinning kallas det FTX-system (X för återvinning av den varma inneluften) Om du har en fastighet med den här typen av värmeåtervinning så bör du också ha en plan för rengöring av FTX-Ventilation och byta filter regelbundet."
    },
    {
      title: "Centraldamsugare",
      description:
        "En centraldammsugare är en smart och effektiv lösning för att hålla ditt hem rent och fritt från damm och smuts. Men för att den ska fortsätta fungera optimalt är det viktigt att genomföra regelbundet underhåll. Att investera tid och resurser i att regelbundet kontrollera och underhålla centralldammsugaren lönar sig i längden."
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="services-header">
          <h1>Våra Tjänster</h1>
          <p className="subtitle">
            Vi erbjuder ett brett utbud av professionella tjänster för ditt hem. 
            Alla våra tjänster utförs av certifierade experter med år av erfarenhet.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="cta-section">
          <h2>Redo att boka en tjänst?</h2>
          <p>Kontakta oss för en kostnadsfri konsultation eller bokning.</p>
          <a href="/contact" className="btn btn-primary">Kontakta oss</a>
        </div>
      </div>
    </div>
  );
}
