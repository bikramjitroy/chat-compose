import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  return (
    <>
      
      <div className="blockelem noselect block userInput">
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
            <div className={data.class||'blockyGreen'}>
              <div className="blockyleft">
              <img src={`assets/${data.image.split('.').join('blue.')}`} alt={data.image}/>
              <p className="blockyname">{data.label}</p>
              </div>
            </div>
            {/* <div className="blockyright">
                <img src="assets/more.svg" alt="1"/>
            </div> */}
            <div className="blockydiv">
            </div>
            <div className="blockyinfo">
              {data.description}
            </div>
      <Handle
        type="source"
        position="bottom"
        id="a"
        style={{ borderRadius: 0 }}
      />
    </div>
      
    </>
  );
});