////////////////////////////////
//////////// 
import React from "react";
import { useState } from "react";

export default function Accordion({ items }) {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (index) => {
    // setActiveTab(index);
    setActiveTab(index === activeTab ? null : index);
  };
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <li style={{ listStyleType: "none" }}>
            <button onClick={() => handleClick(index)}>
              {item.title} <span>&#8964;</span>
            </button>
          </li>
          {index === activeTab && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
}
