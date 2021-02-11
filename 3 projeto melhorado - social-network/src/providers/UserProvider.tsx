/* eslint-disable no-useless-catch */
import { useState, createContext, useCallback } from 'react';
import api from '../utils/api';
import { saveUserToStorage } from '../utils/userStorage';
import { User } from '../models';

type Authenticate = (formDetails: {
  email: string;
  password: string;
}) => Promise<boolean>;

type SetUser = (user: User) => void;

export interface UserContextData {
  user: User | null;
  authenticate: Authenticate;
  setUser: SetUser;
}
const UserContext = createContext({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const [userState, setUserState] = useState<User | null>(null);

  const setUser: SetUser = useCallback((user: User) => {
    api.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          Authorization: 'Bearear saçlkdasmsdakjnkdj sandksjnas-assasa',
        },
      }),
      (error) => Promise.reject(error),
    );

    setUserState(user);
  }, []);

  const authenticate: Authenticate = useCallback(
    async (formDetails: { email: string; password: string }) => {
      try {
        const response = await api.get('users');

        const user = response.data.find(
          (userData: User) =>
            userData.email === formDetails.email &&
            userData.password === formDetails.password,
        );

        saveUserToStorage(user);

        setUser(user);
        return !!user;
      } catch (error) {
        throw error;
      }
    },
    [setUser],
  );

  return (
    <UserContext.Provider value={{ user: userState, authenticate, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export { UserContext };
