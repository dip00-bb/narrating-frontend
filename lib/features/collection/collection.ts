import { createSlice} from "@reduxjs/toolkit"


interface IinitialState{
    isOpen:boolean
}

const initialState:IinitialState={
    isOpen:false

} 


const showSaveBlog=createSlice({
    name:"showSaveBlog",
    initialState,
    reducers:{
        toogleSaveBlog:(state)=>{
            state.isOpen=!state.isOpen
        }
    }
}) 

export default showSaveBlog.reducer
export const {toogleSaveBlog}=showSaveBlog.actions