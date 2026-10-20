import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

//Header
import Header from "./components/Header";

import Body from "./components/Body";

const AppLayout = () => {

  useEffect(()=> {
    console.log('useEffect run')
  },[])

  console.log("body rendered")
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  //
  <AppLayout />,
);
