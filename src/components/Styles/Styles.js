import styled from "styled-components";

export const StyledLogo = styled.div`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Star jedi";
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  cursor: pointer;
`;
export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  padding-left: 20px;
  top: 0;
`;
export const StyledHomeButton = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  &:active {
    border-bottom: 2px solid white;
  }
`;
export const StyledStarshipsButton = styled.p`
  font-family: "Biko", sans-serif;
  font-size: 1.5rem;
  color: white;
  &:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
  &:active {
    border-bottom: 2px solid white;
  }
`;
export const StyledShipList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const StyledShip = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: fit-content;
  line-height: 0.5;
  padding-left: 20px;
  background-color: rgba(66, 73, 73, 0.4);
`;
export const StyledName = styled.p`
  font-size: 1.5rem;
  font-family: "Biko", sans-serif;
  color: white;
`;
export const StyledModel = styled.p`
  font-family: "Biko", sans-serif;
  color: white;
`;
