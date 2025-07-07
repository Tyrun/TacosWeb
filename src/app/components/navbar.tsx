'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ID de ejemplo
  const dynamicId = "123";

  // Estilos personalizados para cada botón
  const buttonStyles = {
    id: {
      base: "bg-blue-50 text-blue-600 hover:bg-blue-100",
      active: "bg-blue-100 text-blue-700 shadow-inner",
      border: "border-blue-300"
    },
    servicios: {
      base: "bg-green-50 text-green-600 hover:bg-green-100",
      active: "bg-green-100 text-green-700 shadow-inner",
      border: "border-green-300"
    },
    sistemas: {
      base: "bg-purple-50 text-purple-600 hover:bg-purple-100",
      active: "bg-purple-100 text-purple-700 shadow-inner",
      border: "border-purple-300"
    },
    contacto: {
      base: "bg-orange-50 text-orange-600 hover:bg-orange-100",
      active: "bg-orange-100 text-orange-700 shadow-inner",
      border: "border-orange-300"
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-opacity-80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-300">
              BrandName
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Botón ID */}
            <Link 
              href={`/unid/${dynamicId}`}
              className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname?.startsWith('/unid/') 
                  ? buttonStyles.id.active 
                  : buttonStyles.id.base
              } ${buttonStyles.id.border}`}
            >
              <span className="mr-2">🔑</span>
              ID
              {pathname?.startsWith('/unid/') && (
                <span className="ml-2 text-xs bg-blue-200 px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </Link>
            
            {/* Botón Servicios */}
            <Link 
              href="/servicios"
              className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/servicios' 
                  ? buttonStyles.servicios.active 
                  : buttonStyles.servicios.base
              } ${buttonStyles.servicios.border}`}
            >
              <span className="mr-2">🛠️</span>
              Servicios
              {pathname === '/servicios' && (
                <span className="ml-2 text-xs bg-green-200 px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </Link>
            
            {/* Botón Sistemas */}
            <Link 
              href="/sistemas"
              className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/sistemas' 
                  ? buttonStyles.sistemas.active 
                  : buttonStyles.sistemas.base
              } ${buttonStyles.sistemas.border}`}
            >
              <span className="mr-2">💻</span>
              Sistemas
              {pathname === '/sistemas' && (
                <span className="ml-2 text-xs bg-purple-200 px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </Link>
            
            {/* Botón Contacto */}
            <Link 
              href="/contacto"
              className={`px-4 py-2 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/contacto' 
                  ? buttonStyles.contacto.active 
                  : buttonStyles.contacto.base
              } ${buttonStyles.contacto.border}`}
            >
              <span className="mr-2">📞</span>
              Contacto
              {pathname === '/contacto' && (
                <span className="ml-2 text-xs bg-orange-200 px-2 py-0.5 rounded-full">
                  Active
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {/* Botón ID (Mobile) */}
            <Link 
              href={`/unid/${dynamicId}`}
              className={`block px-4 py-3 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname?.startsWith('/unid/') 
                  ? buttonStyles.id.active 
                  : buttonStyles.id.base
              } ${buttonStyles.id.border}`}
              onClick={toggleMenu}
            >
              <span className="mr-2">🔑</span>
              ID
            </Link>
            
            {/* Botón Servicios (Mobile) */}
            <Link 
              href="/servicios"
              className={`block px-4 py-3 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/servicios' 
                  ? buttonStyles.servicios.active 
                  : buttonStyles.servicios.base
              } ${buttonStyles.servicios.border}`}
              onClick={toggleMenu}
            >
              <span className="mr-2">🛠️</span>
              Servicios
            </Link>
            
            {/* Botón Sistemas (Mobile) */}
            <Link 
              href="/sistemas"
              className={`block px-4 py-3 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/sistemas' 
                  ? buttonStyles.sistemas.active 
                  : buttonStyles.sistemas.base
              } ${buttonStyles.sistemas.border}`}
              onClick={toggleMenu}
            >
              <span className="mr-2">💻</span>
              Sistemas
            </Link>
            
            {/* Botón Contacto (Mobile) */}
            <Link 
              href="/contacto"
              className={`block px-4 py-3 rounded-lg border font-medium transition-all duration-300 flex items-center ${
                pathname === '/contacto' 
                  ? buttonStyles.contacto.active 
                  : buttonStyles.contacto.base
              } ${buttonStyles.contacto.border}`}
              onClick={toggleMenu}
            >
              <span className="mr-2">📞</span>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;