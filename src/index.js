import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import PokeProvider from "./context/PokeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PokeProvider>
      <Auth0Provider
        domain="dev-gnw5tr-c.us.auth0.com"
        clientId="gOJMcSwhKCyL8bBJROtAzui2wq3guXpa"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </PokeProvider>
  </React.StrictMode>
);
