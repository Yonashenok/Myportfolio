import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { Footer } from './footer/Footer';

const Layout = (): JSX.Element => {
  return (
    <main className="dark:bg-[#18181b]  bg-slate-200  w-[100svw] md:w-[80svw]  2xl:w-[60svw] flex flex-col justify-center gap-0">
      <>
        <Header />
        <Outlet />
      </>
      <Footer />
    </main>
  );
};

export default Layout;
