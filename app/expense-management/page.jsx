"use client";

import React, { useState } from "react";
import Image from "next/image";
import DashboardImage from "../../assets/expense/EM.jpeg";
import Link from "next/link";
import {
  FaFileUpload,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaCogs,
  FaCheckCircle,
  FaDownload,
  FaReceipt,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaRegPaperPlane,
  FaComments,
  FaPlane,
} from "react-icons/fa";

const page = () => {
  const [activeTab, setActiveTab] = useState("employees");

  const tabContents = {
    employees: [
      {
        title: "Add Expense",
        description:
          "Upload your first receipt with the mobile app, drag-and-drop on the web, or forward it to receipts@expensify.com.",
        icon: (
          <FaFileUpload className="text-primary-color text-6xl p-4 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Create Report",
        description:
          "Automatically generate expense reports for reimbursement or reconciliation. Add categories, tags, and comments, then submit.",
        icon: (
          <FaClipboardCheck className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Get Reimbursed",
        description:
          "Once approved, get reimbursed directly to your bank account in as little as one business day.",
        icon: (
          <FaMoneyBillWave className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
    ],
    businessOwners: [
      {
        title: "Set Expense Rules",
        description:
          "Set category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.",
        icon: (
          <FaCogs className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Approve Reports",
        description:
          "Review expense reports in one place, collect missing information directly, and approve expenses with a single click.",
        icon: (
          <FaCheckCircle className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Reimburse",
        description:
          "Reimburse employees directly via ACH with just a few clicks.",
        icon: (
          <FaMoneyBillWave className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
    ],
    financeAccounting: [
      {
        title: "Receive Expenses",
        description:
          "Set category limits and/or expense rules. Let employees submit expenses by scanning receipts or entering costs manually.",
        icon: (
          <FaFileUpload className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Approve Reports",
        description:
          "Review expense reports in one place, collect missing information directly, and approve expenses with a single click.",
        icon: (
          <FaClipboardCheck className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
      {
        title: "Export to Accounting Software",
        description:
          "Spend 75% less time on expenses by reconciling expense data and automatically exporting entries into QuickBooks, NetSuite, Xero, and more.",
        icon: (
          <FaDownload className="text-primary-color text-6xl p-3 bg-primary-color/25 rounded-full" />
        ),
      },
    ],
  };

  const features = [
    {
      title: "Spend Management",
      description:
        "Manage expenses, vendors, and invoices. Analyze spending trends and forecast budgets.",
      icon: <FaMoneyBillWave className="text-primary-color text-2xl" />,
    },
    {
      title: "Receipt Tracking",
      description:
        "Scan receipts via mobile app and auto-record vendor, date, and amount.",
      icon: <FaReceipt className="text-primary-color text-2xl" />,
    },
    {
      title: "Expensify Card",
      description:
        "Pay with an Expensify corporate card and capture transactions in expense reports automatically.",
      icon: <FaCreditCard className="text-primary-color text-2xl" />,
    },
    {
      title: "Invoices",
      description:
        "Create invoices in seconds. Auto-calculate taxes, discounts, and other fees.",
      icon: <FaFileInvoiceDollar className="text-primary-color text-2xl" />,
    },
    {
      title: "Bill Pay",
      description:
        "Automate approvals and payments. Track what’s paid, what’s due, and what’s late.",
      icon: <FaFileUpload className="text-primary-color text-2xl" />,
    },
    {
      title: "Expense Reports",
      description:
        "View all expenses submitted for reimbursement in one place. Approve with a single click.",
      icon: <FaClipboardCheck className="text-primary-color text-2xl" />,
    },
    {
      title: "Chat",
      description:
        "Message your team, clients, customers, and more in one place -- by chat, email, or phone.",
      icon: <FaComments className="text-primary-color text-2xl" />,
    },
    {
      title: "Virtual Cards",
      description:
        "Make purchases without a physical card. Instantly send virtual cards to employees.",
      icon: <FaRegPaperPlane className="text-primary-color text-2xl" />,
    },
    {
      title: "Travel Management",
      description:
        "Schedule flights and book accommodations. Easily import trip expenses.",
      icon: <FaPlane className="text-primary-color text-2xl" />,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <div className="w-full mx-2 text-center md:w-[90%] mt-2 md:mt-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-left mb-4 w-full md:w-[60%] leading-normal">
            Efficiently manage expenses with our Efficient Expense Management
            Tool
          </h1>
          <div className="flex flex-col lg:flex-row justify-between mb-6">
            <p className="text-lg text-left w-full md:w-2/4">
              Discover how our tool can streamline your expense management
              process and enhance your financial insights.
            </p>
            <div className="flex gap-x-2 mt-4 lg:mt-0 justify-center items-center">
              <Link href="/contact">
                <button className="bg-primary-color hover:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold">
                  Get Started
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-primary-color hover:bg-blue-900 text-white px-6 py-2 rounded-full font-semibold">
                  Book a Call
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Rounded Container */}
        <div className="w-[90%] h-[70vh] bg-gradient-to-b from-primary-color via-blue-400 to-blue-300 rounded-[20px] overflow-hidden relative">
          {/* Transparent Cubes */}
          <div className="absolute bottom-0 left-0 flex justify-center items-center opacity-20">
            <div className="w-32 h-32 bg-white transform rotate-12"></div>
            <div className="w-24 h-24 bg-white transform rotate-45"></div>
            <div className="w-20 h-20 bg-white transform -rotate-30"></div>
          </div>
          <div className="absolute bottom-24 left-0 flex justify-center items-center opacity-20">
            <div className="w-32 h-32 bg-white transform rotate-12"></div>
            <div className="w-24 h-24 bg-white transform rotate-45"></div>
            <div className="w-20 h-20 bg-white transform -rotate-30"></div>
          </div>
          <div className="absolute bottom-0 right-0 flex justify-center items-center opacity-20">
            <div className="w-36 h-36 bg-white transform rotate-60"></div>
            <div className="w-28 h-28 bg-white transform rotate-15"></div>
            <div className="w-16 h-16 bg-white transform -rotate-45"></div>
          </div>
          <div className="absolute bottom-24 right-0 flex justify-center items-center opacity-20">
            <div className="w-36 h-36 bg-white transform rotate-60"></div>
            <div className="w-28 h-28 bg-white transform rotate-15"></div>
            <div className="w-16 h-16 bg-white transform -rotate-45"></div>
          </div>

          {/* Dashboard Image */}
          <div className="flex justify-center items-center h-full">
            <Image
              src={DashboardImage}
              alt="Expense Management Dashboard"
              className="w-[70%] h-auto object-cover rounded-xl -mb-[14em] z-[99]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 py-12 mt-[6em] mb-[4em] lg:mb-[7em] flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-6">How it Works</h2>

        {/* Tab Menu */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <button
            className={`${
              activeTab === "employees"
                ? "bg-primary-color text-white"
                : "bg-white text-primary-color"
            } py-2 px-4 rounded-full  hover:bg-primary-color hover:text-white border border-primary-color transition duration-300`}
            onClick={() => setActiveTab("employees")}
          >
            Employees
          </button>
          <button
            className={`${
              activeTab === "businessOwners"
                ? "bg-primary-color text-white"
                : "bg-white text-primary-color"
            } py-2 px-4 rounded-full hover:bg-primary-color hover:text-white border border-primary-color transition duration-300`}
            onClick={() => setActiveTab("businessOwners")}
          >
            Business Owners
          </button>
          <button
            className={`${
              activeTab === "financeAccounting"
                ? "bg-primary-color text-white"
                : "bg-white text-primary-color"
            } py-2 px-4 rounded-full hover:bg-primary-color hover:text-white border border-primary-color transition duration-300`}
            onClick={() => setActiveTab("financeAccounting")}
          >
            Finance/Accounting
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tabContents[activeTab].map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-[20px] p-4 shadow-md"
            >
              <div className="flex justify-start items-start mb-2">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">
                {index + 1}.{" " + item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* add feautures below */}
      <div className="mt-6 lg:mt-12 mb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="py-4 px-6 border border-gray-300 hover:bg-primary-color group hover:text-white transition-colors duration-150 ease-in-out cursor-pointer rounded-[20px] flex flex-col justify-start items-start"
            >
              <div className="flex flex-row justify-start items-center">
                <span className="mt-4 mr-4 group-hover:text-white">
                  {feature.icon}
                </span>
                <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
              </div>
              <p className="text-left mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 py-12 mt-12 mb-12 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-10">
          {/* Left Side: Title and Description */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-left mb-4">
              Ready to simplify your receipt and expense management process?
            </h2>
            <p className="text-lg">
              Enter your email or phone number to make your company's money go
              further with Expensify's time-saving spend management tools.
            </p>
          </div>

          {/* Right Side: Input Field */}
          <div className="md:w-1/2 w-full">
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email or phone number"
                className="flex-1 py-3 px-5 rounded-l-lg border border-gray-300 focus:outline-none focus:border-emerald-800"
              />
              <button
                type="submit"
                className="bg-primary-color text-white py-3 px-6 rounded-r-lg hover:bg-blue-900 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
