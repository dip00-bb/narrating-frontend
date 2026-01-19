import { createSlice} from "@reduxjs/toolkit"


interface IinitialState{
    isOpen:boolean
}

const initialState:IinitialState={
    isOpen:false

} 


const saveBlogSlice=createSlice({
    name:"saveBlog",
    initialState,
    reducers:{
        toogleSaveBarOpen:(state)=>{
            state.isOpen=!state.isOpen
        }
    }
}) 

export default saveBlogSlice.reducer
export const {toogleSaveBarOpen}=saveBlogSlice.actions