import {useContext} from 'react'
import {UserContext} from '../providers/UserProvider'

const useUser = () => {
  const context = useContext(UserContext)

  return context;
}

export default useUser;
