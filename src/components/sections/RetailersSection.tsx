import { RetailerBadge } from "@/components/ui/RetailerBadge";
import { SectionReveal } from "@/components/ui/SectionReveal";

const RETAILERS = [
  {
    name: "Pick n Pay",
    descriptor: "Thousands of products, weekly specials",
    colour: "#e31837",
  },
  {
    name: "Woolworths",
    descriptor: "Premium quality, surprise savings",
    colour: "#006341",
  },
  {
    name: "Checkers",
    descriptor: "Unbeatable value across the board",
    colour: "#005eb8",
  },
  {
    name: "Shoprite",
    descriptor: "Best prices on everyday staples",
    colour: "#ff6600",
  },
];

export function RetailersSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl">
              Works at all your favourite stores
            </h2>
            <p className="mt-4 text-[#6b7280] text-lg max-w-md mx-auto">
              One app. Four major retailers. All their prices, right in your
              pocket.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {RETAILERS.map((retailer, i) => (
            <SectionReveal key={retailer.name} delay={i * 80}>
              <RetailerBadge
                name={retailer.name}
                descriptor={retailer.descriptor}
                colour={retailer.colour}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
