import { useState, useEffect } from 'react';

// custom hook for using localStorage with React
export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState<T>();

  // update the value from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(key) as T;
    if (!stored) {
      return;
    }
    setValue(stored ? stored : fallbackValue);
  }, []);

  // update localStorage with the current value on update
  useEffect(() => {
    if (!value) {
      return;
    }
    localStorage.setItem(key, `${value}`);
  }, [value]);

  return [value, setValue] as const;
}
