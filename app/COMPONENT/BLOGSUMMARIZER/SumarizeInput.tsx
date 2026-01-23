"use client"
import React, { useState } from 'react';
import CommonInput from '../COMMONCOMPONENT/CommonInput';
import { Send } from 'lucide-react';



const SumarizeInput = () => {

    const [question,setQuestion]=useState("")

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(question)
    }


    const handleGetQuestion=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setQuestion(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <CommonInput handlerFunction={handleGetQuestion} variant='outline' placeholder='Ask about this blog' type='text' sendButton={<Send/>}/>
        </form>
    );
};

export default SumarizeInput;