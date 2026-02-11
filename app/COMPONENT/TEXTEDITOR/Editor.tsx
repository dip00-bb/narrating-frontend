"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import FileHandler from '@tiptap/extension-file-handler'
import Image from '@tiptap/extension-image'

import EditorHeader from './EditorHeader'

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import python from 'highlight.js/lib/languages/python'
import java from 'highlight.js/lib/languages/java'
import c from 'highlight.js/lib/languages/c'

import { all, createLowlight } from 'lowlight'
const lowlight = createLowlight(all)

lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('javascript', js)
lowlight.register('typescript', ts)
lowlight.register('python', python)
lowlight.register('java', java)
lowlight.register('c', c)

const extensions = [

    StarterKit.configure({
        codeBlock: false,
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
    CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
            class: 'bg-gray-600 w-[800px] overflow-scroll px-4 py-3'
        },
        enableTabIndentation: true,
        tabSize:5
    }),
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
