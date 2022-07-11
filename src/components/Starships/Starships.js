import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyledName,
  StyledModel,
  StyledShip,
  StyledShipList,
} from "../Styles/Styles";

const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then((response) => {
      setStarships(response.data.results);
    });
  }, []);
  //console.log(starships);

  return (
    <>
      <StyledShipList>
        {starships.map((starship, i) => {
          return (
            <StyledShip key={i}>
              <StyledName>{starship.name}</StyledName>
              <StyledModel>{starship.model}</StyledModel>
            </StyledShip>
          );
        })}
      </StyledShipList>
    </>
  );
};

export default Starships;
