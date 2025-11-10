import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo/logo.svg';
import Button from '../components/ui/Button';
import useScrollTo from '../utils/useScrollTo';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'partners', label: 'Partners' },
  { id: 'demo', label: 'Demo' },
  { id: 'pricing', label: 'Pricing' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleNavClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6">
      <nav
        className="relative max-w-7xl mx-auto h-14 sm:h-16 md:h-20 px-4 sm:px-6 md:px-8 
        flex items-center justify-between rounded-2xl md:rounded-3xl lg:rounded-4xl
        bg-black/50 md:bg-transparent backdrop-blur-lg md:backdrop-blur-xs
        border border-white/10 md:border-none"
      >
        {/* Logo */}
        <a href="/" className="z-50">
          <img
            src={logo}
            alt="logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="cursor-pointer text-sm xl:text-base hover:text-cyan-400 
                transition-colors duration-300 whitespace-nowrap"
            >
              {link.label}
            </p>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button text="Empieza Gratis" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl sm:text-3xl z-50 transition-transform duration-300
            hover:scale-110 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiX className="transform rotate-90 transition-transform duration-300" />
          ) : (
            <HiMenu className="transform rotate-0 transition-transform duration-300" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] sm:top-[88px] md:top-[104px] lg:hidden
          bg-black/60 backdrop-blur-xl z-40
          transform transition-all duration-300 ease-in-out
          ${
            isOpen
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center pt-24 sm:pt-48 gap-6 sm:gap-8 px-6">
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-10 text-center w-full max-w-xs">
            {navLinks.map((link) => (
              <p
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="cursor-pointer text-xl sm:text-3xl font-semibold
                  hover:text-cyan-400 transition-colors duration-300
                  active:scale-95 transform"
              >
                {link.label}
              </p>
            ))}
          </nav>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-8 w-full max-w-xs mt-8 text-lg sm:text-xl">
            <Button text="Login" className="w-full h-12 sm:h-14" />
            <Button text="Empieza Gratis" className="w-full h-12 sm:h-14" />
          </div>
        </div>
      </div>
    </header>
  );
}
