import {
  StyledNavbar,
  StyledHomeButton,
  StyledStarshipsButton,
} from "../Styles/Styles";

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledHomeButton>Home</StyledHomeButton>
      <StyledStarshipsButton>Starships</StyledStarshipsButton>
    </StyledNavbar>
  );
};

export default Navbar;
