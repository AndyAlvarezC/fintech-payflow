import PartnersCard from '../components/ui/PartnersCard';
import Visa from '../components/icons/Visa';
import Mastercard from '../components/icons/Mastercard';
import Paypal from '../components/icons/Paypal';
import Stripe from '../components/icons/Stripe';
import Applepay from '../components/icons/Applepay';
import Googlepay from '../components/icons/Googlepay';
import { GoShieldCheck } from 'react-icons/go';
import { CiLock } from 'react-icons/ci';

const partnerLogos = [
  { logo: <Visa /> },
  { logo: <Mastercard /> },
  { logo: <Paypal /> },
  { logo: <Stripe /> },
  { logo: <Applepay /> },
  { logo: <Googlepay /> },
];

const stats = [
  { value: '+10.000', label: 'Usuarios activos' },
  { value: '2M+', label: 'Transacciones procesadas' },
  { value: '99.9%', label: 'Tiempo en línea' },
];

const securityFeatures = [
  {
    logo: <GoShieldCheck className="w-10 h-10 text-gray-200" />,
    text: 'Conexión SSL segura',
  },
  {
    logo: <CiLock className="w-10 h-10 text-gray-200" />,
    text: 'Protección antifraude',
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32"
    >
      <div className="w-full max-w-[80%]">
        <h2 className="font-extrabold text-metallic-gradient text-2xl sm:text-3xl lg:text-4xl mb-8 md:mb-12 text-center md:text-left px-4 md:px-0">
          Confiado por miles de clientes y partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 md:mb-16 px-4 md:px-0">
          {partnerLogos.map((partner, index) => (
            <PartnersCard key={index} logo={partner.logo} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 px-4 md:px-0">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto px-4 md:px-0">
          {securityFeatures.map((feature, index) => (
            <PartnersCard key={index} logo={feature.logo} text={feature.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
