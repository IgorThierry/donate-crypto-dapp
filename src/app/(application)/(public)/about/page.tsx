import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { questions } from '@/data/faq'

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Donate Crypto
        </h1>

        <section className="mb-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Donate Crypto is a decentralized donation platform built on
            blockchain technology that enables transparent, secure, and direct
            charitable giving using cryptocurrencies.
          </p>
          <p className="text-lg mb-4">
            Our mission is to leverage the power of blockchain to create a more
            efficient and transparent charitable giving ecosystem, where donors
            can track exactly how their contributions are being used and
            recipients can receive funds without intermediaries.
          </p>
          <p className="text-lg">
            By eliminating traditional barriers and reducing overhead costs
            associated with conventional donation platforms, we ensure that more
            of your contribution goes directly to the causes you care about.
          </p>
        </section>

        <section className="mb-12 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Connect Wallet</h3>
              <p>Authenticate securely using your cryptocurrency wallet</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Create or Choose</h3>
              <p>Start your own campaign or donate to existing ones</p>
            </div>
            <div className="p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Track Impact</h3>
              <p>Monitor contributions and see your impact in real-time</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {questions.map(({ question, answer }, index) => (
              <AccordionItem value={`item-${index + 1}`} key={index}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  )
}
