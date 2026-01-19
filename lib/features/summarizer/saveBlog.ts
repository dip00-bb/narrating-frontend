import { createSlice} from "@reduxjs/toolkit"


interface IinitialState{
    isOpen:boolean
}

const initialState:IinitialState={
    isOpen:false

} 


const showSummarizer=createSlice({
    name:"showSummarizer",
    initialState,
    reducers:{
        toogleOpenSummarizer:(state)=>{
            state.isOpen=!state.isOpen
        }
    }
}) 

export default showSummarizer.reducer
export const {toogleOpenSummarizer}=showSummarizer.actions