import car_on_road from "../../assets/car_on_road.svg";
import { GetCompany } from "../createCompany/getCompany";



export function DashGreeting() {

  const company = GetCompany()


  return (
    <div className="main__title">
      <img src={car_on_road} alt="car_on_road" />
      <div className="main__greeting">
        <h1>Hello {company[2]}</h1>
        <p>Welcome to your admin dashboard, as {company[0]}</p>
      </div>
    </div>
  );
}
