import {
  StyledButtonWelcome,
  StyledWelcomeContainer,
  StyledWelcomeTittle,
  StyledWelcomeText,
} from "../Styles/Styles";
const Welcome = () => {
  return (
    <>
      <StyledWelcomeContainer>
        <StyledWelcomeTittle>Welcome to the dark side!</StyledWelcomeTittle>
        <StyledWelcomeText>
          You have been chosen to join the dark side of the force. This is a
          Star Wars App Web made with React, here you can navigate throwght
          differents pages and watch the differents characters and starships.
        </StyledWelcomeText>
        <StyledButtonWelcome>Start</StyledButtonWelcome>
      </StyledWelcomeContainer>
    </>
  );
};

export default Welcome;
