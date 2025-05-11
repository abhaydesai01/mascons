"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaHandshake,
  FaUniversity,
  FaFileAlt,
  FaDigitalTachograph,
} from "react-icons/fa";
import "./slider.css";

const servicesData = [
  {
    id: 1,
    icon: <FaFileInvoiceDollar className="text-2xl text-primary-color" />,
    title: "Banking as a Service (BaaS)",
    description:
      "Unlock seamless banking solutions with our BaaS platform, designed for businesses to integrate banking features effortlessly, including account management and transaction processing.",
    link: "/banking-as-a-service",
  },
  {
    id: 2,
    icon: <FaShieldAlt className="text-2xl text-primary-color" />,
    title: "Card Management Solution",
    description:
      "Simplify your payment processes with our card management solutions, enabling businesses to issue, manage, and secure payment cards tailored to their needs.",
    link: "/card-management-solution",
  },
  {
    id: 3,
    icon: <FaHandshake className="text-2xl text-primary-color" />,
    title: "Remittance Platform",
    description:
      "Effortlessly transfer money across borders with our remittance platform, ensuring swift and secure transactions at competitive rates.",
    link: "/remittance-platform",
  },
  {
    id: 4,
    icon: <FaUniversity className="text-2xl text-primary-color" />,
    title: "Digital Wallet",
    description:
      "Empower your customers with our digital wallet solutions, allowing them to make secure transactions, store funds, and manage their finances conveniently.",
    link: "/digital-wallet",
  },
  {
    id: 5,
    icon: <FaFileAlt className="text-2xl text-primary-color" />,
    title: "Corporate Expense Management Solutions",
    description:
      "Manage corporate expenses effectively with our comprehensive solutions, providing real-time tracking and insights to optimize financial performance.",
    link: "/expense-management",
  },
  {
    id: 6,
    icon: <FaDigitalTachograph className="text-2xl text-primary-color" />,
    title: "Branchless Banking Platform",
    description:
      "Transform your banking experience with our branchless banking platform, offering accessible and efficient banking services without the need for physical branches.",
    link: "/branchless-banking",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeInOut" },
  }),
};

const Services = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Create a ref to track the container
  const ref = useRef(null);

  // Detect if the div is in view
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="lg:max-w-[9xl] mx-2 lg:mx-10 rounded-xl shadow-md p-4 mt-[6em] mb-[6em] flex flex-col justify-start items-start bg-gray-100 border border-[#7bb8a7]"
    >
      <div className="flex flex-col justify-start gap-y-[1em] lg:gap-y-[1.5em] lg:ml-[10em] lg:mt-[5em] mb-[4em]">
        <motion.p
          className="text-xl font-semibold text-primary-color tracking-wider"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          custom={0}
        >
          Our Services
        </motion.p>
        <motion.p
          className="text-gray-900 font-medium tracking-wide text-3xl lg:text-5xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          custom={1}
        >
          Strategy. Planning. Execution
        </motion.p>
        <motion.p
          className="text-gray-800 text-justify lg:w-[50%]"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariants}
          custom={2}
        >
          The pillars of success. We harness these principles to drive your
          business forward, facilitating tailored financial solutions that align
          with your vision and ensure your goals become achievements.
        </motion.p>
      </div>

      <div className="w-full mb-[6em] p-4 lg:p-4">
        <Slider {...settings}>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="relative flex flex-col h-96 md:h-96 lg:h-96 p-4 md:p-5 lg:p-6 bg-gray-100 border border-[#619183] shadow-md cursor-pointer rounded-xl ease-in-out duration-300"
            >
              <div className="bg-primary-color/25 rounded-xl p-3 w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl mt-2 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="mb-4 text-sm font-semibold text-gray-500">
                {service.description.slice(0, 120)}...
              </p>
              <a href={service.link}>
                <button className="absolute bottom-4 bg-primary-color mt-0 text-medium tracking-wide text-gray-100 w-auto px-4 py-2 rounded-full">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
