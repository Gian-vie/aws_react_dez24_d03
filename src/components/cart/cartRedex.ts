import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormDataPayload } from "../../interface/interfaces";

interface CartProduct extends IFormDataPayload {
    amount: number;
}

const cartSlice = createSlice({
    name: "cart",
    initialState: [] as CartProduct[],
    reducers: {
        addToCart: (state, action: PayloadAction<IFormDataPayload>) => {
            const productIndex = state.findIndex(product => product.id === action.payload.id)
            if(productIndex !== -1){
                state[productIndex].amount +=1
            }else{
                state.push({...action.payload, amount: 1})
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const productIndex = state.findIndex(product => product.id === action.payload)
            if(state[productIndex].amount > 1){
                state[productIndex].amount -= 1;
            }else {
                return state.filter(product => product.id !== action.payload)
            }
        }
    }
})


export default cartSlice.reducer ;