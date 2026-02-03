import type { User } from "./user";

//Separation of payload from response.

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
