import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-2xl font-bold mb-4">Real Estate</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eu sapien vestibulum, bibendum tellus at, pharetra purus. Donec
                semper mollis lorem, eget dapibus purus pellentesque at. Aliquam
                erat volutpat.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.828 21A2.828 2.828 0 0 1 2 18.172V7.828A2.828 2.828 0 0 1 4.828 5h14.344A2.828 2.828 0 0 1 22 7.828v10.344A2.828 2.828 0 0 1 19.172 21H4.828zm4.89-12.95L12 10.819l2.282-1.77a2 2 0 1 1 2.272 3.238L12 16.875l-2.282-1.77a2 2 0 1 1 2.272-3.238z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 10.243A5.98 5.98 0 0 0 20 6a6 6 0 1 0-12 0c0 1.353.438 2.63 1.257 3.657l-2.486 2.486A9.969 9.969 0 0 1 2 6a10 10 0 1 1 19.657 4.243l-2.486-2.486zM12 18a6 6 0 0 0 0-12v12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="flex items-center">
                <svg
                  className="text-gray-400 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15l-3 3v-2H9"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9L9 6l3-3 3 3-3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 6l3 3 3-3"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l3-3v2h2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 9l3 3-3 3-3-3 3-3z"
                  />
                </svg>
                <p className="ml-2">123 Street, City, Country</p>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="text-gray-400 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22C6.48 22 2 17.52 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10c0 5.52-4.48 10-10 10zm0-18C7.58 4 4 7.58 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-4.42-3.58-8-8-8zm-1 3h2v2h-2V7zm0 4h2v6h-2V11z" />
                </svg>
                <p className="ml-2">info@example.com</p>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="text-gray-400 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.04 13.73c.42-.32.96-.36 1.4-.06.33.23.56.58.66 1 .1.4.03.82-.2 1.16l-2.6 3.6c-.25.33-.65.52-1.06.52-.03 0-.05 0-.08 0a1.33 1.33 0 0 1-.53-.1L12 17.74l-3.21 2.47c-.26.2-.58.3-.9.26h-.07c-.39-.03-.77-.2-1.04-.49l-1.6-1.5c-.47-.44-.64-1.1-.45-1.73s.53-1.06 1.06-1.35l16.07-7.32c.42-.19.9-.14 1.25.13zm-1.3 1.84L3.87 16.67l1.05-1.46L16.8 4.2l1.47 1.38L16.73 7.8l-7.68 7.03a.75.75 0 0 1-1.07-.04L3.2 13.5l10.5-9.7 1.39 1.29-3.44 4.73z" />
                </svg>
                <p className="ml-2">+123 456 7890</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2022 Real Estate. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
