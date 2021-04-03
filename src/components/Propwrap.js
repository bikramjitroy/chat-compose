import React, {Component} from 'react';
export class Propwrap extends Component {
    constructor(props) {
        super(props)
        this.state ={
            element:props.element,
            updateNodeCb:props.updateNodeCb,
            clicked:'dataprop',
            rowChip:props.element&&props.element.data.rowChip||[{image:"",text:""}]
        };
        this.updateText1 = this.updateText1.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(!this.state.element){
            this.setState({
                element:nextProps.element,
                updateNodeCb:nextProps.updateNodeCb,
                clicked:'dataprop',
                rowChip:nextProps.element&&nextProps.element.data.rowChip||[{image:"",text:""}]

            });

            console.log('nextProps',nextProps);
        }
    }

    componentWillUpdate(prevProps, prevState){
        if(prevProps.element&&this.state.element&&(prevProps.element.id!==this.state.element.id)){
            this.setState({
                element:prevProps.element,
                updateNodeCb:prevProps.updateNodeCb,
                clicked:'dataprop'
            });
        }
        
        console.log('nextPropswill',prevProps,prevState,this.state);
    }

    componentShouldUpdate(prevProps, prevState){
        // if(prevState.element&&this.state.element&&(prevState.element.label!=this.state.element.label)){
        //     this.setState({
        //         element:prevState.element,
        //         updateNodeCb:prevState.updateNodeCb,
        //         clicked:false
        //     });
        // }
        
        console.log('nextPropsShould',prevProps,prevState,this.state);
    }

    handleInputChange (e, index){
        const { name, value } = e.target;
        const list = [...this.state.rowChip];
        list[index][name] = value;
        this.setState({rowChip:list});
        if(this.state.element.data.subtype==='suggestionchip'){
            let a = {rowChip:list};
            let obj = Object.assign({}, this.state.element.data, a);
            this.setState({element:{...this.state.element,data:{...obj}}}); 
        }
      };
     
      // handle click event of the Remove button
    handleRemoveClick(index){
        const list = [...this.state.rowChip];
        list.splice(index, 1);
        this.setState({rowChip:list});
      };
     
      // handle click event of the Add button
    handleAddClick() {
        this.setState({rowChip:[...this.state.rowChip, { image: "", text: "" }]});
      };

    _handleClick(evt){
        this.setState({clicked:evt.target.id})
    }

    _handleClickClose(evt){
        console.log('clled');
        this.setState({clicked:'dataprop',element:null})
    }
        
    handlerChange(evt){
        
        if(evt.target.id==='id_label'){
        this.setState({element:{...this.state.element,label:evt.target.value,data:{...this.state.element.data,label:evt.target.value}}});
        }else{
            let a = {};
            a[evt.target.id]=evt.target.value;
            
            var obj = Object.assign({}, this.state.element.data, a);
            
            this.setState({element:{...this.state.element,data:{...obj}}}); 
        }
    }
    updateText1 (evt) {
        // this.setState({clicked:true});
        if(this.state.element){
            
           console.log('called');
            console.log('inside',this.state.element);
            let elemetOld = this.props.element;
            let newLabel = this.state.element;
            // this.setProps({element:this.state.element});
            
            this.state.updateNodeCb(elemetOld,newLabel,(elemetOld.data.type==='node'?0:1));
            
        }else{
            console.log('empty',this.props);
        }
        this.setState({element:null});
        

        return true
    }

