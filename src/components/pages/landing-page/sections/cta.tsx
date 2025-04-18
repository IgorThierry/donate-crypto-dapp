import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Make a Difference?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Join thousands of campaign creators and donors who are changing
              the world through blockchain-powered donations.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="/dashbaord">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
              >
                Criar Campanha <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashbaord">
              <Button size="lg" variant="outline">
                Explorar Campanhas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
