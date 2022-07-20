import {
  StyledButtonWelcome,
  StyledWelcomeContainer,
  StyledWelcomeTittle,
  StyledWelcomeText,
} from "../Styles/Styles";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const refreshPage = () => {
    window.location.reload(false);
  };

  const navigate = useNavigate();

  return (
    <>
      <StyledWelcomeContainer>
        <StyledWelcomeTittle onClick={refreshPage}>
          Welcome to the dark side!
        </StyledWelcomeTittle>
        <StyledWelcomeText>
          You have been chosen to join the dark side of the force. This is a
          Star Wars info guide web made with React, here you can navigate
          throwght differents pages and watch the differents characters, planets
          and other info. Enjoy it!!! - The Dark Side.
        </StyledWelcomeText>
        <StyledButtonWelcome onClick={() => navigate("/home")}>
          Start
        </StyledButtonWelcome>
      </StyledWelcomeContainer>
    </>
  );
};

export default Welcome;
