import { useCallback } from "react";
import { useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, headers, body });

        if (!response.ok) {
          throw new Error(`Couldn't fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        setLoading(false);
        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(false), []);

  return { request, loading, error, clearError };
};
