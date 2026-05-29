import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function SaberMais() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <Link href="/home" className="inline-flex items-center">
            <img src="/Galeria/logo.raiz.png" alt="Raiz Viva Expedições" className="h-12 w-auto" />
          </Link>
          <Link href="/home" className="inline-block">
            <Button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              <ArrowLeft className="w-4 h-4 inline-block mr-2" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="rounded-[2rem] border border-primary/10 bg-white/90 p-10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
           
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Quem Somos</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            A RAIZ VIVA EXPEDIÇÕES nasceu da conexão verdadeira com o Cerrado, suas águas cristalinas, paisagens vivas, cultura e tradições. Mais do que viagens, oferecemos roteiros autênticos que unem aventura, conforto e pertencimento.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed mt-6">
            Nossos roteiros são pensados para quem busca imersão na natureza, respeito às comunidades locais e experiências que transformam. A cada jornada, procuramos criar memórias duradouras com segurança, cuidado e muita emoção.
          </p>
        </div>
      </div>
    </div>
  );
}
