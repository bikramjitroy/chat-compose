import React, { memo } from 'react';

import { Handle } from 'react-flow-renderer';

export default memo(({ data }) => {
  return (
    <>
      
      <div className="blockelem noselect block botInput">
      <Handle type="target" position="top" style={{ borderRadius: 0 }} />
            <div className={data.class||'blockyBlue'}>
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
        style={{ borderRadius: 0 }}
      />
      {/* <Handle
        type="target"
        position="right"
        id='b'
        style={{ top: 10, background: '#555' }}
      />
      <Handle
        type="target"
        position="right"
        id='c'
        style={{ bottom: 10, top: 'auto', background: '#555' }}
      /> */}
    </div>
      
    </>
  );
});