    render() {
        if(this.state.element&&this.state.element.data.type === 'edge') {
            return (
                <div id="propwrap" className={(this.state.element&&this.state.element.data)?"itson":""}>
                    <div id="properties" className={(this.state.element&&this.state.element.data)?"expanded":''}>
                        <div id="close" onClick={this._handleClickClose.bind(this)}>
                            <img src="assets/close.svg" alt="close"/>
                        </div>
                        <p id="header2">Properties</p>
                        <div id="propswitch">
                            <div id="dataprop" className={this.state.clicked==='dataprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Data</div>
                            <div id="alertprop" className={this.state.clicked==='alertprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Alerts</div>
                            <div id="logsprop" className={this.state.clicked==='logsprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Logs</div>
                        </div>
                        <div className={this.state.clicked==='dataprop' ? 'proplist' : "proplist hidden"}>
                            <p className="inputlabel">Name</p>
                            <input className="dropme" id='id_label' type="text" value={(this.state.element&&this.state.element.data&&this.state.element.data.label)||''} onChange={this.handlerChange.bind(this)}/>
                            
                            {/* <p className="inputlabel">Check properties</p>
                            {JSON.stringify(this.state.element)}
                            <div className="dropme">All<img src="assets/dropdown.svg" alt="all"/></div>
                            <div className="checkus"><img src="assets/checkon.svg" alt="checkon"/><p>Log on successful performance</p></div>
                            <div className="checkus"><img src="assets/checkoff.svg" alt="checkoff"/><p>Give priority to this block</p></div> */}
                        </div>
                        <div className={this.state.clicked==='alertprop' ? 'proplist' : "proplist hidden"}>
                            <div className="checkus"><p>Development inprogress</p></div>
                        </div>
                        <div className={this.state.clicked==='logsprop' ? 'proplist' : "proplist hidden"}>
                            <div className="checkus"><p>Development inprogress</p></div>
                        </div>
                        <div id="divisionthing"></div>
                        <div id="Saveblock" onClick={this.updateText1.bind(this)}>Save</div>
                    </div>
                </div>
            );
        }else{
            return (
                <div id="propwrap" className={(this.state.element&&this.state.element.data)?"itson":""}>
                    <div id="properties" className={(this.state.element&&this.state.element.data)?"expanded":''}>
                        <div id="close" onClick={this._handleClickClose.bind(this)}>
                            <img src="assets/close.svg" alt="close"/>
                        </div>
                        <p id="header2">Properties</p>
                        <div id="propswitch">
                            <div id="dataprop" className={this.state.clicked==='dataprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Data</div>
                            <div id="alertprop" className={this.state.clicked==='alertprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Configuration</div>
                            <div id="logsprop" className={this.state.clicked==='logsprop' ? 'navactive side' : "navdisabled side"} onClick={this._handleClick.bind(this)}>Logs</div>
                        </div>
                        <div className={this.state.clicked==='dataprop' ? 'proplist' : "proplist hidden"}>
                            <p className="inputlabel">Name</p>
                            <input className="dropme" id='id_label' type="text" value={(this.state.element&&this.state.element.data&&this.state.element.data.label)||''} onChange={this.handlerChange.bind(this)}/>
                            <p className="inputlabel">Description</p>
                            <textarea className="dropmetextarea" id='description' value={(this.state.element&&this.state.element.data&&this.state.element.data.description)||''} onChange={this.handlerChange.bind(this)}></textarea>
                            
                            {/* <p className="inputlabel">Check properties</p>
                            {JSON.stringify(this.state.element)}
                            <div className="dropme">All<img src="assets/dropdown.svg" alt="all"/></div>
                            <div className="checkus"><img src="assets/checkon.svg" alt="checkon"/><p>Log on successful performance</p></div>
                            <div className="checkus"><img src="assets/checkoff.svg" alt="checkoff"/><p>Give priority to this block</p></div> */}
                        </div>
                        <div className={this.state.clicked==='alertprop' ? 'proplist' : "proplist hidden"}>
                            <div className="checkus"><p></p></div>
                            {this.state.element&&this.state.element.data&&this.state.element.data.subtype==='suggestionchip'&&this.state.rowChip.map((x, i) => {
                                    return (
                                    <div className="box">
                                        <p className="inputlabel">Image</p>
                                        <input
                                        name="image"
                                        className="dropme"
                            placeholder="Enter Image url"
                                        value={x.image}
                                        onChange={e => this.handleInputChange(e, i)}
                                        />
                                        <p className="inputlabel">Suggestion Text</p>
                                        <input
                                        className="dropme"
                                        name="text"
                            placeholder="Enter Suggestion Text"
                                        value={x.text}
                                        onChange={e => this.handleInputChange(e, i)}
                                        />
                                        <div className="btn-box">
                                        {this.state.rowChip.length !== 1 && <button
                                            className="mr10"
                                            onClick={() => this.handleRemoveClick(i)}>Remove</button>}
                                        {this.state.rowChip.length - 1 === i && <button onClick={this.handleAddClick.bind(this)}>Add</button>}
                                        </div>
                                    </div>
                                    );
                                })}
                                      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(this.state)}</div> */}

                                
                        </div>
                        <div className={this.state.clicked==='logsprop' ? 'proplist' : "proplist hidden"}>
                            <div className="checkus"><p>Development inprogress</p></div>
                        </div>
                        <div id="divisionthing"></div>
                        <div id="Saveblock" onClick={this.updateText1.bind(this)}>Save</div>
                    </div>
                </div>
            );
        }
        }
        
}
export default Propwrap