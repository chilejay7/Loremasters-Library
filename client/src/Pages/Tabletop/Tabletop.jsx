import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import BookCard from "../../Components/Cards/DisplayCard";

const Tabletop = () => {
  const [initialGameTerm, setInitialGameTerm] = useState(
    "League of Dungeoneers"
  );

  const [gameData, setGameData] = useState();

  const findGame = async (keyword) => {
    console.log("The tabletop search term is:", keyword);

    try {
      const response = await axios.get(
        `https://boardgamegeek.com/xmlapi2/search?query=${keyword}`
      );

      const xml = response.data;

      console.log("The response from the BGG API is:", xml);

      const options = {
        ignoreAttributes: false,
        attributeNamePrefix: "",
      };

      const parser = new XMLParser(options);

      const jsonResult = await parser.parse(xml);

      console.log(
        "The object to be written to state is:",
        jsonResult.items.item
      );

      setGameData(jsonResult.items.item);
    } catch (err) {
      console.error("There was an error fetching the game data:", err);
    }
  };

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

      <div id="main-body">
        {gameData && Array.isArray(gameData) && gameData.length > 0 ? (
          <>
            <h3>{gameData[0]?.name?.value || "Name not available"}</h3>
            <a
              href={`https://www.boardgamegeek.com/boardgame/${gameData[0].id}`}
              target="_blank"
            >
              {gameData[0].name.value}
            </a>
{/* 
            <div id="card-display">
              {gameData.map((game) => (
                <BookCard book={game} key={game.id} />
              ))}
            </div> */}
          </>
        ) : (
          <>
            <h3 className="loading construction">
              Could not retrieve game data from state...
            </h3>
          </>
        )}
      </div>
    </>
  );
};
export default Tabletop;
