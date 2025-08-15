import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-mobility-gray text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Company Info */}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">LG</span>
              </div>
              <span className="text-lg font-bold">LG Mobilidade Urbana</span>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Especialistas em planejamento, execução e operação de sistemas de transporte público.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 md:flex-none">
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/quem-somos" className="text-gray-300 hover:text-white transition-colors text-sm">
                Quem Somos
              </Link>
              <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors text-sm">
                Serviços
              </Link>
              <Link to="/areas-atuacao" className="text-gray-300 hover:text-white transition-colors text-sm">
                Áreas de Atuação
              </Link>
              <Link to="/contato" className="text-gray-300 hover:text-white transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-center">
          <p className="text-gray-300 text-sm">© 2025 LG Mobilidade Urbana. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;