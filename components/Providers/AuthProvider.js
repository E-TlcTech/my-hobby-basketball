"use client";
import { createContext, useEffect, useState, useContext } from "react";
export const useAuth = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return { session, status };
};
export const authProvider = createContext();
export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      setStatus(sessionData ? "authenticated" : "unauthenticated");
    };

    fetchSession();
  }, []);

  return (
    <authProvider.Provider value={{ session, status }}>
      {children}
    </authProvider.Provider>
  );
};
