// components2/Accordion.tsx
import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        className="accordion-header" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="accordion-icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;