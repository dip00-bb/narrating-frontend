"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FileHandler from '@tiptap/extension-file-handler'
import Image from '@tiptap/extension-image'
import React from 'react'
import EditorHeader from './EditorHeader'

const extensions = [

    StarterKit,
    Image,
    FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onPaste: (currentEditor, files, htmlContent) => {
            files.forEach(file => {
                if (htmlContent) {
                    return false
                }
                const fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor
                        .chain()
                        .insertContentAt(currentEditor.state.selection.anchor, {
                            type: 'image',
                            attrs: {
                                src: fileReader.result,
                            },
                        })
                        .focus()
                        .run()
                }
            })
        }})
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
