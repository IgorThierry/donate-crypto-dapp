import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-20"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                Benefits
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Why Choose Blockchain Technology?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Blockchain technology brings numerous advantages to the world of
                donations, making the whole process more secure, transparent,
                and efficient.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Total Transparency</h3>
                  <p className="text-muted-foreground">
                    All transactions are publicly recorded on the blockchain,
                    allowing anyone to verify the flow of donations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Advanced Security</h3>
                  <p className="text-muted-foreground">
                    Blockchain technology is nearly impervious, ensuring that
                    donations reach the correct destination without
                    intermediaries.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Reduced Fees</h3>
                  <p className="text-muted-foreground">
                    With only a 2% fee, we offer one of the lowest rates in the
                    market, maximizing the value that reaches the beneficiary.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Global Reach</h3>
                  <p className="text-muted-foreground">
                    Receive donations from anywhere in the world without
                    geographic restrictions or banking bureaucracies.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
              <Image
                src="/logo-transparent.png"
                alt="Blockchain Benefits"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
