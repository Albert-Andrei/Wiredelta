import { useState, useEffect, useRef } from 'react';

export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState<T>();

  useEffect(() => {
    const stored = localStorage.getItem(key) as T;

    if (!stored) {
      return;
    }

    setValue(stored ? stored : fallbackValue);
  }, []);

  useEffect(() => {
    if (!value) {
      return;
    }

    console.log('---> value', { value });

    localStorage.setItem(key, `${value}`);
  }, [value]);

  return [value, setValue] as const;
}
