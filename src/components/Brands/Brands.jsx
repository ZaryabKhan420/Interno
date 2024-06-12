import React from "react";
import Brand01 from "../../assets/brands/01.svg";
import Brand02 from "../../assets/brands/02.svg";
import Brand03 from "../../assets/brands/03.svg";
import Brand04 from "../../assets/brands/04.svg";
import Brand05 from "../../assets/brands/05.svg";
const Brands = () => {
  return (
    <div class="flex flex-wrap justify-center items-center m-auto px-5 lg:px-10 gap-16 lg:gap-0 lg:justify-between max-w-[1000px]">
      <img src={Brand01} alt="brand" loading="lazy" />
      <img src={Brand02} alt="brand" loading="lazy" />
      <img src={Brand03} alt="brand" loading="lazy" />
      <img src={Brand04} alt="brand" loading="lazy" />
      <img src={Brand05} alt="brand" loading="lazy" />
    </div>
  );
};

export default Brands;
