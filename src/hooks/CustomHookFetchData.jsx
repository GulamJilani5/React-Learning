/*******************************************************************************************************
/******************************************************************************* 
/*************************************** Custom Hook for to fetch API DAta
 ***********We can put the 'useFetch' and 'CustomHookFetchData' into separate files for better file structure.
/******************************************************************************* 
/*******************************************************************************************************/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////// METHOD 1 - CHATGPT WAY
////////////////// *** REDNERING ISSUE IS THERE. I HAVE TO LEARN, UNDERSTAND AND SOLVE
///////////////// - SOLUTION FOR RENDERING IS GUARD CLAUSE TO CHECK IF DATA IS UNDEFIND THEN RETURN NOTHING

// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//      const[data, setData] = useState();
//      const[loading, setLoading] = useState(false)

//     useEffect(()=>{
//         const fetchData = async () => {
//             try {
//                 setLoading(true)
//                 const response = await fetch(url)
//                 // console.log(response)
//                 const data = await response.json();
//                 setData(data);
//                 setLoading(false)

//             } catch (error) {
//                 console.log(error)
//                 setData();
//                 setLoading(false)
//             }
//         }
//        fetchData()
//        //fetchData("https://jsonplaceholder.typicode.com/users/1")
//     }, [url])
//  return {data, loading}
// }

// function CustomHookFetchData (){
//   const url = "https://jsonplaceholder.typicode.com/users/1";
//   const {data, loading} = useFetch(url)
// //   console.log('laoding ',data)
// //   console.log('Data ',data)

//   // ***Guard Clause
//   if(data === undefined) return

//   if (loading) {
//       return <p>Loading...</p>;
//     }

//      // ***Guard Clause
//   if(data === undefined) return

//     const{name, email, phone} = data;

//     // Nested Destructuring
//     const { address: {street, city, zipcode} } = data;
//     return(
//         <div>
//             <h1> Custom Hook for fetching data from API</h1>
//             <p>
//         <b>Name: </b>
//         {name}
//         </p>
//         <p>
//           <b>Email: </b>
//            {email}
//         </p>
//         <p>
//           <b>Phone Number: </b>
//           {phone}
//         </p>
//         <b>Address: </b>
//            {street} {city}, {zipcode}
//         </div>
//     )
// }
// export default CustomHookFetchData;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////// METHOD 2 - personal way
//////////// *** REDNERING ISSUE IS THERE. I HAVE TO LEARN, UNDERSTAND AND SOLVE - NOW RESOLVED USING GAURD CLAUSE
//////////// - SOLUTION FOR RENDERING IS GUARD CLAUSE TO CHECK IF DATA IS UNDEFIND THEN RETURN NOTHING
//////// We can put the 'useFetch' and 'CustomHookFetchData' into separate files for better file structure.
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setData();
      setLoading(false);
    }
  };
  // useEffect((url)=>{   // ***THERE SHOULD BE NO PARAMETER OTHERWISE IT WILL THROW ERROR
  useEffect(() => {
    fetchData(url);
    // fetchData("https://jsonplaceholder.typicode.com/users/1")
  }, []);

  return { data, loading };
};

function CustomHookFetchData() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const { data, loading } = useFetch(url);
  // console.log(data)
  // console.log(loading)
  if (loading) {
    return <p>Loading...</p>;
  }

  // ***Guard Clause
  if (data === undefined) return;

  const { name, email, phone } = data;
  // Nested Destructuring
  const {
    address: { street, city, zipcode },
  } = data;
  return (
    <div>
      <h1> Custom Hook for fetching data from API</h1>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Email :</b>
        {email}
      </p>
      <p>
        <b>Phone Number:</b>
        {phone}
      </p>
      <b>Address: </b>
      {street} {city}, {zipcode}
    </div>
  );
}
export default CustomHookFetchData;
