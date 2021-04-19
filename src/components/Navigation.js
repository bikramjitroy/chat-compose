import React, {Component} from 'react';
export class Navigation extends Component {
  constructor(props) {
      super(props)
      this.state ={
          updateNodeCb: props.publishClick,
      };
  }
  _download (evt) {
    this.state.updateNodeCb();

    return true
}
 
    render() {
        
        return (
          <div id="navigation">
            <div id="leftside">
              <div id="details">
                <div id="back">
                  <img src={"assets/arrow.svg"} alt="revskill10" />
                  </div>
                <div id="names">
                    <p id="title">BOT Designer</p>
                    <p id="subtitle">Drag and drop designer</p>
                </div>
              </div>            
            </div>
            <div id="centerswitch">
                <div id="leftswitch">Insurence Sales</div>
                <div id="rightswitch">Version 1</div>
            </div>
            <div id="buttonsright">
                <div id="discard">Discard</div>
                <div id="publish" onClick={this._download.bind(this)}>Publish for testing</div>
            </div>
          </div>
        );
    }
}
export default Navigation