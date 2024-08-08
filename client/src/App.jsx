import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
