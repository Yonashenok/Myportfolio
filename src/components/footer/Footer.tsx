import { Typography } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="container flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-gray-700 py-6 px-6 text-center md:justify-between">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            <NavLink
              className="px-3 py-2 flex items-center text-sm rounded-3xl   font-bold leading-snug text-white hover:opacity-75"
              to="/"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Home</span>
            </NavLink>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            <NavLink
              className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
              to="/about"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">About</span>
            </NavLink>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            <NavLink
              className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
              to="/projects"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Projects</span>
            </NavLink>
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors text-stone-200 hover:text-blue-500 focus:text-blue-500"
          >
            <NavLink
              className="px-3 py-2 flex items-center text-sm  font-bold leading-snug text-white hover:opacity-75"
              to="/contact"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Contact</span>
            </NavLink>
          </Typography>
        </li>
      </ul>
      <Typography color="blue-gray" className="font-normal text-stone-200">
        &copy; 2023 Yonas .H
      </Typography>
    </footer>
  );
}
