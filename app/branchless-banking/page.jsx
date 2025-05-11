"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaMobileAlt,
  FaDollarSign,
  FaCoins,
  FaFingerprint,
  FaExchangeAlt,
  FaPiggyBank,
  FaUserCheck,
  FaCheckCircle,
  FaLock,
  FaUserShield,
} from "react-icons/fa";
import Link from "next/link";
import BankingImage from "../../assets/branchless banking/branchless-banking.jpeg";

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);

      // Set initial window width
      setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      // Cleanup listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (windowWidth !== null) {
      // Ensure windowWidth is defined
      if (windowWidth >= 1024) {
        setSlidesToShow(3); // Large screens
      } else if (windowWidth >= 768) {
        setSlidesToShow(2); // Medium screens
      } else {
        setSlidesToShow(1); // Small screens
      }
    }
  }, [windowWidth]);

  const securityFeatures = [
    {
      title: "Two-Factor Authentication (2FA)",
      description:
        "Enhance security by requiring a second form of verification when logging in.",
      icon: (
        <FaUserShield className="text-6xl bg-primary-color/25 p-3 rounded-full text-primary-color" />
      ),
    },
    {
      title: "Encrypted Transactions",
      description:
        "All transactions are protected with end-to-end encryption, ensuring your data remains private and secure.",
      icon: (
        <FaLock className="text-6xl bg-primary-color/25 p-3 rounded-full text-primary-color" />
      ),
    },
    {
      title: "Fraud Detection & Prevention",
      description:
        "Stay protected with real-time monitoring and alerts for suspicious activity to prevent fraud.",
      icon: (
        <FaShieldAlt className="text-6xl bg-primary-color/25 p-3 rounded-full text-primary-color" />
      ),
    },
  ];

  const features = [
    {
      title: "Instant Money Transfers",
      description: "Send and receive money instantly, anywhere, anytime.",
      icon: <FaMoneyCheckAlt className="text-6xl text-primary-color" />,
    },
    {
      title: "No Hidden Fees",
      description: "Transparent pricing with no unexpected charges.",
      icon: <FaDollarSign className="text-6xl text-primary-color" />,
    },
    {
      title: "24/7 Accessibility",
      description: "Access your account and perform transactions anytime.",
      icon: <FaMobileAlt className="text-6xl text-primary-color" />,
    },
    {
      title: "Secure Digital Banking",
      description: "Bank safely with advanced encryption and security.",
      icon: <FaShieldAlt className="text-6xl text-primary-color" />,
    },
    {
      title: "Mobile Banking Solutions",
      description: "Manage your finances on the go with our mobile app.",
      icon: <FaMobileAlt className="text-6xl text-primary-color" />,
    },
    {
      title: "Multi-Currency Support",
      description: "Handle multiple currencies effortlessly with our platform.",
      icon: <FaCoins className="text-6xl text-primary-color" />,
    },
    {
      title: "Fraud Detection & Prevention",
      description: "Stay protected with our real-time fraud detection system.",
      icon: <FaFingerprint className="text-6xl text-primary-color" />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex justify-center items-center">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center h-[100vh] px-4">
          {/* Left Side Content */}
          <div className="w-full flex flex-col justify-center lg:justify-start lg:items-start items-center lg:w-[50%]">
            <h1 className="text-md text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-primary-color">
              Revolutionize Your Branchless Banking
            </h1>
            <p className="text-3xl text-center lg:text-left text-gray-900 mt-4 w-full lg:w-[80%]">
              Seamlessly manage your banking needs with digital solutions.
            </p>
            <Link href="/contact">
              <button className="mt-6 px-6 py-2 bg-primary-color text-white rounded hover:bg-blue-900">
                Explore More
              </button>
            </Link>
          </div>

          {/* Right Side Image and Notification Cards */}
          <div className="w-full lg:w-[50%] mt-6 md:mt-4 lg:mt-0 relative overflow-hidden shadow-md rounded-xl">
            <Image
              src={BankingImage}
              alt="Branchless Banking"
              height={800}
              width={800}
              className="w-[100%] h-auto border-2 rounded-xl "
            />

            {/* Notification Tiles */}
            <div className="hidden absolute top-5 right-8 border border-primary-color bg-white/75 shadow-lg p-4 rounded-md md:flex items-center gap-3">
              <FaMoneyCheckAlt className="text-primary-color text-2xl" />
              <div>
                <p className="font-bold text-sm text-primary-color">
                  Transaction Approved
                </p>
                <p className="text-xs text-gray-500">John Doe - $500</p>
              </div>
            </div>

            <div className="hidden absolute bottom-20 left-12 border border-primary-color bg-white/75 shadow-lg p-4 rounded-md md:flex items-center gap-3">
              <FaExchangeAlt className="text-primary-color text-2xl" />
              <div>
                <p className="font-bold text-sm text-primary-color">
                  Money Transferred
                </p>
                <p className="text-xs text-gray-500">Jane Smith - $1200</p>
              </div>
            </div>

            <div className="hidden absolute bottom-5 right-24 border border-primary-color bg-white/75 shadow-lg p-4 rounded-md md:flex items-center gap-3">
              <FaPiggyBank className="text-primary-color text-2xl" />
              <div>
                <p className="font-bold text-sm text-primary-color">
                  Savings Added
                </p>
                <p className="text-xs text-gray-500">David - $300</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-3xl lg:text-4xl text-center text-primary-color font-semibold mb-12">
            How Branchless Banking Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <FaMobileAlt className="text-6xl text-primary-color mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-primary-color">
                1. Download the App
              </h3>
              <p className="text-gray-500 mt-2">
                Get started by downloading the branchless banking app from your
                app store.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUserCheck className="text-6xl text-primary-color mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-primary-color">
                2. Create an Account
              </h3>
              <p className="text-gray-500 mt-2">
                Sign up with your personal information and verify your identity
                to secure your account.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCheckCircle className="text-6xl text-primary-color mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-primary-color">
                3. Start Banking Digitally
              </h3>
              <p className="text-gray-500 mt-2">
                Enjoy seamless banking experiences from anywhere without the
                need for a physical branch.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 mb-16 bg-primary-color py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12 mt-8">
            <h2 className="text-4xl font-semibold tracking-wider text-white">
              Security & Compliance
            </h2>
            <p className="text-lg text-gray-300 mt-2">
              Ensuring a secure and compliant banking experience with
              cutting-edge technologies and protocols.
            </p>
          </div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[20px] shadow-lg flex flex-col items-center text-center"
              >
                {/* Feature Icon */}
                <div>{feature.icon}</div>
                {/* Feature Title */}
                <h3 className="text-2xl font-semibold text-primary-color mt-4">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 mb-16">
        <div className="w-full pl-2 lg:pl-[8em]">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl text-center md:text-left font-bold text-primary-color">
                Our Services
              </h2>
              <p className="text-md lg:text-lg text-gray-600 mt-2">
                Explore the top-notch features we provide to make your banking
                experience seamless.
              </p>
            </div>
            <div className="flex gap-4 mr-6 mt-4 md:mt-0">
              <button onClick={prevSlide}>
                <FaArrowLeft className="text-5xl text-primary-color hover:bg-primary-color p-4 hover:text-white rounded-full transition-colors duration-200 ease-in-out border" />
              </button>
              <button onClick={nextSlide}>
                <FaArrowRight className="text-5xl text-primary-color hover:bg-primary-color p-4 hover:text-white rounded-full transition-colors duration-200 ease-in-out border" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="flex">
            {features
              .slice(currentSlide, currentSlide + slidesToShow)
              .map((feature, index) => (
                <div
                  key={index}
                  className="w-full lg:w-[30%] bg-white border border-green-800 p-6 mx-4 rounded-[20px] flex flex-col items-center justify-center text-center shadow-lg h-[300px]"
                >
                  <h3 className="text-2xl font-semibold text-primary-color mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{feature.description}</p>
                  <div className="mt-8">{feature.icon}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
