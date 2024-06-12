import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  const pages = [
    {
      id: 1,
      path: "/#",
      title: "About Us",
    },
    {
      id: 2,
      path: "/#",
      title: "Testimonials",
    },
    {
      id: 3,
      path: "/#",
      title: "Our Work",
    },
    {
      id: 4,
      path: "/#",
      title: "News",
    },
    {
      id: 5,
      path: "/#",
      title: "Contact",
    },
  ];

  const services = [
    {
      id: 1,
      path: "/#",
      title: "Kitchen",
    },
    {
      id: 2,
      path: "/#",
      title: "Living Area",
    },
    {
      id: 3,
      path: "/#",
      title: "Bathroom",
    },
    {
      id: 4,
      path: "/#",
      title: "Bedroom",
    },
  ];

  return (
    <div className="max-w-[1000px] px-5 lg:px-10 m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-center lg:items-start justify-center py-8">
        <div className="flex flex-col justify-center items-start gap-5 lg:col-start-1 lg:col-end-3">
          <img src={Logo} alt="Logo" loading="lazy" />
          <p>
            It is a long established fact that a reader will be distracted
            lookings.
          </p>
          <div className="flex justify-start items-center gap-6">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-2xl font-bold font-Serif text-primary">Pages</h2>
          {pages.map((value) => {
            return (
              <Link to={value.path} key={value.id}>
                {value.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-2xl font-bold font-Serif text-primary">
            Services
          </h2>
          {services.map((value) => {
            return (
              <Link to={value.path} key={value.id}>
                {value.title}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h2 className="text-2xl font-bold font-Serif text-primary">
            Contact
          </h2>
          <p>
            55 East Birchwood Ave. <br /> Brooklyn, New York 11201
          </p>
          <p>contact@interno.com</p>
          <p>(123) 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
