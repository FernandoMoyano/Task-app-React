import { useEffect, useState } from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        /* Local storage */
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem('TODOS_V1', JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 2000)
  }, [itemName, initialValue])

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading, error }
}

export default useLocalStorage
