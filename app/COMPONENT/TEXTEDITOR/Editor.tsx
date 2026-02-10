"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import EditorHeader from './EditorHeader'

const extensions = [

    StarterKit
]

export default function EditorField() {

    const editor = useEditor({
        extensions: extensions,
        content: '<p>I am Dip</p>',
        immediatelyRender: false
    })

    if (!editor) return

    return (
        <>
            <EditorHeader editor={editor} />
            <EditorContent editor={editor} />

        </>

    )
}
