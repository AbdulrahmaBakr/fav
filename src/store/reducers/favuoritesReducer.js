

const favouritesReducer = (state = [], action) => {
    switch (action.type) {

        case "ADD_TO_FAVOURITES":
            if(!state.find(obj=>obj.id===action.payload.id)){
                return [...state, action.payload];

            }else{
                return [...state]
            }
        // case "remove-from-favourites":
        //     return [...state, action.payload];
        default:
            return state;
    }
};

export default favouritesReducer;
