import { NavLink } from 'react-router-dom';
import XMarkIcon from '../../../assets/icons/XMarkIcon';

export interface NavBarState {
  navbarOpen?: boolean;
  setNavbarOpen: (navbarOpen: boolean) => void;
}

const Modal = ({ setNavbarOpen }: NavBarState): JSX.Element => {
  return (
    <>
      <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed top-5 lg:hidden  z-50 outline-none focus:outline-none">
        <div className="relative w-[350px]  mx-auto">
          {/*content*/}
          <div className="border-0 rounded-lg  h-[350px]  shadow-lg relative flex flex-col py-5 w-full bg-gray-900 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between px-5 py-3 rounded-t">
              <h5 className="text-md font-semibold text-white">Navigation</h5>
              <button
                className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setNavbarOpen(false)}
              >
                <XMarkIcon />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-5 flex-auto">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="nav-item   pb-1"
                >
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                    to="/"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white "></i>
                    <span className="ml-2">Home</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="nav-item pb-1"
                >
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                    to="/about"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">About</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="nav-item pb-1"
                >
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                    to="/projects"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Projects</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="nav-item  pb-1"
                >
                  <NavLink
                    className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-white hover:opacity-75"
                    to="/contact"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">Contact</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
