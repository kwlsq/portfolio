import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-150 overflow-hidden">
        <Image
          src={"/img/hero-bg.png"}
          height={1000}
          width={1000}
          alt="hero background image of a blue sky with clouds"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <Image
          src={"/img/hero-avatar.png"}
          height={500}
          width={500}
          alt="hero image of Vincent in anime style"
          className="
            absolute bottom-0
            mx-auto 
            left-1/2 -translate-x-1/2
            md:left-0 md:translate-x-0 md:ml-12
            w-120 md:w-180
            z-1
          "
        />
      </div>
    </main>
  );
}
