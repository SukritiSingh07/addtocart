const INIT_STATE={
    carts:[]
}

export const cartreducer=(state=INIT_STATE, action)=>{
    switch(action.type){
        case "ADD CART": 
            return {
                ...state,
                cart:[...state.carts,action.payload]
            }
        default: 
            return state
    }
}