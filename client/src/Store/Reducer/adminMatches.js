import * as type from "../Action/types";

const initialState = {
    isRegistered:false,
   
   creatematch:[]


}

export default (state=initialState,action)=>{
    switch(action.type){
        

                case type.CREATE_MATCHES:
                    return{
                    ...state,
                    creatematch:action.payload
                }

                // case type.GET_USER_TOURNAMENT:
                //     return{
                //     ...state,
                //     getplayer:action.payload,
                //     deleted:false
                // };
                      
                // case type.DELETE_TOURNAMENT:
                //     return{
                //     ...state,
                  
                //     deleted:true
                    
                // };

            default:
                return state;
    }

}