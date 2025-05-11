// components/TermsAndConditions.js
export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="text-lg mb-4">
        Terms and Conditions for the Mascons Global Account (the “Agreement”)
      </p>
      <p className="text-sm text-gray-600 mb-6">Updated July 2022</p>

      <p className="mb-4">
        The Global Account is offered by Mascons or any of its corporate
        affiliates worldwide. The Global Account (“Global Account”) is a
        business account that enables you to receive funds from selected
        companies and commercial enterprises and to make outward payments to
        approved recipients. Your use of the Global Account is governed by the
        following Terms and Conditions and the Global Account Terms of Use,
        along with all policies and disclaimers provided herein (collectively,
        the “Terms”). “You” and “your” mean the person, persons, or entity
        receiving the account service as provided for in these Terms. In this
        agreement, “TFT”, “we”, “us,” or “our” refers to Mascons or any of its
        corporate affiliates. Mascons (company registration number 86736531) is
        a company incorporated in the Netherlands.
      </p>

      <p className="mb-4">
        Access to and use of the Global Account is deemed by your acceptance of
        the Terms. This Agreement will remain in force until terminated by you
        or by us. You may terminate this Agreement at any time without charge by
        notifying us in writing or by email.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>

      <p className="mb-4">
        The Global Account is available for use together with a unique
        identifying bank account number. These bank account numbers may be
        issued to you by Mascons in conjunction with TFT’s banking partners.
        Mascons will provide you with a user interface referred to as the
        Mascons Platform (“Mascons Platform”).
      </p>

      <p className="mb-4">
        Your Global Account must be in good standing for continued access. If
        your Global Account is closed due to suspicious activity or for any
        other reason, funds received through the Global Account may be rejected
        and the funds returned to the sending entity. Any applicable costs or
        expenses will be borne by you. Failure to withdraw the remaining funds
        within the provided timeline may result in an administration fee being
        charged to you by us.
      </p>

      <p className="mb-4">
        Mascons will be entitled to withhold funds transferred to Mascons if
        Mascons has reasonable suspicion of fraudulent or criminal activity or
        if Mascons reasonably considers that it is required to do so under any
        applicable law or regulation, or at the direction of any regulatory or
        other competent authority.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Communication</h2>

      <p className="mb-4">
        Where we need to contact you under this Agreement, we will do so by
        email, or telephone, using the details you most recently gave us. You
        must ensure that all information provided to us is accurate and
        up-to-date at all times. You must inform us of any changes by emailing
        us as soon as practicable, and in any event within 14 days of the
        change. If you do not, this may impact the services that we can offer
        you as you may miss notifications if we are sending messages to an old
        email address.
      </p>

      <p className="mb-4">
        Where notice in writing is required under this Agreement, it may be sent
        by email. Email is deemed to be received when it was sent provided no
        message of non-delivery was received by the sender.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Receiving Payments</h2>

      <p className="mb-4">
        The Global Account has restrictions in place regarding the types of
        payments permitted, be they sent via local payment channels (e.g., SEPA
        in the Eurozone) or via telegraphic transfer. We only accept
        cross-border TT payments into IBAN accounts. All other accounts issued
        globally must only be used to receive local incoming payments. In
        addition, eCommerce and B2B inward payments and currencies supported are
        restricted by place of account issuance. Please refer to the settings
        tab within your Global Account for specific details of these
        restrictions.
      </p>

      <p className="mb-4">
        Cash deposits and cheques are not supported under the Global Account.
        Upon Global Account approval, you will be required to request
        personalized bank account details.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Transfer of Funds</h2>

      <p className="mb-4">
        Funds cannot be withdrawn directly from these bank account numbers. All
        transfers of funds must take place from within your Global Account.
        Attempts to initiate a transfer of funds from the Global Account except
        via the Mascons Platform will be rejected. Any unauthorized direct
        withdrawal from an underlying account will result in a request for the
        immediate return of funds and may result in the termination of your
        Global Account and legal action if necessary.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        5. Keeping Your Global Account Safe
      </h2>

      <p className="mb-4">
        Mascons will never ask you to provide your password to us or to a third
        party. Please contact Client Support, TFT’s client support team (“Client
        Support”), if anyone asks for your password. Never disclose your Global
        Account password to any third party. Keep your password safe and change
        it regularly. Do not ever let anyone access your Global Account or watch
        you access it.
      </p>

      <p className="mb-4">
        We will only contact you using the email address that has been
        registered with us. You must make sure that your email account(s) are
        secure and is only accessed by you. Let Client Support know immediately
        if your email address becomes compromised. If you suspect your Global
        Account login details, password, or other security features are stolen,
        lost, used without authorization, or otherwise compromised, you are
        advised to change your password.
      </p>

      {/* Additional sections following similar structure... */}

      <footer className="mt-8">
        <p>
          Visit us at{" "}
          <a href="https://Mascons" className="text-blue-600 hover:underline">
            https://Mascons
          </a>{" "}
          for more details.
        </p>
      </footer>
    </div>
  );
}
