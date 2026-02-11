"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import FileHandler from '@tiptap/extension-file-handler'
import Image from '@tiptap/extension-image'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

import React from 'react'
import EditorHeader from './EditorHeader'

const extensions = [

    StarterKit.configure({
        orderedList: {
            HTMLAttributes: {
                class: 'list-decimal pl-6 text-red-500',
            },
        },
        bulletList: {
            HTMLAttributes: {
                class: 'list-disc pl-6',
            },
        },
        codeBlock:{
            HTMLAttributes:{
                class:'bg-black text-white w-fit py-2 px-3'
            },
        }
    }),
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
        },
        onDrop: (currentEditor, files, pos) => {
            files.forEach(file => {
                const fileReader = new FileReader()

                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor
                        .chain()
                        .insertContentAt(pos, {
                            type: 'image',
                            attrs: {
                                src: fileReader.result,
                            },
                        })
                        .focus()
                        .run()
                }
            })
        }
    }),

    // Paragraph,
    // Text,
    // Document    


]

export default function EditorField() {

    const editor = useEditor({
        extensions: extensions,
        editorProps: {
            attributes: {
                class: 'bg-white text-black border-red-500 border-2'
            }
        },
        content: '<p>I am Dip</p>',
        immediatelyRender: false
    })

    if (!editor) return

    return (
        <>
            <EditorHeader editor={editor} />
            <EditorContent editor={editor} height={500} />
        </>

    )
}
