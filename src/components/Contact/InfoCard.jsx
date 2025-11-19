import React from "react"

const InfoCard = ({ icon,  subtitle }) => {
  return (
    <div className="bg-[--gray-custom] shadow-md rounded-lg p-6 flex flex-col  items-center text-center">
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      {subtitle && <h4 className="text-md font-bold mb-2">{subtitle}</h4>}
      <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default InfoCard;