import { Avatar, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { LuMoon, LuSun, LuPower } from "react-icons/lu";
import { Tooltip } from "../ui/tooltip";

function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      marginBottom={20}
    >
      <HStack>
        <Avatar.Root size="2xl">
          <Avatar.Fallback name="Dan Abramov" />
          <Avatar.Image src="https://bit.ly/dan-abramov" />
        </Avatar.Root>

        <Stack gap={1}>
          <Text textStyle="4xl" fontWeight="extrabold">
            Welcome back Dan 👋
          </Text>
          <Text
            textStyle="sm"
            color={isDarkMode ? "white" : "gray"}
            fontWeight="extrabold"
          >
            Admin
          </Text>
        </Stack>
      </HStack>

      <HStack gap={5}>
        <Tooltip
          content={`Turn ${isDarkMode ? "light" : "dark"} mode`}
          positioning={{ placement: "top" }}
          openDelay={0}
          closeDelay={0}
        >
          <IconButton onClick={toggleColorMode} variant="ghost" size="sm">
            {isDarkMode ? <LuSun /> : <LuMoon />}
          </IconButton>
        </Tooltip>

        <Tooltip
          content="Logout"
          positioning={{ placement: "top" }}
          openDelay={0}
          closeDelay={0}
        >
          <IconButton variant="ghost" size="sm">
            <LuPower />
          </IconButton>
        </Tooltip>
      </HStack>
    </HStack>
  );
}

export default Header;
