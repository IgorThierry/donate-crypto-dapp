import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
} from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
              <span className="text-white">D</span>
            </div>
            DonateCrypto
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Recursos
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              Como Funciona
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-primary"
            >
              Benefícios
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm">Launch Dapp</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Doações com Blockchain para um Mundo Melhor
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Crie ou apoie campanhas de doação com a segurança e
                    transparência da tecnologia blockchain. Apenas 2% de taxa
                    sobre o valor arrecadado.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                  >
                    Criar Campanha <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Explorar Campanhas
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>100% Seguro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Transparente</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span>Apenas 2% de taxa</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="DonateCrypto Platform"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-16 md:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Tudo que você precisa para suas campanhas de doação
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Nossa plataforma oferece todas as ferramentas necessárias para
                  criar, gerenciar e receber doações com a segurança da
                  tecnologia blockchain.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Segurança Blockchain</h3>
                <p className="text-center text-muted-foreground">
                  Todas as transações são registradas na blockchain, garantindo
                  segurança e transparência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Criação Rápida</h3>
                <p className="text-center text-muted-foreground">
                  Crie sua campanha em minutos e comece a receber doações
                  imediatamente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Alcance Global</h3>
                <p className="text-center text-muted-foreground">
                  Receba doações de qualquer lugar do mundo sem restrições
                  geográficas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Taxa Mínima</h3>
                <p className="text-center text-muted-foreground">
                  Apenas 2% de taxa sobre o valor arrecadado, uma das menores do
                  mercado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Pagamentos Seguros</h3>
                <p className="text-center text-muted-foreground">
                  Múltiplas criptomoedas aceitas com transações verificáveis e
                  seguras.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-emerald-600"
                  >
                    <path d="M2 12h5" />
                    <path d="M17 12h5" />
                    <path d="M12 2v5" />
                    <path d="M12 17v5" />
                    <path d="M4.93 4.93l3.54 3.54" />
                    <path d="M15.54 15.54l3.54 3.54" />
                    <path d="M4.93 19.07l3.54-3.54" />
                    <path d="M15.54 8.46l3.54-3.54" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Painel Completo</h3>
                <p className="text-center text-muted-foreground">
                  Acompanhe doações, estatísticas e gerencie suas campanhas em
                  um único lugar.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 md:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Como Funciona
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simples, transparente e seguro
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Nosso processo é desenhado para ser fácil tanto para quem doa
                  quanto para quem cria campanhas.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
                  Passo 1
                </div>
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Crie sua campanha</h3>
                <p className="text-center text-muted-foreground">
                  Registre-se, preencha os detalhes da sua campanha, defina uma
                  meta e adicione sua carteira.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
                  Passo 2
                </div>
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Compartilhe</h3>
                <p className="text-center text-muted-foreground">
                  Divulgue sua campanha nas redes sociais e para sua comunidade
                  usando nossas ferramentas.
                </p>
              </div>
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
                  Passo 3
                </div>
                <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Receba doações</h3>
                <p className="text-center text-muted-foreground">
                  As doações vão diretamente para sua carteira com apenas 2% de
                  taxa sobre o valor arrecadado.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                    A tecnologia blockchain traz inúmeras vantagens para o mundo
                    das doações, tornando todo o processo mais seguro,
                    transparente e eficiente.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-emerald-500" />
                    <div>
                      <h3 className="font-bold">Transparência Total</h3>
                      <p className="text-muted-foreground">
                        Todas as transações são registradas publicamente na
                        blockchain, permitindo que qualquer pessoa verifique o
                        fluxo de doações.
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
                        Com apenas 2% de taxa, oferecemos uma das menores taxas
                        do mercado, maximizando o valor que chega ao
                        beneficiário.
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
                    src="/placeholder.svg?height=450&width=450"
                    alt="Blockchain Benefits"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fee Section */}
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
                    We believe in transparency and fairness. Our fee structure
                    is straightforward with no hidden charges.
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
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    Start a Campaign
                  </Button>
                  <Button variant="outline">Compare to Other Platforms</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-lg border bg-background p-8 shadow-lg">
                  <div className="flex flex-col items-center space-y-6 text-center">
                    <h3 className="text-2xl font-bold">
                      Fee Calculation Example
                    </h3>
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
                      The 2% fee is only charged on the actual amount raised,
                      not on the campaign goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about DonateCrypto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">
                  What cryptocurrencies do you support?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We support major cryptocurrencies including Bitcoin, Ethereum,
                  and various stablecoins. We're constantly adding support for
                  more tokens.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">
                  How do I withdraw my campaign funds?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  You can withdraw funds directly to your connected wallet at
                  any time after your campaign is active. The 2% platform fee is
                  automatically deducted.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">
                  Is my personal information secure?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we use industry-standard encryption and security
                  practices to protect your personal information. We only
                  collect what's necessary to operate the platform.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">
                  Can I donate without cryptocurrency?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer fiat payment options through credit/debit cards.
                  We automatically convert these to crypto for the campaign.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">
                  How do I know campaigns are legitimate?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We verify campaign creators and provide transparency tools.
                  All transactions are recorded on the blockchain for complete
                  transparency.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
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

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join thousands of campaign creators and donors who are
                  changing the world through blockchain-powered donations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                >
                  Criar Campanha <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Explorar Campanhas
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:gap-12 mx-auto">
          <div className="flex flex-col gap-4 lg:w-1/3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <span className="text-white">D</span>
              </div>
              <span className="text-xl font-bold">DonateCrypto</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering change through blockchain technology. Create
              transparent donation campaigns and contribute to causes you care
              about.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 px-4 md:px-6 lg:flex-row mx-auto">
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              © {new Date().getFullYear()} DonateCrypto. All rights reserved.
            </p>
            <p className="text-center text-sm text-muted-foreground lg:text-left">
              Powered by blockchain technology for maximum transparency and
              security.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
