
"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Columns, Columns2, Rows, Table, Trash2 } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { Editor, useEditorState } from '@tiptap/react'


export default function TableFunctionality({ editor }: { editor: Editor }) {

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return [
                {
                    context: ctx.editor?.isActive("table") ?? false,
                    fn: () =>
                        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false }).run(),
                    icon: <Table size={18} />,
                    title: "Add New Table",
                },

                {
                    context: ctx.editor?.isActive("tableCell") ?? false,
                    fn: () => editor.chain().focus().addColumnBefore().run(),
                    icon: <Columns size={18} />,
                    title: "Add Column Before",
                },

                {
                    context: ctx.editor?.isActive("tableCell") ?? false,
                    fn: () => editor.chain().focus().addColumnAfter().run(),
                    icon: <Columns2 size={18} />,
                    title: "Add Column After",
                },

                {
                    context: ctx.editor?.isActive("tableCell") ?? false,
                    fn: () => editor.chain().focus().deleteColumn().run(),
                    icon: <Trash2 size={18} />,
                    title: "Delete Column",
                },

                {
                    context: ctx.editor?.isActive("tableRow") ?? false,
                    fn: () => editor.chain().focus().addRowBefore().run(),
                    icon: <Rows size={18} />,
                    title: "Add Row Before",
                },

                {
                    context: ctx.editor?.isActive("tableRow") ?? false,
                    fn: () => editor.chain().focus().addRowAfter().run(),
                    icon: <Rows size={18} />,
                    title: "Add Row After",
                },

                {
                    context: ctx.editor?.isActive("tableRow") ?? false,
                    fn: () => editor.chain().focus().deleteRow().run(),
                    icon: <Trash2 size={18} />,
                    title: "Delete Row",
                },

                {
                    context: ctx.editor?.isActive("table") ?? false,
                    fn: () => editor.chain().focus().deleteTable().run(),
                    icon: <Trash2 size={18} />,
                    title: "Delete Table",
                },
            ]
        }
    })

    return (
        <div>

            <div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Table className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem className="flex flex-col">
                            {
                                editorState?.map(obj => (
                                    <Toggle
                                        size="sm"
                                        pressed={obj.context}
                                        onPressedChange={obj.fn}
                                        aria-label={obj.title}
                                    >
                                        {obj.icon}
                                        {obj.title}
                                    </Toggle>
                                ))
                            }
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}