import { useState, useCallback } from 'react'

function useAdd(valueToAdd=0){
    const [value, setValue] = useState(0)
  
    const changeValue = useCallback(() => {
        setValue(oldState => oldState + valueToAdd)
    }, [setValue, valueToAdd])

    return [value, changeValue];
}

export default useAdd;