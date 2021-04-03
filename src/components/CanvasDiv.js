import React, {Component } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  MiniMap,
  Background,
} from 'react-flow-renderer';
import {Propwrap} from './Propwrap'
import {Navigation} from './Navigation'
import TwoInput from './Twoinput';
import StartInput from './Startinput';
import Stopinput from './Stopinput';
const nodeTypes = {
  selectorInput: TwoInput,
  selectorNodeStart: StartInput,
  selectorStop: Stopinput,
};

const initialElements = [{"id":"1","type":"selectorNodeStart","label":"Start","data":{"label":"Start","description":"User Say Hi","type":"node","image":"eye.svg"},"position":{"x":150,"y":-1535}},{"id":"dndnode_0","type":"selectorInput","position":{"x":150,"y":-1350},"label":"Bot Text","data":{"label":"Bot Text","description":"Welcome to ABC PIZZA. How can We help You?","type":"node","image":"eye.svg"}},{"id":"dndnode_3","type":"selectorInput","position":{"x":-300,"y":-1140},"label":"Suggestion Cips","data":{"label":"Suggestion Cips","description":"Show Menu","subtype":"suggestionchip","type":"node","image":"error.svg"}},{"id":"dndnode_4","type":"selectorInput","position":{"x":0,"y":-1140},"label":"Suggestion Cips","data":{"label":"Suggestion Cips","description":"Track Order","subtype":"suggestionchip","type":"node","image":"error.svg","rowChip":[{"image":"1","text":"Show Menu"},{"image":"2","text":"Track Order"},{"image":"3","text":"Cancel Order"}]}},{"id":"dndnode_5","type":"selectorInput","position":{"x":330,"y":-1140},"label":"Suggestion Cips","data":{"label":"Suggestion Cips","description":"Cancel Order","subtype":"suggestionchip","type":"node","image":"error.svg"}},{"id":"dndnode_6","type":"selectorInput","position":{"x":0,"y":-960},"label":"Get Order Id","data":{"label":"Get Order Id","description":"Please Insert Your Order Id","type":"node","image":"eye.svg"}},{"id":"dndnode_7","type":"selectorInput","position":{"x":0,"y":-780},"label":"User Input","data":{"label":"User Input","description":"Customer Will enter order Id","type":"node","image":"eye.svg"}},{"id":"dndnode_8","type":"selectorInput","position":{"x":0,"y":-630},"label":"Api Calling","data":{"label":"Api Calling","description":"Find Customer Order details","type":"node","image":"action.svg"}},{"id":"dndnode_9","type":"selectorStop","position":{"x":360,"y":-300},"label":"Close","data":{"label":"Close","description":"Triggers when somebody visits a specified page","type":"node","image":"terminate.svg"}},{"id":"dndnode_10","type":"selectorInput","position":{"x":0,"y":-450},"label":"Text","data":{"label":"Text","description":"Send Details","type":"node","image":"eye.svg"}},{"id":"dndnode_11","type":"selectorInput","position":{"x":330,"y":-990},"label":"Text","data":{"label":"Text","description":"Please Insert Your Order Id","type":"node","image":"eye.svg"}},{"id":"dndnode_12","type":"selectorInput","position":{"x":330,"y":-840},"label":"Get Order Id","data":{"label":"Get Order Id","description":"Please Insert Your Order Id","type":"node","image":"eye.svg"}},{"id":"dndnode_13","type":"selectorInput","position":{"x":330,"y":-660},"label":"Api Calling","data":{"label":"Api Calling","description":"Cancel Api Called","type":"node","image":"action.svg"}},{"id":"dndnode_14","type":"selectorInput","position":{"x":540,"y":-510},"label":"Text","data":{"label":"Text","description":"Order cancelled successfully","type":"node","image":"eye.svg"}},{"source":"1","sourceHandle":"a","target":"dndnode_0","targetHandle":null,"type":"smoothstep","animated":false,"label":"HI","data":{"label":"HI","type":"edge"},"id":"react_edge_1","arrowHeadType":"arrow"},{"source":"dndnode_0","sourceHandle":"a","target":"dndnode_3","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 4","data":{"label":"Edge label 4","type":"edge"},"id":"react_edge_4","arrowHeadType":"arrow"},{"source":"dndnode_0","sourceHandle":"a","target":"dndnode_4","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 5","data":{"label":"Edge label 5","type":"edge"},"id":"react_edge_5","arrowHeadType":"arrow"},{"source":"dndnode_0","sourceHandle":"a","target":"dndnode_5","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 6","data":{"label":"Edge label 6","type":"edge"},"id":"react_edge_6","arrowHeadType":"arrow"},{"source":"dndnode_4","sourceHandle":"a","target":"dndnode_6","targetHandle":null,"type":"smoothstep","animated":false,"label":"Track Order","data":{"label":"Track Order","type":"edge"},"id":"react_edge_7","arrowHeadType":"arrow"},{"source":"dndnode_6","sourceHandle":"a","target":"dndnode_7","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 8","data":{"label":"Edge label 8","type":"edge"},"id":"react_edge_8","arrowHeadType":"arrow"},{"source":"dndnode_7","sourceHandle":"a","target":"dndnode_8","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 9","data":{"label":"Edge label 9","type":"edge"},"id":"react_edge_9","arrowHeadType":"arrow"},{"source":"dndnode_8","sourceHandle":"a","target":"dndnode_9","targetHandle":null,"type":"smoothstep","animated":false,"label":"If Order not Exist","data":{"label":"If Order not Exist","type":"edge"},"id":"react_edge_10","arrowHeadType":"arrow"},{"source":"dndnode_8","sourceHandle":"a","target":"dndnode_10","targetHandle":null,"type":"smoothstep","animated":false,"label":"Details Find","data":{"label":"Details Find","type":"edge"},"id":"react_edge_11","arrowHeadType":"arrow"},{"source":"dndnode_10","sourceHandle":"a","target":"dndnode_9","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 12","data":{"label":"Edge label 12","type":"edge"},"id":"react_edge_12","arrowHeadType":"arrow"},{"source":"dndnode_5","sourceHandle":"a","target":"dndnode_11","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 13","data":{"label":"Edge label 13","type":"edge"},"id":"react_edge_13","arrowHeadType":"arrow"},{"source":"dndnode_11","sourceHandle":"a","target":"dndnode_12","targetHandle":null,"type":"smoothstep","animated":false,"label":"Edge label 14","data":{"label":"Edge label 14","type":"edge"},"id":"react_edge_14","arrowHeadType":"arrow"},{"source":"dndnode_12","sourceHandle":"a","target":"dndnode_13","targetHandle":null,"type":"smoothstep","animated":false,"label":"Order Id get","data":{"label":"Order Id get","type":"edge"},"id":"react_edge_15","arrowHeadType":"arrow"},{"source":"dndnode_13","sourceHandle":"a","target":"dndnode_14","targetHandle":null,"type":"smoothstep","animated":false,"label":"Order cancelled","data":{"label":"Order cancelled","type":"edge"},"id":"react_edge_16","arrowHeadType":"arrow"},{"source":"dndnode_14","sourceHandle":"a","target":"dndnode_9","targetHandle":null,"type":"smoothstep","animated":false,"label":"Terminate","data":{"label":"Terminate","type":"edge"},"id":"react_edge_17","arrowHeadType":"arrow"}];
  let id = 3;
  let idedge = 3;
  const getId = () => `dndnode_${id++}`;
  const getIdEdge = function(flag=true) { 
    if(flag){
        return `${++idedge}`
    }  
    return `${idedge}`
    } ;
  
  
    export class ContentDiv extends Component {
      constructor(props) {
        super(props);
        this.state = {
          nodeName: null,
          reactFlowInstance:null,
          state:{element:null},
          elements:initialElements,
          reactFlowWrapper:React.createRef()

        };
      }
      // componentDidUpdate(prevProps, prevState){
      // // componentWillReceiveProps = (nextProps) => {
      //   // if (nextProps.position !== this.props.position) {
      //   //   // this.moveMap(nextProps.position)
      //   // }
      //   console.log(prevState,'newtigger',prevProps);
      //   this.setState({elements:this.state.elements.map((el) => {

      //       if (this.state.nodeName && el.id === this.state.nodeName.id) {
      //         // it's important that you create a new object here in order to notify react flow about the change
      //         el.data = {
      //           ...el.data,
      //           label: this.state.nodeName.label,
      //           type: 'node',
      //         };
      //         el.label=this.state.nodeName.label;
      //       }
    
      //       return el;
      //     })}
      //   );
      // }
      
    onConnect(params){
      this.setState({elements:addEdge({ ...params, type: 'smoothstep', animated: false,label: 'Edge label '+getIdEdge(),data:{label: 'Edge label '+getIdEdge(false),type:"edge"}, id:'react_edge_'+getIdEdge(false),arrowHeadType: 'arrow' }, this.state.elements)});
    }
    onElementsRemove(elementsToRemove){ 
      this.setState({elements:removeElements(elementsToRemove, this.state.elements)});
    };  
    onLoad(_reactFlowInstance){
      this.setState({reactFlowInstance:_reactFlowInstance});
      _reactFlowInstance.fitView();
    }

    onDragOver(event){
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      console.log('sdsd');
    };
    onNodeDragStop(event,node){
      console.log('sdsd',node);
    }
    
  
    onDrop(event){
      event.preventDefault();
  // console.log('sasds',this);
      const reactFlowBounds = this.state.reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const elementCreate = JSON.parse(event.dataTransfer.getData('element'));
      const position = this.state.reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      console.log(elementCreate);
      const newNode = {
        id: getId(),
        type,
        position,
        label: `${elementCreate.label}`,
        
        data: { label: `${elementCreate.label}`,description: `${elementCreate.description}`,'subtype':`${elementCreate.subtype||''}`,type:"node",'image':elementCreate.image },
      };
      console.log('newNode',newNode,event.dataTransfer);
  
      this.setState({elements:this.state.elements.concat(newNode)});
    };
    onElementClick(event, element){
        // console.log(element);
        this.setState({element:element}); 
    }   

    onSaveAndPublishClick(event){
      // console.log(this.state.reactFlowInstance.toObject().elements);
      const element = document.createElement("a");
      const textFile = new Blob([JSON.stringify(this.state.reactFlowInstance.toObject().elements)], {type: 'application/json'}); //pass data from localStorage API to blob
      element.href = URL.createObjectURL(textFile);
      element.download = "userFile.json";
      document.body.appendChild(element); 
      element.click();
    }  

    updateEdgeText(old,newEl,type){ 
        console.log('old,newEl,type',newEl);
          // if(type){
          //   this.setState({elements:updateEdge(old, newEl, this.state.elements)});
          //   console.log('calling',old, newEl,updateEdge(old, newEl, this.state.elements));
          // }else{
            this.setState({nodeName:newEl});
          // }
          this.setState({element:null});
          
        
      }

    // componentDidMount() { console.log('called didMount'); }
    componentWillUpdate(prevProps, prevState) { 
      console.log('debug',this.state.nodeName,prevState.nodeName)
      if(this.state.nodeName!==prevState.nodeName){
        this.setState({elements:this.state.elements.map((el) => {

                if (el.id === prevState.nodeName.id) {
                  el = prevState.nodeName;
                  // it's important that you create a new object here in order to notify react flow about the change
                  // el.data = {
                  //   ...el.data,
                  //   label: prevState.nodeName.label,
                  //   type: 'node',
                  // };
                  // el.label=prevState.nodeName.label;
                }
        
                return el;
              })}
            );
            console.log('debugRunn',this.state.nodeName,prevState.nodeName)
      }
    }
      
    render(){  
        // useEffect(() => {
        //   this.setState({elements:(els) =>
        //     els.map((el) => {
        //       if (el.id === this.state.nodeName.id) {
        //         // it's important that you create a new object here in order to notify react flow about the change
        //         el.data = {
        //           ...el.data,
        //           label: this.state.nodeName.label,
        //           type: 'node',
        //         };
        //         el.label=this.state.nodeName.label;
        //       }
      
        //       return el;
        //     })
        //   });
        // }, [this.state.nodeName, this.state.elements]);

        return (
         
            <ReactFlowProvider>
               <Navigation publishClick={this.onSaveAndPublishClick.bind(this)}/>
               <Propwrap element={this.state.element} updateNodeCb={this.updateEdgeText.bind(this)} />
              <div className="sectionLeft dndflow reactflow-wrapper nested" ref={this.state.reactFlowWrapper}>
               <ReactFlow 
                elements={this.state.elements}
                onConnect={this.onConnect.bind(this)}
                onElementsRemove={this.onElementsRemove.bind(this)}
                onLoad={this.onLoad.bind(this)}
                onDrop={this.onDrop.bind(this)}
                onDragOver={this.onDragOver.bind(this)}
                deleteKeyCode={46}
                snapToGrid={true}
                snapGrid={[30, 30]}
                onElementClick={this.onElementClick.bind(this)}
                defaultZoom={1.5}
                onNodeDragStop={this.onNodeDragStop.bind(this)}
                nodeTypes={nodeTypes}
              >
                  <MiniMap
              nodeStrokeColor={(n) => {
                if (n.style?.background) return n.style.background;
                if (n.type === 'input') return '#0041d0';
                if (n.type === 'output') return '#ff0072';
                if (n.type === 'default') return '#1a192b';
                if (n.type === 'selectorInput') return '#0041d0';
                if (n.type === 'selectorStop') return '#ff0072';
                if (n.type === 'selectorNodeStart') return '#1a192b';

                return '#eee';
              }}
              nodeColor={(n) => {
                if (n.style?.background) return n.style.background;

                return '#fff';
              }}
              nodeBorderRadius={2}
            />
            <Controls />
            <Background color="#aaa" gap={16} />

          </ReactFlow>
               </div>
            </ReactFlowProvider>

        );
    }
  }
  export default ContentDiv