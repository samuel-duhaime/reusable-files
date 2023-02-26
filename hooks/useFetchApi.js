import { useState, useEffect } from "react";

// Custom hook to fetch the API with useEffect
const useFetchApi = ({ apiUrl }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Fetch the data
    fetch(apiUrl)
      .then((res) => res.json()) // Send the result to the next line
      .then((newRes) => {
        const { status, message, data } = newRes;
        console.log(newRes);

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
  }, []);

  return [state, setState];
};

export default useFetchApi;
