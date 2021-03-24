import React, { useState,useEffect, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  MiniMap,
  Background,
  updateEdge,
} from 'react-flow-renderer';

import {Right} from './../components/Right'

const initialElements = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Start',type:"node" },
      position: { x: 150, y: 1 },
    },
    // {
    //   id: '2',
    //   type: 'input',
    //   data: { label: 'input node' },
    //   position: { x: 550, y: 5 },
    // },
    // {
    //   id: 'e1-2',
    //   type: 'straight',
    //   source: '1',
    //   target: '2',
    //   animated: true,
    //   label: 'edge label'
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
  
  
  const Content = () => {
    const reactFlowWrapper = useRef(null);
    const [nodeName, setNodeName] = useState('Start');
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [state, setstate] = useState({data:"",element:null})
    // const [elementObj, setelementObj] = useState({element:null});
    const [elements, setElements] = useState(initialElements);
    const onConnect = (params) => setElements((els) => addEdge({ ...params, type: 'smoothstep', animated: false,label: 'Edge label '+getIdEdge(),data:{label: 'Edge label '+getIdEdge(false),type:"edge"}, arrowHeadType: 'arrow' }, els));
    const onElementsRemove = (elementsToRemove) =>
      setElements((els) => removeElements(elementsToRemove, els));
  
    const onLoad = (_reactFlowInstance) =>{
      setReactFlowInstance(_reactFlowInstance);
      _reactFlowInstance.fitView();
    }
  
    const onDragOver = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    };
    
  
    const onDrop = (event) => {
      event.preventDefault();
  
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');
      const title = event.dataTransfer.getData('title');
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${title}`,type:"node" },
      };
      console.log('newNode',newNode,event.dataTransfer);
  
      setElements((es) => es.concat(newNode));
    };
        // const reactFlowWrapper = this.props.ref;
        // const [elements, setElements] = useState(initialElements);
        const onElementClick=(event, element) =>{
            console.log(element);
            // let newEdge = element;
            // newEdge['label']='ankit';
            // // refrence=element
            // // document.getElementById("editLabel").value=refrence.data.label;
            // //document.getElementById("editLabel").setAttribute("refrence", refrence);
            // // hideComponent(element);
            // setElements((els) => updateEdge(element, newEdge, els));
            // console.log('ankit',element);
            setstate({data:element.data.label,element:JSON.stringify(element)}); 
            console.log(element);
          }   

          const updateEdgeText = (old,newEl,type) => { 
            // console.log('asasas',old,newEl,type);
              if(type){
                setElements((els) => updateEdge(old, newEl, els));
                setstate({data:newEl.data.label,element:JSON.stringify(newEl)}); 
              }else{
                  console.log('inside',newEl);
                setNodeName(newEl);
              }
              
           
          }
          useEffect(() => {
            setElements((els) =>
              els.map((el) => {
                if (el.id === nodeName.id) {
                  // it's important that you create a new object here in order to notify react flow about the change
                  el.data = {
                    ...el.data,
                    label: nodeName.label,
                    type: 'node',
                  };
                  el.label=nodeName.label;
                }
        
                return el;
              })
            );
          }, [nodeName, setElements]);

        return (
            <ReactFlowProvider>
      <div className="sectionLeft dndflow reactflow-wrapper nested" ref={reactFlowWrapper}>
          <ReactFlow 
            elements={elements}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            deleteKeyCode={46}
            snapToGrid={true}
            snapGrid={[15, 15]}
            onElementClick={onElementClick}
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
      <Right data={state.data} element={state.element} updateNodeCb={updateEdgeText} />
      </ReactFlowProvider>

        
        )
    }

    export default Content;