import { Toggle } from '@/components/ui/toggle'
import { Editor, useEditorState } from '@tiptap/react'
import { Bold, Code, Italic, List, ListOrdered, Redo, Strikethrough, Underline, Undo } from 'lucide-react'
import React from 'react'

export default function TextManipulator({ editor }: { editor: Editor }) {

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return [
                {
                    active: ctx.editor?.isActive("bold") ?? false,
                    fn: () => editor.chain().focus().toggleBold().run(),
                    icon: <Bold size={18} />,
                    title: "Bold",
                },
                {
                    active: ctx.editor?.isActive("italic") ?? false,
                    fn: () => editor.chain().focus().toggleItalic().run(),
                    icon: <Italic size={18} />,
                    title: "Italic",
                },
                {
                    active: ctx.editor?.isActive("underline") ?? false,
                    fn: () => editor.chain().focus().toggleUnderline().run(),
                    icon: <Underline size={18} />,
                    title: "Underline",
                },
                {
                    active: ctx.editor?.isActive("strike") ?? false,
                    fn: () => editor.chain().focus().toggleStrike().run(),
                    icon: <Strikethrough size={18} />,
                    title: "Strikethrough",
                },
                {
                    active: ctx.editor?.isActive("codeBlock") ?? false,
                    fn: () => editor.chain().focus().toggleCodeBlock().run(),
                    icon: <Code size={18} />,
                    title: "Code Block",
                },


                {
                    active: ctx.editor?.isActive("undo"),
                    fn: () => editor.chain().focus().undo().run(),
                    icon: <Undo size={18} />,
                    title: "Undo",
                },
                {
                    active:ctx.editor?.isActive("redo"),
                    fn: () => editor.chain().focus().redo().run(),
                    icon: <Redo size={18} />,
                    title: "Redo",
                },

                {
                    active: ctx.editor?.isActive("orderedList") ?? false,
                    fn: () => editor.chain().focus().toggleOrderedList().run(),
                    icon: <ListOrdered size={18} />,
                    title: "Ordered List",
                },
                {
                    active: ctx.editor?.isActive("bulletList") ?? false,
                    fn: () => editor.chain().focus().toggleBulletList().run(),
                    icon: <List size={18} />,
                    title: "Bullet List",
                },
            ]

        }
    })
    return (
        <div>
            {
                editorState?.map(obj => (
                    <Toggle
                        size="sm"
                        pressed={obj.active}
                        onPressedChange={obj.fn}
                        aria-label={obj.title}
                    >
                        {obj.icon}
                    </Toggle>
                ))
            }

        </div>
    )
}
