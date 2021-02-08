import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboardLink/Dashboard";
import { Home } from "./components/home/Home";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { LogIn } from "./components/logIn/LogIn";
import { CreateAccount } from "./components/signUp/CreateAccount";
import { SignUp } from "./components/signUp/SignUp";
import { CreateCompany } from "./components/createCompany/CreateCompany";
import UpdateCompany from "./components/createCompany/DashUpdateCompany";
import ViewAllDrivers from "./components/driverCompanyDash/DashViewAllDrivers";
import ViewDriver from "./components/driverCompanyDash/DashViewOneDriver";
import ViewAllVehicles from "./components/vehicle/DashViewFleet";
import AddVehicles from "./components/vehicle/DashAddVehicle";
import EditVehicles from "./components/vehicle/DashEditVehicle";
import ViewOneVehicle from "./components/vehicle/DashViewOneVehicle";
import DisplayAssignDriver from "./components/assignDriver/DashAssignDriverToVehicle";
import ViewReports from "./components/viewReports/DashViewReports";
import DashDailyTrack from "./components/viewDailyTracks/DashDailyTrack";
import DashReportByVehicle from "./components/dailytrackByVehicle/DashReportByVehicle";
import { GetCompany } from './components/createCompany/getCompany';
import DashDailyReports from './components/viewDailyReports/DashDailyReports';
import DashDailyTrackVehicle from './components/viewDailyTracks/DashDailyTrackVehicle';
import DashIncidents from './components/incidents/DashIncidents';


const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/company" component={Dashboard} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/login" component={LogIn} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/create-company" component={CreateCompany} />
      <Route path="/company-details" component={GetCompany} />


      <Route path="/update-company/:id" component={UpdateCompany} />

      <Route path="/view-all-drivers" component={ViewAllDrivers} />
      <Route path="/view-driver" component={ViewDriver} />

      <Route path="/view-all-vehicles" component={ViewAllVehicles} />
      <Route path="/add-vehicle" component={AddVehicles} />
      <Route path="/edit-vehicle/" component={EditVehicles} />
      <Route path="/view-vehicle/:id" component={ViewOneVehicle} />
      <Route path="/assign-driver" component={DisplayAssignDriver} />

      <Route path="/view-reports" component={ViewReports} />

      <Route path="/view-daily-track" component={DashDailyTrack} />
      <Route path="/view-daily-track-vehicle" component={DashDailyTrackVehicle} />


      <Route path="/daily-report-vehicle" component={DashReportByVehicle} />
      <Route path="/view-daily-report" component={DashDailyReports} />

      <Route path="/view-incidents" component={DashIncidents} />
    </Switch>
  );
};

export default App;
