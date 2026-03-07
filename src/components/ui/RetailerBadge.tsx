interface RetailerBadgeProps {
  name: string;
  descriptor: string;
  colour: string;
}

export function RetailerBadge({ name, descriptor, colour }: RetailerBadgeProps) {
  return (
    <div
      className="group flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{ borderLeftWidth: 4, borderLeftColor: colour }}
    >
      <span className="font-bold text-[#111827] text-base">{name}</span>
      <span className="text-sm text-[#6b7280]">{descriptor}</span>
    </div>
  );
}
