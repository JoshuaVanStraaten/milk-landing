import Image from "next/image";

const RETAILERS = [
  { name: "Pick n Pay", logo: "/images/pnp_logo.png", darkBg: false },
  { name: "Woolworths", logo: "/images/woolworths_logo.png", darkBg: true },
  { name: "Checkers", logo: "/images/checkers_logo.png", darkBg: false },
  { name: "Shoprite", logo: "/images/shoprite_logo.jpeg", darkBg: false },
];

export function RetailerStrip() {
  return (
    <section className="py-12 border-y border-gray-100 bg-[#f9fafb]">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold tracking-widest text-[#9ca3af] uppercase mb-8">
          Trusted by shoppers at
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {RETAILERS.map((retailer) => (
            <div
              key={retailer.name}
              className={`flex items-center justify-center rounded-xl overflow-hidden ${
                retailer.darkBg ? "bg-[#006341] px-4 py-2" : ""
              }`}
            >
              <Image
                src={retailer.logo}
                alt={retailer.name}
                width={120}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
