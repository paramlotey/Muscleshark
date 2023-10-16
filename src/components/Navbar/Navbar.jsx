import "./nav.css";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

import { useState } from "react";

const NavbarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
      <div className=" bg-slate-900 text-slate-200 text-center p-1 max-sm:hidden">
        <p>
          Get free delivery on orders over{" "}
          <span className=" text-white font-bold">$200</span>{" "}
        </p>
      </div>

      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#f2cb1f]">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden "
          />
          <NavbarBrand>
            <a className="navbar-brand mx-5 fs-3  font-semibold" href="#">
              Muscle Shark
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Shop
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Link className="nav-link" to="/signin">
              <i className="fa-regular fa-user"></i>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <a className="nav-link" href="#">
              <i className="fa-regular fa-heart"></i>
            </a>{" "}
          </NavbarItem>
          <NavbarItem>
            <a className="nav-link" href="#">
              <i className="fa-solid fa-shopping-bag"></i>
            </a>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-[#f2cb1f]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <div className="lg:block md:block hidden sm:hidden max-sm:hidden icons lg:p-5 bg-slate-50">
        <div className="lg:text-lg md:text-sm flex text-xl justify-between">
          <div className="flex items-center">
            <i className="fa-regular fa-credit-card"></i>
            <p>Low price guarantee</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-rotate-left"></i>
            <p>30 day online returns</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-truck"></i>
            <p>Free delivery on Mass Product</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone"></i>
            <p>
              Ask our experts:{" "}
              <span className="text-red-500">1-888-333-5226</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComp;
