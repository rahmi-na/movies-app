import Image from "next/image";
import logo from "@/../../public/assets/logo.png";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";
import { menu, icon, accounts } from "@/utils/navbar";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMouseEnter = () => {
    setDrop(true);
  };

  const handleMouseLeave = () => {
    setDrop(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed w-full duration-500 ease-in-out z-50 ${
        scroll ? "bg-navbar text-white" : "text-white"
      }`}
    >
      {!scroll && (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-dark to-dark opacity-30" />
      )}
      <div className="relative">
        <div className="px-4 md:px-16 max-w-full flex flex-wrap items-center justify-between mx-auto py-4">
          <div className="flex">
            <a href="https://flowbite.com/" className="flex items-center mr-10">
              <Image src={logo} alt="FlowbiteLogo" width={100} />
            </a>

            <div className={`w-full md:block md:w-auto hidden`}>
              <ul className="font-medium text-sm flex flex-col p-4 md:p-1 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                {menu?.map((item, idx) => (
                  <li
                    key={idx}
                    className={
                      router.pathname === item.href
                        ? "active font-bold"
                        : "font-normal hover:text-gray-300"
                    }
                  >
                    <a
                      href={item.href}
                      className="block py-2 pl-3 pr-4 rounded md:p-0"
                      aria-current="page"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={handleOpen}
              className="inline-flex items-center p-2 ml-3 text-sm text-black rounded-lg md:hidden bg-gray-100 "
            >
              <RxHamburgerMenu />
            </button>
            <div className="flex items-center">
              {icon?.map((item, idx) => (
                <div key={idx} className="mr-5">
                  <item.icons className="text-2xl" />
                </div>
              ))}
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={handleOpen}
                  className="flex items-center"
                  type="button"
                >
                  <div className="w-9 h-9 rounded-lg mr-1 flex items-center justify-center">
                    <Link href="/account">
                      <img
                        src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                      ></img>
                    </Link>
                  </div>
                  <IoMdArrowDropdown />
                </button>
                {drop && (
                  <div className="absolute right-5 px-3 rounded-lg">
                    <div
                      id="dropDownHover"
                      onMouseEnter={handleMouseEnter}
                      onMouseDown={handleMouseLeave}
                      className="z-10 bg-navbar divide-y divide-gray-900 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      {open && (
                        <ul
                          className="py-2 text-sm text-white dark:text-gray-200"
                          aria-labelledby="dropDownHoverButton"
                        >
                          {accounts?.map((item, idx) => (
                            <li key={idx}>
                              <a
                                href={item.href}
                                className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-auto ${
              open ? "block md:hidden" : "hidden"
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {menu?.map((item, idx) => (
                <li
                  key={idx}
                  className={
                    router.pathname === item.href
                      ? "active font-bold"
                      : "font-normal"
                  }
                >
                  <a
                    href={item.href}
                    className="block py-2 pl-3 pr-4 rounded md:p-0"
                    aria-current="page"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
