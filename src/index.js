import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
const baseurl = process.env.REACT_APP_DOMAIN
const client = process.env.REACT_APP_CLIENT

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <React.StrictMode>
    <Auth0Provider
    domain = {`${baseurl}`}
    clientId = {`${client}`}
    authorizationParams={{
      redirect_uri:"http://localhost:3000"
    }}
    audience = "http://localhost:4996"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
