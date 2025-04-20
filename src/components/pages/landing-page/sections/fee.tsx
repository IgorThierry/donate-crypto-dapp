import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function FeeSection() {
  return (
    <section id="fee" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/20 px-3 py-1 text-sm text-emerald-700 dark:text-emerald-300">
                Transparent Pricing
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple Fee Structure
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We believe in transparency and fairness. Our fee structure is
                straightforward with no hidden charges.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Only 2% fee on the total amount raised</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>No setup or monthly fees</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Minimal gas fees for blockchain transactions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <span>Fee only applies to successful campaigns</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button className="bg-emerald-500 hover:bg-emerald-600">
                  Start a Campaign
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg border bg-background p-8 shadow-lg">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h3 className="text-2xl font-bold">Fee Calculation Example</h3>
                <div className="space-y-4 w-full">
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Campaign Goal:</span>
                    <span>$10,000</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Amount Raised:</span>
                    <span>$10,000</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="font-medium">Platform Fee (2%):</span>
                    <span className="text-emerald-600">$200</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="font-bold">Amount Received:</span>
                    <span className="font-bold">$9,800</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  The 2% fee is only charged on the actual amount raised, not on
                  the campaign goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
