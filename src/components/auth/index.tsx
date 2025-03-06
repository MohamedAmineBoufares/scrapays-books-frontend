import { useAuth0 } from "@auth0/auth0-react";
import { Button, Text } from "@chakra-ui/react";

function Auth() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="h-screen flex flex-col items-center justify-center w-full gap-20">
      <Text textStyle="4xl" fontWeight="extrabold">
        Welcome to the Scrapays Books Dashboard
      </Text>
      <Button bg="purple.600" onClick={() => loginWithRedirect()} width="1/4">
        <Text fontWeight="extrabold" color="white">
          Login
        </Text>
      </Button>
    </div>
  );
}

export default Auth;
