import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed flex justify-center items-center top-0 left-0 h-screen w-[100%] bg-gray-700/25 px-2 md:px-0 filter backdrop-blur-sm z-[9999] ">
      <div className="bg-gray-100 rounded-[15px] md:rounded-[20px] border h-[90vh] overflow-y-auto no-scrollbar py-10 p-4 md:p-6 flex flex-col justify-center items-center w-full md:w-[50%]">
        <div className="flex flex-row justify-between items-center border-b-[2px] mt-20 md:mt-16 pb-2 border-gray-400 w-full">
          <p>{title} Account</p>
          <button
            onClick={onClose}
            className="hover:text-rose-600 hover:cursor-pointer hover:bg-rose-400/25 p-2 rounded-lg"
          >
            <IoCloseOutline size={24} />
          </button>
        </div>
        <div className="w-full px-2 mt-4 flex flex-col items-center justify-center">
          <form className="w-full">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name/Company Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
                placeholder="Enter your name or company name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                id="Designation"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="product"
                className="block text-sm font-medium text-gray-700"
              >
                Services you are Looking for?
              </label>
              <select
                id="product"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
              >
                <option>Banking as a Service Platform</option>
                <option>Card Management Solutions</option>
                <option>Remittance Platform</option>
                <option>Digital Wallet</option>
                <option>Corporate Expense Management</option>
                <option>Branchless Banking</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700"
              >
                Reason to for opening account
              </label>
              <textarea
                id="reason"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
                placeholder="Write your reason here"
                rows="4"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#043F2E] text-white font-semibold rounded-md hover:bg-[#032b1f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#043F2E]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
