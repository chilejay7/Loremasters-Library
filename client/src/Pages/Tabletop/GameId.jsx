import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { XMLParser } from 'fast-xml-parser';
import './Tabletop.css';

const GameId = () => {

    // The name of the parameter must match the name used in the useParams() hook.  If not it will return undefined.
    const { id } = useParams();

    console.log("The game id captured from the parameter is:", id);

    const [gameId, setGameId] = useState(id);

    const [gameData, setGameData] = useState();
    
    const getGameId = async (gameId) => {
        try {
          const response = await axios.get(
            `https://boardgamegeek.com/xmlapi2/thing=boardgame?id=${gameId}`
          );

          const xml = response.data;
    
          const options = {
            ignoreAttributes: false,
            attributeNamePrefix: "",
          };
    
          const parser = new XMLParser(options);
    
          const jsonResult = await parser.parse(xml);

          console.log(
            "The object to be written to state is:",
            jsonResult.items
          );    
          
          setGameData(jsonResult.items.item);

        } catch (err) {
          console.error("There was an error fetching the game id:", err);
        }
      };

      useEffect( () => {
        getGameId(gameId);
        setGameId("");
      }, []);

  return (
    <>
      <h3 className="loading construction">
        Game by Id Coming Soon...
      </h3>

      <h3>{gameData?.name.value} {id}</h3>
      <p>Number of Players: {gameData?.minplayers.value} - {gameData?.maxplayers.value}</p>

      <img src={gameData?.image} alt={gameData?.name} />

      <p>{gameData?.description}</p>
    </>
  )
}

export default GameId;