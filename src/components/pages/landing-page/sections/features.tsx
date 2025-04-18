import { DollarSign, Globe, Loader, Lock, Shield, Zap } from 'lucide-react'

export function FeaturesSection() {
  return (
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
              criar, gerenciar e receber doações com a segurança da tecnologia
              blockchain.
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
              Acompanhe doações, estatísticas e gerencie suas campanhas em um
              único lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
