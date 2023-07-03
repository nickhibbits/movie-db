import { useState, useEffect } from "react";

export function useLocalStorage(
  key: string,
  initialValue: any
): [any, (value: any) => void, () => void] {
  const [value, setValue] = useState<any>(initialValue);

  useEffect(() => {
    function getSavedValue(key: string, initialValue: any) {
      const savedValue = localStorage.getItem(key);
      const parsedValue = savedValue !== null && JSON.parse(savedValue);

      if (parsedValue) return parsedValue;

      return initialValue;
    }

    const savedValue = getSavedValue(key, initialValue);

    // When logged in auth data has already been stored in localStorage
    // If user refreshes page, update the state to match info stored in localStorage, persisting the session
    if (savedValue !== null) {
      return setValue(getSavedValue(key, initialValue));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when the value changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clearValue];
}
