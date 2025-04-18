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
                Benefícios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Por que escolher a tecnologia blockchain?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                A tecnologia blockchain traz inúmeras vantagens para o mundo das
                doações, tornando todo o processo mais seguro, transparente e
                eficiente.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Transparência Total</h3>
                  <p className="text-muted-foreground">
                    Todas as transações são registradas publicamente na
                    blockchain, permitindo que qualquer pessoa verifique o fluxo
                    de doações.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Segurança Avançada</h3>
                  <p className="text-muted-foreground">
                    A tecnologia blockchain é praticamente inviolável,
                    garantindo que as doações cheguem ao destino correto sem
                    intermediários.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Taxas Reduzidas</h3>
                  <p className="text-muted-foreground">
                    Com apenas 2% de taxa, oferecemos uma das menores taxas do
                    mercado, maximizando o valor que chega ao beneficiário.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                <div>
                  <h3 className="font-bold">Alcance Global</h3>
                  <p className="text-muted-foreground">
                    Receba doações de qualquer lugar do mundo sem restrições
                    geográficas ou burocracias bancárias.
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
