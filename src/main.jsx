import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { SneakersContextProvider } from "./store/sneakers-context";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <SneakersContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </SneakersContextProvider>
);
