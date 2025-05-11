"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Maps from "./Maps";

const ContactPage = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [formActive, setIsFormActive] = useState("referral");
  const [activeTab, setActiveTab] = useState("India Office");
  const [isVisible, setIsVisible] = useState(false);

  const officeLocations = {
    "India Office": { lat: 12.920086, lng: 77.562837 },
  };

  const addresses = {
    "India Office": `27th main road, HSR Layout, Bangalore 560102, Karnataka, India`,
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(false);

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage("Form submitted successfully");
      } else {
        setResponseMessage("Error Submitting the form details");
      }
    } catch (error) {
      setResponseMessage("Error submitting form");
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Half - Contact Form */}
        <motion.div
          className="md:w-1/2 w-full p-4 md:p-6 lg:p-8 bg-white flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h1>

          {/* Office Tabs */}
          <div className="flex flex-wrap justify-start items-start gap-4 mb-6">
            {Object.keys(addresses).map((office) => (
              <motion.button
                key={office}
                className={`py-2 px-4 rounded-full font-semibold ${
                  activeTab === office
                    ? "bg-primary-color text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
                onClick={() => setActiveTab(office)}
                initial={{ opacity: 0, y: 20 }} // Add animation for button
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }} // Stagger effect
              >
                {office}
              </motion.button>
            ))}
          </div>

          {/* Display Active Office Address */}
          <p className="text-sm text-gray-600 mb-6">{addresses[activeTab]}</p>

          <motion.form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <motion.input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleValueChange}
                placeholder="First Name"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#043F2E]"
                initial={{ opacity: 0, y: 20 }} // Add animation for input
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }} // Stagger effect
              />
              <motion.input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleValueChange}
                placeholder="Last Name"
                className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#043F2E]"
                initial={{ opacity: 0, y: 20 }} // Add animation for input
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }} // Stagger effect
              />
            </div>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleValueChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#043F2E]"
              initial={{ opacity: 0, y: 20 }} // Add animation for input
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }} // Stagger effect
            />
            <motion.input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleValueChange}
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#043F2E]"
              initial={{ opacity: 0, y: 20 }} // Add animation for input
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }} // Stagger effect
            />
            <motion.textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleValueChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#043F2E]"
              rows="4"
              initial={{ opacity: 0, y: 20 }} // Add animation for textarea
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }} // Stagger effect
            ></motion.textarea>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-color text-[#ffffff] p-3 rounded-full hover:bg-blue-900 hover:text-white transition duration-300"
              initial={{ opacity: 0, y: 20 }} // Add animation for button
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }} // Stagger effect
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Half - Google Static Map */}
        <div className="md:w-1/2 w-full h-[100vh] md:h-auto flex items-center justify-center">
          {/* Pass the coordinates for the active office */}
          <Maps location={officeLocations[activeTab]} />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
