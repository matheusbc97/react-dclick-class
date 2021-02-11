import {useState, createContext, useCallback} from 'react'
import api from '../utils/api'
import {saveUserToStorage} from '../utils/userStorage'

const UserContext = createContext({})

const UserProvider = ({children}) => {
  const [userState, setUserState] = useState(null);

  const setUser = useCallback((user) => {
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
  }, [])

  const authenticate = useCallback(
    async (formDetails) => {
      try {
        const response = await api.get('users');

        const user = response.data.find(
          (userData) =>
            userData.email === formDetails.email &&
            userData.password === formDetails.password,
        );

        saveUserToStorage(user);

        setUser(user)
        return !!user;
      } catch (error) {
        throw error;
      }

    },
    [],
  )

  return (
    <UserContext.Provider
      value={{user: userState, authenticate, setUser}}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
export {UserContext}
