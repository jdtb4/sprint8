import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../Layout/Layout";
const Home = () => {
  return (
    <>
      <Layout />
      <StyledHome>
        <StyledCharacter>Characters</StyledCharacter>
        <StyledStarship to="/starships">Starships</StyledStarship>
        <StyledFilms>Films</StyledFilms>
        <StyledVehicles to="/vehicles">vehicles</StyledVehicles>
        <StyledPlanets to="/planets">Planets</StyledPlanets>
        <StyledSpecies>Species</StyledSpecies>
      </StyledHome>
    </>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const StyledCharacter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/character.jpg);
`;
const StyledStarship = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/starships.jpg);
`;
const StyledFilms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/films.jpg);
`;
const StyledVehicles = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/vehicles.jpg);
`;
const StyledPlanets = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/planets.jpg);
`;
const StyledSpecies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Star jedi", sans-serif;
  font-size: 1.5rem;
  width: 400px;
  height: 200px;
  color: white;
  border: 1px solid white;
  background-image: url(https://starwars-visualguide.com/assets/img/categories/species.jpg);
`;
