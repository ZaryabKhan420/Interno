import React from "react";
import Image from "../../assets/about/img.png";
import CallIcon from "@mui/icons-material/Call";
import { PrimaryButton } from "../Index";
const Art = () => {
  return (
    <div className="max-w-[1000px] m-auto px-5 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 place-items-center m-auto">
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-4xl font-Serif font-bold text-primary">
            We Create The Art <br /> Of Stylish Living
            <br />
            Stylishly
          </h1>
          <p className="text-left text-sm text-secondary w-[100%] md:w-[80%] leading-6">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more or less normal
          </p>
          <div className="flex justify-center items-center gap-5">
            <CallIcon className="text-accent" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-md font-Poppins font-bold text-primary">
                0987 654 321
              </h2>
              <p className="text-sm text-secondary">Call Us Anytime</p>
            </div>
          </div>
          <PrimaryButton children="Get Free Estimation" />
        </div>
        <div>
          <img src={Image} alt="About" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Art;
