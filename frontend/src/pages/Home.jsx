// src/pages/Home.jsx
import { useEffect } from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

import ImkanalImage from "../assets/image/Immkanal.jpg"; // Kontrollera stavningen på filnamnet
import franluftImage from "../assets/image/Franluft.jpg"; // Exempel, importera fler bilder om du vill
import TilLuft from "../assets/image/TillLuft.jpg";
// Import your images if they are in src/assets
import serviceImage1 from '../assets/image/herobildA.png';
import serviceImage2 from '../assets/image/ftx.png';
import serviceImage3 from '../assets/image/EcoHeroG.webp';

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Ecoventilation | Smart Ventilation Solutions";

    // Set meta description dynamically
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content =
      "Ecoventilation provides energy-efficient ventilation, cleaning, and maintenance services for homes and businesses in Sweden.";
    document.head.appendChild(meta);

    // Cleanup function to remove the meta tag when component unmounts
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  const services = [
    
     {
        title: "Rensning imkanal",
        description:
          "Imkanal är den kanal som går från spisfläkten. Imkanal är en ventilationskanal som ska föra bort luft från ett utrymme där du lagar mat. Med tiden samlas flott och fett som uppstår vid matlagning vilket ökar risken för en brand.",
        image: ImkanalImage
      },
      {
        title: "Rensning frånluft",
        description:
          "Frånluftsventilation är en typ av ventilationssystem där luften avlägsnas från ett rum och leds ut genom en kanal. Detta skapar ett undertryck som drar in frisk luft från andra öppningar i byggnaden. Det är vanligt i bostäder och andra byggnader och hjälper till att hålla luften fräsch och hälsosam.",
        image: franluftImage
      },
      {
        title: "Rensning tilluft",
        description:
          "Tilluft är den luft som tillförs en byggnad eller ett utrymme för att ventilera och reglera temperaturen. Tilluft i en bostad är viktigt för att hålla en god inomhusluftkvalitet och för att skapa en behaglig atmosfär.",
        image: TilLuft
      },
  ];

  const features = [
    {
      title: "Erfarenhet",
      description:
        "Flera års erfarenhet i branschen med verksamhet över hela Sverige",
    },
    {
      title: "Expertis",
      description:
        "Certifierade experter som garanterar högsta kvalitet på alla tjänster",
    },
    {
      title: "Prisvärt",
      description: "Konkurrenskraftiga priser med transparenta prissättningar",
    },
    {
      title: "Snabb service",
      description: "Akuta ärenden hanteras snabbt och effektivt",
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="hero-section">
        <HeroCarousel />
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Våra Tjänster</h2>
            <p className="section-subtitle">
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
                 image={service.image}
                

              />
            ))}
          </div>

          <div className="text-center mt-4">
            <a href="/services" className="btn btn-secondary">
              Se alla tjänster
            </a>
          </div>
        </div>
      </section>

      {/* First Image Section */}
      <section className="image-section">
        <div className="container">
          <div className="image-container">
            <img
              src={serviceImage1}
              alt="Expertpersonal som utför ventilationsservice"
              className="services-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Varför välja oss?</h2>
            <p className="section-subtitle">
             Med för mycket smutspartiklar och textildamm i ventilationskanalerna blir luftflödena inte rätt och cirkulationen försämras eller avtar helt. Det ökar även risken för att mögel och bakterier tar fäste som sedan sprids till de övriga delarna i fastigheten. Genom att regelbundet rengöra och underhålla ditt ventilationssystem kan vi minska förekomsten av dessa partiklar och skapa en friskare inomhusmiljö.

Ventilations rengöring är processen att rengöra ventilationssystem för att säkerställa att de fungerar effektivt och att luften som cirkulerar i byggnaden är ren och hälsosam. Detta involverar vanligtvis att avlägsna damm, smuts och andra föroreningar från ventilationskanaler och luftfilter.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <span className="feature-number">{index + 1}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="image-section">
        <div className="container">
          <div className="image-container">
            <img
              src={serviceImage2}
              alt="Modern utrustning för avlopps- och ventilationsservice"
              className="services-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Redo att boka en tjänst?</h2>
          <p>
            Vi på Ecoview har lång erfarenhet utav ventilations underhåll inom den privata sektorn. Vi arbetar med all sorts ventilationsrengöring för villor och radhus, som IMkanal, frånluftsventilation, FTX och luftvärmepumpar. Vi erbjuder även serviceavtal som absolut inte är bindande men kan vara skönt att ha. Då håller vi reda på intervallerna åt er och kontaktar er när det börjar bli dax.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Kontakta oss
            </a>
            <a href="tel:+46812345678" className="btn btn-secondary">
              Ring oss
            </a>
          </div>
        </div>

        <div className="container mt-4">
          <div className="image-container">
            <img
              src={serviceImage3}
              alt="Expertpersonal som utför ventilationsservice"
              className="services-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
