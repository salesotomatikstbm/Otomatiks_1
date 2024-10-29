import React from 'react';

const BranchCard = ({ name, location, contact, email, mapEmbed }) => {
  return (
    <div className="bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch">
      <div>
        <h4 className="leading-[141%] text-center">
          <span className="text-2xl font-medium">{name}</span>
        </h4>
        <p className="pt-1 text-center">{location}</p>
        <p className="pt-1 text-center">Contact: {contact}</p>
        <p className="pt-1 text-center">Email: {email}</p>
      </div>
      {/* Map Embed */}
      <div className="pt-4">
        <div 
          className="map-embed" 
          dangerouslySetInnerHTML={{ __html: mapEmbed }} 
        />
      </div>
    </div>
  );
};

export default BranchCard;
