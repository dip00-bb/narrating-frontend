import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group';
import TextareaAutosize from "react-textarea-autosize"
import React, { useState } from 'react';

const CommentInput = () => {


    const [text,setText]=useState("")
    
    const handleSubmit=()=>{
        console.log(text)
        console.log("Submitted")
    }

    return (
        <div>
            <InputGroup>
                <TextareaAutosize onChange={(e)=>setText(e.target.value)}
                    data-slot="input-group-control"
                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                    placeholder="Make a comment...."
                />
                <InputGroupAddon align="block-end">
                    <InputGroupButton onClick={handleSubmit} className="ml-auto cursor-pointer" size="sm" variant="default">
                        Submit
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default CommentInput;