import React from "react";
import {
  FaRocket,
  FaLock,
  FaDollarSign,
  FaGlobe,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import RemittanceImage1 from "../../assets/remittance/global.svg";
import RemittanceImage2 from "../../assets/remittance/remittance.svg";
import RemittanceImage3 from "../../assets/remittance/RP1.jpeg";
import RemittanceImage4 from "../../assets/remittance/RP2.jpeg";
import RemittanceImage5 from "../../assets/remittance/RP3.jpeg";
import RemittanceImage6 from "../../assets/remittance/RP4.jpeg";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Existing Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start h-auto lg:h-[100vh]">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start w-full lg:w-[50%] gap-y-8 md:gap-y-12 lg:gap-y-24 mt-[2em] md:mt-[3em] lg:mt-[6em]">
            <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start gap-y-2">
              <h1 className="text-4xl text-center lg:text-left lg:text-6xl font-semibold tracking-wider">
                Unlock <br />
                Cross border, <br /> Unlock Growth
              </h1>
              <p className="font-semibold text-center lg:text-left tracking-wider text-2xl text-gray-800">
                Your Gateway to Global Payment Success
              </p>
              <p className="font-semibold text-center lg:text-left tracking-wide text-gray-800">
                Achieve Top-Tier Authorization rates
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row items-center gap-x-2 mb-4">
                <Link href="/contact">
                  <button className="bg-primary-color text-white px-6 py-2 rounded-full">
                    Start Sending Money
                  </button>
                </Link>
                <Link href="/about-us">
                  <button className="bg-primary-color text-white px-6 py-2 rounded-full">
                    Learn More
                  </button>
                </Link>
              </div>

              <div className="flex flex-row items-center gap-x-4 bg-gray-400/25 px-7 py-2 rounded-full">
                <div className="flex items-center gap-x-2">
                  <FaRocket className="text-primary-color" />
                  <p className="font-semibold">Fast</p>
                </div>
                <p className="h-[18px] w-[2px] bg-gray-600 rounded-lg"></p>
                <div className="flex items-center gap-x-2">
                  <FaLock className="text-primary-color" />
                  <p className="font-semibold">Secure</p>
                </div>
                <p className="h-[18px] w-[1.6px] bg-gray-600 rounded-lg"></p>
                <div className="flex items-center gap-x-2">
                  <FaDollarSign className="text-primary-color" />
                  <p className="font-semibold">Low Cost</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%] md:w-[50%] mt-0">
            <Image
              src={RemittanceImage2}
              alt="banking-services"
              height={800}
              width={800}
              className="h-auto md:w-[100%]"
            />
          </div>
        </div>

        {/* New Section */}
        <div className="flex flex-col justify-center items-center py-16">
          <h2 className="text-3xl md:text-4xl text-center font-semibold mb-4">
            Reach Further, Grow Faster
          </h2>
          <p className="text-md lg:text-lg font-medium mb-8 text-center w-full lg:w-[50%] text-gray-700">
            Market expansion is effortless with Tazapay’s worldwide coverage.
            Envision seamless connections with your global customer base.
          </p>

          {/* Two Columns Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-[2em] max-w-6xl mx-auto w-full">
            <div className="flex flex-col justify-center items-start px-2 gap-y-6">
              <div className="flex items-start gap-x-4">
                <FaGlobe className="text-6xl lg:text-4xl text-[#043F2E]" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Effortless Global Expansion
                  </h3>
                  <p className="text-gray-700">
                    Gain entry into 173+ countries and access to local payment
                    preferences in 80+ markets. Offer familiar payment options
                    to your local customers worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-4">
                <FaMoneyBillWave className="text-6xl lg:text-4xl text-[#043F2E]" />
                <div>
                  <h3 className="font-semibold text-lg">
                    Flexible Currencies and Smart FX
                  </h3>
                  <p className="text-gray-700">
                    Experience unmatched FX rates that protect and boost your
                    bottom line. Choose from our flexible settlement options to
                    operate in the currency that suits you best.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-4">
                <FaChartLine className="text-6xl lg:text-4xl text-[#043F2E]" />
                <div>
                  <h3 className="font-semibold text-lg">
                    No Local Entities, Just Growth
                  </h3>
                  <p className="text-gray-700">
                    Skip the local setups and leap directly into global markets.
                    We manage the compliance and tax details, letting you
                    concentrate on growth, stress-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={RemittanceImage1}
                alt="banking-services"
                height={800}
                width={800}
                className="h-auto w-[70%]"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Second New Section */}
      <div className="w- mb-[6em] h-auto bg-gradient-to-b from-[#000075] via-[#0000A3] to-[#0000FF] py-16">
        <div className="text-center text-white mb-4 mt-10">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            Global Payment Collections Redefined
          </h2>
          <p className="text-lg mt-4">
            Simplify with Finance Trade Fintech — a unified platform for
            efficient worldwide payment collection.
          </p>
        </div>

        <div className="flex justify-center items-center mb-16">
          <Link href="/contact">
            <button className="text-[#08281e] bg-white shadow-md px-8 py-2 rounded-full">
              Start now
            </button>
          </Link>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-white via-[#ffff] to-primary-color p-6 rounded-lg text-white flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="text-xl text-[#08281e] font-semibold mb-4">
                Local Payment Methods
              </h3>
              <ul className="list-disc ml-4 text-[#08281e]">
                <li>Available in 100+ countries</li>
                <li>Zero chargebacks</li>
              </ul>
            </div>
            <Image
              src={RemittanceImage3}
              alt="Local Payment Methods"
              height={800}
              width={800}
              className="h-auto object-cover w-auto mt-6 border rounded-xl p-4 -mb-16"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-white via-[#ffff] to-primary-color p-6 rounded-lg text-white flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="text-xl text-[#08281e] font-semibold mb-4">
                International Transfers
              </h3>
              <ul className="list-disc ml-4 text-[#08281e]">
                <li>Fast cross-border payments</li>
                <li>Low transfer fees</li>
              </ul>
            </div>
            <Image
              src={RemittanceImage4}
              alt="International Transfers"
              height={800}
              width={800}
              className="h-auto object-cover w-auto mt-6 border rounded-xl p-4 -mb-16"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-white via-[#ffff] to-primary-color p-6 rounded-lg text-white flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="text-xl text-[#08281e] font-semibold mb-4">
                Mobile Wallet Payments
              </h3>
              <ul className="list-disc ml-4 text-[#08281e]">
                <li>Pay directly via mobile wallets</li>
                <li>Supports multiple currencies</li>
              </ul>
            </div>
            <Image
              src={RemittanceImage5}
              alt="Mobile Wallet Payments"
              height={800}
              width={800}
              className="h-auto object-cover w-auto mt-6 border rounded-xl p-4 -mb-16"
            />
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-b from-white via-[#ffff] to-primary-color p-6 rounded-lg text-white flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="text-xl text-[#08281e] font-semibold mb-4">
                Bank Transfers
              </h3>
              <ul className="list-disc ml-4 text-[#08281e]">
                <li>Direct transfers to bank accounts</li>
                <li>Secure and reliable transactions</li>
              </ul>
            </div>
            <Image
              src={RemittanceImage6}
              alt="Bank Transfers"
              height={800}
              width={800}
              className="h-auto object-cover w-auto mt-6 border rounded-xl p-4 -mb-16"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
