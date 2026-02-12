import { Outlet, Link } from "react-router-dom";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";
import { Logo } from "../ui/navBar/logo";
import { IoIosLogOut } from "react-icons/io";
import { LogoutButton } from "../auth/LogoutButton";

export function RootLayout() {
   return (
      <Flex minH="100vh" direction="column">
         <Flex
            as="header"
            p={4}
            borderBottom="1px solid"
            borderColor="gray.200"
         >
            <Logo />
            <Link to="/">Dashboard</Link>

            <Spacer />
            <Flex gap={3} align="center">
               <ColorModeButton />
               <LogoutButton />
            </Flex>
         </Flex>

         <Box as="main" flex="1" p={6}>
            <Outlet />
         </Box>
      </Flex>
   );
}
