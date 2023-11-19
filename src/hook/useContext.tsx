import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserContextProps {
  children: ReactNode;
}

interface UserData {
  name: string;
  id: string;
}

const UserContext = createContext<UserData | null>(null);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // 서버에 사용자 정보를 가져오는 API 요청
      fetch("서버_API_URL/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
