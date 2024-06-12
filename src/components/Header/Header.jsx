import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/icons-material/Menu";
const Header = () => {
  const headerLinks = [
    {
      id: 1,
      title: "Home",
      path: "/#",
    },
    {
      id: 2,
      title: "About",
      path: "/#",
    },
    {
      id: 3,
      title: "Testimonials",
      path: "/#",
    },
    {
      id: 4,
      title: "Our Work",
      path: "/#",
    },
    {
      id: 5,
      title: "News",
      path: "/#",
    },
    {
      id: 6,
      title: "Contact",
      path: "/#",
    },
  ];

  return (
    <div className="max-w-[1000px] m-auto z-[5]">
      <header className="max-w-[1000px] m-auto flex justify-between items-center h-[8vh] drop-shadow-lg fixed bg-white top-0 w-full px-5 lg:px-10 z-[5] ">
        <img src={Logo} alt="Logo" loading="lazy" width={"140rem"} />
        <nav className="hidden lg:flex">
          <ul className="flex justify-center items-center gap-5">
            {headerLinks.map((value) => {
              return (
                <Link
                  href={value.path}
                  key={value.id}
                  className="font-Poppins text-secondary"
                >
                  {value.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="block lg:hidden">
          <MenuIcon />
        </div>
      </header>
    </div>
  );
};

export default Header;
