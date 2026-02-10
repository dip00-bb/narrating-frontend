import { Toggle } from '@/components/ui/toggle'
import { Editor, useEditorState } from '@tiptap/react'
import { BoldIcon } from 'lucide-react'
import React from 'react'



export default function EditorHeader({ editor }: { editor: Editor }) {

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return {
                isBold: ctx.editor?.isActive("bold") ?? false
            }
        }
    })
    return (
        <Toggle
            size="sm"
            pressed={editorState.isBold}
            onPressedChange={() => editor.chain().focus().toggleBold().run()}
            aria-label="Toggle bold"
        >
            <BoldIcon className="h-4 w-4" />
        </Toggle>
    )
}
