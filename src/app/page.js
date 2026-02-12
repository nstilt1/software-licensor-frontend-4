import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* HERO */}
      <section className="w-full py-24 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Free & Open Source Software Licensing Service
          </h1>
          <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
            A fully open, serverless licensing backend powered by AWS Lambda, API Gateway, and DynamoDB —
            secured with a custom cryptographic protocol built on standard primitives.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <a href="https://github.com/nstilt1" target="_blank">View on GitHub</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#features">Explore Features</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section id="features" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            What can Software Licensor do?
          </h2>

          <p className="text-center text-lg text-muted-foreground mb-12">
            Software Licensor supports Trial Licenses and Perpetual Licenses for any software product.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Sell Unlimited Licenses</CardTitle>
              </CardHeader>
              <CardContent>
                There is no limit to how many licenses you can issue or validate.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unlimited Products</CardTitle>
              </CardHeader>
              <CardContent>
                Create as many product IDs as you need — no restrictions.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>WooCommerce Integration</CardTitle>
              </CardHeader>
              <CardContent>
                A WordPress plugin connects WooCommerce directly to the licensing API.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Client‑Side Language Support</CardTitle>
              </CardHeader>
              <CardContent>
                Includes a Rust static library usable from many languages, plus a C++ JUCE library.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sell Bundles</CardTitle>
              </CardHeader>
              <CardContent>
                Create bundle product IDs that unlock multiple products at once.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            What can’t Software Licensor do?
          </h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Multiple stores selling the same product</AccordionTrigger>
              <AccordionContent>
                Multiple stores cannot sell licenses for the same product unless the client-side code
                is modified to support multiple Store IDs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Offline license activations</AccordionTrigger>
              <AccordionContent>
                Offline activations exist in the backend but require UI work in the WordPress plugin
                and additional client-side components (especially for C++).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Subscription licenses</AccordionTrigger>
              <AccordionContent>
                Subscription support exists in the backend but needs implementation in the WordPress plugin.
                WooCommerce Subscriptions also requires a paid subscription.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>More info on offline activation</AccordionTrigger>
              <AccordionContent>
                Details are available here:{" "}
                <a
                  href="https://github.com/nstilt1/software-licensor-rust/issues/43"
                  className="underline"
                  target="_blank"
                >
                  GitHub Issue #43
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* OPEN SOURCE + ARCHITECTURE */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            100% Open Source & Serverless
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every part of Software Licensor is open source and available on GitHub.  
            The backend is fully serverless, using AWS Lambda, API Gateway, and DynamoDB for
            scalability and reliability without operational overhead.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}