import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

const RETAILERS = [
  {
    name: "Pick n Pay",
    descriptor: "Thousands of products, weekly specials",
    logo: "/images/pnp_logo.png",
    darkBg: false,
    colour: "#e31837",
  },
  {
    name: "Woolworths",
    descriptor: "Premium quality, surprise savings",
    logo: "/images/woolworths_logo.png",
    darkBg: true,
    colour: "#006341",
  },
  {
    name: "Checkers",
    descriptor: "Unbeatable value across the board",
    logo: "/images/checkers_logo.png",
    darkBg: false,
    colour: "#005eb8",
  },
  {
    name: "Shoprite",
    descriptor: "Best prices on everyday staples",
    logo: "/images/shoprite_logo.jpeg",
    darkBg: false,
    colour: "#ff6600",
  },
];

export function RetailersSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest text-[#10b981] uppercase mb-3">
              Supported stores
            </p>
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
              Works at all your favourite stores
            </h2>
            <p className="mt-4 text-[#6b7280] text-lg max-w-md mx-auto">
              One app. Four major retailers. All their prices, right in your
              pocket.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {RETAILERS.map((retailer, i) => (
            <SectionReveal key={retailer.name} delay={i * 80}>
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Logo container */}
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl overflow-hidden"
                  style={{ backgroundColor: retailer.darkBg ? "#1f2937" : "#f9fafb" }}
                >
                  <Image
                    src={retailer.logo}
                    alt={retailer.name}
                    width={64}
                    height={64}
                    className="object-contain w-14 h-14"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-[#111827] text-sm">{retailer.name}</p>
                  <p className="text-[#9ca3af] text-xs mt-1 leading-snug hidden md:block">{retailer.descriptor}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
