import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto px-2 min-h-screen flex flex-col items-center justify-start mt-10 gap-y-6">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center tracking-wide">
            Control Your Finances <br />
            Anywhere
          </h1>
          <p className="w-[100%] md:w-[80%] text-center">
            Save Manage and Track your Money. Open a Full Bank Account from Your
            Mobile For Free
          </p>
        </div>
        <form className="bg-white p-2 md:p-6 mt-10 md:mt-4 rounded-lg w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Bank Name
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
              htmlFor="Loan Amount"
              className="block text-sm font-medium text-gray-700"
            >
              Loan Amount
            </label>
            <input
              type="text"
              id="loanAmount"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
              placeholder="Enter the Loan Amount"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="Tenure"
              className="block text-sm font-medium text-gray-700"
            >
              Tenure
            </label>
            <select
              id="product"
              className="mt-1 block w-full  border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#043F2E] focus:border-transparent"
            >
              <option>1 Year</option>
              <option>2 Years</option>
            </select>
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
    </>
  );
};

export default page;
