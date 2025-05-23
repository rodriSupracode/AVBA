'use client';
import Image from 'next/image';
import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { IoMenu, IoClose } from 'react-icons/io5';
import { FaCat } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';

export const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  const ref = useOnclickOutside(() => {
    setNavbarOpen(false);
  });

  const listNav = [
    { label: 'Sobre nosotros', href: '/#sobre-nosotros' },
    { label: 'Adopta', href: '/#adopta' },
    { label: 'Dona', href: '/#dona' },
    { label: 'Apadrina', href: '/#apadrina' },
    { label: 'Nuestros felinos', href: '/nuestros-felinos', icon: <FaCat /> },
    { label: 'Contacto', href: '/#contact', icon: <IoShareSocialOutline /> },
  ];

  return (
    <div className="absolute top-0 left-0 w-screen z-10 px-2 pt-2">
      <header className="flex items-center justify-between p-4 bg-amber-50 text-white rounded-lg shadow-md w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            <Image
              src="/avba.png"
              alt="Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <h1 className="text-base font-semibold text-gray-800 md:block hidden">
              Asociación de Voluntarios por el Bienestar Animal de Láchar y
              Peñuelas
            </h1>
            <h1 className="text-base font-semibold text-gray-800 md:hidden block">
              AVBA
            </h1>
          </div>
          <button
            className="cursor-pointer roundend text-black text-2xl bg-amber-100 p-2 rounded-md shadow-md hover:bg-amber-200 focus:outline-none"
            onClick={toggleNavbar}
          >
            {isNavbarOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>
      {isNavbarOpen && (
        <div
          ref={ref}
          className="w-full md:max-w-52 md:float-right mt-2 bg-amber-100 rounded-lg shadow-md p-4 text-black"
        >
          {listNav.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-2 px-4 hover:bg-amber-200 rounded-md flex items-center justify-end"
              onClick={toggleNavbar}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
