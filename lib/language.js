import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

export const LANGUAGE_TEAM = await getData("language-team").then((team) =>
  team.map((m) => ({
    name: m.name || "",
    post: m.post || "",
    phone: m.phone || "",
    email: m.email || "",
    linkedin: m.linkedin || "",
    Photo: (
      <Image
        src={m.photo}
        alt={m.name}
        width={200}
        height={200}
        className="object-cover"
      />
    ),
  }))
);

export const LANGUAGE_COURSES = await getData("language-courses").then((data) =>
  data.map((w) => ({
    title: w.title || "",
    Photo: w.photo ? (
      <Image
        src={w.photo}
        alt={w.title}
        width={600}
        height={600}
        className="object-cover"
      />
    ) : null,
    instructors: w.instructors || [],
    mode: w.mode || "",
    date: w.date || "",
    fees: w.fees || "",
    url: w.url || "",
    schedule: w.schedule || [],
    location: w.location || "",
    highlights: Array.isArray(w.highlights)
      ? w.highlights
      : JSON.parse(w.highlights || "[]"),
    benefits: w.benefits || "",
  }))
);
