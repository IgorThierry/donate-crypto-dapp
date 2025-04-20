import { DollarSign, Globe, Loader, Lock, Shield, Zap } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/50 py-16 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything You Need for Your Donation Campaigns
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our platform provides all the tools needed to create, manage, and
              receive donations with the security of blockchain technology.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Blockchain Security</h3>
            <p className="text-center text-muted-foreground">
              All transactions are recorded on the blockchain, ensuring security
              and transparency.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <Zap className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Quick Setup</h3>
            <p className="text-center text-muted-foreground">
              Create your campaign in minutes and start receiving donations
              immediately.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <Globe className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Global Reach</h3>
            <p className="text-center text-muted-foreground">
              Receive donations from anywhere in the world without geographical
              restrictions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <DollarSign className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Low Fee</h3>
            <p className="text-center text-muted-foreground">
              Only a 2% fee on the amount raised, one of the lowest in the
              market.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <Lock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="text-center text-muted-foreground">
              Multiple cryptocurrencies accepted with verifiable and secure
              transactions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="rounded-full bg-emerald-100 p-3">
              <Loader className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold">Comprehensive Dashboard</h3>
            <p className="text-center text-muted-foreground">
              Track donations, statistics, and manage your campaigns all in one
              place.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
