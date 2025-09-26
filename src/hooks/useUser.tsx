"use client";
import { useEffect, useState } from "react";

export interface User {
  fullName: string;
  storeName: string;
  email: string;
  password: string;
  image?: string | null;
}

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return user;
};

export default useUser;
