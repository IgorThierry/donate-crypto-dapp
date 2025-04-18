'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CheckCircle,
  CheckCircle2,
  DollarSign,
  Globe,
  Loader,
  Lock,
  Shield,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FacebookSvg } from '../svgs/facebook'
import { TwitterSvg } from '../svgs/twitter'
import { GithubSvg } from '../svgs/github'

export function LandingPage() {
  // State to track scroll position for performance optimizations
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef(null)

  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const targetId = event.currentTarget.getAttribute('href')?.slice(1)
    const targetElement = document.getElementById(targetId || '')

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Throttle scroll event for better performance
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header
        ref={headerRef}
        className={`sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
          scrollY > 50 ? 'bg-background/95' : 'bg-background/80'
        }`}
      >
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
              onClick={handleSmoothScroll}
            >
              Recursos
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              Como Funciona
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
            >
              Benefícios
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
              onClick={handleSmoothScroll}
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
                    src="/favicon.png"
                    alt="DonateCrypto Platform"
                    fill
                    className="object-contain"
                    priority
                    loading="eager"
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
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Segurança Blockchain</h3>
                <p className="text-center text-muted-foreground">
                  Todas as transações são registradas na blockchain, garantindo
                  segurança e transparência.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Criação Rápida</h3>
                <p className="text-center text-muted-foreground">
                  Crie sua campanha em minutos e comece a receber doações
                  imediatamente.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Alcance Global</h3>
                <p className="text-center text-muted-foreground">
                  Receba doações de qualquer lugar do mundo sem restrições
                  geográficas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <DollarSign className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Taxa Mínima</h3>
                <p className="text-center text-muted-foreground">
                  Apenas 2% de taxa sobre o valor arrecadado, uma das menores do
                  mercado.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Pagamentos Seguros</h3>
                <p className="text-center text-muted-foreground">
                  Múltiplas criptomoedas aceitas com transações verificáveis e
                  seguras.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Loader className="h-6 w-6 text-emerald-600" />
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
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
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
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
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
              <div className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm will-change-transform">
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
                  We support major cryptocurrencies including Bitcoin, Ethereum,
                  and various stablecoins. We're constantly adding support for
                  more tokens.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 will-change-transform">
                <h3 className="text-lg font-bold">
                  How do I withdraw my campaign funds?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  You can withdraw funds directly to your connected wallet at
                  any time after your campaign is active. The 2% platform fee is
                  automatically deducted.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 will-change-transform">
                <h3 className="text-lg font-bold">
                  Is my personal information secure?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we use industry-standard encryption and security
                  practices to protect your personal information. We only
                  collect what's necessary to operate the platform.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 will-change-transform">
                <h3 className="text-lg font-bold">
                  Can I donate without cryptocurrency?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Yes, we offer fiat payment options through credit/debit cards.
                  We automatically convert these to crypto for the campaign.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 will-change-transform">
                <h3 className="text-lg font-bold">
                  How do I know campaigns are legitimate?
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We verify campaign creators and provide transparency tools.
                  All transactions are recorded on the blockchain for complete
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
                <FacebookSvg />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <TwitterSvg />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <GithubSvg />
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
              © 2025 DonateCrypto. All rights reserved.
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
