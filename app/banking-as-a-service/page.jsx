"use client";

import React, { useState } from "react";
import { FaUserCog, FaCreditCard, FaPiggyBank } from "react-icons/fa";
import BankingServiceImage from "../../assets/baas/baas.svg";
import Image from "next/image";
import Link from "next/link";
import BaasImage2 from "../../assets/baas/Baas2.jpeg";
import BaasImage3 from "../../assets/baas/Baas3.jpeg";
import BaasImage4 from "../../assets/baas/Baas4.jpeg";

const Page = () => {
  // Each category has its own sub-category state
  const [selectedSubCategories, setSelectedSubCategories] = useState({
    AccountManagement: "Account Aggregation",
    PaymentSolutions: "Virtual Accounts",
    LendingServices: "Loan Origination",
    RemittanceServices: "Remittance Aggregator",
    DigitalWallets: "Multi-Functional Wallets",
    CardManagement: "Prepaid Card Issuance",
    CorporateExpenseManagement: "Expense Approval Workflows",
    BranchlessBanking: "Agent/Branch Onboarding",
    RegulatoryCompliance: "Compliance Management",
    AnalyticsAndReporting: "Real-Time Dashboards",
  });

  const categories = [
    {
      id: "AccountManagement",
      title: "Account Management",
      description:
        "Manage customer accounts efficiently with these powerful tools.",
      icon: <FaUserCog />,
      subCategories: [
        {
          subTitle: "Account Aggregation",
          details: "Consolidate viewing across multiple bank accounts.",
          image: BaasImage4,
        },
        {
          subTitle: "Customer Onboarding",
          details: "Streamline KYC for rapid account setup.",
          image: BaasImage4,
        },
        {
          subTitle: "Account Maintenance",
          details: "Full control over account settings and security.",
          image: BaasImage4,
        },
      ],
    },
    {
      id: "PaymentSolutions",
      title: "Payment Solutions",
      description:
        "Secure and easy-to-use payment solutions for your business.",
      icon: <FaCreditCard />,
      subCategories: [
        {
          subTitle: "Virtual Accounts",
          details: "Create and manage virtual accounts effortlessly.",
          image: BaasImage2,
        },
        {
          subTitle: "Payment Links and QR Codes",
          details: "Simplify transactions with easy-to-use tools.",
          image: BaasImage2,
        },
        {
          subTitle: "Cross-Border Payments",
          details: "Execute international transfers with competitive rates.",
          image: BaasImage2,
        },
      ],
    },
    {
      id: "LendingServices",
      title: "Lending Services",
      description: "Comprehensive lending tools to streamline loan processes.",
      icon: <FaPiggyBank />,
      subCategories: [
        {
          subTitle: "Loan Origination",
          details: "Automated systems for various loan types.",
          image: BaasImage3,
        },
        {
          subTitle: "Credit Scoring",
          details: "Advanced analytics for reliable credit assessments.",
          image: BaasImage3,
        },
        {
          subTitle: "Loan Management",
          details: "Comprehensive tools for managing loans end-to-end.",
          image: BaasImage3,
        },
      ],
    },
  ];

  // Render a single category section with its subcategory tabs
  const renderCategory = (category) => (
    <>
      {/* Category Heading and Description */}
      <div className="mb-2 lg:mb-6 text-left">
        <h2 className="text-2xl lg:text-3xl px-4 lg:px-0 font-bold text-gray-800">
          {category.title}
        </h2>
        <p className="text-gray-600 px-4 lg:px-0">{category.description}</p>
      </div>
      <div className="w-full flex flex-col px-2 lg:flex-row justify-between items-center gap-x-[6em] my-8 lg:my-12">
        {/* Vertical Tab Menu for Sub-Categories */}
        <div className="flex flex-col w-4/4 lg:w-2/4">
          <div className="flex flex-col">
            {category.subCategories.map((subCat, index) => (
              <button
                key={index}
                className={`text-left px-4 py-6 border-l-4 ${
                  selectedSubCategories[category.id] === subCat.subTitle
                    ? "border-primary-color text-primary-color bg-gray-100"
                    : "border-transparent text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() =>
                  setSelectedSubCategories((prevState) => ({
                    ...prevState,
                    [category.id]: subCat.subTitle,
                  }))
                }
              >
                <span className="block text-md lg:text-lg font-medium tracking-wide">
                  {subCat.subTitle}
                </span>
                <span className="block">{subCat.details}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content for Selected Subcategory */}
        <div className="w-4/4 lg:w-2/4 bg-gray-100 border rounded-lg">
          {category.subCategories.map((subCat, index) =>
            selectedSubCategories[category.id] === subCat.subTitle ? (
              <div
                key={index}
                className="flex flex-col justify-center items-center overflow-hidden"
              >
                <h3 className="text-2xl mt-4 font-semibold text-gray-800 mb-4">
                  {subCat.subTitle}
                </h3>
                <p className="text-gray-700">{subCat.details}</p>
                <Image
                  src={subCat.image}
                  alt="sub image"
                  height={600}
                  width={600}
                  className="object-cover h-auto w-[50%] mt-6 -mb-2 rounded-xl"
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start max-w-7xl mx-auto h-auto lg:h-[100vh]">
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:justify-start h-full lg:items-start mt-[2em] lg:mt-[5.5em] gap-y-2 lg:gap-y-20">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-2">
            <p className="bg-primary-color/75 px-4 text-gray-100 text-sm shadow-md py-1 rounded-full w-fit">
              Digital Banking Platform
            </p>
            <h1 className="text-4xl text-center lg:text-left lg:text-5xl font-semibold tracking-wider text-primary-color">
              Next-Generation Banking <br />
              as a Service
            </h1>
            <p className="text-md font-medium text-center lg:text-left w-full px-0 lg:w-[90%] tracking-wide text-gray-700">
              Whether you’re a financial institution seeking new growth
              opportunities or a fintech looking to enhance your financial
              services, our innovative platform empowers you to build or upgrade
              your digital banking solutions.We provide the tools you need to
              stay ahead in today’s competitive financial landscape.
            </p>
          </div>
          <div className="w-full block lg:hidden mt-2">
            <Image
              src={BankingServiceImage}
              alt="banking-services"
              height={800}
              width={800}
              className=" h-auto w-[100%]"
            />
          </div>
          <div className="flex flex-row justify-center items-center gap-x-4">
            <Link href="/contact">
              <button className="border border-primary-color hover:bg-primary-color text-primary-color hover:text-white transition-colors duration-150 ease-in-out tracking-wider px-6 py-2 rounded-full">
                contact us
              </button>
            </Link>
            <Link href="/about-us">
              <button className="border border-primary-color hover:bg-primary-color text-primary-color hover:text-white transition-colors duration-150 ease-in-out tracking-wider px-6 py-2 rounded-full">
                Learn more
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full hidden lg:block lg:w-[50%] mt-16">
          <Image
            src={BankingServiceImage}
            alt="banking-services"
            height={800}
            width={800}
            className=" h-auto w-[100%]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center px-2 items-center mt-[4em] mb-8">
        <h1 className="text-3xl text-center lg:text-4xl font-semibold tracking-wider">
          Super convenient online banking
        </h1>
        <p className="w-full lg:w-[60%] mt-2 text-center">
          You can view your account balances, transaction history, and
          statements, and even set up custom alerts to help you stay on top of
          your finances.
        </p>
      </div>

      {/* Render all categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-12">
          {renderCategory(category)}
        </div>
      ))}

      <section className="border border-[#043F2E] mx-2 rounded-[20px] mb-14 py-16">
        <div className="max-w-6xl mx-auto text-center px-2 lg:px-6">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ready to Take Your Business to the Next Level?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-900 mb-8">
            Join the growing community of innovators and enterprises who are
            unlocking new opportunities with our cutting-edge financial
            solutions. Let's discuss how we can help you streamline your
            financial management, enhance security, and drive growth.
          </p>

          {/* Get in Touch Button */}
          <Link
            href="/contact"
            className="inline-block bg-primary-color text-white font-medium py-3 px-8 rounded-lg text-md transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
