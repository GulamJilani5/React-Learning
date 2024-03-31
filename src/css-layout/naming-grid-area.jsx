import React from "react";

export default function NamingGridArea() {
  return (
    <>
      <style>
        {`
          /* Internal CSS styles */
          .container {
            max-width: 100%;
            display: grid;
            grid-template-rows: 100px 200px 400px 100px ;
            grid-template-columns: repeat(3, 1fr) 150px;
            gap: 30px;
               
            grid-template-areas: "head head head head"
                                 "box box box side"
                                 "main main main side"
                                 "foot foot foot foot";
          }
          .container > *{
            color:white;
            background-color:red;
          }
          .header{
               grid-area:head;   
        }
        .small-box{ 
           grid-area:box;       
        }
        .sidebar{      
          grid-area:side;
        }
        .main-content{
          grid-area:main; 
        }
        .footer{
          grid-area:foot;
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
