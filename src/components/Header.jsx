import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600">Finanças+</h1>

        <button
          className="sm:hidden text-blue-600"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden sm:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="#hero" className="hover:text-blue-600 transition">Início</a>
          <a href="#about" className="hover:text-blue-600 transition">Sobre</a>
          <a href="#features" className="hover:text-blue-600 transition">Funcionalidades</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Depoimentos</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contato</a>
        </nav>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white px-6 pb-4 space-y-3 text-gray-700 text-sm font-medium">
          <a href="#hero" onClick={toggleMenu} className="block hover:text-blue-600">Início</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">Sobre</a>
          <a href="#features" onClick={toggleMenu} className="block hover:text-blue-600">Funcionalidades</a>
          <a href="#testimonials" onClick={toggleMenu} className="block hover:text-blue-600">Depoimentos</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contato</a>
        </div>
      )}
    </header>
  );
}

export default Header;
