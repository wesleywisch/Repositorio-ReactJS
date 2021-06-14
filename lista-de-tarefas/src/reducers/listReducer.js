

export default function (state = [], action){

    switch(action.type){
        case "ADD_ITEM": 
            return [...state, action.payload]

        case "DELETE_ITEM":
            return state.filter(item => item.id != action.payload )

        case "CHANGE_DONE":
            return state.map(item => {
                if(item.id == action.payload){
                    item.done = !item.done
                }
                return item;
            })

        default :
        return state
    }

}