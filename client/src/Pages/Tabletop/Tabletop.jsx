import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { parseStringPromise } from "xml2js";
import { XMLParser } from "fast-xml-parser";

const Tabletop = () => {

    const [initialGameTerm, setInitialGameTerm] = useState("League of Dungeoneers");

    const [gameData, setGameData] = useState(null);

    const findGame = async (keyword) => {
        console.log("The tabletop search term is:", keyword);

        try {

          const response = await axios.get(
            `https://boardgamegeek.com/xmlapi2/search?query=${keyword}`
        );

        const xml = response.data;

        console.log("The response from the BGG API is:", xml);

        const options = {
          ignoreAttributes : false
      };

        const parser = new XMLParser(options);
        
        const jsonResult = await parser.parse(xml);

        console.log("Parsed XML result:", jsonResult);
       
        setGameData(jsonResult);
        
        }

        catch (err) {
            console.error("There was an error fetching the game data:", err);
        }
        
    }

     useEffect(() => {
        findGame(initialGameTerm);
        setInitialGameTerm("");
      }, []);

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
