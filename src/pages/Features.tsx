import { AiOutlineSafety } from 'react-icons/ai';
import { IoRocketOutline } from 'react-icons/io5';
import { GoGraph } from 'react-icons/go';
import { CiGlobe } from 'react-icons/ci';

import Section from '../components/ui/Section';
import HighlightsCard from '../components/ui/featuresCards/FeaturesCard';

export default function Highlights() {
  return (
    <Section id="features" className="gap-6 md:flex-row py-20 max-w-[85%] md:max-w-[95%]">
      <HighlightsCard
        icon={IoRocketOutline}
        title="Rápido"
        text="Accede a tu dinero al instante"
      />
      <HighlightsCard
        icon={AiOutlineSafety}
        title="Seguro"
        text="Protegemos tus datos y transacciones"
      />
      <HighlightsCard
        icon={GoGraph}
        title="Intuitivo"
        text="Analiza tus finanzas en segundos"
      />
      <HighlightsCard
        icon={CiGlobe}
        title="Siempre conectado"
        text="Disponible donde quieras, cuando quieras"
      />
    </Section>
  );
}
