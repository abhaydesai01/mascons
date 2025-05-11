import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaChartLine,
  FaExchangeAlt,
  FaLock,
} from "react-icons/fa";

import FeaturesImage1 from "../../assets/digital wallet/mobile-payment.png";
import FeaturesImage2 from "../../assets/digital wallet/ewallet.png";
import FeaturesImage3 from "../../assets/digital wallet/qr-merchant.png";
import FeaturesImage4 from "../../assets/digital wallet/user-enrollment.png";

const DigitalWalletPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center bg-gray-100 px-2 lg:px-4">
        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-center h-[100vh] px-2 lg:px-4">
          {/* Title */}
          <h1 className="text-4xl lg:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Digital Wallet Platform
          </h1>

          {/* Main Description */}
          <p className="text-lg md:text-xl text-gray-700 lg:max-w-2xl mb-6">
            Boost financial inclusion and become an embedded FinTech provider in
            your region. Get the market-ready wallet solution to digitalize your
            financial services for merchants and customers.
          </p>

          {/* Secondary Description */}
          <p className="text-md md:text-lg text-gray-600 lg:max-w-lg mb-8">
            Start your digital wallet business, no matter the business size and
            industry niche.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/contact">
              <button className="bg-primary-color hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-primary-color hover:bg-blue-900 text-white px-6 py-3 rounded-full font-semibold">
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center -mt-[4em] lg:-mt-[7em]">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row  bg-white rounded-[20px] p-2 md:p-4 lg:p-8 mt-16 shadow-md">
          {/* Section Title */}
          <div className="text-left mb-8">
            <p className="text-md font-semibold text-primary-color">
              Digital wallet - Enterprise use cases
            </p>
            <h2 className="text-2xl mt-4 leading-relaxed md:text-4xl font-semibold text-gray-900">
              Reinforce your digital business strategy and go cashless with
              enterprise-scale solutions
            </h2>
          </div>

          {/* Grid Layout 2x2 for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                Retail Banking
              </h3>
              <p className="h-[2px] rounded-lg w-[4em] bg-gray-900"></p>
              <p className="text-gray-600 mt-2">
                Get a new robust customer acquisition channel for the
                underbanked with easy remote identification.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                New FinTech Projects
              </h3>
              <p className="h-[2px] rounded-lg w-[4em] bg-gray-900"></p>
              <p className="text-gray-600 mt-2">
                For ambitious businesses backed by government or private funds
                that strive to launch digital financial products on local
                markets.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-gray-900">Telecoms</h3>
              <p className="h-[2px] rounded-lg w-[4em] bg-gray-900"></p>
              <p className="text-gray-600 mt-2">
                Increase your ARPU by turning subscribers’ accounts into digital
                wallets, and monetize your customer base.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                Neobanking
              </h3>
              <p className="h-[2px] rounded-lg w-[4em] bg-gray-900"></p>
              <p className="text-gray-600 mt-2">
                For forward-thinking retailers that want to challenge the
                traditional banking landscape with their own neobanking service
                offerings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[4em] bg-gradient-to-r from-primary-color via-primary-color to-blue-900 py-16">
        <div className="max-w-7xl mx-auto text-center px-4">
          {/* Title */}
          <h2 className="text-md font-medium text-white uppercase">
            The Benefits you gain
          </h2>

          {/* Subheading */}
          <p className="text-2xl lg:text-3xl text-white mt-2">
            Transforming customers into real assets
          </p>

          {/* 4 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Card 1 - Localization */}
            <div className="flex flex-col items-center text-white">
              <FaMapMarkerAlt className="text-5xl bg-gray-200/25 p-3 rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Localization</h3>
              <p className="mt-2 text-center">
                Deploy eWallets custom-tailored to your individual business
                needs and location specifics.
              </p>
            </div>

            {/* Card 2 - Scalability */}
            <div className="flex flex-col items-center text-white">
              <FaChartLine className="text-5xl bg-gray-200/25 p-3 rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Scalability</h3>
              <p className="mt-2 text-center">
                As your business grows, so does your digital wallet. Get
                business resilience as you scale across countries and workloads.
              </p>
            </div>

            {/* Card 3 - Flexibility */}
            <div className="flex flex-col items-center text-white">
              <FaExchangeAlt className="text-5xl bg-gray-200/25 p-3 rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Flexibility</h3>
              <p className="mt-2 text-center">
                Enjoy full compatibility with third-party products and services
                via seamless integration and API connections.
              </p>
            </div>

            {/* Card 4 - Security */}
            <div className="flex flex-col items-center text-white">
              <FaLock className="text-5xl bg-gray-200/25 p-3 rounded-full" />
              <h3 className="text-lg font-semibold mt-4">Security</h3>
              <p className="mt-2 text-center">
                Ensure rock-solid security to safeguard all your customer
                service operations with your fintech wallet solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Digital Wallet Features */}
      <div className="w-full flex justify-center items-center py-12">
        <div className="max-w-7xl w-full flex flex-col p-2 md:p-4 lg:p-8">
          {/* Features Title */}
          <h3 className="text-md font-semibold text-primary-color mb-4">
            Digital wallet platform features
          </h3>
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 w-full lg:w-[70%]">
            Embedded fintech solution for quick & easy launch of your digital
            wallet business
          </h2>

          {/* Feature 1: Mobile payment engine */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            {/* Content */}
            <div className="md:w-1/2 text-left md:pr-8">
              <h4 className="text-xl font-semibold text-gray-900">
                Mobile payment engine
              </h4>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li>
                  API client to connect with different payment tools through
                  card tokenization, banking accounts, etc.
                </li>
                <li>
                  Smart payment routing with a default tool or cascade payment
                  processing
                </li>
                <li>
                  API interface for white-label or custom end-user interfaces
                </li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="">
              <Image
                src={FeaturesImage1}
                alt="features image"
                height={600}
                width={600}
                className="h-auto w-[80%]"
              />
            </div>
          </div>

          {/* Feature 2: eWallet Ledger */}
          <div className="flex flex-col md:flex-row items-center mb-16 md:flex-row-reverse">
            {/* Content */}
            <div className="md:w-1/2 text-left md:pl-8">
              <h4 className="text-xl font-semibold text-gray-900">
                eWallet (e-money) ledger
              </h4>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li>Various types of ecosystem participants and wallets</li>
                <li>
                  Day-to-day transaction processing and system administration
                </li>
                <li>AML, limits, fees management and reporting</li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="md:w-1/2">
              <Image
                src={FeaturesImage2}
                alt="features image"
                height={600}
                width={600}
                className="h-auto w-[100%]"
              />
            </div>
          </div>

          {/* Feature 3: QR Merchant POS */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            {/* Content */}
            <div className="md:w-1/2 text-left ">
              <h4 className="text-xl font-semibold text-gray-900">
                QR Merchant POS
              </h4>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li>QR code invoicing and payments acceptance</li>
                <li>API for offline and online merchants</li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="">
              <Image
                src={FeaturesImage3}
                alt="features image"
                height={600}
                width={600}
                className="h-auto w-[80%]"
              />
            </div>
          </div>

          {/* Feature 4: Users' Enrollment and Management */}
          <div className="flex flex-col justify-start items-center mb-16 md:flex-row-reverse">
            {/* Content */}
            <div className="md:w-1/2 text-left md:pl-8">
              <h4 className="text-xl font-semibold text-gray-900">
                Users’ Enrollment and Management System
              </h4>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li>Registration and authentication options</li>
                <li>KYC, business account, branches and staff management</li>
              </ul>
            </div>
            {/* Image Placeholder */}
            <div className="md:w-1/2">
              <Image
                src={FeaturesImage4}
                alt="features image"
                height={600}
                width={600}
                className="h-auto w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalWalletPage;
