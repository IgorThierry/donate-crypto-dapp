import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What cryptocurrencies do you support?
              </AccordionTrigger>
              <AccordionContent>
                Currently, we support Ethereum (ETH) and ERC-20 tokens. We plan
                to expand to other blockchain networks in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How do I create a campaign?</AccordionTrigger>
              <AccordionContent>
                To create a campaign, connect your wallet, navigate to the
                dashboard, and click on &quot;Create Campaign.&quot; Fill in the required
                details such as title, description, and funding goal, then
                submit your campaign for review.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Are there any fees for using the platform?
              </AccordionTrigger>
              <AccordionContent>
                We charge a minimal 2% fee on donations to maintain the platform
                and cover operational costs. This is significantly lower than
                traditional donation platforms. You&apos;ll also need to pay network
                gas fees for transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How secure is the platform?</AccordionTrigger>
              <AccordionContent>
                Our platform is built on blockchain technology, which provides
                inherent security through its decentralized nature. Smart
                contracts are audited by third-party security firms, and we
                never have access to your private keys.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I donate anonymously?</AccordionTrigger>
              <AccordionContent>
                Yes, blockchain transactions provide a level of pseudonymity.
                While transactions are recorded on the public ledger, they are
                not directly linked to your personal identity unless you choose
                to reveal it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                How can I withdraw funds from my campaign?
              </AccordionTrigger>
              <AccordionContent>
                Campaign creators can withdraw funds directly to their wallet by
                using the withdrawal function on the campaign dashboard.
                Withdrawals are processed immediately and are subject to
                blockchain confirmation times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}
