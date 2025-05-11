"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ServicesImage1 from "../../assets/services.jpg";
import ServicesImage2 from "../../assets/services-2.jpg";
import ServicesImage3 from "../../assets/services-3.jpg";
import ServicesImage4 from "../../assets/services-4.jpg";
import ServicesImage5 from "../../assets/services-5.jpg";
import ServicesImage6 from "../../assets/services-6.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const page = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-2 mt-[2em] overflow--x-hidden">
        <h1 className="text-[25px] text-center lg:text-[40px] font-semibold">
          Our Comprehensive Financial Services
        </h1>
        <p className="text-md px-2 text-center font-semibold text-gray-600 tracking-wide">
          Tailored Solutions to Empower Your Business
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-[4em] px-2 flex flex-col lg:flex-row justify-center items-center w-[100%] gap-x-[2em]">
        {/* service-1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
          transition={{ duration: 1.0 }}
          className="mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200 p-[4px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#043F2E_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 w-full rounded-[0.60rem] bg-gray-100 p-2 flex flex-col justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage1}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] md:w-[60%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-full md:w-[60%] bg-gradient-to-t from-gray-100 to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col md:px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">Letter of Credit (LC)</h1>
                <p className="text-md font-normal text-gray-900">
                  We excel in facilitating Letter of Credit (LC) transactions,
                  ensuring your global trade ventures are smooth and secure. Our
                  experts meticulously handle LC consultation, document
                  preparation, and negotiation, ensuring compliance and
                  efficiency. Trust us to be your guiding partner in
                  international trade.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* service-2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200 p-[4px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#043F2E_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 w-full rounded-[0.60rem] bg-gray-100 p-2 flex flex-col justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage2}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] md:w-[60%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-full md:w-[60%] bg-gradient-to-t from-gray-100 to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col md:px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">SBLC</h1>
                <p className="text-md font-normal text-gray-900">
                  Secure your commitments and transactions using Standby Letters
                  of Credit (SBLC). We provide a robust layer of trust, allowing
                  you to engage confidently in various business scenarios. Our
                  SBLC solutions are tailored to your specific needs, providing
                  you with peace of mind.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* service-3 */}
      <div className="max-w-5xl mx-auto flex flex-row justify-center mt-[1em]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200">
            <div className="relative z-20 w-full rounded-[0.60rem] shadow-md bg-[#0e946e] text-gray-100 p-2 flex flex-col md:flex-row justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage3}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] w-[100%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-[100%] bg-gradient-to-t from-[#0e946e] to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">Bank Guarantee</h1>
                <p className="text-md font-normal text-gray-100">
                  Our Bank Guarantee solutions offer a commitment of payment to
                  ensure contractual obligations are met. Whether you're an
                  exporter, project manager, or involved in international trade.
                  We ensure Bank Guarantees provide you via Bank's have the
                  correct verbiage and does it aligns with your business
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto mt-[1em] flex flex-col md:flex-row justify-center items-center w-[100%] gap-x-[2em]">
        {/* service-4 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
          transition={{ duration: 1.0 }}
          className="mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200 p-[4px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#043F2E_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 w-full rounded-[0.60rem] bg-gray-100 p-2 flex flex-col justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage4}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] md:w-[60%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-full md:w-[60%] bg-gradient-to-t from-gray-100 to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col md:px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">Factoring</h1>
                <p className="text-md font-normal text-gray-900">
                  Factoring is a financial lifeline, we understand its
                  importance. We swiftly convert your outstanding invoices into
                  working capital, ensuring you have the financial agility to
                  meet operational needs and seize growth opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* service-5 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full max-w-lg items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200 p-[4px]">
            <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#043F2E_20deg,transparent_120deg)]"></div>
            <div className="relative z-20 w-full rounded-[0.60rem] bg-gray-100 p-2 flex flex-col justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage5}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] md:w-[60%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-full md:w-[60%] bg-gradient-to-t from-gray-100 to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col md:px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">Receivables Financing</h1>
                <p className="text-md font-normal text-gray-900">
                  Optimize your cash flow through Receivables Financing. We
                  understand the challenges of waiting for customer payments.
                  With our solutions, you can unlock funds tied up in invoices,
                  allowing you to invest in growth and innovation without delay.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-row justify-center mt-[1em]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="mx-auto flex w-full items-center justify-center"
        >
          <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-gray-200">
            <div className="relative z-20 w-full rounded-[0.60rem] shadow-md bg-[#0e946e] text-gray-100 p-2 flex flex-col md:flex-row justify-center items-center">
              <div className="w-full relative flex items-center justify-center">
                <Image
                  src={ServicesImage6}
                  alt="services-image"
                  height={1000}
                  width={1000}
                  className="h-[30vh] w-[100%] rounded-lg mb-6 mt-6"
                />
                <div className="h-40 w-[100%] bg-gradient-to-t from-[#0e946e] to-transparent absolute bottom-6"></div>
              </div>
              <div className="flex flex-col px-10 py-4 justify-start items-start gap-y-2">
                <h1 className="text-xl font-semibold">Bank Guarantee</h1>
                <p className="text-md font-normal text-gray-100">
                  Our Bank Guarantee solutions offer a commitment of payment to
                  ensure contractual obligations are met. Whether you're an
                  exporter, project manager, or involved in international trade.
                  We ensure Bank Guarantees provide you via Bank's have the
                  correct verbiage and does it aligns with your business
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default page;
