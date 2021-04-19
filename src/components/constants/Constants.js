
export const leftPalateConstants = {
    "send":{
       "title":"Bot Send",
       "elements":[
          {
             "label":"Text",
             "description": "Send user a text message",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorInput",
             "image":"eye.svg",
             "subtype":"text",
             "class":"blockyBlue"
          },
          {
             "label":"Multimedia",
             "description": "Send user a multimedia link",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorInput",
             "image":"database.svg",
             "subtype":"multimedia",
             "class":"blockyBlue"
          },
          {
             "label":"Suggestion Cips",
             "description": "Send users mulltiple suggestions",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorInput",
             "subtype":"suggestionchip",
             "image":"time.svg",
             "class":"blockyBlue"
          },
          {
             "label":"Carousel Cips",
             "description": "Send user multiple card options",
             "nextNodeHints": "Next should be User Input",
             "type":"selectorInput",
             "subtype":"carousel",
             "image":"error.svg",
             "class":"blockyBlue"
          }
       ]
    },
    "receive":{
       "title":"Bot Recevies",
       "elements":[
          {
             "label":"User Input",
             "description": "Output edges from this nodes are intents",
             "nextNodeHints": "Next should be either Bot Send or Actions nodes",
             "type":"selectorUserInput",
             "image":"eye.svg",
             "subtype":"userinput",
             "class":"blockyGreen"
          }
       ]
    },
    "action":{
       "title":"Bot Actions",
       "elements":[
          {
             "label":"Start",
             "description": "Initialize a conversation",
             "nextNodeHints": "Next node should be either Bot Send or Actions nodes",
             "type":"selectorNodeStart",
             "image":"eye.svg",
             "class":"blockyGrey"
          },
          {
             "label":"To Agent",
             "subtype":"toagent",
             "description": "Transfer current conversation to agent",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorInput",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Api Calling",
             "subtype":"apicalling",
             "description": "GET and POST method allowed. Request and response are json",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorInput",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Script Node",
             "subtype":"scriptnode",
             "description": "Process input data and set result to output variables",
             "nextNodeHints": "Next node could be anything",
             "type":"selectorInput",
             "image":"action.svg",
             "class":"blockyGrey"
          },
          {
             "label":"Close",
             "subtype":"closenode",
             "description": "Close conversation session",
             "nextNodeHints": "This is a final node of the flow",
             "type":"selectorStop",
             "image":"terminate.svg",
             "class":"blockyRed"
          }
       ]
    }
 };


 export const initialCanvasValue = [
   {
      "id":"dndnode_0",
      "type":"selectorNodeStart",
      "position":{
         "x":210,
         "y":60
      },
      "label":"Start",
      "data":{
         "label":"Start",
         "description":"Next node should be either Bot Send or Actions nodes",
         "subtype":"",
         "type":"node",
         "image":"eye.svg",
         "class":"blockyGrey"
      }
   }
];