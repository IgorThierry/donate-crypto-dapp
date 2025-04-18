export function HowItWorksSection() {
  return (
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
              Registre-se, preencha os detalhes da sua campanha, defina uma meta
              e adicione sua carteira.
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
              As doações vão diretamente para sua carteira com apenas 2% de taxa
              sobre o valor arrecadado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
