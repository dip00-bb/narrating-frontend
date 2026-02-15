import { Toggle } from '@/components/ui/toggle'
import { Editor, useEditorState } from '@tiptap/react'
import { Bold, Code, Italic, List, ListOrdered, Redo, Strikethrough, Underline, Undo } from 'lucide-react'
import React from 'react'

const iconSize = 20

export default function TextManipulator({ editor }: { editor: Editor }) {

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return [
                {
                    active: ctx.editor?.isActive("bold") ?? false,
                    fn: () => editor.chain().focus().toggleBold().run(),
                    icon: <Bold size={iconSize} />,
                    title: "Bold",
                },
                {
                    active: ctx.editor?.isActive("italic") ?? false,
                    fn: () => editor.chain().focus().toggleItalic().run(),
                    icon: <Italic size={iconSize} />,
                    title: "Italic",
                },
                {
                    active: ctx.editor?.isActive("underline") ?? false,
                    fn: () => editor.chain().focus().toggleUnderline().run(),
                    icon: <Underline size={iconSize} />,
                    title: "Underline",
                },
                {
                    active: ctx.editor?.isActive("strike") ?? false,
                    fn: () => editor.chain().focus().toggleStrike().run(),
                    icon: <Strikethrough size={iconSize} />,
                    title: "Strikethrough",
                },
                {
                    active: ctx.editor?.isActive("codeBlock") ?? false,
                    fn: () => editor.chain().focus().toggleCodeBlock().run(),
                    icon: <Code size={iconSize} />,
                    title: "Code Block",
                },


                {
                    active: ctx.editor?.isActive("undo"),
                    fn: () => editor.chain().focus().undo().run(),
                    icon: <Undo size={iconSize} />,
                    title: "Undo",
                },
                {
                    active: ctx.editor?.isActive("redo"),
                    fn: () => editor.chain().focus().redo().run(),
                    icon: <Redo size={iconSize} />,
                    title: "Redo",
                },

                {
                    active: ctx.editor?.isActive("orderedList") ?? false,
                    fn: () => editor.chain().focus().toggleOrderedList().run(),
                    icon: <ListOrdered size={iconSize} />,
                    title: "Ordered List",
                },
                {
                    active: ctx.editor?.isActive("bulletList") ?? false,
                    fn: () => editor.chain().focus().toggleBulletList().run(),
                    icon: <List size={iconSize} />,
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
                        key={obj.title}
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
