import { Toggle } from '@/components/ui/toggle'
import { Editor, useEditorState } from '@tiptap/react'
import { BoldIcon, Code, ItalicIcon, List, ListOrdered, Redo, StrikethroughIcon, Table, Underline, Undo } from 'lucide-react'
import TableFunctionality from './TableFunctionality'
import TextManipulator from './TextManipulator'

export default function EditorHeader({ editor }: { editor: Editor }) {

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return {
                isBold: ctx.editor?.isActive("bold") ?? false,
                isItalic: ctx.editor?.isActive("italic") ?? false,
                isUnderLine: ctx.editor?.isActive("underline") ?? false,
                isStrike: ctx.editor?.isActive("strike") ?? false,
                isCodeBlock: ctx.editor?.isActive("codeBlock") ?? false,
                isUndo: ctx.editor?.isActive("undo"),
                isRedo: ctx.editor?.isActive("redo"),
                isOrderList: ctx.editor?.isActive("orderedList") ?? false,
                isBulletList: ctx.editor?.isActive("bulletList") ?? false,
            }
        }
    })
    return (
        <div className='flex items-center'>
            <TextManipulator editor={editor} />
            <TableFunctionality editor={editor} />
        </div>
    )
}
