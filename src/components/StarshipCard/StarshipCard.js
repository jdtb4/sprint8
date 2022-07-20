import {
  StyledShips,
  StyledName,
  StyledModel,
  StyledImage,
} from "../Styles/Styles";

const StarshipsCards = ({ starship }) => {
  const queryId = starship.url.split("/");
  const id = queryId[5];
  return (
    <>
      <StyledShips>
        {id && (
          <StyledImage
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            alt="starship"
            onError={(e) => (e.target.style.display = "none")}
          />
        )}
        <StyledName>{starship.name}</StyledName>
        <StyledModel>{starship.model}</StyledModel>
      </StyledShips>
    </>
  );
};

export default StarshipsCards;
