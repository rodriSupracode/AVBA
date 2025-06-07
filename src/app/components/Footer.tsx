import { JSX } from 'react';
import {
  FaFacebook,
  FaWhatsapp,
  FaXTwitter,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa6';

export const Footer = ({
  socialNetwork = [],
}: {
  socialNetwork?: { label: string; icon: string; link: string }[];
}) => {
  const iconMap: Record<string, JSX.Element> = {
    FaXTwitter: <FaXTwitter />,
    FaTiktok: <FaTiktok />,
    FaInstagram: <FaInstagram />,
    FaFacebook: <FaFacebook />,
    FaWhatsapp: <FaWhatsapp />,
    FaEnvelope: <FaEnvelope />,
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-gray-900 text-white overflow-hidden z-10"
    >
      {/* Sección principal del footer con contenido */}
      <div className="container mx-auto px-4 pb-8 md:py-12">
        {/* Contenedor de Redes Sociales */}
        <div className="mb-8 border-b border-gray-700 pb-8">
          <h3 className="text-xl md:text-2xl font-bold text-center text-amber-300 mb-6 animate-fade-in-down">
            Conéctate con Nosotros
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {socialNetwork.length > 0 ? (
              socialNetwork.map((social) => (
                <div
                  key={social.label}
                  className="flex items-center cursor-pointer justify-center p-2 rounded-lg bg-gray-800 hover:bg-amber-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-medium flex items-center gap-3"
                  >
                    {/* Asegúrate de que `iconMap` devuelve un componente React válido */}
                    {social.icon && iconMap[social.icon] ? (
                      <span className="text-2xl">{iconMap[social.icon]}</span>
                    ) : null}
                    {social.label}
                  </a>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-400">
                No hay redes sociales configuradas.
              </p>
            )}
          </div>
        </div>

        {/* Sección de Copyright */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Asociación de Voluntarios por el
            Bienestar Animal de Láchar y Peñuelas.
            <br className="md:hidden" />
            Todos los derechos reservados.
          </p>
        </div>

        {/* Sección "Powered by" */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Desarrollado con cariño por{' '}
            <a
              href="https://www.supracode.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 hover:underline font-semibold transition duration-300"
            >
              Supracode.eu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
