/*******************************************************************************************************
/******************************************************************************* 
/*************************************** useMemo() with Real world use case
 ******************* 1)Use Case - Online Approval System Dashboard Statistics
 ******************* 1)Use Case - Expensive Value Computation 
/******************************************************************************* 
/*******************************************************************************************************/

// import React, { useState, useMemo } from 'react';

// function UseMemo() {
//   const [number, setNumber] = useState(0);

//   const squaredNumber = useMemo(() => {
//     console.log("Calculating squared number...");
//     return number ** 2;
//   }, [number]);

//   return (
//     <div>
//       <p>Number: {number}</p>
//       <p>Squared Number: {squaredNumber}</p>
//       <button onClick={() => setNumber(number + 1)}>Increment</button>
//     </div>
//   );
// }

// export default UseMemo;

/*****************************************************************************************************
 
Real World Use Cases

1)Use Case - Online Approval System Dashboard Statistics
Scenario: In the online insurance approval system, there's a dashboard that displays statistics 
          about the applications, such as the number of approved, pending, and rejected applications.
Problem: Without useMemo, the statistics calculation runs on every render, even if the application data 
         hasn't changed.

1)Use Case - Expensive Value Computation       
Scenario: You have a component that displays a list of expensive-to-compute values, such as filtered or sorted data.
Problem: Without useMemo, the expensive computation runs on every render, even if the input data hasn't changed.

 *****************************************************************************************************/

///// 1) Use Case - Online Approval System Dashboard Statistics

// import React, { useState, useMemo } from "react";
// const Dashboard = () => {
//   const [applications, setApplications] = useState([
//     { status: "approved" },
//     { status: "pending" },
//     { status: "rejected" },
//     /***** large dataset *****/
//   ]);

//   const statistics = useMemo(() => {
//     console.log("Calculating statistics");
//     return {
//       approved: applications.filter((app) => app.status === "approved").length,
//       pending: applications.filter((app) => app.status === "pending").length,
//       rejected: applications.filter((app) => app.status === "rejected").length,
//     };
//   }, [applications]);

//   return (
//     <div>
//       <p>Approved: {statistics.approved}</p>
//       <p>Pending: {statistics.pending}</p>
//       <p>Rejected: {statistics.rejected}</p>
//     </div>
//   );
// };
// export default Dashboard;

///// 1) Use Case - Expensive Value Computation

import React, { useState, useMemo } from "react";
const ExpensiveComponent = () => {
  const [data, setData] = useState([
    /***** large dataset *****/
  ]);
  const [query, setQuery] = useState(""); // query here means input value in the input box

  const filteredData = useMemo(() => {
    console.log("Filtering data");
    return data.filter((item) => item.includes(query));
  }, [data, query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveComponent;
