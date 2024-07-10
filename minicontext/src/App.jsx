import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./assets/context/UserContextProvider";
import Login from "./assets/components/Login";
import Profile from "./assets/components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>react with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
