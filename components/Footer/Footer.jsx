import Image from "next/image";
import FooterLogo from "../../assets/footer-logo.png";

const servicesFirstHalf = [
  { name: "Banking as a service platform", url: "/banking-as-a-service" },
  { name: "Card Management Solution", url: "/card-management-solution" },
  { name: "Remittance Platform", url: "/remittance-platform" },
];

const servicesSecondHalf = [
  { name: "Digital Wallet", url: "/digital-wallet" },
  { name: "Corporate Expense Management", url: "/expense-management" },
  { name: "Branchless Banking", url: "/branchless-banking" },
];

const footerLinks = [
  {
    heading: "Quick Links",
    links: [
      { name: "Home", url: "/" },
      { name: "About us", url: "/about-us" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    heading: "Useful Links",
    links: [
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Terms Of Services", url: "/terms-of-services" },
      { name: "Global Account T&C", url: "/global-account-t&c" },
      { name: "Cookies Policy", url: "/cookies-policy" },
      { name: "Compliance Policy", url: "/complain-policy" },
      { name: "Acceptable Use Policy", url: "/acceptable-use-policy" },
    ],
  },
];

const FooterLinkSection = ({ heading, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white tracking-wider">
      {heading}
    </h3>
    <ul className="space-y-2">
      {links.map((link, idx) => (
        <li key={idx}>
          <a
            href={link.url}
            className="text-gray-300 font-medium hover:text-gray-200 transition-colors duration-150 ease-in-out"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-primary-color pb-8 pt-1 md:pt-8 rounded-t-3xl md:mx-2 lg:mx-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-2 mt-12 md:mt-16 lg:mt-24 gap-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 gap-y-6 md:gap-x-16 lg:gap-x-28">
          {/* Logo wrapper */}
          <div className="flex flex-row justify-start lg:items-center gap-x-2">
            <Image
              src={FooterLogo}
              alt="Mascons logo"
              className="h-auto w-1/2 md:w-3/5 lg:w-3/4"
            />
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-8 gap-y-8 w-full">
            <FooterLinkSection heading="Services" links={servicesFirstHalf} />
            <FooterLinkSection heading="" links={servicesSecondHalf} />
            {footerLinks.map((section, i) => (
              <FooterLinkSection
                key={i}
                heading={section.heading}
                links={section.links}
              />
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-100 my-4" />

        <p className="text-center text-sm font-semibold text-gray-100">
          &copy; 2025 All rights reserved. Mascons
        </p>
      </div>
    </div>
  );
};

export default Footer;
