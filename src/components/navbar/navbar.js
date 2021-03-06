import React, { useState } from 'react';

const Navbar = React.memo((props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMobileMenuHandler = () => {
    setShowMenu((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-24">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm md:text-lg font-medium text-white bg-gray-900"
                    >
                      Popular
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm md:text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      Top Rated
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm md:text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      Upcoming
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm md:text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      Latest
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm md:text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      Now Playing
                    </a>
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => showMobileMenuHandler()}
                  className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {/*
        Heroicon name: menu

        Menu open: "hidden", Menu closed: "block"
      */}
                  {!showMenu ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  {/*
        Heroicon name: x

        Menu open: "block", Menu closed: "hidden"
      */}
                </button>
              </div>
            </div>
          </div>
          {/*
Mobile menu, toggle classes based on menu state.

Open: "block", closed: "hidden"
    */}
          {showMenu ? (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
                >
                  Popular
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Top Rated
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Upcoming
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Latest
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Now Playing
                </a>
              </div>
            </div>
          ) : null}
        </nav>
      </div>
    </>
  );
});

export default Navbar;
