export default function PrivacyPage() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Effective Date: 19 February 2025</p>
        </header>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-base mb-4">
            This Privacy Policy explains how Hyperformance Solutions LLC, doing business as Altered Brain Chemistry, collects, uses, and protects your data in connection with its service, Software Licensor. We strive to comply with the GDPR and protect your personal information.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p className="text-base mb-4">
            If you have any questions or concerns regarding this Privacy Policy, please contact us at{" "}
            <a
              href="mailto:privacy@alteredbrainchemistry.com"
              className="text-blue-600 hover:underline"
            >
              privacy@alteredbrainchemistry.com
            </a>.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
          <p className="text-base mb-4">We collect data through the following channels:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">Google OAuth:</span> Users sign into the Software Licensor dashboard via Google OAuth. Google may share data such as your email address. We use this data solely for authentication purposes.
            </li>
            <li>
              <span className="font-semibold">Company Sign-Ups:</span> Companies signing up for Software Licensor may opt in to provide customer names and email addresses for access during their software&apos;s runtime. This data is encrypted both in transit and at rest.
            </li>
            <li>
              <span className="font-semibold">License Activation:</span> When activating a license, users can opt to share anonymized hardware information—including OS name, CPU details (and its instruction sets), display language, RAM, and potentially the device&apos;s MAC address—as well as their computer name. The computer name is stored separately. Both sets of data are encrypted.
            </li>
            <li>
              <span className="font-semibold">Store Owner Sign-Up:</span> During sign-up, we may collect a phone number and email address for MFA/OTP purposes. This information is not shared with third parties.
            </li>
            <li>
              <span className="font-semibold">Developer Support:</span> Developers supporting Software Licensor via Buy Me A Coffee may share data with that service to facilitate the transaction.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Data Usage and Legal Bases for Processing</h2>
          <p className="text-base mb-4">
            We process your data on the following bases:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              <span className="font-semibold">Consent:</span> For optional data sharing (for example, anonymized hardware information during license activation), processing is based on user consent.
            </li>
            <li>
              <span className="font-semibold">Contractual Necessity:</span> Data required for account creation, authentication, and providing the licensing service is processed as necessary to fulfill our contractual obligations.
            </li>
          </ul>
          <p className="text-base mb-4">
            <span className="font-semibold">Access &amp; Deletion:</span> Users can review the hardware information collected from their device by accessing the following file:
          </p>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li>
              Windows: <code className="bg-gray-100 p-1 rounded">C:\ProgramData\HyperformanceSolutions\hwinfo.bin</code>
            </li>
            <li>
              macOS: <code className="bg-gray-100 p-1 rounded">~/Library/Application Support/com.Hyperformance-Solutions.Software-Licensor/hwinfo.bin</code>
            </li>
          </ul>
          <p className="text-base">
            To remove your data from our servers, simply delete the corresponding file and trigger a license activation API request by opening any software that uses Software Licensor. You may need to wait a few days before you can trigger the API request.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Data Retention</h2>
          <p className="text-base">
            We retain your data indefinitely because maintaining this information is necessary for the ongoing operation of our licensing service.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p className="text-base mb-4">
            We secure your data by using industry-standard methods. Data is transmitted over HTTPS and is encrypted using robust encryption techniques. While we keep the specifics of our cryptographic measures general, please be assured that strong safeguards are in place.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Cookies and Local Storage</h2>
          <p className="text-base">
            The Software Licensor website does not use cookies. It uses Local Storage only for caching results for functional purposes, and it is not used for tracking.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Third-Party Data Sharing</h2>
          <p className="text-base mb-4">We share data only in the following scenarios:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">Google OAuth:</span> Your email address may be shared by Google when signing up with Google OAuth. We may also store a custom attribute to keep track of all of the API keys you create.
            </li>
            <li>
              <span className="font-semibold">Buy Me A Coffee:</span> If you support Software Licensor via Buy Me A Coffee, your data may be shared with that service as required.
            </li>
            <li>
                <span className="font-semibold">Hardware statistics:</span> Your anonymized hardware statistics may be shared for R&D purposes.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Your Rights Under GDPR</h2>
          <p className="text-base">
            Under the GDPR, you have the right to access, correct, or request deletion of your personal data. For hardware data stored locally, please refer to the access and deletion instructions provided above.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Updates to This Policy</h2>
          <p className="text-base">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated effective date.
          </p>
        </section>
  
        <footer className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-base">
            For any questions or concerns about this Privacy Policy or our data practices, please contact us at{" "}
            <a
              href="mailto:privacy@alteredbrainchemistry.com"
              className="text-blue-600 hover:underline"
            >
              privacy@alteredbrainchemistry.com
            </a>.
          </p>
        </footer>
      </div>
    );
  }
  