import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Card from "../../assets/Card.png"
import googelplay from "../../assets/GoogelPlay.png"
import AppStor from "../../assets/AppStor.png"

const GREEN = "#35AFA0";

const FOOTER_COLS = [
  {
    title: "FRUIT & VEGETABLES",
    links: [
      "Fresh Vegetables",
      "Herbs & Seasoning",
      "Fresh Fruits",
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Packaged Produce",
      "Party Trays",
    ],
  },
  {
    title: "BREAKFAST & DAIRY",
    links: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Sour Cream and Dips",
      "Yogurt",
    ],
  },
  {
    title: "MEAT & SEAFOOD",
    links: [
      "Breakfast Sausage",
      "Dinner Sausage",
      "Beef",
      "Chicken",
      "Sliced Deli Meat",
      "Uncured Deli Meat",
      "Crab and Shellfish",
      "Fish and Seafood",
      "Farm Raised Fish",
    ],
  },
  {
    title: "BEVERAGES",
    links: [
      "Water",
      "Sparkling Water",
      "Soda & Pop",
      "Coffee",
      "Milk & Plant-Based Milk",
      "Tea & Kombucha",
      "Craft Beer",
      "Wine",
    ],
  },
  {
    title: "BREADS & BAKERY",
    links: [
      "Milk & Flavoured Milk",
      "Butter and Margarine",
      "Cheese",
      "Eggs",
      "Eggs Substitutes",
      "Honey",
      "Marmalades",
      "Yogurt",
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="bg-white text-gray-700 border-t mt-10">
      {/* الأعمدة */}
      <div className="mx-auto max-w-[1200px] px-4 py-10 grid grid-cols-2 md:grid-cols-5 gap-8">
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-widest font-bold text-gray-900 mb-3">
              {col.title}
            </h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-[#35AFA0] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 py-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white shadow grid place-items-center">
              <PhoneIcon className="w-5 h-5 text-[#35AFA0]" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">8 800 555-55</div>
              <div className="text-xs text-gray-500">Working 8:00 – 22:00</div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-gray-800">
              Download App on Mobile :
            </span>
            <a
              href="#"
              className="px-3 py-2 rounded-md bg-black text-white text-xs font-semibold"
            >
              <img src={googelplay} className="w-16" alt="" />
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md bg-black text-white text-xs font-semibold"
            >
              <img src={AppStor} alt="" className="w-16" />
            </a>

            <div className="flex items-center gap-2 ml-2">
              {[GlobeAltIcon, MapPinIcon, EnvelopeIcon].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border grid place-items-center hover:border-[#35AFA0]"
                >
                  <Icon className="w-4 h-4 text-gray-700" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm text-gray-600 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4 text-[#35AFA0]" />
              <span>New Cairo, EG</span>
            </div>
            <div className="flex items-center gap-1">
              <EnvelopeIcon className="w-4 h-4 text-[#35AFA0]" />
              <a href="mailto:support@example.com">support@example.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-[1200px] px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} All rights reserved.
          </div>
          <div className="flex items-center gap-3">
          <img src={Card} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}