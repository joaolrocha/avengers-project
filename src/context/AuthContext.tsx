import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { generateHash } from '../utils/hashUtils';

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
  user: string | null;
  userHash: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [userHash, setUserHash] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedUserHash = localStorage.getItem('userHash');
    if (storedUser && storedUserHash) {
      setIsLoggedIn(true);
      setUser(storedUser);
      setUserHash(storedUserHash);
    }
  }, []);

  const login = (username: string, password: string) => {
    const userHash = generateHash(username);
    localStorage.setItem('user', username);
    localStorage.setItem('userHash', userHash);
    setIsLoggedIn(true);
    setUser(username);
    setUserHash(userHash);
  };

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userHash');
    setIsLoggedIn(false);
    setUser(null);
    setUserHash(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, user, userHash }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
