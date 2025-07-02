import Image from "next/image";
import { Button } from "./Button";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-150 overflow-hidden shadow-xl">
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
            drop-shadow-xl
          "
      />
      <div className="absolute inset-0 flex flex-col items-center mt-10 md:mt-15 md:items-end justify-start md:justify-center px-4 md:px-12">
        <h1 className="text-6xl md:text-8xl font-bold text-center md:text-right text-black z-1 relative drop-shadow-md">
          Hi, I&apos;m Vincent!
        </h1>
        <h2 className="text-xl md:text-2xl text-center mt-2 font-medium drop-shadow-md">
          not Vincent Van Gogh, but I paint experiences with pixels and code.
        </h2>
        <Button
          href="https://wa.link/63gvkt"
          target="_blank"
          rel="noopener noreferrer"
          wrapperClassName="bottom-0 mt-8 left-1/2 md:right-0 mb-8"
          className="inline-block relative animate-bounce"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
};
