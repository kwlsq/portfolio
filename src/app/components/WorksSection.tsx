import { getWorkExperiences } from "@/lib/getWorkExperiences";
import Image from "next/image";

export const WorksSection = () => {
  const workExperiences = getWorkExperiences();

  return (
    <section className="  py-8">
      <div className="flex items-center md:items-start justify-center w-full px-10 md:px-20">
        <Image
          height={100}
          width={100}
          src={"/icon/work.png"}
          className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg mr-2"
          alt="work experiences icon"
        />
        <h2 className="text-xl md:text-4xl text-secondary font-bold text-center">
          Work Experiences
        </h2>
        <Image
          height={100}
          width={100}
          src={"/icon/work.png"}
          className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg ml-2"
          alt="work experiences icon"
        />
      </div>
      <div className="grid grid-cols-1 items-center bg-[#fff] rounded-lg shadow-lg p-6 mx-2 md:mx-30 my-4 box-content gap-3">
        {workExperiences.map((experience) => (
          <div
            key={experience.company}
            className="px-4 py-4 md:py-6 hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <h3 className="text-lg font-semibold">
              <span>
                <a className="hover:text-primary duration-200" href={experience.url || "#"} target="_blank">
                  {experience.company}
                </a>
              </span>
              {" "}- {experience.position}
            </h3>
            <p className="text-sm text-gray-600 mt-2 md:mt-0">
              {experience.duration} | {experience.location}
            </p>
            <p className="mt-2 text-gray-800 text-justify">{experience.description}</p>
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mt-4 md:mt-2">
                <strong>Technologies:</strong>
                <div className="flex overflow-auto md:overflow-hidden gap-3 mt-1">
                  {experience.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-secondary rounded-full  py-1 px-3 whitespace-nowrap text-white shadow-md hover:bg-primary duration-400"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
