import { Table, TableCell, TableHeader, TableKit, TableRow } from '@tiptap/extension-table';

import lowlight from "./supportedLanguage"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import FileHandler from "@tiptap/extension-file-handler"
import StarterKit from "@tiptap/starter-kit"
import Image from '@tiptap/extension-image'
import { uploadToCloudinary } from './uploadImageCloudinary';

const CustomImage = Image.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            public_id: {
                default: null,
            },
        };
    },
});

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
    CustomImage.configure({
        inline: false,
    }),
    FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],

        onPaste: async (editor, files,) => {
            console.log("Files", files)
            if (files && files.length > 0) {
                for (const file of files) {
                    try {
                        const response = await uploadToCloudinary(file);
                        editor
                            .chain()
                            .insertContent({
                                type: "image",
                                attrs: {
                                    src: response.secure_url,
                                    public_id: response.public_id
                                },
                            })
                            .focus()
                            .run();

                        console.log(response.public_id)
                    } catch (err) {
                        console.error(err);
                    }
                }
                return true;
            }

        },

        onDrop: async (editor, files, pos) => {
            for (const file of files) {
                try {

                    const response = await uploadToCloudinary(file);

                    editor
                        .chain()
                        .insertContentAt(pos, {
                            type: "image",
                            attrs: {
                                src: response.secure_url,
                                public_id: response.public_id,
                            },
                        })
                        .focus()
                        .run();

                } catch (err) {
                    console.error("Upload failed:", err);
                }
            }

            return true;
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

]