import { Link } from "react-router-dom";
import styled from "styled-components";

//Logo
export const StyledLogo = styled.div`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Star jedi";
  color: #fff;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

//Navbar & Footer
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  top: 0;
`;
export const StyledWelcomeButton = styled(Link)`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  &:active {
    border-bottom: 2px solid white;
  }
`;
export const StyledHomeButton = styled(Link)`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  &:active {
    border-bottom: 2px solid white;
  }
`;
export const StyledFooter = styled.div`
  display: flex;

  bottom: 0;
  position: absolute;
  color: white;
`;
export const StyledFooterText = styled.div`
  font-family: "Biko", sans-serif;
  display: flex;
  justify-content: end;
  font-size: 0.75em;
  color: white;
  margin-left: 130px;
`;
export const StyledFooterTextLink = styled.a`
  font-size: 1em;
  color: white;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;
/*export const StyledWelcomeText2 = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 1.2rem;
  right: 0;
  color: white;
`;
/*export const StyledStarshipsButton = styled(Link)`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  &:active {
    border-bottom: 2px solid white;
  }
`;*/
//Loading
export const StyledLoading = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 1rem;
  color: white;
`;
//Button Next Page
export const StyledNextPageButton = styled.button`
  font-family: "Biko", sans-serif;
  font-size: 1rem;
  color: black;
  border-radius: 5px;
  cursor: pointer;
`;

//List of Starships
export const StyledShipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const StyledShips = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  line-height: 0.2;
  padding: 20px;
  background-color: rgba(66, 73, 73, 0.6);
`;
export const StyledName = styled.p`
  font-size: 1rem;
  font-family: "Biko", sans-serif;
  color: white;
`;
export const StyledModel = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 0.8rem;
  color: white;
`;
export const StyledImage = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//List of Vehicles
export const StyledVehicleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const StyledVehicles = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  line-height: 0.5;
  padding: 20px;
  background-color: rgba(66, 73, 73, 0.4);
`;
export const StyledVehicleName = styled.p`
  font-size: 1rem;
  font-family: "Biko", sans-serif;
  color: white;
`;
export const StyledVehicleModel = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 0.8rem;
  color: white;
`;
//List of planets
export const StyledPlanetList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const StyledPlanets = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  line-height: 0.5;
  padding: 20px;
  background-color: rgba(66, 73, 73, 0.4);
`;
export const StyledPlanetName = styled.p`
  font-size: 1rem;
  font-family: "Biko", sans-serif;
  color: white;
`;
export const StyledPlanetClimate = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 0.8rem;
  color: white;
`;
export const StyledPlanetDiameter = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 0.8rem;
  color: white;
`;

//Welcome
export const StyledWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
export const StyledWelcomeTittle = styled.p`
  font-family: "Star jedi", sans-serif;
  font-size: 3rem;
  color: white;
  text-decoration: underline;
  cursor: pointer;
`;
export const StyledButtonWelcome = styled.button`
  font-family: "Star jedi", sans-serif;
  font-size: 1.6rem;
  padding-bottom: 10px;
  padding-left: 10px;
  width: 130px;
  height: 50px;
  color: white;
  border-radius: 50px;

  cursor: pointer;
  background: none;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 0px 10px 2px rgba(252, 251, 166, 1);
  }
`;
export const StyledWelcomeText = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  width: 600px;
  margin-bottom: 40px;
  text-align: justify;
  color: yellow;

  transform-origin: 50%;
  transform: perspective(290px) rotateX(30deg);
  animation: 6s infinite linear;
`;
