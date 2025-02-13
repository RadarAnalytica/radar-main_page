import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { URL } from './config';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useCookie } from '../service/utils';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const decode = (token) => {
    try {
      if (!!token) {
        return jwtDecode(token);
      }
      return;
    } catch (error) {
      console.error('Error decoding token:', error);
      // deleteCookie('radar');
      return null;
    }
  };

  const [value, deleteCookie] = useCookie('radar');
  const [authToken, setAuthToken] = useState();

  const [user, setUser] = useState(decode(value));






  const contextData = useMemo(
    () => ({
    }),
    [user, authToken]
  );



  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
