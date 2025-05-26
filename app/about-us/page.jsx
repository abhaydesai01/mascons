import Image from "next/image";
import Link from "next/link";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { PiUsersThreeLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import AboutHeaderImage from "../../assets/about/aboutus.jpg";
import AboutImage from "../../assets/about/simplify.svg";

const founders = [
  {
    name: "Gaurav Gupta",
    title: "Co-Founder",
    image: "/Gaurav.png", // now using public folder path
    bio: `Gaurav Gupta brings over 15 years of leadership in payments, fintech, and digital currencies, having driven double-digit growth across diverse product lines and orchestrated two successful exits in payment processing and settlement. A seasoned product strategist, he guides initiatives from ideation through enterprise-scale implementation and has deep experience managing high-volume transaction platforms. Abhay is passionate about building long-term, strategic partnerships that drive mutual success and lasting impact.`,
  },
  {
    name: "Pankaj Kumar",
    title: "Co-Founder",
    image: "/pankaj.png", // now using public folder path
    bio: `An MBA Grad. from James Cook University with 15+ nears of experience in fintech, driving innovation and growth across the industry
Founded and scaled two fintech startups to strategic exits, excelling in product development and sales
Extensive network with leading banks and large-scale fintech clients, recognized as a trusted expert
Honored among the Top 50 Most Influential Payment Professionals, with awards including Red Herring
Top 100 Asia and Startup of the Year 2018.`,
  },
];

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

{/*         <div className="w-full lg:w-1/2 h-auto lg:h-screen">
          <Image
            src={AboutHeaderImage}
            alt="About Us"
            height={1000}
            width={1000}
            className="h-auto md:h-screen object-cover w-full"
          />
        </div> */}
      </div>
        {/* ── FOUNDERS SECTION ── */}
        <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Founders</h2>
      <div className="space-y-12">
        {founders.map((founder) => (
          <div key={founder.name} className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Avatar on left */}
            <div className="flex-shrink-0">
              <Image
                src={founder.image}
                alt={founder.name}
                width={128}
                height={128}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>

            {/* Info card */}
            <div className="relative bg-gray-50 rounded-xl shadow-lg p-8 w-full lg:w-3/4">
              {/* Overlapping circle */}

              {/* Text content */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-lg font-medium text-blue-600 mb-4">{founder.title}</p>
                <p className="text-gray-700 leading-relaxed">{founder.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
        {/* ── END FOUNDERS SECTION ── */}

        {/* Simplifying Fintech World Section */}
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-y-2">
          <h1 className="text-4xl font-semibold uppercase tracking-wider">
            Simplifying the Fintech World
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <p className="text-md font-medium text-gray-600 text-left w-full md:w-4/5 my-4">
                At Mascons, we are driving the transformation of global financial
                services through cutting-edge Banking as a Service (BaaS)
                solutions.
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
