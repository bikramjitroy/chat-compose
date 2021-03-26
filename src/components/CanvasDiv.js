import React, {Component } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  MiniMap,
  Background,
  updateEdge,
} from 'react-flow-renderer';
import {Propwrap} from './Propwrap'

const initialElements = [
    {
      id: '1',
      type: 'input',
      label: 'Start',
      data: { label: 'Start',type:"node" },
      position: { x: 180, y: -395  },
    },
    // {
    //   id: '2',
    //   type: 'default',
    //   label: 'Start',
    //   data: { label: 'Start1',type:"node" },
    //   position: { x: 550, y: 5 },
    // },
    // {
    //   id: 'e1-2',
    //   type: 'smoothstep', animated: false,
    //   source: '1',
    //   target: '2',
    //   animated: false,
    //   label: 'edge label',
    //   data:{label: 'Edge label ',type:"edge"},
    //   arrowHeadType: 'arrow' 
    // }
  ];
  
  let id = 0;
  let idedge = 0
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
      const title = event.dataTransfer.getData('title');
      const position = this.state.reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        label: `${title}`,
        data: { label: `${title}`,type:"node" },
      };
      console.log('newNode',newNode,event.dataTransfer);
  
      this.setState({elements:this.state.elements.concat(newNode)});
    };
    onElementClick(event, element){
        console.log(element);
        this.setState({element:element}); 
    }   

    updateEdgeText(old,newEl,type){ 
        
          // if(type){
          //   this.setState({elements:updateEdge(old, newEl, this.state.elements)});
          //   console.log('calling',old, newEl,updateEdge(old, newEl, this.state.elements));
          // }else{
            this.setState({nodeName:newEl});
          // }
          this.setState({element:null});
          
        
      }

    componentDidMount() { console.log('called didMount'); }
    componentWillUpdate(prevProps, prevState) { 
      if(this.state.nodeName!=prevState.nodeName){
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
                snapGrid={[15, 15]}
                onElementClick={this.onElementClick.bind(this)}
                defaultZoom={1.5}
                onNodeDragStop={this.onNodeDragStop.bind(this)}
              >
                  <MiniMap
              nodeStrokeColor={(n) => {
                if (n.style?.background) return n.style.background;
                if (n.type === 'input') return '#0041d0';
                if (n.type === 'output') return '#ff0072';
                if (n.type === 'default') return '#1a192b';

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