import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export const getData = async (endpoint) => {
  const res = await fetch(`${API_BASE}/api/${endpoint}/`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
};

export const PHD_DPPC = await getData("dppc").then((team) =>
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

export const PHD_CPPC = await getData("cppc").then((team) =>
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

export const PHD_SPPC = await getData("sppc").then((team) =>
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

export const PHD_REP = await getData("council").then((team) =>
  team
    .filter((m) => m.post?.includes("Doctoral Representative"))

    .map((m) => ({
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
