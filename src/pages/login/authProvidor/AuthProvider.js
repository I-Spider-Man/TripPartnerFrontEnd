
import { createContext,  useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const handleLogin = () => {
    setAuth(true);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
