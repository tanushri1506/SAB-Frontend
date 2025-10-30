// "use client";
// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const slides = [
//   { src: "/carousel/slide6.jpeg", link: "https://www.iitg.ac.in/" },
//   { src: "/carousel/slide1.jpg", link: "https://www.ric.iitg.ac.in/" },
//   { src: "/carousel/slide2.jpg", link: "https://www.ric.iitg.ac.in/" },
//   { src: "/carousel/slide3.jpg", link: "https://www.ric.iitg.ac.in/" },
//   { src: "/carousel/slide4.jpg", link: "https://www.ric.iitg.ac.in/" },
//   { src: "/carousel/slide5.jpg", link: "https://www.ric.iitg.ac.in/" },
// ];

// export default function ImageCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto mt-2">
//       <a
//         href={slides[currentIndex].link}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <img
//           src={slides[currentIndex].src}
//           alt={`Slide ${currentIndex}`}
//           className="w-full h-[600px] object-contain rounded-2xl transition-opacity duration-700"
//         />
//       </a>

//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//       >
//         <ChevronLeft />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
//       >
//         <ChevronRight />
//       </button>

//       <div className="flex justify-center mt-4 gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`h-2 w-2 rounded-full ${
//               index === currentIndex ? "bg-blue-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { fetchCarousel } from "@/lib/carousel";

export default function ImageCarousel() {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const data = await fetchCarousel();
        setSlides(data);
      } catch (error) {
        console.error("Error loading carousel:", error);
      }
    };
    loadSlides();
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, [currentIndex, slides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-2">
      <a
        href={slides[currentIndex].link || "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={slides[currentIndex].src}
          alt={slides[currentIndex].label}
          className="w-full h-[600px] object-contain rounded-2xl transition-opacity duration-700"
        />
      </a>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
