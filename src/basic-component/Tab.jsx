import React, { useState } from "react";

export default function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
          {tab.id}
        </button>
      ))}
      {tabs.map((tab) => (
        <div key={tab.id}>
          {tab.id === activeTab && <p>{tab.content}</p>}
        </div>
      ))}
    </>
  );
}
