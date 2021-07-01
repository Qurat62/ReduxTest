const initialState={
    list:['item'],
    text:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){

        case "ADD_TOLIST":
            
           const {id,data}=action.payload;
          
             return {
                 
                 ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    },                   
              ],
             };

             case "DELETE_ITEM":{

                 const newList=state.list.filter((ele)=>ele.id!==action.id);
                 return{
                     ...state,
                     list:newList
                 }
             }
             case "EDIT_ITEM":{
                 return {
                     ...state,
                     text:action.data
                 }
             }
       default:return state;
    }
}
export default reducer;