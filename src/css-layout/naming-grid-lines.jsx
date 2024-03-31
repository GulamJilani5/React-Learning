import React from "react";

export default function NamingGridLines() {
  return (
    <>
      <style>
        {`
          /* Internal CSS styles */
          .container {
            width: 100%;
            margin: 30px auto;
            display: grid;
            grid-template-rows: [header-start] 100px [header-end box-start] 200px [box-end main-start]
                                400px [main-end footer-start] 100px [footer-end];
            grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end];
            grid-gap: 30px;
          }
          .container > *{ 
            color:white;
            background-color:red;
          }
          .header{
            grid-column: col-start 1 / grid-end; 
            // place-items: center; 
            text-align: center;       
          
        }
        .small-box{ 
            text-align: center;       
            
        }
        .sidebar{
            grid-column: col-end 3 / grid-end;
            // grid-row: box-start / span 2;
            grid-row: box-start / main-end;
            text-align: center;            
        } 
         
        .main-content{
            grid-column: col-start 1 / col-end 3;
            grid-row: 3/4; 
            // place-items: center; 
            
            text-align: center;       
           
        }
        .footer{
            grid-column: col-start 1/ grid-end; 
            // place-items: center; 
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
