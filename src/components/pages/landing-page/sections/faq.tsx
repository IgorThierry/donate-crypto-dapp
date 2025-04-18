export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/20 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about DonateCrypto.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              What cryptocurrencies do you support?
            </h3>
            <p className="mt-2 text-muted-foreground">
              We support major cryptocurrencies including Bitcoin, Ethereum, and
              various stablecoins. We're constantly adding support for more
              tokens.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              How do I withdraw my campaign funds?
            </h3>
            <p className="mt-2 text-muted-foreground">
              You can withdraw funds directly to your connected wallet at any
              time after your campaign is active. The 2% platform fee is
              automatically deducted.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              Is my personal information secure?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Yes, we use industry-standard encryption and security practices to
              protect your personal information. We only collect what's
              necessary to operate the platform.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              Can I donate without cryptocurrency?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Yes, we offer fiat payment options through credit/debit cards. We
              automatically convert these to crypto for the campaign.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              How do I know campaigns are legitimate?
            </h3>
            <p className="mt-2 text-muted-foreground">
              We verify campaign creators and provide transparency tools. All
              transactions are recorded on the blockchain for complete
              transparency.
            </p>
          </div>
          <div className="rounded-lg border bg-background p-6 will-change-transform">
            <h3 className="text-lg font-bold">
              What happens if a campaign doesn't reach its goal?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Campaign creators can choose between all-or-nothing funding or
              keep-what-you-raise models when setting up their campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
