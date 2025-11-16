import secureImg from "../../assets/SecureImage.jpeg";
const GREEN = "#17a589";

export default function SecureStrip() {
  return (
    <div className="mx-auto max-w-[1200px] px-4">
      <div
        className="
          rounded-xl
          bg-[#f8f1e7]                        
                      
          px-2 md:px-6
          py-1 md:py-0
          grid grid-cols-1 md:grid-cols-[auto_1fr_auto]  
          items-center gap-3 md:gap-6
        "
      >
        {/* 1) text LEFT */}
        <div className="text-center md:text-left">
          <span className="text-[13px] md:text-[15px]">
            <b className="font-semibold" style={{ color: GREEN }}>
              100% Secure delivery
            </b>
            <span className="text-gray-600">
              {" "}
              without contacting the courier
            </span>
          </span>
        </div>

        {/* 2) IMAGE (وسط) */}
        <div className="justify-self-center">
          {secureImg ? (
            <img
              src={secureImg}
              alt="secure delivery"
              className="h-16 md:h-24 w-auto md:w-[170px]  object-contain translate-y-[1px]"
            />
          ) : (
            <div className="w-24 h-10 bg-white/60 rounded-md grid place-items-center text-xs text-gray-500">
              Image
            </div>
          )}
        </div>

        {/* 3) button RIGHT */}
        <div className="justify-self-center md:justify-self-end">
          <a
            href="#shop"
            className="
              inline-flex items-center justify-center
              h-9 px-4 rounded-full
              text-white text-sm
              transition-colors
            "
            style={{ backgroundColor: GREEN }}
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
