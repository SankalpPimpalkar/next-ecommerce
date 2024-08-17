"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";

const banners = [
  "/banner_1.jpg",
  "/banner_2.webp",
  "/banner_3.webp",
  "/banner_4.webp",
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to scroll the banners
  const scroll = (direction: string) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollBy({
          left: -current.offsetWidth, // scroll left by the width of the container
          behavior: "smooth",
        });
      } else {
        current.scrollBy({
          left: current.offsetWidth, // scroll right by the width of the container
          behavior: "smooth",
        });
      }
    }
  };

  // Function to handle automatic scrolling
  const startAutoScroll = () => {
    scrollIntervalRef.current = setInterval(() => {
      scroll("right");
    }, 2000); // Scroll every 3 seconds
  };

  // Function to reset the scroll position for infinite scrolling
  const handleScroll = () => {
    const { current } = scrollRef;
    if (current) {
      if (current.scrollLeft + current.offsetWidth >= current.scrollWidth) {
        current.scrollTo({ left: 0, behavior: "smooth" });
      } else if (current.scrollLeft <= 0) {
        current.scrollTo({ left: current.scrollWidth, behavior: "smooth" });
      }
    }
  };

  // Start auto-scroll on component mount
  useEffect(() => {
    startAutoScroll();

    // Add scroll event listener to handle infinite scroll
    const { current } = scrollRef;
    if (current) {
      current.addEventListener("scroll", handleScroll);
    }

    // Cleanup on component unmount
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      if (current) {
        current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="p-5">
      <div className="relative max-w-5xl h-[35rem] mx-auto overflow-hidden">
        <div
          className="flex items-center gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
          ref={scrollRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              className="flex-none w-full h-full object-contain rounded-xl"
              src={banner}
              alt={banner}
              style={{ scrollSnapAlign: "center" }}
            />
          ))}
        </div>
        <button
          className="border rounded-full h-fit p-2 absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-600 hover:bg-custom-gray-secondary/30"
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </button>
        <button
          className="border rounded-full h-fit p-2 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-600 hover:bg-custom-gray-secondary/30"
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </button>
      </div>

      <div className="mt-6 max-w-5xl mx-auto">
        <h1>
          Products
        </h1>

        <ul className="flex flex-wrap mt-4 gap-x-4 gap-y-6">
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
          <li className="w-60">
            <img
              className="w-full h-full aspect-auto object-contain rounded"
              src="https://i.imgur.com/kKc9A5p.jpeg" alt="image"
            />

            <h2 className="mt-4 text-custom-yellow">
              $5
            </h2>

            <h3 className="mt-1">
              Majestic Mountain Graphic T-Shirt
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
