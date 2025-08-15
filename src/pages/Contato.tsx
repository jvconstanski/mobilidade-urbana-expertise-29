import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { ArrowRight, CheckCircle } from "lucide-react";

const Contato = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-mobility-light to-background overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 border-primary/20 bg-background/50">
              Entre em Contato
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Vamos Conversar Sobre <br />
              <span className="text-primary">Seu Projeto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Nossa equipe de especialistas está pronta para discutir suas necessidades 
              e apresentar soluções técnicas customizadas para seu projeto de mobilidade urbana.
            </p>
            
            {/* CTA Button */}
            <Button 
              variant="cta" 
              size="lg" 
              onClick={scrollToForm}
              className="group mb-12"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Consultoria Especializada
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Atendimento Nacional
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                Resposta em 24h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Por que escolher a LG Mobilidade Urbana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-muted-foreground text-sm">
                Anos de experiência em projetos de mobilidade urbana em todo o Brasil
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Soluções Personalizadas</h3>
              <p className="text-muted-foreground text-sm">
                Cada projeto é único e desenvolvemos soluções sob medida para suas necessidades
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Suporte Completo</h3>
              <p className="text-muted-foreground text-sm">
                Acompanhamento desde o planejamento até a implementação final
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contato;