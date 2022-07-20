import {
  StyledLogo,
  StyledNavbar,
  StyledHomeButton,
  StyledWelcomeButton,
  StyledFooter,
  StyledFooterText,
} from "../Styles/Styles";

const Layout = () => {
  return (
    <>
      <StyledLogo>STAR WARS</StyledLogo>
      <StyledNavbar>
        <StyledWelcomeButton to="/welcome">Welcome</StyledWelcomeButton>
        <StyledHomeButton to="/home">Home</StyledHomeButton>
      </StyledNavbar>
      <StyledFooter>
        <StyledFooterText></StyledFooterText>
      </StyledFooter>
    </>
  );
};

export default Layout;
