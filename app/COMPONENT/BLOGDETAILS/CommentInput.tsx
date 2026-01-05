import { InputGroup, InputGroupAddon, InputGroupButton } from '@/components/ui/input-group';
import TextareaAutosize from "react-textarea-autosize"
import React from 'react';

const CommentInput = () => {
    return (
        <div>
            <InputGroup>
                <TextareaAutosize
                    data-slot="input-group-control"
                    className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
                    placeholder="Make a comment...."
                />
                <InputGroupAddon align="block-end">
                    <InputGroupButton className="ml-auto" size="sm" variant="default">
                        Submit
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>
    );
};

export default CommentInput;