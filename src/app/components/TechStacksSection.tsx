import { getTechStacks } from "@/lib/getTechStacks";
import Image from "next/image";

export const TechStacksSection = () => {
  const techStacks = getTechStacks();
  return (
    <section className="w-full flex flex-col justify-center px-20 py-8">
      <div className="flex flex-col items-center ">
        <Image
          width={800}
          height={600}
          className="w-8 h-8 md:w-15 md:h-15 drop-shadow-lg"
          src={"/icon/tech-stack.png"}
          alt="Tech stacks illustration"
        />
        <h2 className="text-xl md:text-4xl text-secondary font-bold text-center">
          Tech Stacks
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {techStacks.map((stack) => (
            <div
              key={stack.name}
              className="group flex flex-col items-center justify-center p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={stack.src}
                alt={stack.alt}
                width={100}
                height={100}
                className="w-10 h-10 my-2 md:w-20 md:h-20 duration-400 group-hover:scale-150"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
