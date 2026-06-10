const effectiveDate = "10 June 2026";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective Date: {effectiveDate}</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-base mb-4">
          This Privacy Policy explains how Hyperformance Solutions LLC, doing
          business as Altered Brain Chemistry, collects, uses, stores, and
          protects data in connection with Software Licensor. Software Licensor is
          owned and operated by Hyperformance Solutions LLC and is used to issue,
          activate, validate, manage, support, and protect software licenses.
        </p>
        <p className="text-base mb-4">
          We strive to protect personal information and to comply with applicable
          privacy laws, including the GDPR where it applies.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-base mb-4">
          If you have any questions or concerns regarding this Privacy Policy,
          please contact us at{" "}
          <a
            href="mailto:privacy@alteredbrainchemistry.com"
            className="text-blue-600 hover:underline"
          >
            privacy@alteredbrainchemistry.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
        <p className="text-base mb-4">
          We collect data through the following channels:
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Google OAuth:</span> Users may sign
            into the Software Licensor dashboard via Google OAuth. Google may
            share data such as your name, email address, profile image, and a
            Google account identifier. We use this data for authentication,
            account creation, account security, and access to Software Licensor.
            Google&apos;s Privacy Policy is available at{" "}
            <a
              href="https://policies.google.com/privacy?hl=en-US"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Google Privacy Policy
            </a>
            .
          </li>

          <li>
            <span className="font-semibold">Company Sign-Ups:</span> Companies
            signing up for Software Licensor may provide company names, store or
            product information, account owner names, customer names, customer
            email addresses, product IDs, license types, and related licensing
            data needed to issue and validate licenses during software runtime.
            This data is encrypted in transit and at rest where appropriate.
          </li>

          <li>
            <span className="font-semibold">License Activation:</span> When a
            license is activated or validated, Software Licensor may collect
            hardware and device-related information, including OS name, CPU
            details and instruction sets, display language, RAM, device
            identifiers such as a MAC address when available or applicable, and
            the computer name. Computer names are collected during license
            activation and are stored separately from anonymized hardware
            statistics. Both hardware statistics and computer names are protected
            using encryption and access controls.
          </li>

          <li>
            <span className="font-semibold">Store Owner Sign-Up:</span> During
            sign-up, we may collect an email address and phone number for
            authentication, MFA, OTP, account security, and support purposes. This
            information is not sold to third parties.
          </li>

          <li>
            <span className="font-semibold">
              API Keys and Developer Credentials:
            </span>{" "}
            We may store account attributes and records related to API keys,
            product registrations, license endpoints, and developer access so that
            Software Licensor can authenticate requests and provide licensing
            services.
          </li>

          <li>
            <span className="font-semibold">Developer Support:</span> Developers
            supporting Software Licensor via Buy Me A Coffee or other support
            services may share data with those services to facilitate the
            transaction.
          </li>

          <li>
            <span className="font-semibold">Logs and Security Data:</span> We may
            collect IP addresses, request metadata, timestamps, user agents,
            authentication events, license activation attempts, error logs, and
            abuse-prevention signals to operate, debug, secure, and protect the
            service.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Data Usage and Legal Bases for Processing
        </h2>
        <p className="text-base mb-4">
          We process your data for the following purposes:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>Creating and securing Software Licensor accounts.</li>
          <li>Authenticating users and API requests.</li>
          <li>
            Issuing, activating, validating, renewing, managing, and supporting
            software licenses.
          </li>
          <li>
            Enforcing license limits and preventing abuse, fraud, unauthorized
            use, and excessive activations.
          </li>
          <li>
            Providing support, debugging errors, and improving compatibility and
            reliability.
          </li>
          <li>
            Maintaining tax, accounting, security, administrative, and compliance
            records when applicable.
          </li>
          <li>
            Conducting research and development using anonymized or aggregated
            hardware statistics.
          </li>
        </ul>

        <p className="text-base mb-4">
          Where applicable, we process data on the following legal bases:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>
            <span className="font-semibold">Contractual Necessity:</span> Data
            required for account creation, authentication, API operation, license
            issuance, license activation, license validation, and support is
            processed as necessary to provide Software Licensor.
          </li>

          <li>
            <span className="font-semibold">Consent:</span> Optional data sharing
            and optional communications may be processed based on consent where
            consent is requested.
          </li>

          <li>
            <span className="font-semibold">Legitimate Interests:</span> We may
            process data to secure the service, prevent fraud and abuse, enforce
            license limits, improve compatibility, debug issues, and protect users
            and our business.
          </li>

          <li>
            <span className="font-semibold">Legal Obligation:</span> We may retain
            or process data where required for tax, accounting, payment, legal,
            security, or compliance purposes.
          </li>
        </ul>

        <p className="text-base mb-4">
          <span className="font-semibold">Access &amp; Deletion:</span> Users can
          review the hardware information collected from their device by accessing
          the following file:
        </p>

        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li>
            Windows:{" "}
            <code className="bg-gray-100 p-1 rounded">
              {"C:\\ProgramData\\HyperformanceSolutions\\hwinfo.bin"}
            </code>
          </li>
          <li>
            macOS:{" "}
            <code className="bg-gray-100 p-1 rounded">
              {
                "~/Library/Application Support/com.Hyperformance-Solutions.Software-Licensor/hwinfo.bin"
              }
            </code>
          </li>
        </ul>

        <p className="text-base">
          To request removal of activation data from our servers, delete the
          corresponding local file and trigger a license activation API request by
          opening software that uses Software Licensor. You may need to wait a few
          days before another activation request can be triggered. Certain
          license, security, fraud-prevention, accounting, or legal records may
          need to be retained even after a deletion request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
        <p className="text-base mb-4">
          We retain data for as long as reasonably needed to provide Software
          Licensor, maintain license validation and recovery, enforce license
          limits, prevent fraud and abuse, provide support, comply with legal and
          accounting obligations, and protect the integrity of the service.
        </p>
        <p className="text-base">
          License records and related activation data may be retained
          indefinitely when continued retention is necessary for ongoing license
          validation, license recovery, update eligibility, abuse prevention, and
          support.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
        <p className="text-base mb-4">
          We secure data using reasonable administrative, technical, and
          organizational safeguards. Data is transmitted over HTTPS and is
          encrypted at rest where appropriate. Access is limited to systems and
          personnel that need the information to operate, support, secure, or
          maintain Software Licensor. No method of transmission or storage is
          perfectly secure, but we work to protect data against unauthorized
          access, disclosure, alteration, and destruction.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Cookies and Local Storage
        </h2>
        <p className="text-base">
          The Software Licensor website may use local storage, session storage,
          cookies, or similar technologies for authentication, account security,
          functional caching, dashboard state, API key management, and service
          operation. These technologies are not used to sell personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Third-Party Data Sharing
        </h2>
        <p className="text-base mb-4">
          We share data only as needed for the following purposes:
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <span className="font-semibold">Google OAuth:</span> Google may
            process information when you sign in using Google OAuth. Your use of
            Google sign-in is subject to Google&apos;s Privacy Policy.
          </li>

          <li>
            <span className="font-semibold">Store and Software Providers:</span>{" "}
            If a company uses Software Licensor to license its software, license
            records may be associated with that company&apos;s products, users,
            store records, and support workflows as needed to issue, validate,
            and support licenses.
          </li>

          <li>
            <span className="font-semibold">
              Buy Me A Coffee and Other Support Services:
            </span>{" "}
            If you support Software Licensor through a third-party service, your
            data may be shared with that service as required to complete the
            transaction.
          </li>

          <li>
            <span className="font-semibold">Hardware Statistics:</span>{" "}
            Anonymized or aggregated hardware statistics may be shared or used for
            research and development, compatibility planning, performance
            analysis, and product improvement.
          </li>

          <li>
            <span className="font-semibold">
              Infrastructure and Security Providers:
            </span>{" "}
            We may use hosting, database, storage, authentication, email,
            monitoring, analytics, and security providers to operate and protect
            Software Licensor.
          </li>

          <li>
            <span className="font-semibold">Legal and Safety:</span> We may share
            information when required by law or when necessary to protect rights,
            safety, security, users, or service integrity.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Your Rights Under GDPR and Other Laws
        </h2>
        <p className="text-base mb-4">
          Depending on where you live, you may have rights to access, correct,
          export, object to, restrict, or request deletion of personal data. You
          may contact us at{" "}
          <a
            href="mailto:privacy@alteredbrainchemistry.com"
            className="text-blue-600 hover:underline"
          >
            privacy@alteredbrainchemistry.com
          </a>{" "}
          to make a privacy request.
        </p>
        <p className="text-base">
          For hardware data stored locally, please refer to the access and
          deletion instructions provided above. Some data may be retained when
          necessary for license validation, fraud prevention, security, accounting,
          legal compliance, or legitimate business purposes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          Updates to This Policy
        </h2>
        <p className="text-base">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page along with an updated effective date.
        </p>
      </section>

      <footer className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-base">
          For any questions or concerns about this Privacy Policy or our data
          practices, please contact us at{" "}
          <a
            href="mailto:privacy@alteredbrainchemistry.com"
            className="text-blue-600 hover:underline"
          >
            privacy@alteredbrainchemistry.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
}