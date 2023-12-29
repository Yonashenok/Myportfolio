import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SunIcon from '../../assets/icons/SunIcon';
import DownIcon from '../../assets/icons/DownIcon';
import MoonIcon from '../../assets/icons/MoonIcon';
import Modal from './modal/NavModal';

const Header = (): JSX.Element => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState('dark');
  const day = theme === 'dark' || false;

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [theme]);

  const handelThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className=" text-white">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  mb-3">
          <div className="container px-7 mx-auto flex  items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <div className=" text-slate-950 dark:text-white"> Yonas .H</div>
              <button
                className="text-white cursor-pointer flex  items-center justify-center  text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent  lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(true)}
              >
                <span className="pb-3">Menu </span>
                <DownIcon />
              </button>
            </div>
            <div
              className="lg:flex items-center hidden border border-solid border-slate-300 dark:border-[#38383d] bg-slate-200 dark:bg-[#252529] shadow-lg rounded-3xl p-1"
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-sm rounded-3xl   font-bold leading-snug text-black dark:text-white hover:opacity-75"
                    to="/"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-black dark:text-white opacity-75"></i>
                    <span className="ml-2">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-black dark:text-white hover:opacity-75"
                    to="/about"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">About</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-black dark:text-white hover:opacity-75"
                    to="/projects"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Projects</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-black dark:text-white hover:opacity-75"
                    to="/contact"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
            <button onClick={handelThemeSwitcher} className="rounded-3xl">
              {day ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </nav>
      </header>
      <div className="container flex  items-center justify-center">
        {navbarOpen && <Modal setNavbarOpen={setNavbarOpen} />}
      </div>
    </>
  );
};

export default Header;
