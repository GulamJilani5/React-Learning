import React, { useEffect, useState } from "react";

// const url = "https://dummyjson.com/users/1";
const url = "https://jsonplaceholder.typicode.com/users/1";

export default function FetchDataAPI() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      //console.log(response);
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        setIsLoading(true);
      } else {
        setUser(data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  if (isLoading) return <div>Loading..</div>;
  if (isError) return <div>try again...</div>;

  const {
    address: { street, suite, city, zipcode },
  } = user;
  return (
    <>
      <div>
        <h3>Fetching data from API</h3>
        <p>
          <b>Name: </b>
          {user.name}
        </p>
        <p>
          <b>Email :</b> {user.email}
        </p>
        <p>
          <b>Phone Number:</b> {user.phone}
        </p>
        <p>
          {/* <b>Address:</b> {user.address.street} {user.address.suite},
          {user.address.city}, {user.address.zipcode} */}
          <b>Address:</b>
          {street}
          {suite}, {city}, {zipcode}
        </p>
      </div>
    </>
  );
}
