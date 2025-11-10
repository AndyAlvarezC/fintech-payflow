import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import CreditCard from '../components/ui/CreditCard';

export default function Home() {
  return (
    <Section id="home" className="w-[90%] pt-28 md:pt-34 lg:pt-54">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-metallic-gradient">
        Fintech inteligente para tu tranquilidad financiera
      </h1>
      <h2 className="pt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-bold">
        Visualiza y controla tus finanzas de manera rápida, segura y sencilla.
      </h2>

      <CreditCard />

      <div className="md:pt-12">
        <Button text="Comienza Ahora" className="w-60 h-16 md:h-20 text-lg" />
      </div>
    </Section>
  );
}
