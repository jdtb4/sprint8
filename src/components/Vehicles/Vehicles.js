import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import {
  StyledVehicleList,
  StyledVehicles,
  StyledLoading,
  StyledVehicleName,
  StyledVehicleModel,
} from "../Styles/Styles";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [currentVehiclePage, setCurrentVehiclePage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/vehicles/?page=${currentVehiclePage}`)
      .then((response) => {
        setVehicles(response.data.results);
      });
  }, [currentVehiclePage]);
  console.log(vehicles);
  const nextPage = () => {
    setCurrentVehiclePage(currentVehiclePage + 1);
    if (currentVehiclePage > 3) {
      setCurrentVehiclePage(1);
    }
  };
  return (
    <>
      <Layout />
      <StyledVehicleList className="vehicles">
        {vehicles.length === 0 && <StyledLoading>Loading...</StyledLoading>}
        {vehicles.map((vehicle, i) => {
          return (
            <StyledVehicles key={i}>
              <StyledVehicleName>{vehicle.name}</StyledVehicleName>
              <StyledVehicleModel>Model: {vehicle.model}</StyledVehicleModel>
            </StyledVehicles>
          );
        })}
      </StyledVehicleList>
      <button onClick={nextPage}>Next Page</button>
    </>
  );
};

export default Vehicles;
