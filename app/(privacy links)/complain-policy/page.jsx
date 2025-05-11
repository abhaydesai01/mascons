import React from "react";

const page = () => {
  return (
    <div className="mx-2 lg:mx-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Complaints Handling Policy
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Objective</h2>
        <p className="text-gray-600 mt-1">
          Ensure effective resolution of customer complaints, fostering trust
          and service improvement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Scope</h2>
        <p className="text-gray-600 mt-1">
          Applies to all complaints about fintech services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Complaints Management Structure
        </h2>
        <p className="text-gray-600 mt-1">
          The Chief Operating Officer (COO) oversees complaints at:{" "}
          <a href="mailto:compliance@Mascons.in" className="text-blue-600">
            compliance@Mascons.in
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Key Principles</h2>
        <ul className="list-disc list-inside text-gray-600 mt-1">
          <li>
            <span className="font-medium">Accessibility:</span> Clear and
            easy-to-use complaints process.
          </li>
          <li>
            <span className="font-medium">Responsiveness:</span> Acknowledge
            complaints within 24 hours, resolve within 14 working days.
          </li>
          <li>
            <span className="font-medium">Fairness:</span> Impartial treatment
            of all complaints.
          </li>
          <li>
            <span className="font-medium">Confidentiality:</span> Protect
            personal information as per privacy laws.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Complaint Process
        </h2>
        <p className="text-gray-600 mt-1">
          Complaints can be submitted via email, phone, or letter.
        </p>
      </section>
    </div>
  );
};

export default page;
