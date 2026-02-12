import { Table, TableCell, TableHeader, TableKit, TableRow } from '@tiptap/extension-table';

import lowlight from "./supportedLanguage"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import FileHandler from "@tiptap/extension-file-handler"
import StarterKit from "@tiptap/starter-kit"
import Image from '@tiptap/extension-image'

export const extensions = [

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
        tabSize: 5
    }),
    Table.configure({
        resizable: true,
        HTMLAttributes: {
            class: 'w-full table-fixed border-collapse',
        },
    }),

    TableRow.configure({
        HTMLAttributes: {
            class: 'border-b',
        },
    }),

    TableHeader.configure({
        HTMLAttributes: {
            class:
                'border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold',
        },
    }),

    TableCell.configure({
        HTMLAttributes: {
            class:
                'border border-gray-300 px-3 py-2 align-top',
        },
    }),
        // tableRow: {
        //     HTMLAttributes: {
        //         class: "border-2 border-green-500 w-[300px] h-[40px]"
        //     }
        // }
        // tableHeader: {
        //     HTMLAttributes: {
        //         class: "border-2 border-black"
        //     }
        // }

]