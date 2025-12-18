//@@viewOn:imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CoinContextProvider } from "./context/CoinContext";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LeaderboardProvider } from "./context/LeaderboardContext";

//@@viewOn:render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ThemeProvider>
        <AuthProvider>
          <LeaderboardProvider>
            <CoinContextProvider>
              <App />
            </CoinContextProvider>
          </LeaderboardProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
//@@viewOff:render
