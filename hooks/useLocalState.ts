"use client"

import { useState, useEffect } from "react"

export function useLocalState<T>(name: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem(name);
      if (saved) {
        return JSON.parse(saved)
      } else {
        return initialValue
      }
    } else {
      return initialValue
    }
  });


  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(value));

    console.log(localStorage.getItem(name))
  }, [value])

  return [value, setValue];
}