import React, {Component} from 'react';
import './../custom.css';
export class Left extends Component {
 
    render() {
        const onDragStart = (event, nodeType) => {
            event.dataTransfer.setData('application/reactflow', nodeType);
            event.dataTransfer.setData('title', event.target.getAttribute('title'));
        
            event.dataTransfer.effectAllowed = 'move';
        };
        return (
            <div id="Left" className='nested'>
            <div className="left-toolbar-region" id="left-toolbar-layout"><div className="left-toolbar right-toolbar--collapsible">
          <div id="toolbar-top-content" className="right-toolbar__body">
            <div id="people-list">
              <fieldset>
              <legend className="MuiFormLabel-root text-14"><div className="trpToolbarHeader" id="top-header">
                <h5 className="trpToolbarHeaderItem selected" id="people-header">
                Bot Sends
                </h5>
              </div></legend>
              <div className="trpToolbarList">
                <div className="trpToolbarListContent" id="people-roster">
                  <div>
                    <span className="frame-people">
                      <span id="roster-region"><ul id="roster-view" className="roster">
                      
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Text Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Text Node'/>
                              <div class="people-modal-result_label">Text</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Image Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Image Node'/>
                              <div class="people-modal-result_label">Image</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Document Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Document Node' />
                              <div class="people-modal-result_label">Document</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Audio Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Audio Node' />
                              <div class="people-modal-result_label">Audio</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Video Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Video Node'/>
                              <div class="people-modal-result_label">Video</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Location Node'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Location Node'/>
                              <div class="people-modal-result_label">Location</div>
                            </div>
                          </li>
                          
                          </ul></span>
                    </span>
                  </div>
                </div>
              </div>
              </fieldset>
            </div>
            <div id="people-list">
              <fieldset>
              <legend className="MuiFormLabel-root text-14"><div className="trpToolbarHeader" id="top-header">
                <h5 className="trpToolbarHeaderItem selected" id="people-header">
                Bot Receives
                </h5>
              </div></legend>
              
              <div className="trpToolbarList">
                <div className="trpToolbarListContent" id="people-roster">
                  <div>
                    <span className="frame-people">
                      <span id="roster-region"><ul id="roster-view" className="roster">
                          <li>
                            <div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='User Input'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10"  title='User Input'/>
                              <div class="people-modal-result_label">User Input</div>
                            </div>
                          </li>
                          <li>
                            <div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='Attribute'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Attribute'/>
                              <div class="people-modal-result_label">Attribute</div>
                            </div>
                          </li>
                          </ul></span>
                    </span>
                  </div>
                </div>
              </div>
              </fieldset>
            </div>
            <div id="people-list">
              <fieldset>
              <legend className="MuiFormLabel-root text-14"><div className="trpToolbarHeader" id="top-header">
                <h5 className="trpToolbarHeaderItem selected" id="people-header">
                Bot Action
                </h5>
              </div></legend>
              <div className="trpToolbarList">
                <div className="trpToolbarListContent" id="people-roster">
                  <div>
                    <span className="frame-people">
                      <span id="roster-region"><ul id="roster-view" className="roster">
                          {/* <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'default')}  draggable title='To Dialog'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='To Dialog'/>
                              <div class="people-modal-result_label">To Dialog</div>
                            </div>
                          </li> */}
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='Start'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Greeting Node Start' />
                              <div class="people-modal-result_label">Start</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='To Agent'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='To Agent'/>
                              <div class="people-modal-result_label">To Agent</div>
                            </div>
                          </li>
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='API calling'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='API calling'/>
                              <div class="people-modal-result_label">API calling</div>
                            </div>
                          </li>
                          {/* <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='Conditions'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Conditions'/>
                              <div class="people-modal-result_label">Conditions</div>
                            </div>
                          </li> */}
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='Coding'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Coding'/>
                              <div class="people-modal-result_label">Coding</div>
                            </div>
                          </li>
                          {/* <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'input')}  draggable title='Webhook'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Webhook'/>
                              <div class="people-modal-result_label">Webhook</div>
                            </div>
                          </li> */}
                          <li><div className="trpDisplayPicture dndnode input" onDragStart={(event) => onDragStart(event, 'output')}  draggable title='Close session'>
                              <img src="https://avatars1.githubusercontent.com/revskill10?v=4&s=30"   height={50} width={50} className="avatar__image" alt="revskill10" title='Close session'/>
                              <div class="people-modal-result_label">Close</div>
                            </div>
                          </li>
                          </ul></span>
                    </span>
                  </div>
                </div>
              </div>
              </fieldset>
            </div>
        </div></div></div>
            </div>
        );
    }
}
export default Left