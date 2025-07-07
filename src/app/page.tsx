'use client'

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Button from './components/button';



const Page = () => {
  return (
      <><Navbar /><main>
      <Button />
    </main></>
  );
};





// pages/HomePage.tsx
import Card from './components2/card';
import Accordion from './components2/accordion';
import Image from './components2/image';
import Alert from './components2/alert';
import Table from './components2/table';

const HomePage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);

  const accordionItems = [
    { title: '¿Qué es React?', content: 'React es una biblioteca de JavaScript para construir interfaces de usuario.' },
    { title: '¿Qué es TypeScript?', content: 'TypeScript es un superset de JavaScript que añade tipos estáticos.' },
    { title: '¿Cómo se usan estos componentes?', content: 'Puedes importarlos y usarlos en cualquier parte de tu aplicación.' },
  ];

  const tableHeaders = ['Nombre', 'Edad', 'Ciudad'];
  const tableData = [
    ['Juan Pérez', '28', 'Madrid'],
    ['María García', '34', 'Barcelona'],
    ['Carlos López', '22', 'Valencia'],
  ];

  return (
    <div className="page-container">
      <h1>Componentes React con TypeScript</h1>

      {showAlert && (
        <Alert 
          message="¡Bienvenido a la demostración de componentes!" 
          type="success" 
          onClose={() => setShowAlert(false)} 
        />
      )}

      <section className="section">
        <h2>Card Component</h2>
        <div className="cards-container">
          <Card 
            title="Tarjeta Ejemplo 1" 
            content="Esta es una tarjeta con imagen."
            imageUrl="https://via.placeholder.com/300x200"
          />
          <Card 
            title="Tarjeta Ejemplo 2" 
            content="Esta es una tarjeta sin imagen."
          />
        </div>
      </section>

      <section className="section">
        <h2>Accordion Component</h2>
        <Accordion items={accordionItems} />
      </section>

      <section className="section">
        <h2>Image Component</h2>
        <Image 
          src="https://via.placeholder.com/600x400" 
          alt="Imagen de ejemplo"
          caption="Esta es una imagen de demostración"
        />
      </section>

      <section className="section">
        <h2>Table Component</h2>
        <Table headers={tableHeaders} data={tableData} />
      </section>
    </div>
  );
};

export default Page;
