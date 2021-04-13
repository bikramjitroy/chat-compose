import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  return (
    <>
      
      <div className="blockelem noselect block userInput">
      <Handle type="target" id="a" position="top" style={{ borderRadius: 0 }} />
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
            id="b"
            position="bottom"
            style={{ borderRadius: 0 }}
          />
          <Handle
            type="target"
            id="c"
            position="right"
            style={{ top: '50%', borderRadius: 0  }}
          />
          <Handle
            type="target"
            id="d"
            position="left"
            style={{ top: '50%', borderRadius: 0  }}
          />
    </div>
      
    </>
  );
});