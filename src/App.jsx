
import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Footer from "./parts/Footer";
import { Fragment, useState } from "react";
import { Dialog, Transition} from "@headlessui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Toaster } from "sonner";

function App() {
  const home = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const skills = useRef(null);
  const [open, setOpen] = useState(false);
  const [typeEffect] = useTypewriter({
   words: [
  "a Full-Stack Developer",
  "React • TypeScript • Node.js",
  "Building modern web apps",
    "Clean code. Scalable systems",
  "Explore my projects below 👇",
],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1100,
  });

  useEffect(() => {
    AOS.init({ duration: "1100" });
  }, []);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="text-white overflow-hidden">
      <ScrollToTop />
      <div className="bg-black fixed top-0 right-0 left-0 z-50">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-blue pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-28">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="ml-5"
                        fill="#FFFFFF"
                        width="40"
                        height="52"
                        version="1.1"
                        id="lni_lni-cross-circle"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 64 64"
                        style={{ enableBackground: "new 0 0 64 64" }}
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            d="M32,1.8C15.3,1.8,1.8,15.3,1.8,32S15.3,62.3,32,62.3S62.3,48.7,62.3,32S48.7,1.8,32,1.8z M32,57.8
		C17.8,57.8,6.3,46.2,6.3,32C6.3,17.8,17.8,6.3,32,6.3c14.2,0,25.8,11.6,25.8,25.8C57.8,46.2,46.2,57.8,32,57.8z"
                          />
                          <path
                            d="M41.2,22.7c-0.9-0.9-2.3-0.9-3.2,0L32,28.8l-6.1-6.1c-0.9-0.9-2.3-0.9-3.2,0c-0.9,0.9-0.9,2.3,0,3.2l6.1,6.1l-6.1,6.1
		c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7l6.1-6.1l6.1,6.1c0.4,0.4,1,0.7,1.6,0.7
		c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32l6.1-6.1C42.1,25,42.1,23.6,41.2,22.7z"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-6 border-t bg-gradient-to-r from-violet-700 to-fuchsia-500 px-4 py-6">
                    <ul className="flex text-white flex-col space-y-5 space-x-4">
                      <li
                        className="ml-4 block p-2 font-bold text-xl cursor-pointer"
                        onClick={() => {
                          scrollToSection(home);
                          setOpen(false);
                        }}
                      >
                        Home
                      </li>
                      <li
                        className="-m-2 block p-2 font-medium text-xl  cursor-pointer"
                        onClick={() => {
                          scrollToSection(skills);
                          setOpen(false);
                        }}
                      >
                        Skills
                      </li>

                      <li
                        className="-m-2 block p-2 font-medium  text-xl cursor-pointer"
                        onClick={() => {
                          scrollToSection(project);
                          setOpen(false);
                        }}
                      >
                        Projects
                      </li>

                      <li
                        className="-m-2 block p-2 font-medium  text-xl cursor-pointer"
                        onClick={() => {
                          scrollToSection(contact);
                          setOpen(false);
                        }}
                      >
                        Contact Me
                      </li>
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <header className="relative bg-black">
          <nav
            aria-label="Top"
            className="bg-purple-950 px-4 sm:px-6 lg:px-8 shadow-xl "
          >
            <div className="">
              <div className="flex items-center bg-purple-950 justify-between h-16">
                <button
                  type="button"
                  className="rounded-md bg-purple-950 p-2  lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>

                <div className=" flex  items-center justify-center">
                  <div className="flex items-center">
                    <svg
                      fill="#7950F2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      <path d="M 18 5 C 15.239 5 13 7.239 13 10 L 13 11 L 32.5 11 C 36.09 11 39 13.91 39 17.5 L 39 27.5 C 39 29.433 37.433 31 35.5 31 L 22.5 31 C 20.567 31 19 29.433 19 27.5 L 19 21 L 15 21 C 13.895 21 13 21.895 13 23 L 13 32 C 13 34.761 15.239 37 18 37 L 40 37 C 42.761 37 45 34.761 45 32 L 45 10 C 45 7.239 42.761 5 40 5 L 18 5 z M 10 13 C 7.239 13 5 15.239 5 18 L 5 40 C 5 42.761 7.239 45 10 45 L 32 45 C 34.761 45 37 42.761 37 40 L 37 39 L 17.5 39 C 13.91 39 11 36.09 11 32.5 L 11 22.5 C 11 20.567 12.567 19 14.5 19 L 27.5 19 C 29.433 19 31 20.567 31 22.5 L 31 29 L 35 29 C 36.105 29 37 28.105 37 27 L 37 18 C 37 15.239 34.761 13 32 13 L 10 13 z" />
                    </svg>
                    &nbsp;
                    <label className="font-bold text-purple-300">
                      Muhammad Ahmed Khan
                    </label>
                  </div>
                </div>

                <div className="flex items-center  justify-center  space-x-6">
                  <div className="hidden lg:flex lg:space-x-6">
                    <ul className="flex space-x-5  text-purple-400">
                      <li
                        className="text-lg font-bold cursor-pointer"
                        onClick={() => scrollToSection(home)}
                      >
                        Home
                      </li>

                      <li
                        className="text-lg font-bold  cursor-pointer"
                        onClick={() => scrollToSection(skills)}
                      >
                        Skills
                      </li>

                      <li
                        className="text-lg font-bold  cursor-pointer"
                        onClick={() => scrollToSection(project)}
                      >
                        Projects
                      </li>

                      <li
                        className="text-lg font-bold  cursor-pointer"
                        onClick={() => scrollToSection(contact)}
                      >
                        Contact Me
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <div ref={home}>
        <div className="rounded-3xl h-screen w-full text-white text-center mb-2 overflow-hidden">
          <img
            src="/wave.webp"
            className=" rounded-lg relative object-cover w-full h-screen"
            alt="Background"
          ></img>

          <div className="absolute  top-1/4 left-1/4 right-1/4 max-md:left-1/4 max-md:right-1/4 flex max-md:flex-col-reverse text-center">
            <div
              className="flex flex-col justify-center mr-5 items-center text-center"
              data-aos="zoom-in"
            >
              <h1 className="font-bold text-3xl mb-2">Hi 👋</h1>
              <h2 className="font-bold text-2xl mb-4 w-80">
                I&apos;m <span className="text-purple-400">Ahmed</span>
              </h2>
              <p className="font-medium text-xl w-80 mb-3">
                {" "}
                <span className=" text-xl max-md:text-lg">
                  {typeEffect} <Cursor cursorColor="white" cursorBlinking />
                </span>
              </p>
              <div className="max-md:ml-3 flex space-x-3 mt-5 ">
                <button
                  onClick={() => scrollToSection(project)}
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-purple-400"
                >
                  See Projects
                </button>

                <button
                  onClick={() => scrollToSection(contact)}
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 borfer border-2 border-purple-400"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <img
              data-aos="slide-right"
              className="aspect-[1/1] w-2/4 max-md:w-full max-md:mb-7 drop-shadow-xl rounded-3xl"
              src="/ahmedDEV2.webp"
              alt="Ahmed Picture"
            ></img>
          </div>
        </div>
      </div>

      <div ref={skills}>
        <Skills/>
      </div>

      <div ref={project}>
        <Project/>
      </div>
      <div ref={contact}>
        <Contact/>
      </div>

      <Footer></Footer>
      <Toaster richColors position="bottom-center"/>
    </div>
  );
}

export default App;
