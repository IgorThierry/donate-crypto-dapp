import { questions } from '@/data/faq'

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
          {questions.map(({ question, answer }, index) => (
            <div
              key={index}
              className="rounded-lg border bg-background p-6 will-change-transform"
            >
              <h3 className="text-lg font-bold">{question}</h3>
              <p className="mt-2 text-muted-foreground text-justify">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
