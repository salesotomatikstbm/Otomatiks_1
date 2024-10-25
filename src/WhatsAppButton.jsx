
import React from 'react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-0 right-0 p-3">
      <a
        href="https://wa.me/918610210593"
        target="_blank"
        rel="noopener noreferrer" 
        className="flex justify-end"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
          className="w-15 h-15" 
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
