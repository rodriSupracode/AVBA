import { FaXTwitter } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1YeHe3MQwj/?mibextid=wwXIfr',
      icon: <FaFacebook />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/avba.lachar?igsh=d2R4eGRjYXh1eTlz&utm_source=qr',
      icon: <FaInstagram />,
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/AVBAanimales?t=RK3UA8cA4UiUU2-jz0KXZg&s=08',
      icon: <FaXTwitter />,
    },
    {
      name: 'Tiktok',
      url: 'https://www.tiktok.com/@refugioavba?_t=ZN-8wLhMe6qmZS&_r=1',
      icon: <FaTiktok />,
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/34657236105',
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <div className="w-screen z-10" id="contact">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-gray-800 text-white p-2">
        {socialLinks.map((link) => (
          <div
            key={link.name}
            className="flex items-center justify-center p-1 hover:bg-gray-700 rounded-md transition duration-300"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg font-base flex items-center gap-2"
            >
              {link.icon}
              {link.name}
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
