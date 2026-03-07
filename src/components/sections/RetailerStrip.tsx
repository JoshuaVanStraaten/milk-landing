import Image from "next/image";

const RETAILERS = [
  { name: "Pick n Pay", logo: "/images/pnp_logo.png" },
  { name: "Woolworths", logo: "/images/woolworths_logo.png" },
  { name: "Checkers", logo: "/images/Checkers_idMlNIQk9h_0.png" },
  { name: "Shoprite", logo: "/images/shoprite_logo.jpg" },
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
              className="flex items-center justify-center"
            >
              <Image
                src={retailer.logo}
                alt={retailer.name}
                width={240}
                height={96}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
