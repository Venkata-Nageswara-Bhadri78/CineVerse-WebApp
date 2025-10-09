import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const APIKeyContext = createContext();

const backend_deployed_link = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const APIKeyProvider = ({ children }) => {
  const [apiKey, setApiKey] = useState('');
  // console.log(backend_deployed_link);
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch(`${backend_deployed_link}/get-tmdb-key`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();

        if (data.success && data.apiKey) {
          setApiKey(data.apiKey);
        //   console.log('TMDB API Key fetched:', data.apiKey);
        } else {
          console.error('Failed to fetch API key:', data);
        }
      } catch (error) {
        console.error('Error fetching API key:', error);
      }
    };

    fetchApiKey();
  }, []);

  return (
    <APIKeyContext.Provider value={apiKey}>
      {children}
    </APIKeyContext.Provider>
  );
};

// Custom hook for consuming the API key
export const useAPIKey = () => useContext(APIKeyContext);
