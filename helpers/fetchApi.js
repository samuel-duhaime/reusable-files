// Custom fetch API
const fetchApi = ({ apiUrl, method = "GET", body, successFn }) => {
  fetch(apiUrl, {
    method: method,
    /* Check if fetch need headers */
    ...(["POST", "PATCH", "PUT", "DELETE"].includes(method) && {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }),
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((res) => res.json()) // Send the result to the next line
    .then((newRes) => {
      const { status, message, data } = newRes;
      console.log(newRes);

      /* Check data status */
      if (status === 200) {
        successFn(); // For success status
      } else if (status !== 200) {
        throw new Error(message); // For error status
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApi;
