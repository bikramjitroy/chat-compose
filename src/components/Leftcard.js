import React, {Component} from 'react';

const json = {"send":{'title':'Bot Send','elements':[
    {'label':'Text','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'eye.svg'},
    {'label':'Image','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg'},
    {'label':'Document','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'time.svg'},
    {'label':'Audio','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'error.svg'},
    {'label':'Video','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'error.svg'},
    {'label':'Location','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'error.svg'},
    ]},"receive":{'title':'Bot Recevies','elements':[
        {'label':'User Input','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'eye.svg'},
        {'label':'Attribute','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg'},
        ]},"action":{'title':'Bot Actions','elements':[
            {'label':'Start','description':'Triggers when somebody visits a specified page','type':'selectorNodeStart','image':'eye.svg'},
            {'label':'To Agent','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg'},
            {'label':'Api Calling','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg'},
            {'label':'Coding','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg'},
            {'label':'Close','description':'Triggers when somebody visits a specified page','type':'selectorStop','image':'action.svg'},
            ]}};
    
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
        event.dataTransfer.setData('element', title);
        event.dataTransfer.effectAllowed = 'move';
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
                {Object.keys(json).map((e, i) => {
                   return(<div id={e} className={this.state.activeClass===e ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>{json[e].title}</div> )
                    
                })}
                </div>
                {Object.keys(json).map((e, i) => {
                return (
                <div id={`blocklist${++i} ${e}`} className={this.state.activeClass===e ? 'blocklist' : 'hidden blocklist'}>
                    {json[e].elements.map((item, iNested) => {
                    return (
                        <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, item.type,JSON.stringify(item))}  draggable>
                            <div className="grabme">
                                <img src="assets/grabme.svg" alt="grabme"/>
                            </div>
                            <div className="blockin">
                                <div className="blockico">
                                    <span></span>
                                    <img src={`assets/${item.image}`} alt={item.image}/>
                                </div>
                                <div className="blocktext">
                    <p className="blocktitle">{item.label}</p>
                                    <p className="blockdesc">{item.description}</p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
                );    
            })}
                {/* <div id="blocklist2 receive" className={this.state.activeClass==='receive' ? 'blocklist' : 'hidden blocklist'}>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorInput','User Input')}  draggable>
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
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorInput','Attribute')}  draggable>
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
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorNodeStart','Start')} draggable>
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
                                <p className="blockdesc">Start node</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorInput','To Agent')}  draggable>
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
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorInput','Api Calling')}  draggable>
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
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorInput','Coding')}  draggable>
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
                    <div className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, 'selectorStop','Close')}  draggable>
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
                </div> */}
            </div>
            
        );
    }
}
export default Leftcard