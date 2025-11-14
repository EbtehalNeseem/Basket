import {
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function ServiceIcons() {
  const ICON_COLOR = "#35AFA0";

  const items = [
    {
      icon: <SparklesIcon className="w-6 h-6" style={{ color: ICON_COLOR }} />,
      title: "Everyday fresh products",
      desc: "Only the best quality for you",
    },
    {
      icon: <TruckIcon className="w-6 h-6" style={{ color: ICON_COLOR }} />,
      title: "Free delivery over $50",
      desc: "Fast & secure shipping",
    },
    {
      icon: (
        <ShieldCheckIcon className="w-6 h-6" style={{ color: ICON_COLOR }} />
      ),
      title: "Secure payment methods",
      desc: "100% safe transactions",
    },
    {
      icon: (
        <ChatBubbleOvalLeftEllipsisIcon
          className="w-6 h-6"
          style={{ color: ICON_COLOR }}
        />
      ),
      title: "24/7 Customer Support",
      desc: "We’re here to help anytime",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center bg-[#EAF6F4] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              {item.icon}
            </div>
            <h4 className="font-semibold text-gray-800 text-sm md:text-base">
              {item.title}
            </h4>
            <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
