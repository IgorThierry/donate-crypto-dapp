export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple, Transparent, and Secure
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our process is designed to be easy for both donors and campaign
              creators.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
              Step 1
            </div>
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-emerald-600">1</span>
            </div>
            <h3 className="text-xl font-bold">Create Your Campaign</h3>
            <p className="text-center text-muted-foreground">
              Sign up, fill in your campaign details, set a goal, and add your
              wallet.
            </p>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
              Step 2
            </div>
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-emerald-600">2</span>
            </div>
            <h3 className="text-xl font-bold">Share</h3>
            <p className="text-center text-muted-foreground">
              Promote your campaign on social media and within your community
              using our tools.
            </p>
          </div>
          <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
              Step 3
            </div>
            <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-emerald-600">3</span>
            </div>
            <h3 className="text-xl font-bold">Receive Donations</h3>
            <p className="text-center text-muted-foreground">
              Donations go directly to your wallet with only a 2% fee on the
              amount raised.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
