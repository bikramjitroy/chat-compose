import React, {Component} from 'react';

const json = {"send":{'title':'Bot Send','elements':[
    {'label':'Text','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'eye.svg','subtype':'text',"class":"blockyBlue"},
    {'label':'Multimedia','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'database.svg','subtype':'multimedia',"class":"blockyBlue"},
    {'label':'Suggestion Cips','description':'Triggers when somebody visits a specified page','type':'selectorInput','subtype':'suggestionchip','image':'time.svg',"class":"blockyBlue"},
    {'label':'Carousel Cips','description':'Triggers when somebody visits a specified page','type':'selectorInput','subtype':'carousel','image':'error.svg',"class":"blockyBlue"},
    ]},"receive":{'title':'Bot Recevies','elements':[
        {'label':'User Input','description':'Triggers when somebody visits a specified page','type':'selectorUserInput','image':'eye.svg','subtype':'userinput',"class":"blockyGreen"},
        {'label':'Attribute','description':'Triggers when somebody visits a specified page','type':'selectorUserInput','image':'action.svg','subtype':'userattribute',"class":"blockyGreen"},
        ]},"action":{'title':'Bot Actions','elements':[
            // {'label':'Start','description':'Start Point','type':'selectorNodeStart','image':'eye.svg',"class":"blockyGrey"},
            {'label':'To Agent','subtype':'toagent','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg',"class":"blockyGrey"},
            {'label':'Api Calling','subtype':'apicalling','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg',"class":"blockyGrey"},
            {'label':'Script Node','subtype':'scriptnode','description':'Triggers when somebody visits a specified page','type':'selectorInput','image':'action.svg',"class":"blockyGrey"},
            {'label':'Close','subtype':'closenode','description':'Triggers when somebody visits a specified page','type':'selectorStop','image':'terminate.svg',"class":"blockyRed"},
            ]}};
    
export class Leftcard extends Component {
    constructor(props) {
        super(props)
        this.state ={
            activeClass:'send',
            elemetArray:json,
            elemetOrig:json
        };
        this.filterList = this.filterList.bind(this);
    }
    filterList(event) {
        // let valueS = event.target.value;
        // if(valueS){
        //     console.log('valueS',valueS);
        //     let tempStor = json;
        //     // let returned_data = Object.entries(json).filter(([key, value]) => {
        //     //     let searchRes =  value.elements.filter((user)=>{
        //     //                 return user.label.toLowerCase().search(valueS) != -1;
        //     //         });
        //     //         tempStor[key]['elements']=searchRes;
        //     //         return tempStor;
        //     //   })
        //     Object.entries(tempStor).map(([key, value]) => {
        //         // console.log(key,value);
        //         tempStor[key].elements = tempStor[key].elements.filter((user)=>{
        //                             return user.label.toLowerCase().search(valueS) != -1;
        //                     });
        //     })
        //     // console.log(tempStor);
        //     // // let result = json.filter((user)=>{
        //     // //     console.log(user);
        //     // //         return user.name.toLowerCase().search(value) != -1;
        //     // // });
        //     this.setState({elemetArray:tempStor});
        // }else{
        //     console.log('valueS',json);
        //     this.setState({elemetArray:this.state.elemetOrig});
        // }
        // let users = this.state.users, result=[];
        // result = users.filter((user)=>{
        //     return user.name.toLowerCase().search(value) != -1;
        // });
        // this.setState({result});
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
                    <input type="text" placeholder="Search blocks" onChange={this.filterList}/>
                </div>
                <div id="subnav">
                {Object.keys(this.state.elemetArray).map((e, i) => {
                   return(<div id={e} key={`menu_`+i} className={this.state.activeClass===e ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>{this.state.elemetArray[e].title}</div> )
                    
                })}
                </div>
                {Object.keys(this.state.elemetArray).map((e, i) => {
                return (
                <div id={`blocklist${++i} ${e}`} key={`menu_compo`+i}  className={this.state.activeClass===e ? 'blocklist' : 'hidden blocklist'}>
                    {this.state.elemetArray[e].elements.map((item, iNested) => {
                    return (
                        <div key={`menu_compo`+i+'_'+iNested} className="blockelem create-flowy noselect" onDragStart={(event) => this.onDragStart(event, item.type,JSON.stringify(item))}  draggable>
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