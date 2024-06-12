import React from "react";

const Stats = () => {
  const details = [
    {
      id: 1,
      title: "12",
      description: "Years Of Experience",
    },
    {
      id: 2,
      title: "85",
      description: "Projects Completed",
    },
    {
      id: 3,
      title: "15",
      description: "Active Projects",
    },
    {
      id: 4,
      title: "95",
      description: "Happy Customers",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center my-32 px-10 max-w-[1000px] m-auto">
      {details.map((value) => {
        return (
          <div className="flex flex-col justify-center items-center gap-1  lg:border-r lg:border-r-accent p-5">
            <h2 className="text-6xl font-bold font-Serif text-accent">
              {value.title}
            </h2>
            <p className="text-secondary">{value.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
