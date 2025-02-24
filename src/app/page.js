import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section id="section-2-11" class=" ct-section">
            <div class="ct-section-inner-wrap">
                <h1 id="headline-3-11" class="ct-headline">Looking for an open source licensing service?</h1>
                <div id="_rich_text-11-11" class="oxy-rich-text">
                    <p>
                        We have you covered. All of the source code for Software Licensor is available on <a href="https://github.com/nstilt1" target="_blank" rel="noopener">GitHub</a>
                        . The service is hosted serverlessly with AWS API Gateway, Lambda, and DynamoDB. The backend uses a custom cryptographic protocol with standard cryptographic primitives.
                    </p>
                </div>
                <div id="div_block-19-11" class="ct-div-block">
                    <h1 id="headline-20-11" class="ct-headline">What can be done with Software Licensor?</h1>
                    <div id="text_block-56-11" class="ct-text-block">Software Licensor is capable of providing Trial Licenses and Perpetual Licenses for software.</div>
                    <div id="new_columns-23-11" class="ct-new-columns">
                        <div id="div_block-24-11" class="ct-div-block">
                            <div id="div_block-30-11" class="ct-div-block">
                                <h3 id="headline-31-11" class="ct-headline">Sell unlimited licenses</h3>
                                <div id="text_block-33-11" class="ct-text-block">There is no limit for how many licenses you can sell</div>
                            </div>
                            <div id="div_block-41-11" class="ct-div-block">
                                <h3 id="headline-42-11" class="ct-headline">Compatible with WordPress</h3>
                                <div id="text_block-43-11" class="ct-text-block">We have a WooCommerce plugin that interfaces with our API</div>
                            </div>
                            <div id="div_block-57-11" class="ct-div-block">
                                <h3 id="headline-58-11" class="ct-headline">Sell bundles</h3>
                                <div id="text_block-59-11" class="ct-text-block">You can create extra product IDs that can be used to unlock different sets of products</div>
                            </div>
                        </div>
                        <div id="div_block-25-11" class="ct-div-block">
                            <div id="div_block-35-11" class="ct-div-block">
                                <h3 id="headline-36-11" class="ct-headline">Have unlimited products</h3>
                                <div id="text_block-37-11" class="ct-text-block">There is no limit on how many products you can have</div>
                            </div>
                            <div id="div_block-46-11" class="ct-div-block">
                                <h3 id="headline-47-11" class="ct-headline">Client-side language compatibility</h3>
                                <div id="text_block-48-11" class="ct-text-block">We have a Rust static library that can be called from many languages, and a C++ JUCE library</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_block-16-11" class="ct-div-block">
                    <h1 id="headline-13-11" class="ct-headline">What can&apos;t be done with Software Licensor?</h1>
                    <div id="_rich_text-18-11" class="oxy-rich-text">
                        <p>Multiple stores cannot sell licenses for the same product, although the client-side code could be adjusted to use multiple Store IDs.</p>
                        <p>Offline license activations and subscription licenses are not currently implemented. Not to worry, offline license activation and subscriptions are already implemented in the API&apos;s backend, but they would need to be implemented in the WordPress Plugin and in the client-side code (except for subscriptions; subscriptions only need to be implemented in the WordPress Plugin).</p>
                        <p>
                            Subscriptions aren&apos;t fully implemented because WooCommerce Subscriptions requires a subscription. Offline license activations aren&apos;t implemented because they require a new form to show up on your website, and a new component in the C++ code. More information about offline license activations can be found <a href="https://github.com/nstilt1/software-licensor-rust/issues/43">here</a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
  );
}
