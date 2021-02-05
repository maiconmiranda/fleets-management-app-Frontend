import car_on_road from "../../assets/car_on_road.svg";
import { useLocation } from "react-router-dom";

export function DashGreeting(props) {
  const location = useLocation();
  console.log(location);

  return (
    <div className="main__title">
      <img src={car_on_road} alt="car_on_road" />
      <div className="main__greeting">
        <h1>Hello "Company Name"</h1>
        <p>Welcome to your admin dashboard</p>
      </div>
    </div>
  );
}
