
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
        tabSize:5
    }),
]