import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import { NavLink } from "react-router-dom";
import DisplayCard from "../../Components/Cards/DisplayCard";
import "./Tabletop.css";

const Tabletop = () => {
  const [initialGameTerm, setInitialGameTerm] = useState(
    "League of Dungeoneers"
  );

  const [gameData, setGameData] = useState();

  const getGameId = async (gameId) => {
    try {
      const response = await axios.get(
        `https://boardgamegeek.com/xmlapi2/thing=boardgame?id=${gameId}`
      );

      console.log("The id data for the game is:", response.data);
    } catch (err) {
      console.error("There was an error fetching the game id:", err);
    }
  };

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
        <section id="game-body">

          {gameData && Array.isArray(gameData) && gameData.length > 0 ? (
            <>
              <a
                href={`https://www.boardgamegeek.com/boardgame/${gameData[0].id}`}
                target="_blank"
              >
                <h3 className="game-title">
                  {gameData[0]?.name?.value || "Name not available"}
                </h3>
              </a>

              {/* This element is being used to test the NavLink components */}
              <NavLink to={`/gamers_corner/${gameData[0].id}`} className="game-link">TestLink</NavLink>

              <div id="card-display">
                {gameData.map((game) => (
                  <DisplayCard
                    key={game.id}
                    id={game.id}
                    title={game.name.value}
                    subtitle={`${game.type} - ${game.yearpublished?.value}`}
                    link={`https://www.boardgamegeek.com/boardgame/${game.id}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="loading construction">
                Could not retrieve game data from state...
              </h3>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Tabletop;
