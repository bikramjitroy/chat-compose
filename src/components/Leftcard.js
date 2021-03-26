import React, {Component} from 'react';
export class Leftcard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            activeClass:'send'
        };
    }
    _handleClick(evt){
        this.setState({activeClass:evt.target.id})
    }
    onDragStart(event, nodeType,title){
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('title', title);
    
        event.dataTransfer.effectAllowed = 'move';
    };
    SelectDivStart(event){

    };
    render() {
        
        return (
            <div id="leftcard">
                <div id="closecard">
                    <img src="assets/closeleft.svg" alt="close"/>
                </div>
                <p id="header">Blocks</p>
                <div id="search">
                    <img src="assets/search.svg" alt="search"/>
                    <input type="text" placeholder="Search blocks"/>
                </div>
                <div id="subnav">
                    <div id="send" className={this.state.activeClass==='send' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Bot Send</div>
                    <div id="receive" className={this.state.activeClass==='receive' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)} >Bot Recevies</div>
                    <div id="action" className={this.state.activeClass==='action' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Bot Actions</div>
                </div>
                <div id="blocklist1 send" className={this.state.activeClass==='send' ? 'blocklist' : 'hidden blocklist'}>
                    <div className="blockelem create-flowy noselect" onClick={(event)=>this.SelectDivStart} onDragStart={(event) => this.onDragStart(event, 'default','Text')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Text</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Image')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="2"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/action.svg" alt="action"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Image</p>
                                <p className="blockdesc">Triggers when somebody performs a specified action</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Document')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="3" />
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme" />
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/time.svg" alt="time"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Document</p>
                                <p className="blockdesc">Triggers after a specified amount of time</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Audio')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="4" />
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/error.svg" alt="error"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Audio</p>
                                <p className="blockdesc">Triggers when a specified error happens</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Video')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="4" />
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/error.svg" alt="error"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Video</p>
                                <p className="blockdesc">Triggers when a specified error happens</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Location')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="4" />
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/error.svg" alt="error"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Location</p>
                                <p className="blockdesc">Triggers when a specified error happens</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blocklist2 receive" className={this.state.activeClass==='receive' ? 'blocklist' : 'hidden blocklist'}>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','User Input')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">User Input</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Attribute')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Attribute</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="blocklist3 action" className={this.state.activeClass==='action' ? 'blocklist' : 'hidden blocklist'}>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'input','Start')} draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Start</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','To Agent')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">To Agent</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Api Calling')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">API calling</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'default','Coding')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Coding</p>
                                <p className="blockdesc">Triggers when somebody visits a specified page</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'output','Close')}  draggable>
                        <input type="hidden" name='blockelemtype' className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg" alt="grabme"/>
                        </div>
                        <div className="blockin">
                            <div className="blockico">
                                <span></span>
                                <img src="assets/eye.svg" alt="eye"/>
                            </div>
                            <div className="blocktext">
                                <p className="blocktitle">Close</p>
                                <p className="blockdesc">Close session</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Leftcard