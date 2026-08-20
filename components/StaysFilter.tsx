"use client";
import { useRouter, useSearchParams } from "next/navigation";

const TYPES = ["All", "Luxury Villas", "Penthouses", "Serviced Apartments", "Long-Term", "Corporate"];

export default function StaysFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("type") || "All";

  function select(t: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (t === "All") {
      params.delete("type");
    } else {
      params.set("type", t);
    }
    router.push(`/stays?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-3 py-8 border-b border-outline-variant/30">
      {TYPES.map((t) => (
        <button
          key={t}
          onClick={() => select(t)}
          className={"font-label-caps text-label-caps px-6 py-3 border transition-all " +
            (current === t
              ? "bg-primary text-on-primary border-primary"
              : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary")}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
