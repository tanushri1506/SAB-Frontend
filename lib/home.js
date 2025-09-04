import Image from "next/image";
import { Phone, Mail, LinkedinIcon } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

export const CONTACTS = await getData("contacts").then((data) =>
  data.map((c) => ({
    role: c.role || "",
    name: c.name || "",
    phone: c.phone || "",
    email: c.email || "",
    icon: <Phone className="h-6 w-6" />,
  }))
);

export const COUNCIL = await getData("council").then((team) =>
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

export const EVENTS = await getData("events").then((events) =>
  events.map((e) => ({
    title: e.title || "",
    url: e.url || "",
    Icon: (
      <Image
        src={e.icon}
        alt={e.title}
        width={100}
        height={100}
        className="object-contain"
      />
    ),
  }))
);

export const PHOTOS = await getData("gallery").then((photos) =>
  photos.map((p) => ({
    label: p.label || "",
    Photo: (
      <Image
        src={p.image}
        alt={p.label}
        width={400}
        height={300}
        className="object-cover"
      />
    ),
  }))
);
