"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import EditorHeader from './EditorHeader'
import { extensions } from './extensions'




export default function EditorField() {

    const editor = useEditor({
        extensions: extensions,
        editorProps: {
            attributes: {
                class: 'bg-white text-black border-red-500 border-2 min-h-80 bg-white px-2 py-3'
            }
        },
        content: '<p>I am Dip</p>',
        immediatelyRender: false
    })

    if (!editor) return

    return (
        <>
            
            <div className="w-full max-w-7xl mx-auto">
                <div className="overflow-x-auto">
                    <EditorHeader editor={editor} />
                    <EditorContent editor={editor} />
                </div>
            </div>

        </>

    )
}
