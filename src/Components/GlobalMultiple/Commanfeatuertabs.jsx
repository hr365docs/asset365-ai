import React, { useState } from 'react';
const Commanfeatuertabs = (props) => {
  const [activeTab, setActiveTab] = useState(props?.tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      {/* <div className='featuerheadding'>Features of Performance Management 365</div> */}
      <div className="tabs">
        
        {/* <span> */}
        {props?.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab.id === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </button>
        ))}
        {/* </span> */}
      </div>
      <div className="tab-content-container">
        <div className="tab-image">
          <img src={activeTab.image} alt={activeTab.title} />
        </div>
        <div className="tab-content ">
          <h2>{activeTab.Heading}</h2>
          <p>{activeTab.content}</p>
        </div>
       
      </div>
    </div>
  );
};

export default Commanfeatuertabs;
