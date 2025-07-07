import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mi Aplicación</title>
        <meta name="description" content="Descripción de mi aplicación" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Puedes agregar un Navbar aquí si es común a todas las páginas */}
        <main className="flex-grow container py-8">
          {children}
        </main>
        
        {/* Footer común */}
        <footer className="bg-white py-6 border-t">
          <div className="container text-center text-gray-600">
            <p>© {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}