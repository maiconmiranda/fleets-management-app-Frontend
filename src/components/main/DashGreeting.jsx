import car_on_road from "../../assets/car_on_road.svg";

export function DashGreeting() {
  return (
    <div className="main__title">
      <img src={car_on_road} alt="car_on_road" />
      <div className="main__greeting">
        <h1>Hello "User Name"</h1>
        <p>Welcome to your admin dashboard</p>
      </div>
    </div>
  );
}
