import React, {Component} from 'react';
export class Propwrap extends Component {
    constructor(props) {
        super(props)
        this.state ={
            element:props.element,
            updateNodeCb:props.updateNodeCb,
            clicked:false
        };
        this.updateText1 = this.updateText1.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(!this.state.element){
            this.setState({
                element:nextProps.element,
                updateNodeCb:nextProps.updateNodeCb,
                clicked:false
            });

            console.log('nextProps',nextProps);
        }
    }

    componentWillUpdate(prevProps, prevState){
        if(prevProps.element&&this.state.element&&(prevProps.element.id!==this.state.element.id)){
            this.setState({
                element:prevProps.element,
                updateNodeCb:prevProps.updateNodeCb,
                clicked:false
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


        
    handlerChange(evt){
        this.setState({element:{...this.state.element,label:evt.target.value,data:{label:evt.target.value,type:this.state.element.data.type}}});
    }
    updateText1 (evt) {
        // this.setState({clicked:true});
        if(this.state.element){
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
        
        return (
            <div id="propwrap" className={(this.state.element&&this.state.element.data)?"itson":""}>
                <div id="properties" className={(this.state.element&&this.state.element.data)?"expanded":''}>
                    <div id="close">
                        <img src="assets/close.svg" alt="close"/>
                    </div>
                    <p id="header2">Properties</p>
                    <div id="propswitch">
                        <div id="dataprop">Data</div>
                        <div id="alertprop">Alerts</div>
                        <div id="logsprop">Logs</div>
                    </div>
                    <div id="proplist">
                        <p class="inputlabel">Name</p>
                        <input class="dropme" id='label' type="text" value={(this.state.element&&this.state.element.data&&this.state.element.data.label)||''} onChange={this.handlerChange.bind(this)}/>
                        <p class="inputlabel">Check properties</p>
                        {JSON.stringify(this.state.element)}
                        <div class="dropme">All<img src="assets/dropdown.svg" alt="all"/></div>
                        <div class="checkus"><img src="assets/checkon.svg" alt="checkon"/><p>Log on successful performance</p></div>
                        <div class="checkus"><img src="assets/checkoff.svg" alt="checkoff"/><p>Give priority to this block</p></div>
                    </div>
                    <div id="divisionthing"></div>
                    <div id="Saveblock" onClick={this.updateText1.bind(this)}>Save</div>
                </div>
            </div>
        );
    }
}
export default Propwrap