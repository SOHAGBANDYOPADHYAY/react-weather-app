import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
return (
<React.Fragment>
<div className="container">
<CurrentLocation />
</div>
<div className="footer-info">
<a href="https://github.com/SOHAGBANDYOPADHYAY/react-weather-app">
Download Source Code
</a>{" "}
| Developed by{" "}
Sohag Bandyopadhyay
  </div>
</React.Fragment>
);
}

export default App;