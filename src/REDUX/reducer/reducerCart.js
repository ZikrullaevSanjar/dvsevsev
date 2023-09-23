const intelsProduct = {
     cartProduct: []
}


 const reducerCarts = (state = intelsProduct , action) => {
    console.log(action);
    switch (action.type) {
        case '@ADD_TO_CART':
            return {
							cartProduct: [...state.cartProduct, action.product],
						}
        default:
            return state
    }
}


export default reducerCarts
