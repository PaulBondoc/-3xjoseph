import Programmer from "../assets/programmer.png";
import { LanguagesData, OtherSkillsData } from "../data/SkillsData";
import Java from "../assets/icons/java.png";

const Skills = () => {
  const skillData = [
    { title: "Languages", data: LanguagesData },
    { title: "Others", data: OtherSkillsData },
  ];
  return (
    <>
      <section className="pt-10 pb-10 sm:pb-16 mx-[20px] sm:mx-[50px] md:mx-[120px]">
        <div className="sm:container mx-auto">
          <p className="text-[28px] sm:text-[35px] md:text-[45px] font-extrabold text-center sm:w-[400px] mx-auto leading-none uppercase">
            Tools and <span className="text-accent">Frameworks</span>
          </p>
          <div className="mt-5 sm:mt-10 grid grid-cols-12 place-items-center gap-0 lg:gap-10">
            <div className="hidden lg:block col-span-6">
              <img
                src={Programmer}
                alt="Illustration"
                loading="lazy"
                className="w-full"
              />
            </div>
            <div className="col-span-12 lg:col-span-6 xxl:col-span-5 space-y-5 sm:space-y-8">
              {skillData.map((item, index) => (
                <div key={index}>
                  <h6 className="text-center lg:text-start text-[20px] tracking-wide font-bold uppercase">
                    {item.title}
                  </h6>
                  <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-7">
                    {item.data.map((item, index) => (
                      <div key={index} className="flex flex-col gap-y-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="w-[35px] h-[35px] mx-auto object-cover"
                        />
                        <span className="text-[12px] text-[#6A6A6A] text-center font-medium truncate w-[50px] hover:w-fit">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
