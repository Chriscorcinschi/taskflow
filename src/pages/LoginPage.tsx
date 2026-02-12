import { useState } from "react";
import { useAuthContext } from "../features/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Box, Center, Text } from "@chakra-ui/react";
import { LoginForm } from "../components/auth/LoginForm";
import type { LoginPayload } from "../types/auth";

export const LoginPage = () => {
   const { login } = useAuthContext();
   const navigate = useNavigate();

   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleLogin = async (payload: LoginPayload) => {
      try {
         setLoading(true);
         await login(payload);
         navigate("/");
      } catch {
         setError("Invalid credentials");
      } finally {
         setLoading(false);
      }
   };

   return (
      <Center minH="90vh">
         <Box w="sm" p={6} borderWidth="1px" rounded="md">
            <LoginForm
               onSubmit={handleLogin}
               isLoading={loading}
               error={error}
            />

            <Text textStyle="xs" mt={4}>
               Don't have an account?
               <Box
                  as="span"
                  ml={2}
                  display="inline-block"
                  color={"blue.600"}
                  fontWeight={500}
               >
                  <Link to="/">Sign Up</Link>
               </Box>
            </Text>
         </Box>
      </Center>
   );
};
