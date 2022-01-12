/* eslint-disable prettier/prettier */
const initialState = {
    products: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART':
    const isExist = state.products?.find(e => e.id === action.data?.id);
      const productList = isExist
        ? state.products?.map(e => {
            if (e.id === action.data.id){
                return { ...e};
            }
            else {return e}
        })
        : [...state.products, action.data];
      return {
        products: productList,
      };
    default:
      return state;
    }
}
