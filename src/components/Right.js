import React, {Component} from 'react';
// export class Right extends Component {
//     render() {
//         return (
//             <div id="Right" className='nested'>
//             <h1>Right</h1>
//             </div>
//         );
//     }
// }

export class Right extends Component {
    constructor(props) {
        super(props)
        console.log('props.data',props.data);
        this.state ={
            data:props.data,
            element:props.element,
            value:props.data,
            updateNodeCb:props.updateNodeCb,
        };
        this.updateText1 = this.updateText1.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.state ={
            data:nextProps.data,
            element:nextProps.element,
            value:nextProps.data,
            updateNodeCb:nextProps.updateNodeCb,
        };
      }

        
    handlerChange(evt){
        document.getElementById("editLabel").value = evt.value;
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }
    updateText1 (evt) {
        // let element = 
        // this.props.updateNodeCb()
        if(this.props.element){
            let elemetOld = JSON.parse(this.props.element);
            let newLabel = elemetOld;
            newLabel['label']=document.getElementById("editLabel").value;
            newLabel.data.label=newLabel['label'];
            // console.log('elemetOld',elemetOld);
            this.state.updateNodeCb(elemetOld,newLabel,(elemetOld.data.type==='node'?0:1));
            // this.props.updateNodeCb(elemetOld,newLabel);
        }else{
            console.log('empty',this.props);
        }
        return true
    }
    onHandleChange(event) {
        this.setState({
            value: event.target.value,
            data:event.target.value,
            element:event.target.getAttribute('element')
        });
    }

render() {
   return (

        <div id="Right" className='nested'>

            
           <input type="text" id="editLabel" onChange={this.onHandleChange.bind(this)} value ={this.state.value} element ={this.props.element}/>

           <button onClick={this.updateText1.bind(this)}>submit</button>        

         </div>

    );
}
};
export default Right