import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, MapPin, Users, Compass, Shield, Award, Droplets, Mountain, Zap, ArrowRight, Instagram, Phone, Mail, Check, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Raiz Viva Expedições - Página Inicial
 *
 * Design Philosophy: Modernismo Orgânico com Tipografia Assertiva
 * - Paleta personalizada: Verde oliva apagado (#797d42) e Off white (#F2EDE0)
 * - Tipografia em contraste: Art Nuvo (display) + Inter (body)
 * - Layout assimétrico com diagonal cuts para movimento visual
 * - Foco em Jalapão e Serras Gerais no Tocantins
 */

export default function Home() {
  const [activeDestination, setActiveDestination] = useState(0);

  const destinations = [
    
    { 
      id: 1,
      name: " JALAPÃO ",
      description: "Explore os famosos fervedouros do Jalapão. Banhos em água cristalina, trilhas em paisagens deslumbrantes, cachoeiras de tirar o folego e além de tudo cercados por dunas de areia dourada.",
      image: "./Galeria/img14.jpeg",
      difficulty: "Fácil/Moderado",
      duration: "3-7 dias",
     
    },

    {
      id: 2,
      name: "SERRAS GERAIS ",
      description: "Explore as incríveis paisagens das Serras Gerais. Banhos em águas cristalinas, trilhas por cenários de tirar o fôlego, cachoeiras exuberantes e formações rochosas impressionantes em meio à imensidão preservada do Cerrado.",
      image: "./Galeria/img57.jpeg",
      difficulty: "Fácil/Moderado",
      duration: "3-7 dias",
    },
   
  ];

  const services = [
    {
      icon: Droplets,
      title: "Fervedouros & Banhos",
      description: "Experiências autênticas nos fervedouros únicos do Jalapão com água cristalina e temperatura natural.",
    },
    {
      icon: Mountain,
      title: "Trilhas Especializadas",
      description: "Trilhas guiadas pelas dunas e serras com conhecimento profundo da flora, fauna e geologia local.",
    },
    {
      icon: Zap,
      title: "Rafting Radical",
      description: "Aventura aquática em corredeiras emocionantes com equipamento de segurança de ponta.",
    },
    {
      icon: Users,
      title: "Guias Especializados",
      description: "Equipe experiente com conhecimento profundo de cada destino e segurança em primeiro lugar.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Equipamento de ponta, protocolos rigorosos e seguro de viagem incluído em todas as expedições.",
    },
    {
      icon: Award,
      title: "Experiências Autênticas",
      description: "Conexão genuína com a natureza e comunidades locais, longe do turismo convencional.",
    },
  ];

  const inclusions = [
    { item: "INGRESSOS DOS ATRATIVOS", included: true },
    { item: "TRANSPORTE", included: true },
    { item: "SERVIÇO PRÉ-VIAGEM", included: true },
    { item: "HOSPEDAGEM", included: true },
    { item: "REFEIÇÕES: CAFÉ DA MANHÃ, ALMOÇO E JANTAR", included: true },
    { item: "AUXÍLIO NAS FOTOGRAFIAS", included: true },
    { item: "SEGURO VIAGEM", included: true },
    { item: "FLEXIBILIDADE NA OPERAÇÃO DA EXPEDIÇÃO", included: true },
    { item: "INTERAÇÃO COM AS COMUNIDADES TRADICIONAIS", included: true },
    { item: "CERTIFICAÇÃO CADASTUR E LICENÇAS AMBIENTAIS PARA OPERAÇÃO", included: true },
  ];

  const exclusions = [
    { item: "PASSAGENS AÉREAS", included: false },
    { item: "DESPESAS PESSOAIS", included: false },
    { item: "BEBIDAS ALCOÓLICAS", included: false },
    { item: "HOSPEDAGEM PRÉ E PÓS RETIRO", included: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src= "Galeria/logo.raiz.png" alt="Raiz Viva Expedições" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#destinos" className="text-sm hover:text-primary transition-colors">Destinos</a>
            <a href="#servicos" className="text-sm hover:text-primary transition-colors">Serviços</a>
            <Link href="/galeria" className="text-sm hover:text-primary transition-colors">Galeria</Link>
            <Link href="/roteiro" className="text-sm hover:text-primary transition-colors">Roteiro</Link>
            <a href="#contato" className="text-sm hover:text-primary transition-colors">Contato</a>
          </div>
          <a href="https://wa.me/5511926493672?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20expedições." target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Fale conosco
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[700px]">
          {/* Text Content - Left Side */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 bg-gradient-to-br from-background to-background/50">
            <div className="max-w-md">
              <div className="inline-block mb-4 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">Tocantins Selvagem</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Quem Somos
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed text-justify">
               A RAIZ VIVA EXPEDIÇÕES nasceu da conexão verdadeira com o Cerrado, suas águas cristalinas, paisagens vivas, cultura e tradições. Mais do que viagens, criamos experiências autênticas que unem natureza, aventura e pertencimento, sempre guiadas pelo ecoturismo técnico e pelo respeito às comunidades locais.
                Cada expedição é um convite para viver de forma intensa, descobrir novos olhares e criar conexões que vão além do caminho. Entre fervedouros, dunas e rios de beleza única, surgem histórias, memórias e até aqueles “melhores amigos que ainda não se conheciam”.
                Viajar com a RAIZ VIVA é mergulhar na essência do Tocantins e levar consigo experiências inesquecíveis, conexões verdadeiras e o encanto de uma terra extraordinária.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Começar Jornada <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  Saber Mais
                </Button>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="relative hidden md:block overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031129525/h4DPhbXPd2Ncci9CABm58V/jalapao-fervedouros-ehrkeM5rfwNDrpLFoCVwnG.webp"
              alt=" Jalapão - Fervedouros"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20"></div>
          </div>
        </div>

        {/* Diagonal Cut Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"
          style={{
            clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
          }}
        ></div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Destinos de Expedição
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Jalapão e Serras Gerais oferecem experiências únicas com fervedouros, cachoeiras, trilhas e atividades radicais em ambientes naturais preservados.
            </p>
          </div>

          {/* Featured Destination */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-xl shadow-lg h-96">
             
              <img
                src={destinations[activeDestination].image}
                alt={destinations[activeDestination].name}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold mb-3">
                {destinations[activeDestination].name}
              </h3>
              <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                {destinations[activeDestination].description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-foreground/60 mb-1">Dificuldade</p>
                  <p className="font-semibold text-primary">{destinations[activeDestination].difficulty}</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-foreground/60 mb-1">Duração</p>
                  <p className="font-semibold text-primary">{destinations[activeDestination].duration}</p>
                </div>
              </div>

              <Link href={`/detalhes/${destinations[activeDestination].id}`} className="inline-block">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Explorar Detalhes <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Destination Carousel */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {destinations.map((dest, idx) => (
              <button
                key={dest.id}
                onClick={() => setActiveDestination(idx)}
                className={`relative overflow-hidden rounded-lg h-32 transition-all duration-300 ${
                  activeDestination === idx
                    ? 'ring-2 ring-primary scale-105'
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                  <span className="text-white text-sm font-semibold">{dest.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-32 bg-white/50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              O Que Oferecemos
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Serviços especializados em atividades de aventura e natureza, com foco em segurança, autenticidade e experiências inesquecíveis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold font-heading mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Pronto para sua próxima aventura?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco para consultar sobre expedições personalizadas, datas disponíveis e valores especiais para Jalapão e Serras Gerais.
          </p>
          <a href="https://wa.me/5511926493672?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20expedi%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary gap-2">
              Fale conosco <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2">Email</h3>
              <a href="mailto:gustavonovellino31@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                raiz.expediçoes@gmail.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2">Telefone</h3>
              <a href="tel:+5511926493672" className="text-foreground/60 hover:text-primary transition-colors">
                (11) 92649-3672
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold font-heading mb-2">Instagram</h3>
              <a href="https://instagram.com/raizexpedicoes_" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                @raizexpedicoes_
              </a>
            </div>
          </div>

          <div className="pt-12 border-t border-border text-center text-foreground/60">
            <p>&copy; 2026 Raiz Viva Expedições. Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
