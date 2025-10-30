
import Image from "next/image";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

// Fetch branch representatives for a given tenure
export const getBranchReps = async (tenure = "2024-28") => {
  const res = await fetch(`${API_BASE}/api/branch-reps/?tenure=${tenure}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch branch representatives");

  const data = await res.json();

  // Map data to include Next.js Image component for rendering
  return data.map((m) => ({
    name: m.name || "",
    post: m.post || "",
    tenure: m.tenure || "2024-28",
    phone: m.phone || "",
    email: m.email || "",
    linkedin: m.linkedin || "",
    Photo: m.photo ? (
      <Image
        src={m.photo || "/placeholder.jpg"}
        alt={m.name}
        width={200}
        height={200}
        className="object-cover"
      />
    ) : null,
  }));
};
