import Image from "next/image";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="font-tasaregular text-sm text-gray-200 bg-black border-gray-200 px-2 lg:px-6 py-1.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Image
            src="/assets/images/logo.png"
            width={30}
            height={30}
            alt="logo"
          />
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="font-tasasemibold bg-gray-100 text-primary focus:ring-2 focus:ring-primary rounded text-sm focus:outline-none px-2 py-1 sm:px-4 lg:px-6 lg:py-0.5 flex items-center transition-all duration-100 ease-in-out hover:bg-white hover:scale-102"
            >
              Academy
              <i className="fa fa-right-to-bracket ml-2"></i>
            </a>
            <div className="lg:hidden mt-3 p-1 ml-5">
              <div className="relative inline-block">
                <button
                  type="button"
                  className="text-white rouded-sm text-sm inline-flex items-center"
                  onClick={toggleDropdown}
                >
                  <i class="fa-solid fa-bars fa-2xl"></i>
                </button>
                {/* Menu dropdown */}
                <div
                  className={`origin-top-right absolute right-0 mt-2 w-64 shadow-lg bg-gray-100 rounded-sm transform transition-all duration-200 ease-in-out ${
                    isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  }`}
                  style={{ transformOrigin: "top" }}
                >
                  <ul className="text-lg flex flex-col mt-2 mb-2 font-medium">
                    <li>
                      <a
                        href="#"
                        className="text-black block py-2 pr-4 pl-3 text-center rounded transition-all duration-100 ease-in-out focus:bg-gray-200 hover:scale-102"
                        aria-current="page"
                      >
                        Início
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-black block py-2 pr-4 pl-3 text-center rounded transition-all duration-100 ease-in-out focus:bg-gray-200 hover:scale-102"
                      >
                        Treinamentos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-black block py-2 pr-4 pl-3 text-center rounded transition-all duration-100 ease-in-out focus:bg-gray-200 hover:scale-102"
                      >
                        Contato
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-black block py-2 pr-4 pl-3 text-center rounded transition-all duration-100 ease-in-out focus:bg-gray-200 hover:scale-102"
                      >
                        Sobre
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Fim Menu dropdown */}
              </div>
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 transition-all duration-100 ease-in-out hover:text-white hover:scale-102"
                  aria-current="page"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 transition-all duration-100 ease-in-out hover:text-white hover:scale-102"
                >
                  Treinamentos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 transition-all duration-100 ease-in-out hover:text-white hover:scale-102"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded lg:bg-transparent lg:text-primary-700 lg:p-0 transition-all duration-100 ease-in-out hover:text-white hover:scale-102"
                >
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
