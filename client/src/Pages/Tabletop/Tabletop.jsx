import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState } from "react";

const Tabletop = () => {

    const [gameTerm, setGameTerm] = useState("League of Dungeoneers");

    const [response, setResponse] = useState(null);

    const findGame = async (keyword) => {
        console.log("The tabletop search term is:", keyword);

        const response = await axios.get(
            `https://boardgamegeek.com/xmlapi2/search?query=${keyword}`
        );

        console.log("The response from the BGG API is:", response.data);

        setResponse(response.data);
    }

  return (
    <>
      <h3 className="loading construction">
        Tabletop Gaming Site Under Construction...
      </h3>

      <SearchForm handleSearch={findGame} />

      <h3>{response}</h3>
    </>
  );
};

export default Tabletop;
