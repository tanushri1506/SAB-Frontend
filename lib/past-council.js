"use client";

import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

// Hook to fetch all past years
export const usePastYears = () => {
  const [years, setYears] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE}/api/council/?tenure=all`)
      .then((res) => res.json())
      .then((data) => {
        const uniqueYears = [...new Set(data.map((c) => c.tenure))].filter(
          (y) => y !== "2025-26"
        );
        uniqueYears.sort((a, b) => (a < b ? 1 : -1)); // descending
        setYears(uniqueYears);
      })
      .catch(console.error);
  }, []);
  return years;
};

// Hook to fetch council members for a selected year
export const useCouncilByYear = (selectedYear) => {
  const [council, setCouncil] = useState([]);
  useEffect(() => {
    if (!selectedYear) return;
    fetch(`${API_BASE}/api/council/?tenure=${selectedYear}`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((m) => ({
          ...m,
          photo: m.photo || "/placeholder.jpg",
        }));
        setCouncil(mapped);
      })
      .catch(console.error);
  }, [selectedYear]);
  return council;
};
