import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  StyledLoading,
  StyledPlanetList,
  StyledPlanets,
  StyledPlanetName,
  StyledPlanetDiameter,
  StyledPlanetClimate,
  StyledNextPageButton,
} from "../Styles/Styles";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPlanetPage, setCurrentPlanetPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/?page=${currentPlanetPage}`)
      .then((response) => {
        setPlanets(response.data.results);
      });
  }, [currentPlanetPage]);

  const nextPage = () => {
    setCurrentPlanetPage(currentPlanetPage + 1);
    if (currentPlanetPage > 4) {
      setCurrentPlanetPage(1);
    }
  };

  return (
    <>
      <Layout />
      <StyledPlanetList>
        {planets.length === 0 && <StyledLoading>Loading...</StyledLoading>}
        {planets.map((planets) => {
          return (
            <StyledPlanets>
              <StyledPlanetName>{planets.name}</StyledPlanetName>
              <StyledPlanetDiameter>
                Diameter: {planets.diameter}
              </StyledPlanetDiameter>
              <StyledPlanetClimate>
                Climate: {planets.climate}
              </StyledPlanetClimate>
            </StyledPlanets>
          );
        })}
      </StyledPlanetList>
      <StyledNextPageButton onClick={nextPage}>Next Page</StyledNextPageButton>
    </>
  );
};
export default Planets;
