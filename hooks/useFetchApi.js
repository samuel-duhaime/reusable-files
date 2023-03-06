import { useState, useEffect } from "react";

// Custom hook to fetch the API with useEffect
const useFetchApi = ({ apiUrl }) => {
  const [state, setState] = useState(null);
  const [isRefetch, setIsRefetch] = useState(false);

  // Usefull to refetch data
  const refetch = () => {
    setIsRefetch(!isRefetch);
  };

  useEffect(() => {
    // Fetch the data
    fetch(apiUrl)
      .then((res) => res.json()) // Send the result to the next line
      .then((data) => {
        const { status, message, data } = data;

        /* Check data status */
        if (status === 200) {
          setState(data); // For success status
        } else if (status !== 200) {
          throw new Error(message); // For error status
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isRefetch]);

  return [state, setState, refetch];
};

export default useFetchApi;
