import { Check, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Roteiro() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Voltar
        </button>
      </div>
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-white">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Roteiro de Viagem
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Veja abaixo o que está incluso no roteiro e como a viagem é planejada para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Check className="w-8 h-8 text-green-600" strokeWidth={3} />
                <h2 className="text-2xl font-semibold text-green-700 font-display">
                  INCLUIDO
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Ingressos dos atrativos</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Transporte</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Serviço pré-viagem</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Hospedagem</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Refeições: café da manhã, almoço e jantar</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Auxílio nas fotografias</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Imagens de drone</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-100 hover:shadow-md transition-all">
                  <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Seguro viagem</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <X className="w-8 h-8 text-red-600" strokeWidth={3} />
                <h2 className="text-2xl font-semibold text-red-700 font-display">
                  NÃO INCLUÍDO
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-100 hover:shadow-md transition-all">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Passagens aéreas</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-100 hover:shadow-md transition-all">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Despesas pessoais</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-100 hover:shadow-md transition-all">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Bebidas alcoólicas</p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-100 hover:shadow-md transition-all">
                  <X className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" strokeWidth={3} />
                  <p className="text-foreground font-medium font-display">Hospedagem pré e pós-retiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
