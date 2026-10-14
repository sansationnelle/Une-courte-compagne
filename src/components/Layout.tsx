import { NavLink, Outlet } from "react-router-dom";
import logo from '../img/logo.png';

const links = [
  { to: "/", label: "Accueil", end: false },
];

const Layout = () => {

  return (
    <div className="flex min-h-screen flex-col bg-[#a68f67]">
      <header className="bg-[#e9dbc2] shadow-md">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-4 px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">
            <img src={logo} width={50} height={50} className="fit-picture" alt="Une Courte Campagne"></img>
          </span>
        <nav className="mb-8 flex gap-4 text-slate-50">
        <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold" : "")}>Accueil</NavLink>
        <NavLink to="/personages" className={({ isActive }) => (isActive ? "font-bold" : "")}>Personages</NavLink>
        <NavLink to="/regles" className={({ isActive }) => (isActive ? "font-bold" : "")}>Règles</NavLink>
        </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        <Outlet />
      </main>
      <footer className="text-center text-[#806943] bottom-0 p-4">Une Courte Campagne 2026</footer>
    </div>
  );
};

export default Layout;