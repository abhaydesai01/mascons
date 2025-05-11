"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../assets/logo.png";
import Modal from "../modal/Modal";

const navItems = [
  { id: 1, Title: "Home", Path: "/" },
  {
    id: 2,
    Title: "About us",
    Path: "/about-us",
  },
  {
    id: 3,
    Title: "Solutions",
    Path: "",
    subItems: [
      {
        id: 1,
        Title: "Banking as a service platform",
        Path: "/banking-as-a-service",
      },
      {
        id: 2,
        Title: "Card management solution",
        Path: "/card-management-solution",
      },
      { id: 3, Title: "Remittance Platform", Path: "/remittance-platform" },
      { id: 4, Title: "Digital Wallet", Path: "/digital-wallet" },
      {
        id: 5,
        Title: "Corporate Expense management solution",
        Path: "/expense-management",
      },
      {
        id: 6,
        Title: "Branchless Banking platform",
        Path: "/branchless-banking",
      },
    ],
  },
  { id: 4, Title: "Contact Us", Path: "/contact" },
];

const menuVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.4 },
  }),
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Trade");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setTitle("Trade");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    setTitle("Login");
    openModal();
  };

  const handleCreateAccount = () => {
    setTitle("Create");
    openModal();
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <Modal title={title} isOpen={isModalOpen} onClose={closeModal} />
      {/* Mini Navbar */}
      {/* {pathname === "/" && (
        <div>
          <div className="bg-[#043F2E] w-full sticky top-0 z-50 shadow-md">
            <div className="w-full md:max-w-[9xl] mx-auto flex justify-between md:justify-around py-1 md:py-1">
              <Link
                href="/"
                className="text-[#fbfbfb] text-[14px] md:text-[16px] flex flex-row hover:bg-[#C8F169]/25 px-2 md:px-8 transition-all duration-150 ease-in-out py-2 rounded-full items-center gap-x-2 font-medium"
              >
                <MdOutlineAccountBalance size={24} />
                <button onClick={openModal}>
                  Open a Trade Finance Account
                </button>
              </Link>
              <Link
                href="/bank-to-bank-finance"
                className="text-[#ffffff] text-[14px] md:text-[16px] flex flex-row hover:bg-[#C8F169]/25 px-2 md:px-8 transition-all duration-150 ease-in-out py-2 rounded-full items-center gap-x-2 font-medium"
              >
                <PiMoney size={24} />
                Bank to Bank Finance
              </Link>
            </div>
          </div>
        </div>
      )} */}
      <nav className="w-full sticky top-0 lg:h-20 bg-white border-b-[0.5px] border-primary-color z-[999]">
        <div className="max-w-[9xl] mx-0 lg:mx-10 px-2 lg:px-0 h-16 lg:h-20 flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="company-logo"
                height={700}
                width={700}
                className="h-auto w-[70%] md:w-[70%] lg:w-[50%]"
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-row items-center justify-center gap-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.id}
                className="group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <button
                  className={`flex items-center font-semibold tracking-wider text-md transition-all  duration-300 h-20 ease-in-out ${
                    hoveredIndex === index
                      ? "text-primary-color"
                      : "text-primary-color"
                  }`}
                  onClick={() => item.subItems && toggleSubMenu(index)}
                >
                  <Link href={item.Path}>{item.Title}</Link>
                  {item.subItems && (
                    <span className="ml-2">
                      {subMenuOpen[index] ? (
                        <IoChevronUpOutline />
                      ) : (
                        <IoChevronDownOutline />
                      )}
                    </span>
                  )}
                </button>

                {item.subItems && subMenuOpen[index] && (
                  <motion.div
                    className="absolute flex flex-row flex-wrap justify-evenly w-[100%] px-2 py-4 left-0 z-[9999] top-26 border bg-white text-primary-color rounded shadow-lg"
                    initial="hidden"
                    animate={subMenuOpen[index] ? "visible" : "hidden"}
                    variants={dropdownVariants}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.id}
                        href={subItem.Path}
                        className="border-r-[2px] pr-4 border-gray-400 mt-2 w-auto text-sm font-semibold tracking-wider transition-all ease-in-out duration-150 px-2 py-0 text-gray-900 hover:text-primary-color"
                      >
                        {subItem.Title}{" "}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          <button className="lg:hidden text-black" onClick={toggleMenu}>
            <RxHamburgerMenu size={24} />
          </button>
        </div>
        <div className="">
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed inset-0 bg-black bg-opacity-100 z-[9999] flex flex-col justify-center items-center"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white text-3xl"
              >
                <AiOutlineClose />
              </button>

              <div className="flex flex-col justify-center items-center gap-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col justify-center items-center text-white text-center text-2xl font-semibold tracking-wider"
                  >
                    <button
                      onClick={() => toggleSubMenu(index)}
                      className="hover:text-[#09017d] transition-colors duration-300 flex justify-center items-center"
                    >
                      <Link href={item.Path}>{item.Title}</Link>
                      {item.subItems && (
                        <span className="ml-2">
                          {subMenuOpen[index] ? (
                            <IoChevronUpOutline />
                          ) : (
                            <IoChevronDownOutline />
                          )}
                        </span>
                      )}
                    </button>

                    {item.subItems && subMenuOpen[index] && (
                      <motion.div
                        className="flex flex-col tracking-normal font-medium gap-y-2 mt-2 text-center"
                        initial="hidden"
                        animate="visible"
                        variants={dropdownVariants}
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.Path}
                            className="text-lg text-gray-400 hover:text-primary-color"
                            onClick={toggleMenu}
                          >
                            {subItem.Title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
