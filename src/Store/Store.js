import { createStore } from 'redux';
import { combineReducers } from 'redux';


let intialData = { 
    array:[],
}


function Data (oldData = intialData, newData) { 
    oldData = { ...oldData }

    if(newData.type == 'send_Data'){ 
        oldData.array.push(newData.payLoad)

    }else if(newData.type == 'Delete') { 
        oldData.array.splice(newData.payLoad ,1)
    }
   
    return oldData
}

let combineData = combineReducers({Data})

let myStore = createStore(combineData)

export default myStore