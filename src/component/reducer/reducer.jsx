export const initialState = {
    basket : [],
    togleBasket: [],
    user: null,
    whitelist: [],
    fetchingData: true
}

export const getBasketTotal = (basket) => (
    basket?.reduce((amount,item) => item.price + amount , 0)
)

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            if(state.togleBasket.length < 2 ){
                return ({
                    ...state,
                    basket: [...state.basket, action.item ],
                    togleBasket: [...state.togleBasket, action.item]
                })
            }else{
                let newTogleBasket = [...state.togleBasket]
                let updateTogle = newTogleBasket.splice(1,1)
                return ({
                    ...state,
                    basket: [...state.basket, action.item ],
                    togleBasket: updateTogle
                })
            }
            
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(i => i.id === action.id)
            let newBasket = [...state.basket]

            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(`Unknow Id : ${action.id}`)
            }

            return(
                {
                    ...state,
                    basket: newBasket
                }
            )            

        case "REMOVE_ALL_FROM_TOGLE_BASKET":
            return(
                {
                    ...state,
                    togleBasket: []
                }
            )
            
        case "REMOVE_FROM_TOGLEBASKET":
            const togleIndex = state.togleBasket.findIndex(i => i.id === action.id)
            const NewtTogleBasket = [...state.togleBasket]

            if(togleIndex >= 0){
                NewtTogleBasket.splice(togleIndex, 1)
            }else{
                console.warn(`Unknown id : ${action.id}`)
            }

            return({
                ...state,
                togleBasket: NewtTogleBasket
            })

        case "SET_USER":
            return({
                ...state,
                user: action.user
            }) 

        case "GET_FAVOURITE_DATA":
            return({
                ...state,
                whitelist: action.ApiData,
                fetchingData: false
            })

        default:
            return state;
    }      
}

export default reducer;