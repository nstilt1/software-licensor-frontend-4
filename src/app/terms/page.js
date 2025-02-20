export default function TermsPage() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500">Effective Date: 19 February 2025</p>
        </header>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-base">
            By accessing or using Software Licensor provided by Hyperformance Solutions LLC (doing business as Altered Brain Chemistry), you agree to be bound by these Terms of Service.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Service Description</h2>
          <p className="text-base">
            Software Licensor is a software licensing service that allows users to sign into a dashboard using Google OAuth. The service provides functionalities essential for managing software licenses.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Account Registration and Security</h2>
          <p className="text-base">
            When you register for an account, you agree to provide accurate information and to maintain the security of your credentials. You are responsible for any activity that occurs under your account.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">License Activation and Data Collection</h2>
          <p className="text-base">
            By activating a license, you may opt to share anonymized hardware information as detailed in our Privacy Policy. Please review our Privacy Policy for more details on the data we collect and how it is processed.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Developer Guidelines</h2>
          <p className="text-base mb-4">
            Developers using Software Licensor must adhere to the following rules:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <span className="font-semibold">No stress testing:</span> Do not perform stress testing on Software Licensor.
            </li>
            <li>
              <span className="font-semibold">No brute forcing:</span> Do not use brute force methods on Software Licensor.
            </li>
            <li>
              <span className="font-semibold">No API abuse:</span> Do not abuse Software Licensor's API in any way.
            </li>
            <li>
              <span className="font-semibold">No supplying fake hardware information:</span> Do not supply fake hardware information in the license activation API request. If you need to test the API and do not wish to supply genuine hardware information, set the <code>hardware_stats</code> field to <code>None</code>.
            </li>
          </ul>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Modifications to the Service</h2>
          <p className="text-base">
            We reserve the right to modify or discontinue the service at any time without notice.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
          <p className="text-base">
            In no event shall Hyperformance Solutions LLC be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
          <p className="text-base">
            These Terms shall be governed by and construed in accordance with the laws of the relevant jurisdiction.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-base">
            We may update these Terms from time to time. The most current version will always be posted on this page.
          </p>
        </section>
  
        <footer className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p className="text-base">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:privacy@alteredbrainchemistry.com" className="text-blue-600 hover:underline">
              privacy@alteredbrainchemistry.com
            </a>.
          </p>
        </footer>
      </div>
    );
  }
  