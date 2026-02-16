import { Button, Input, Stack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import type { LoginPayload } from "../types/auth";

interface Props {
   onSubmit: (payload: LoginPayload) => Promise<void>;
   isLoading?: boolean;
   error?: string;
}

export function LoginForm({ onSubmit, isLoading, error }: Props) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   return (
      <Stack gap={5}>
         <Heading size="md">Login</Heading>

         <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />

         <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         {error && (
            <Text textStyle="xs" color="red.500" fontWeight={600}>
               {error}
            </Text>
         )}

         <Button
            colorScheme="blue"
            onClick={() => onSubmit({ email, password })}
            isLoading={isLoading}
         >
            Login
         </Button>
      </Stack>
   );
}
