import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import AboutHeaderImage from "../../assets/about/aboutus.jpg";
import AboutImage from "../../assets/about/simplify.svg";

const page = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="lg:ml-24 flex flex-col justify-center items-center lg:items-start gap-y-4 h-auto my-8 lg:my-0 md:h-screen">
          <p className="text-md font-primary-color tracking-wider text-gray-950">
            About us
          </p>
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left uppercase text-gray-950 font-bold tracking-wider">
            We change the way <br />
            you do money
          </h1>
          <p className="text-lg font-medium text-center lg:text-left w-full lg:w-1/2">
            Mascons helps you spend, send, and save smarter. Welcome to your new
            favourite way to do all things money.
          </p>
          <Link href="/contact">
            <button className="bg-primary-color text-white rounded-full shadow-md px-8 py-3">
              Contact us
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2 h-auto lg:h-screen">
          <Image
            src={AboutHeaderImage}
            alt="About Us"
            height={1000}
            width={1000}
            className="h-auto md:h-screen object-cover w-full"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 h-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-16">
          <div className="flex flex-col justify-start items-start gap-y-2 border bg-gray-50 rounded-2xl px-6 py-8">
            <span>
              <PiUsersThreeLight size={30} />
            </span>
            <p className="text-xl font-semibold">45+ million</p>
            <p className="text-md text-gray-700 w-48">
              Personal Customers globally
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-y-2 border bg-gray-50 rounded-2xl px-6 py-8">
            <span>
              <AiOutlineGlobal size={30} />
            </span>
            <p className="text-xl font-semibold">100+ Countries</p>
            <p className="text-md text-gray-700 w-48">
              Global Presence in more than 100 countries.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-y-2 border bg-gray-50 rounded-2xl px-6 py-8">
            <span>
              <FaRegHandshake size={30} />
            </span>
            <p className="text-xl font-semibold">500,000+</p>
            <p className="text-md text-gray-700 w-48">
              Business Partners & Collaborations worldwide.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start gap-y-2 border bg-gray-50 rounded-2xl px-6 py-8">
            <span>
              <RiSecurePaymentLine size={30} />
            </span>
            <p className="text-xl font-semibold">Top-Tier Security</p>
            <p className="text-md text-gray-700 w-48">
              Leading the industry with cutting-edge security solutions.
            </p>
          </div>
        </div>

        {/* Simplifying Fintech World Section */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-4xl font-semibold uppercase tracking-wider">
            Simplifying the Fintech World
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-md font-medium text-gray-600 text-left w-full md:w-4/5 my-4">
                At Mascons, we are driving the transformation of
                global financial services through cutting-edge Banking as a
                Service (BaaS) solutions.
              </p>
              <ul className="list-disc w-full md:w-3/4 ml-6 text-md font-medium text-gray-600 text-left">
                <li>
                  Our platform offers digital wallets, card management,
                  remittance services, branchless banking, and letters of
                  credit—tailored to simplify financial processes.
                </li>
                <li>
                  With clients across the globe, we deliver seamless, secure,
                  and scalable solutions to meet the demands of today’s modern
                  financial ecosystems.
                </li>
                <li>
                  Our goal is to provide innovative, customer-centric solutions
                  that enhance success in the digital economy.
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src={AboutImage}
                alt="Simplify Fintech World"
                height={700}
                width={700}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center my-8 rounded-3xl border-2 border-gray-200 p-8">
          <div className="flex flex-col justify-start items-start w-full lg:w-2/3 gap-4">
            <h1 className="text-4xl font-semibold">
              Change the Fintech world with us
            </h1>
            <p className="text-gray-700">
              At Mascons, we are committed to transforming global financial
              services by offering cutting-edge Banking as a Service (BaaS)
              solutions.
            </p>
            <button className="bg-primary-color mt-4 text-white px-8 py-2 rounded-full">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
