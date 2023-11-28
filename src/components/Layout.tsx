import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { Footer } from './footer/Footer';

const Layout = (): JSX.Element => {
  return (
    <main className="bg-[#18181b] w-[100svw] md:w-[60svw]  md:h-[170svh] flex flex-col justify-between gap-0">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
