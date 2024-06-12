import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import HandymanIcon from "@mui/icons-material/Handyman";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Tasks = () => {
  const details = [
    {
      id: 1,
      icon: SelfImprovementIcon,
      title: "Project Planning",
      description:
        "There are many variations of the passages of lorem ipsum from available majority.",
    },
    {
      id: 2,
      icon: AutoAwesomeIcon,
      title: "Gaining Materials",
      description:
        "There are many variations of the passages of lorem ipsum from available majority.",
    },
    {
      id: 3,
      icon: HandymanIcon,
      title: "Project Execution",
      description:
        "There are many variations of the passages of lorem ipsum from available majority.",
    },
  ];

  return (
    <div className="my-32 max-w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center gap-16">
        {details.map((value) => {
          return (
            <div
              key={value.id}
              className="flex flex-col justify-center items-center gap-5  w-[300px] h-[200px] "
            >
              <value.icon
                className="text-accent"
                style={{ fontSize: "2.5rem" }}
              />
              <h2 className="text-xl font-Serif font-bold ">{value.title}</h2>
              <p className="text-center lg:text-sm w-[80%] ">
                {value.description}
              </p>
              <button className="lg:text-sm font-semibold">
                Read more{" "}
                <ArrowRightAltIcon
                  style={{
                    fontSize: "1.2rem",
                  }}
                />{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tasks;
