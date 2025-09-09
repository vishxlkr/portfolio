import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1FBNDZ2GT8"); // your Measurement ID
ReactGA.send("pageview");

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <App />
   </StrictMode>
);
