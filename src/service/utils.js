import Cookies from "js-cookie";
import { useState, useCallback, useEffect } from 'react';



export function useCookie(name) {
  const [value, setValue] = useState(() => {
    return Cookies.get(name) || null;
  });

  const deleteCookie = useCallback(() => {
    setValue(null);
  }, [name]);

  useEffect(() => {
    const checkCookie = () => {
      const newValue = Cookies.get(name);
      if (newValue !== value) {
        setValue(newValue || null);
      }
    };

    // Check cookie value periodically
    const intervalId = setInterval(checkCookie, 1000);

    // Also check when the window regains focus
    window.addEventListener('focus', checkCookie);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('focus', checkCookie);
    };
  }, [name, value]);

  return [value, deleteCookie];
}
