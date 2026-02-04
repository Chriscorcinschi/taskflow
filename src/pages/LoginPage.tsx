import { useState } from "react";
import { useAuthContext } from "../features/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
   const { login } = useAuthContext();
   const navigate = useNavigate();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
         await login({ email, password });
         navigate("/");
      } catch (error) {
         setError("Login fallito");
      }
   };

   return (
      <form
         onSubmit={handleSubmit}
         className="max-w-md mx-auto mt-20 flex flex-col gap-4 "
      >
         <input
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
         />
         <input
            className="border-2 border-gray-300 p-2 rounded-md"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />

         {error && <p className="text-red-500">{error}</p>}

         <button className="bg-blue-600 text-white p-2 rounded-md cursor-pointer mt-3">
            Login
         </button>
      </form>
   );
};
