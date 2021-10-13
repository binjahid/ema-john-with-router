import { useContext } from "react";
import AuthProvider from "../components/context/Context";

const useAuth = () => {
  useContext(AuthProvider);
};

export default useAuth;
