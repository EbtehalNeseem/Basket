// src/components/InfoCardsList.jsx
import React from "react";
import InfoCard from "./InfoCard";
import { MapPin , PhoneCall , Mail} from "lucide-react";

const InfoCardsList = () => {
  return (
    <div className="px-20  grid grid-cols-1 md:grid-cols-3 gap-6">
      <InfoCard
        icon={<MapPin  />}
        subtitle="102 Street 2714 Donovan" 
      />
      <InfoCard
        icon={<PhoneCall />}
        subtitle="+02 1234 567 88"
      />
      <InfoCard
        icon={<Mail />}
        subtitle="info@example.com"
      />
    </div>
  );
};

export default InfoCardsList;
