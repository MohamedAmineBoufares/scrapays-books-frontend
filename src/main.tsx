import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-k8wbbz42i02u886i.us.auth0.com"
      clientId="SsOmkf9dobWsHuGwHWtXMUoJ2gX9Bsv3"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider>
        <App />
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
