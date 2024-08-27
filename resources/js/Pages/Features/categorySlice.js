import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers:{
        addCategory:(state , action) => {
            state.push(action.payload)
        },

        deleteCategory:(state, action) => {
            return state.filter((category) => category.id !== action.payload)
        }
    }
})

export const { addCategory , deleteCategory} = categorySlice.actions;
export default categorySlice.reducer;
