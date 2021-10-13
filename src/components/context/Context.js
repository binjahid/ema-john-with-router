import { createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  <AuthContext.Provider>{children}</AuthContext.Provider>;
};
export default AuthProvider;
