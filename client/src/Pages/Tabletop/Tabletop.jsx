import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState } from "react";

const Tabletop = () => {

    const [gameTerm, setGameTerm] = useState("League of Dungeoneers");

    const [gameData, setGameData] = useState(null);

    const findGame = async (keyword) => {
        console.log("The tabletop search term is:", keyword);

        try{
          const response = await axios.get(
            `https://boardgamegeek.com/xmlapi2/search?query=${keyword}`
        );

        setGameData({ games: response.data });

        console.log("The response from the BGG API is:", gameData);
        
        }

        catch (err) {
            console.error("There was an error fetching the game data:", err);
        }

        
    }

  return (
    <>
      <h3 className="loading construction">
        Tabletop Gaming Site Under Construction...
      </h3>

      <SearchForm handleSearch={findGame} />
    </>
  );
};

export default Tabletop;
