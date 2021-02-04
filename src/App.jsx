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

      <Route path="/update-company" component={UpdateCompany} />
      <Route path="/view-all-drivers" component={ViewAllDrivers} />
    </Switch>
  );
};

export default App;
