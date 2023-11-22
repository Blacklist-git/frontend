// UserContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

interface UserContextProps {
  children: ReactNode;
}

interface UserData {
  username: string;
  id: string;
}

const UserContext = createContext<UserData | null>(null);

const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const fetchUserInfo = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const response = await fetch("http://127.0.0.1:8000/server/user/info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }

      const userInfo = await response.json();
      console.log("userInfo : " + userInfo.username);
      setUserData(userInfo);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }, []);

  useEffect(() => {
    const isAuthenticated = !!localStorage.getItem("token");

    if (isAuthenticated) {
      fetchUserInfo();
    }
  }, [fetchUserInfo]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
