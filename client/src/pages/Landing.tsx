import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(121,125,66,0.12),transparent_35%),url('/Galeria/img14.jpeg')] bg-cover bg-center text-foreground flex items-center justify-center">
      <div className="container px-6 py-20">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-border bg-background/85 p-10 shadow-2xl shadow-slate-900/10 backdrop-blur-xl text-center">
          <img
            src="/Galeria/logo.raiz.png"
            alt="Raiz Viva Expedições"
            className="mx-auto mb-8 h-28 w-auto"
          />
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Raiz Viva Expedições
          </h1>
          <p className="text-lg leading-relaxed text-foreground/70 mb-8">
            Conecte-se com a natureza em uma experiência de aventura, conforto e cultura local.
          </p>
          <Link href="/home">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Entrar no site
            </Button>
          </Link>
          <p className="mt-6 text-sm text-foreground/60">
            Faça sua jornada começar pelo coração do cerrado.
          </p>
        </div>
      </div>
    </div>
  );
}
