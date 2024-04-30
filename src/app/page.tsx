import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-auto w-auto">
        <Image
          src="/ai_image.png"
          alt="Trop Hero Image"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
    </main>
  );
}
