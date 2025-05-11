import React from "react";
import Image from "next/image";
import CardImage from "../../assets/card management/cardmanagement.webp";
import MerchantImage from "../../assets/card management/merchant.jpeg";
import QRcodeImage from "../../assets/card management/qrcode.jpeg";
import AgentImage from "../../assets/card management/agent.jpeg";
import CorporateImage from "../../assets/card management/corporate.webp";
import CapabilitiesImage1 from "../../assets/card management/cm1.jpeg";
import CapabilitiesImage2 from "../../assets/card management/capabilities2.svg";
import CapabilitiesImage3 from "../../assets/card management/capabilities3.svg";
import {
  FaWallet,
  FaPiggyBank,
  FaCreditCard,
  FaDollarSign,
} from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto h-auto mb-[2em]">
        <div className="flex flex-col justify-start items-center gap-y-4 h-full mt-[3em] lg:mt-[6em]">
          <p className="font-medium text-[#043F2E]">
            All in one card management solution
          </p>
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
            Smart and Simple <br /> Card Management Solution
          </h1>
          <p className="text-center w-full lg:w-[70%]">
            Empowering your fintech with scalable and secure card services. With
            our secure online banking services, you can manage your finances
            from anywhere, at any time.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full">
        <Image
          src={CardImage}
          alt="card-management"
          height={1000}
          width={1000}
          className="h-auto w-full lg:w-[60%]"
        />
        <div className="w-full bg-primary-color rounded-t-[30px] p-4 md:p-6 lg:p-10 -mt-2 lg:-mt-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-y-2 mb-8 mt-6 lg:mt-10">
            <h6 className="text-green-100 font-medium">Why Card Management?</h6>
            <h1 className="text-4xl text-center text-gray-100 mt-4 lg:mt-0">
              The only fintech App you’ll ever need
            </h1>
            <p className="text-md text-center mt-2 text-gray-300">
              Our online banking platform is user-friendly and easy to navigate.
            </p>
          </div>

          {/* Card Management Advantages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mb-20 mt-10">
            <div className="flex flex-col items-center text-center text-gray-100">
              <FaWallet className="text-5xl text-gray-100 mb-4 bg-gray-100/25 p-2 rounded-full " />
              <h3 className="text-lg font-medium tracking-wider">
                Checking Accounts
              </h3>
              <p className="text-gray-300 text-sm pt-2">
                Manage your everyday finances with secure, easy-to-access
                accounts.
              </p>
            </div>

            <div className="flex flex-col items-center text-center text-gray-100">
              <FaPiggyBank className="text-5xl text-gray-100 mb-4 bg-gray-100/25 p-2 rounded-full " />
              <h3 className="text-lg font-medium tracking-wider">
                Savings Accounts
              </h3>
              <p className="text-gray-300 text-sm pt-2">
                Grow your savings with competitive interest rates and flexible
                plans.
              </p>
            </div>

            <div className="flex flex-col items-center text-center text-gray-100">
              <FaDollarSign className="text-5xl text-gray-100 mb-4 bg-gray-100/25 p-2 rounded-full " />
              <h3 className="text-lg font-medium tracking-wider">
                Low Interest Loans
              </h3>
              <p className="text-gray-300 text-sm pt-2">
                Access affordable financing with personalized low-interest loan
                options.
              </p>
            </div>

            <div className="flex flex-col items-center text-center text-gray-100">
              <FaCreditCard className="text-5xl text-gray-100 mb-4 bg-gray-100/25 p-2 rounded-full " />
              <h3 className="text-lg font-medium tracking-wider">
                Flexible Credit Cards
              </h3>
              <p className="text-gray-300 text-sm pt-2">
                Enjoy flexible spending limits, rewards, and low fees with our
                cards.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center my-16 lg:my-20">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-10">
          Card Management Capabilities
        </h2>

        {/* Prepaid Card Issuance */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-[10em] mb-16 w-full">
          <div className="md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold mb-2">
              Prepaid Card Issuance
            </h3>
            <p className="text-md mb-2">
              Issue multi-currency prepaid Visa/Mastercard cards tailored for
              various business and consumer use cases.
            </p>
            <h4 className="font-medium">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom branding options</li>
              <li>Global usage capability</li>
              <li>Instant issuance</li>
            </ul>
          </div>
          <div className="md:w-1/2 ">
            <Image
              src={CapabilitiesImage1}
              alt="Prepaid Card Issuance"
              className="w-full md:w-auto h-[80vh] object-cover border rounded-xl shadow-md p-2"
            />
          </div>
        </div>

        {/* Corporate & Individual Onboarding */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-16">
          <div className="md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold mb-2">
              Corporate & Individual Onboarding
            </h3>
            <p className="text-md mb-2">
              Seamless onboarding processes for corporate or individual
              customers, fully compliant with regulatory standards.
            </p>
            <h4 className="font-medium">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Streamlined workflows</li>
              <li>Enhanced user experience</li>
              <li>Reduced administrative overhead</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src={CapabilitiesImage2}
              alt="Corporate & Individual Onboarding"
              className="w-full md:w-[70%] h-auto"
            />
          </div>
        </div>

        {/* API-Driven Platform */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 p-2">
            <h3 className="text-2xl font-semibold mb-2">API-Driven Platform</h3>
            <p className="text-md mb-2">
              Provide fintech businesses with the tools they need to build and
              scale their card offerings through our robust API platform.
            </p>
            <h4 className="font-medium">Benefits:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Flexibility in card management</li>
              <li>Easy integration with existing systems</li>
              <li>Access to real-time data</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src={CapabilitiesImage3}
              alt="API-Driven Platform"
              className="w-full md:w-[70%] h-auto"
            />
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <p className="text-md mb-8">
            Additional features that support the main capabilities:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {/* Merchant Panel - small box */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 row-span-1">
              <Image
                src={MerchantImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[100%]"
              />
              <h3 className="font-semibold text-lg mb-2">Merchant Panel</h3>
              <p className="text-gray-700">
                Manage merchant transactions and settlements.
              </p>
            </div>

            {/* Corporate Panel - small box */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 row-span-1">
              <Image
                src={CorporateImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[100%]"
              />
              <h3 className="font-semibold text-lg mb-2">Corporate Panel</h3>
              <p className="text-gray-700">
                Control over corporate finances and expenditures.
              </p>
            </div>

            {/* Individual Panel - larger box (spans 2 columns) */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 md:col-span-2 row-span-1">
              <Image
                src={CorporateImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[100%] md:w-[60%]"
              />
              <h3 className="font-semibold text-lg mb-2">Individual Panel</h3>
              <p className="text-gray-700">
                Access personal finances with ease and security.
              </p>
            </div>

            {/* Reporting Tools - small box */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 row-span-1">
              <Image
                src={CorporateImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[100%]"
              />
              <h3 className="font-semibold text-lg mb-2">Reporting Tools</h3>
              <p className="text-gray-700">
                Generate reports for analytics and decision-making.
              </p>
            </div>

            {/* QR-Based Payments - larger box (spans 2 columns) */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 md:col-span-2 row-span-1">
              <Image
                src={QRcodeImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[60%]"
              />
              <h3 className="font-semibold text-lg mb-2">QR-Based Payments</h3>
              <p className="text-gray-700">
                Facilitate modern payment solutions through QR codes.
              </p>
            </div>

            {/* Agent Panel - small box */}
            <div className="bg-white p-5 flex flex-col items-center justify-center rounded-lg border border-greay-200 hover:shadow-md transition col-span-1 row-span-1">
              <Image
                src={AgentImage}
                alt="card-management"
                height={1000}
                width={1000}
                className="h-auto w-[100%]"
              />
              <h3 className="font-semibold text-lg mb-2">Agent Panel</h3>
              <p className="text-gray-700">
                Enable agents to manage customer interactions efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
