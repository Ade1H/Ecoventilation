import { useEffect } from 'react';
import './careers.css';

export default function Kariar() {
  useEffect(() => {
    document.title = "Karriär | Ecoventilation";

    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Utforska karriärmöjligheter hos Ecoventilation. Vi söker engagerade och kompetenta medarbetare inom ventilation, avlopp och service.";
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="kariar-page">
      <h1>Karriär</h1>
      <p>
        Vill du bli en del av vårt team? Hos Ecoventilation värdesätter vi kompetens, engagemang och god arbetsmiljö.
      </p>
    </div>
  );
}
