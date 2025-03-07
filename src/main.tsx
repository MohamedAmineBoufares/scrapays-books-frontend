import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Toaster } from "./components/ui/toaster.tsx";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ApolloProvider client={client}>
        <Provider>
          <Toaster />
          <App />
        </Provider>
      </ApolloProvider>
    </Auth0Provider>
  </StrictMode>
);
