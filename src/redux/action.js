export const addToList=(data)=>{
    return {
        type:"ADD_TOLIST",
        payload:{
           id:new Date().getTime().toString(),
           data:data
        }
      
    }
}

export const deleteItem=(id)=>{
    return {
        type:"DELETE_ITEM",
        id
    }
}

export const editItem=(id)=>{
    return {
        type:"Edit_ITEM",
        id
    }
}