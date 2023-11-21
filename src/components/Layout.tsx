import { Outlet } from 'react-router-dom';
import Header from './header/Header';

const Layout = (): JSX.Element => {
  return (
    <main className="bg-[#18181b] w-[100vw] md:w-[70vw] h-[130vh]">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
