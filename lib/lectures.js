import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

export const LECTURES = await getData("lectures").then((data) =>
  data.map((l) => ({
    title: l.title || "",
    Photo: l.photo ? (
      <Image
        src={l.photo}
        alt={l.title}
        width={600}
        height={600}
        className="object-cover"
      />
    ) : null,
    instructors: l.instructors || [],
    mode: l.mode || "",
    date: l.date || "",
    fees: l.fees || "",
    url: l.url || "",
    schedule: l.schedule || [],
    location: l.location || "",
    highlights: Array.isArray(l.highlights)
      ? l.highlights
      : JSON.parse(l.highlights || "[]"),
    benefits: l.benefits || "",
  }))
);

export const PREVIOUS = await getData("previous-lectures").then((data) =>
  data.map((v) => ({
    link: v.link || "",
    title: v.title || "",
    alt: v.alt || "Video not available",
  }))
);
