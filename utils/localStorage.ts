import { useState, useEffect } from "react";

export function useLocalStorage(
  key: string,
  initialValue: any
): [any, (value: any) => void, () => void] {
  const [value, setValue] = useState<any>(initialValue);

  useEffect(() => {
    function getSavedValue(key: string, initialValue: any) {
      console.log({ key, initialValue });
      const savedValue = localStorage.getItem(key);
      // console.log("savedValue", savedValue);

      const parsedValue = savedValue !== null && JSON.parse(savedValue);
      // console.log("parsedValue", savedValue);

      if (parsedValue) return parsedValue;

      return initialValue;
    }

    console.log("getSavedValue", getSavedValue(key, initialValue));

    return setValue(getSavedValue(key, initialValue));
  }, []);

  useEffect(() => {
    // Update localStorage when the value changes
    console.log("🟢 updating local storage");

    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, setValue, clearValue];
}
