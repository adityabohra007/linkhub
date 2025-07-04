import { checkAuthStatus, loginUser } from "@/utils/api-communicators";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type user = { email: string; name: string };

type UserAuth = {
  isLoggedIn: boolean;
  user: user | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<user | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // fetch if users cookies are valid then skip login
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({
          email: data.email,
          name: data.name,
        });
      }
      setIsLoggedIn(true);
    }
    checkStatus();
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };
  const signup = async (name: string, email: string, password: string) => {};
  const logout = async () => {};
  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
