
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CustomButton from "../components/ui/CustomButton";
import { ArrowLeft } from "lucide-react";
import FadeIn from "../components/animations/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="section-container text-center py-24">
          <FadeIn direction="up">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Erro 404
            </span>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight">
              Página não encontrada
            </h1>
          </FadeIn>
          
          <FadeIn direction="up" delay={200}>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-md mx-auto">
              A página que você está tentando acessar não existe ou foi movida.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={300}>
            <CustomButton 
              href="/" 
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Voltar para a página inicial
            </CustomButton>
          </FadeIn>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
