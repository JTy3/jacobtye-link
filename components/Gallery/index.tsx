"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Blog {
  id: number;
  title: string;
  image: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Travelling",
    image: "/travel.webp",
  },
  {
    id: 2,
    title: "Hiking",
    image: "/hike.webp",
  },
  {
    id: 3,
    title: "Beach",
    image: "/beach.webp",
  },
  {
    id: 4,
    title: "Food",
    image: "/food.webp",
  },
  {
    id: 5,
    title: "Motorsport",
    image: "/motorsport.webp",
  },
];

export default function SolidBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-16 md:pt-28">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          When I&apos;m not working
        </h3>
        <p className="text-gray-600 mt-3">
          When I am not at my computer and working I love travelling, spending
          time with my loved ones, getting outdoors, going to the beach and
          enjoying the occasional motorsport race.
        </p>
      </div>
      <div className="grid max-w-screen-xl mx-auto h-auto p-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-y-0 lg:gap-x-4">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`group relative min-h-[20vh] flex overflow-hidden rounded-2xl ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 1
                ? "md:col-span-1 md:row-span-1"
                : "md:col-span-1 md:row-span-1 lg:row-span-2 lg:mt-4"
            }`}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative flex h-full w-full flex-col justify-end p-6 text-white">
              <h2 className="mb-2 text-xl font-semibold leading-tight">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
