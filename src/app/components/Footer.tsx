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
  socialNetwork,
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
    <div className="w-screen z-10" id="contact">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 bg-gray-800 text-white p-2">
        {socialNetwork?.map((social) => (
          <div
            key={social.label}
            className="flex items-center justify-center p-1 hover:bg-gray-700 rounded-md transition duration-300"
          >
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-base flex items-center gap-2"
            >
              {iconMap[social.icon]}
              {social.label}
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center bg-gray-800 text-gray-800 p-2  w-full">
        <p className="text-sm text-center text-amber-100">
          © {new Date().getFullYear()} Asociación de Voluntarios por el
          Bienestar Animal de Láchar y Peñuelas. Todos los derechos reservados.
        </p>
      </div>
      <footer className="flex items-center justify-center bg-gray-800 text-white p-4 w-full">
        <p className="text-base">
          Powered by{' '}
          <a
            href="https://www.supracode.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline font-bold"
          >
            Supracode.eu
          </a>
        </p>
      </footer>
    </div>
  );
};
