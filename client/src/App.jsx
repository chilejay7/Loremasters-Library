import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import NavMenu from "./Components/NavMenu/NavMenu";

export default function App() {
  return (
    <>
      <NavMenu />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
