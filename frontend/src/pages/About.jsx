import { useEffect } from 'react';
import './About.css';

export default function About() {
  useEffect(() => {
    document.title = "Om oss | Ecoventilation";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Lär känna Ecoventilation – vår mission, vårt team och vårt engagemang för energieffektiva ventilationslösningar.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="about-page">
      <h1>Om oss</h1>
      <p>
        Om ventilationssystemet är rent och väljusterat kan det använda mindre energi för att ge en god luftväxling och ett behagligt inomhusklimat. Det kan också bidra till att minska uppvärmningskostnaderna, eftersom ventilationen kan använda värmeåtervinning för att ta vara på energin i den använda luften som lämnar bostaden . Ökar komforten och välbefinnandet. Om ventilationssystemet ger en frisk och ren luft till bostaden kan det bidra till en bättre hälsa, komfort och prestation för de som bor där. Det kan också minska risken för irritation, allergier, astma eller andra andningsbesvär . Därför är det viktigt att serva och underhålla ventilationen i privatägda bostäder med jämna mellanrum, helst minst en gång om året. Hur ofta du behöver serva och underhålla ventilationen beror också på vilket ventilationssystem du har, hur mycket du använder det och hur stor bostad du har.
      </p>
      <p>
        Vi på Ecoview har lång erfarenhet utav ventilations underhåll inom den privata sektorn. Vi arbetar med all sorts ventilationsrengöring för villor och radhus, som IMkanal, frånluftsventilation, FTX och luftvärmepumpar. Vi erbjuder även serviceavtal som absolut inte är bindande men kan vara skönt att ha. Då håller vi reda på intervallerna åt er och kontaktar er när det börjar bli dax.
      </p>
    </div>
  );
}
