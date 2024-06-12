import React from "react";
import Bg from "../../assets/hero/bg.jpg";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
const Hero = () => {
  return (
    <div
      className="h-[92vh] mt-[8vh] m-0 overflow-hidden hero-bg rounded-bl-[5rem] sm:rounded-bl-[10rem] md:rounded-bl-[15rem] lg:rounded-bl-[20rem] "
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "full",
        height: "full",
      }}
    >
      <div className="max-w-[1000px] m-auto px-5 lg:px-10 flex flex-col h-full justify-center items-start gap-5  ">
        <h1 className="font-Serif text-5xl lg:text-6xl font-bold text-gray-900 text-primary">
          Let Your Home
          <br />
          Be Unique
        </h1>
        <p className="w-[80%] md:w-[30%] text-secondary">
          There are many variations of the passages of lorem ipsum from
          available, variations of the passages.
        </p>
        <PrimaryButton children="Get Free Estimation" />
      </div>
    </div>
  );
};

export default Hero;
