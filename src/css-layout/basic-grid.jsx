import React from "react";

export default function BasicGrid() {
  return (
    <>
      <style>
        {`
          /* Internal CSS styles */
          .container {
            max-width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr) 150px;
            // background-color: red;
            gap: 20px;
            // horizontally and vertically center the grid items within the grid cells.
            // place-items: center;  // Only apply to the grid container
            // horizontally center the grid container itself within its 
            // containing block(if no parent container then it will be <body> tag).
            // margin: 30px auto;
          }
          .container > *{
            color:white;
            background-color:red;
          }
          .header{
            grid-column: 1/-1;     
            text-align: center;       
        }
        .small-box{ 
            text-align: center;       
        }
        .sidebar{
            grid-column: 4/5;
            // grid-row: 2/4;
            grid-row: 2 / span 2;
            text-align: center;       
            
        }
         
        .main-content{
            grid-column: 1/4;
            grid-row: 3/4; 
            text-align: center;       
           
        }
        .footer{
            grid-column: 1/-1; 
            text-align: center;       
        }
        `}
      </style>
      <div className="container">
        <div className="header">Header</div>
        <div className="small-box">Small Box 1</div>
        <div className="small-box">Small Box 2</div>
        <div className="small-box">Small Box 3</div>
        <div className="sidebar">Sidebar</div>
        <div className="main-content">Main Content</div>
        <div className="footer">Footer</div>
      </div>
    </>
  );
}
