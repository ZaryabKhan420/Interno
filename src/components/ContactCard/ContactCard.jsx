import React from "react";
import { PrimaryButton } from "../Index";
const ContactCard = () => {
  return (
    <div className="max-w-[1000px] m-auto my-16 rounded-3xl bg-secondary py-16 flex flex-col gap-5 justify-center items-center px-5 lg:px-10 ">
      <h1 className="text-4xl text-white font-Serif font-bold text-center">
        Do you want to join Interno?
      </h1>
      <p className="text-white text-center">
        It is a long established fact will be distracted.
      </p>
      <PrimaryButton
        children="Connect With Us"
        className="bg-accent"
        bg={"#CDA274"}
      />
    </div>
  );
};

export default ContactCard;
