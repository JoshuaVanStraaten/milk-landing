import Image from "next/image";

interface PhoneScreen {
  src: string;
  alt: string;
  screenId: string;
}

interface PhoneFrameProps {
  screens: PhoneScreen[];
  activeScreenId: string;
  glowColor?: string;
}

export function PhoneFrame({ screens, activeScreenId, glowColor = "#10b981" }: PhoneFrameProps) {
  const glowRgb = glowColor === "#f59e0b" ? "245,158,11" : "16,185,129";

  return (
    <div
      className="relative mx-auto"
      style={{ width: 300, height: 622 }}
      aria-hidden="true"
    >
      {/* Glow halo behind phone */}
      <div
        className="absolute inset-0 rounded-[40px] phone-glow pointer-events-none"
        style={{
          boxShadow: `0 0 60px 20px rgba(${glowRgb}, 0.18)`,
          zIndex: -1,
        }}
      />

      {/* Phone frame */}
      <div
        className="absolute inset-0 rounded-[40px] border-8 border-[#1f2937] bg-[#1f2937] overflow-hidden shadow-[0_25px_50px_-5px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.05)]"
      >
        {/* Notch */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1f2937] rounded-full z-10"
        />

        {/* Screens */}
        {screens.map((screen, i) => (
          <div
            key={screen.screenId}
            className={`phone-screen absolute inset-0 ${
              screen.screenId === activeScreenId ? "active" : ""
            }`}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              className="object-cover object-top"
              sizes="300px"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Side button */}
      <div className="absolute -right-2 top-24 w-1.5 h-16 bg-[#374151] rounded-full" />
      {/* Volume buttons */}
      <div className="absolute -left-2 top-20 w-1.5 h-10 bg-[#374151] rounded-full" />
      <div className="absolute -left-2 top-32 w-1.5 h-10 bg-[#374151] rounded-full" />
    </div>
  );
}
