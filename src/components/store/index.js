import { createStore } from "redux";

//initial state
const initialState = {
    addressBookList: [
        {
            id:1,
            user: "Leanne Graham",
            number: "1-770-736-8031-56442",
          },
        {
            id:2,
            user: "xe Grm",
            number: "987544",
          },
        {
            id:3,
            user: "pem Grm",
            number: "64457042",
          },
    ],
    favoriteId: {},
    favoriteData:[],
    
    value:0
}
//reducer
const counter = (state,action) => {
    switch (action.type) { 
        case "addContact":
            return {
                ...state,
                addressBookList: [...state.addressBookList, action.payload]
            };
        case "favoriteId":
            return {
                ...state,
                favoriteId: (state.favoriteId, action.payload)
                
            };
        case "favoriteData":
            const arr= [...arr,state.favoriteId]
            return {
                    
                    favoriteData: [...state.favoriteData,arr]                  
                };
           
        default:
            return state; 
    }
}
//store
const store = createStore(counter, initialState)

export default store