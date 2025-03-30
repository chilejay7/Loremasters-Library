import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState } from "react";

const Tabletop = () => {

    const [gameTerm, setGameTerm] = useState("League of Dungeoneers");

  return (
    <>
      <h3 className="loading construction">
        Tabletop Gaming Site Under Construction...
      </h3>

      <SearchForm term={gameTerm} />
    </>
  );
};

export default Tabletop;
