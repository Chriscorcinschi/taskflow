import { Outlet, Link } from "react-router-dom";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "../color-mode";
import { Logo } from "../navBar/Logo";
import { IoIosLogOut } from "react-icons/io";
import { LogoutButton } from "../../../features/auth/components/LogoutButton";

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
