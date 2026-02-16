import type { LoginPayload, AuthResponse } from "../types/auth";

export const loginRequest = async (
   payload: LoginPayload,
): Promise<AuthResponse> => {
   await new Promise((res) => setTimeout(res, 800));

   if (payload.email === "test@test.com" && payload.password === "12345")
      return {
         token: "fake-mock-token",
         user: {
            id: "1",
            email: payload.email,
            name: "Test User",
         },
      };

   throw new Error("Invalid credentials");
};
