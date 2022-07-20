import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import StarshipsCard from "../StarshipCard/StarshipCard";
import {
  StyledShipList,
  StyledLoading,
  StyledNextPageButton,
} from "../Styles/Styles";
const Starships = () => {
  const [starships, setStarships] = useState([]);
  const [currentShipsPage, setCurrentShipsPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${currentShipsPage}`)
      .then((response) => {
        setStarships(response.data.results);
      });
  }, [currentShipsPage]);

  const nextPage = () => {
    setCurrentShipsPage(currentShipsPage + 1);
    if (currentShipsPage > 4) {
      setCurrentShipsPage(1);
    }
  };

  return (
    <>
      <Layout />
      <StyledShipList>
        {starships.length === 0 && <StyledLoading>Loading...</StyledLoading>}
        {starships.map((starship, i) => {
          return <StarshipsCard starship={starship} key={i} />;
        })}
      </StyledShipList>
      <StyledNextPageButton onClick={nextPage}>Next Page</StyledNextPageButton>
    </>
  );
};

export default Starships;
