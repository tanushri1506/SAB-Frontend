
"use client";

import { Card } from "@/components/ui/card";
import { getData } from "@/lib/ug-council";
import { useState, useEffect } from "react";
import { getBranchReps } from "@/lib/branch-reps";
import { LinkedinIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";

const tenureOptions = ["2024-28", "2023-27", "2022-26"];

const Page = () => {
  const [branchReps, setBranchReps] = useState([]);
  const [selectedTenure, setSelectedTenure] = useState("2024-28");
  const [loading, setLoading] = useState(true);
  const [UG_COUNCIL, setUgCouncil] = useState([]);
  const [BTECH_REP, setBTechRep] = useState([]);
  const [BDES_REP, setBDesRep] = useState([]);

  // Fetch data whenever selectedTenure changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getBranchReps(selectedTenure);
        setBranchReps(data);
      } catch (err) {
        console.error(err);
        setBranchReps([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTenure]);

  
    useEffect(() => {
    Promise.all([getData("ug"), getData("council")])
      .then(([ugData, councilData]) => {
        setUgCouncil(
          ugData.map((m) => ({
            name: m.name || "",
            post: m.post || "",
            phone: m.phone || "",
            email: m.email || "",
            linkedin: m.linkedin || "",
            Photo: m.photo ? (
              <Image
                src={m.photo}
                alt={m.name}
                width={200}
                height={200}
                className="object-cover"
              />
            ) : null,
          }))
        );

        setBTechRep(
          councilData
            .filter((m) => m.post?.includes("B.Tech Representative"))
            .map((m) => ({
              name: m.name || "",
              post: m.post || "",
              phone: m.phone || "",
              email: m.email || "",
              linkedin: m.linkedin || "",
              Photo: m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              ) : null,
            }))
        );

        setBDesRep(
          councilData
            .filter((m) => m.post?.includes("B.Des Representative"))
            .map((m) => ({
              name: m.name || "",
              post: m.post || "",
              phone: m.phone || "",
              email: m.email || "",
              linkedin: m.linkedin || "",
              Photo: m.photo ? (
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              ) : null,
            }))
        );
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-20">Loading...</p>;


  return (
    <div>
       <section>
         <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
             Undergraduate Council
           </h2>
           <p className="mx-auto mt-3 max-w-[900px] text-gray-500 md:text-l/relaxed">
             The SAB-UG Council is a constituent body of the SAB with members as: 
             the student member of the DUPC or CUPC and/or PhD students nominated by the Chairperson of the DUPC or CUPC of each academic department or center,
               B.Tech Representative (SAB),
               B.Des Representative (SAB).
             The activities of the SAB-U.G. council shall be coordinated by the Bachelors' Programme Representatives. Each DUPC or CUPC can initiate various departmental and inter-departmental activity by means of proper formal procedure involving General Secretary and Joint Secretary, SAB.
             </p>
          
         </div>
       </section>

      <section>
         <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
             Bachelors' Programme Representatives
           </h2>
           <div className="mx-auto gap-6 mt-12 flex justify-center px-4">
             {BTECH_REP.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl w-4xl max-w-sm"
              >
                <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
                  {Photo}
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 px-2">{post}</p>
                <div className="flex items-center justify-center space-x-6">
                  <a href={`tel:${phone}`} aria-label="Phone">
                    <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                  </a>
                  <a href={`mailto:${email}`} aria-label="Email">
                    <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                  </a>
                </div>
              </Card>
            ))}
            {BDES_REP.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl w-4xl max-w-sm"
              >
                <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
                  {Photo}
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 px-2">{post}</p>
                <div className="flex items-center justify-center space-x-6">
                  <a href={`tel:${phone}`} aria-label="Phone">
                    <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                  </a>
                  <a href={`mailto:${email}`} aria-label="Email">
                    <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 md:px-6 text-center mb-10">
          <h2 className="gradient-title mt-20 text-3xl md:text-4xl">
            Branch Representatives
          </h2>

          {/* Dropdown for tenure */}
          <select
            value={selectedTenure}
            onChange={(e) => setSelectedTenure(e.target.value)}
            className="mt-4 px-4 py-2 border rounded-md"
          >
            {tenureOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
            {branchReps.map(({ name, post, Photo, phone, email, linkedin }) => (
              <Card
                key={name}
                className="flex flex-col items-center p-6 text-center space-y-0.5 shadow-md hover:shadow-2xl"
              >
                <div className="w-[200px] h-[200px] rounded-xl overflow-hidden">
                  {Photo ? (
                    Photo
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600 px-2">{post}</p>
                <div className="flex items-center justify-center space-x-6">
                  {phone && (
                    <a href={`tel:${phone}`} aria-label="Phone">
                      <Phone className="h-5 w-5 text-gray-700 hover:text-blue-500" />
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} aria-label="Email">
                      <Mail className="h-5 w-5 text-gray-700 hover:text-red-500" />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5 text-gray-700 hover:text-blue-700" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
