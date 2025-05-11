// components/AcceptableUsePolicy.js
import React from "react";

const page = () => {
  return (
    <div className="mx-2 lg:mx-6 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Acceptable Use Policy
      </h1>
      <p className="text-gray-600 mb-4">
        This acceptable use policy covers the products, services, and
        technologies (collectively referred to as the "Products") provided by
        Mascons under any ongoing agreement. It’s designed to protect us, our
        customers, and the general Internet community from unethical,
        irresponsible, and illegal activity.
      </p>

      <p className="text-gray-600 mb-4">
        Mascons customers found engaging in activities prohibited by this
        acceptable use policy can be liable for service suspension and account
        termination. In extreme cases, we may be legally obliged to report such
        customers to the relevant authorities.
      </p>

      <p className="text-gray-600 mb-4">
        This policy was last reviewed on June 24, 2024.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">Fair Use</h2>
        <p className="text-gray-600 mt-1">
          We provide our facilities with the assumption that your use will be
          "business as usual," as per our offer schedule. If your use is
          considered excessive, additional fees may be charged or capacity may
          be restricted.
        </p>
        <p className="text-gray-600 mt-2">
          We oppose all forms of abuse, discrimination, rights infringement, and
          any action that harms or disadvantages any group, individual, or
          resource. We expect our customers and, where applicable, their users
          ("end-users") to engage with our Products in a similar manner.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Customer Accountability
        </h2>
        <p className="text-gray-600 mt-1">
          Customers are responsible for their own actions and those of anyone
          using our Products with their permission. This responsibility applies
          to unauthorized users resulting from the customer’s failure to
          implement reasonable security measures.
        </p>
        <p className="text-gray-600 mt-2">
          Complaints regarding the actions of customers or their end-users will
          be forwarded to the nominated contact for the account in question. We
          reserve the right to terminate services or take appropriate action in
          cases of policy violations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Prohibited Activity
        </h2>
        <p className="text-gray-600 mt-1">
          Our Products must not be used to transmit, distribute, or store
          material in violation of any applicable law, including but not limited
          to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            Copyright infringement, trademark violation, or use of intellectual
            property without proper authorization.
          </li>
          <li>
            Any material that is obscene, defamatory, or constitutes an illegal
            threat.
          </li>
          <li>Material violating export control laws.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          SPAM and Unauthorized Messaging
        </h2>
        <p className="text-gray-600 mt-1">
          Our Products must not be used for sending unsolicited bulk or
          commercial messages in violation of laws. This includes subscribing
          email addresses or phone numbers to messaging lists without the
          owner’s permission, or sending unconfirmed messaging lists.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Unethical and Malicious Activity
        </h2>
        <p className="text-gray-600 mt-1">
          Our Products must not be used for advertising or transmitting software
          designed to violate this policy, or engaging in network attacks (e.g.,
          denial-of-service, mail-bombing, hacking, etc.). Activities such as
          the introduction of malicious code or harassment are also prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          Unauthorized Use of Mascons Property
        </h2>
        <p className="text-gray-600 mt-1">
          We prohibit impersonation, representation of a significant business
          relationship with Mascons, or fraudulent use of our Products to gain
          service, custom, or user trust.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          About This Policy
        </h2>
        <p className="text-gray-600 mt-1">
          This policy provides a non-exclusive list of prohibited activities. We
          reserve the right to modify this policy at any time by publishing a
          revised version on our website. The revised version will be effective
          on the earlier of
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>
            The date the customer uses our Products after the revised version is
            published.
          </li>
          <li>30 days after the revised version is published.</li>
        </ul>
      </section>
    </div>
  );
};

export default page;
