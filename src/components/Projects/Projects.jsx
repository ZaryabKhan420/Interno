import React from "react";
import work01 from "../../assets/work/01.png";
import work02 from "../../assets/work/02.png";
import work03 from "../../assets/work/03.png";
import work04 from "../../assets/work/04.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const Projects = () => {
  const workDetails = [
    {
      id: 1,
      img: work01,
      title: "Modern Kitchen",
      description: "Decor/Architecture",
    },
    {
      id: 2,
      img: work02,
      title: "Modern Kitchen",
      description: "Decor/Architecture",
    },
    {
      id: 3,
      img: work03,
      title: "Modern Kitchen",
      description: "Decor/Architecture",
    },
    {
      id: 4,
      img: work04,
      title: "Modern Kitchen",
      description: "Decor/Architecture",
    },
  ];

  return (
    <div className="my-24 px-5 lg:px-10 m-auto max-w-[1000px]">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold font-Serif text-center text-secondary ">
          Follow Our Projects
        </h1>
        <p className="text-center w-[100%] md:w-[80%] lg:w-[50%] text-primary ">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 my-24">
        {workDetails.map((value) => {
          return (
            <div
              className="flex flex-col justify-center items-start gap-5"
              key={value.id}
            >
              <img src={value.img} alt="Work" loading="lazy" />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="text-primary font-Serif font-bold text-2xl">
                    {value.title}
                  </h2>
                  <p className="text-secondary">{value.description}</p>
                </div>
                <div className="w-[50px] h-[50px] flex justify-center items-center transition-all duration-300 hover:bg-accent/50 rounded-full cursor-pointer ">
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
