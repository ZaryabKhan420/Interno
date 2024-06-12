import React from "react";
import News1 from "../../assets/news/01.png";
import News2 from "../../assets/news/02.png";
import News3 from "../../assets/news/03.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const News = () => {
  const newsDetails = [
    {
      id: 1,
      img: News1,
      title: "Let's Get Solution for Building Construction Work",
      date: "22 june 2024",
    },
    {
      id: 2,
      img: News2,
      title: "Low Cost Latest Invented Interior Designing",
      date: "24 june 2024",
    },
    {
      id: 3,
      img: News3,
      title: "Best For Any Office And Business Interior Solution",
      date: "28 june 2024",
    },
  ];

  return (
    <div className="px-5 lg:px-10 max-w-[1000px] m-auto">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold font-Serif text-center text-secondary ">
          Articles and News
        </h1>
        <p className="text-center w-[100%] md:w-[80%] lg:w-[50%] text-primary ">
          It is a long established fact that a reader will be distracted by the
          of readable content of page when lookings at its layouts the points of
          using.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {newsDetails.map((data) => {
          return (
            <div
              className="p-3 rounded-3xl flex flex-col justify-center items-start gap-3 my-5 lg:my-16 group hover:bg-accent/50 transition-all duration-300 "
              key={data.id}
            >
              <img src={data.img} alt="News" loading="lazy" />
              <h2 className="text-xl font-Serif font-bold text-primary">
                {data.title}
              </h2>
              <div className="flex w-full justify-between items-center mt-5">
                <p className="text-secondary text-sm">{data.date}</p>
                <div className="w-[40px] h-[40px] flex justify-center items-center bg-accent/50 rounded-full group-hover:bg-white transition-all duration-300">
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

export default News;
