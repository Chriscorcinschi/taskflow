import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../features/AuthContext";
import { IoIosLogOut } from "react-icons/io";

export function LogoutButton() {
   const { logout, user } = useAuthContext();
   const navigate = useNavigate();

   const handleLogout = () => {
      logout();
      navigate("/login");
   };

   return user ? (
      <Button variant="outline" size="sm" onClick={handleLogout}>
         Logout
         <IoIosLogOut />
      </Button>
   ) : null;
}
