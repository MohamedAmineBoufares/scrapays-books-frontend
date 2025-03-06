import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./components/dashboard";
import Auth from "./components/auth";
import { Spinner } from "@chakra-ui/react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return isAuthenticated ? <Dashboard /> : <Auth />;
}

export default App;
