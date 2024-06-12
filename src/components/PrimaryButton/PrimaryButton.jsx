import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const PrimaryButton = ({ children, bg, className }) => {
  return (
    <button
      className={`py-3 px-4 border-none outline-none bg-secondary rounded-xl flex justify-center items-center gap-1 ${className} `}
      style={{ color: " white", backgroundColor: bg }}
    >
      {children}
      <ArrowRightAltIcon style={{ fontSize: "1.2rem" }} />
    </button>
  );
};

export default PrimaryButton;
