import {useState, useCallback} from 'react'

const useFormDetails = (initialValue) => {
  const [state, setState] = useState(initialValue)

  const setFormDetails = useCallback((key, value)=>{
    setState(oldState => ({
      ...oldState,
      [key]: value,
    }))
  }, [])

  return [state, setFormDetails]
}

export default useFormDetails
