import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Skillset from "@/components/Skillset"
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Skillset Section */}
      <Skillset />
      {/* Technologies I am proficent in */}
      <Technologies />
      {/* More about me */}
      <Gallery />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}
