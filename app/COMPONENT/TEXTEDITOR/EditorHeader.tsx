import { Toggle } from '@/components/ui/toggle'
import { Editor, useEditorState } from '@tiptap/react'
import { BoldIcon, Code, ItalicIcon, Link, Redo, StrikethroughIcon, Underline, Undo } from 'lucide-react'



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
                isOrderList: ctx.editor?.isActive("orderlist")
            }
        }
    })
    return (
        <>
            <Toggle
                size="sm"
                pressed={editorState.isBold}
                onPressedChange={() => editor.chain().focus().toggleBold().run()}
                aria-label="Toggle bold"
            >
                <BoldIcon className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editorState.isItalic}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                aria-label="Toggle Italic"
            >
                <ItalicIcon className="h-4 w-4" />
            </Toggle>


            <Toggle
                size="sm"
                pressed={editorState.isUnderLine}
                onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
                aria-label="Toggle Underline"
            >
                <Underline className="h-4 w-4" />
            </Toggle>


            <Toggle
                size="sm"
                pressed={editorState.isStrike}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                aria-label="Toggle Link"
            >
                <StrikethroughIcon className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editorState.isCodeBlock}
                onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
                aria-label="Toggle Link"
            >
                <Code className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editorState.isUndo}
                onPressedChange={() => editor.chain().focus().undo().run()}
                aria-label="Toggle Link"
            >
                <Undo className="h-4 w-4" />


            </Toggle>

            <Toggle
                size="sm"
                pressed={editorState.isRedo}
                onPressedChange={() => editor.chain().focus().redo().run()}
                aria-label="Toggle Link"
            >
                <Redo className="h-4 w-4" />
            </Toggle>

            <Toggle
                size="sm"
                pressed={editorState.isRedo}
                onPressedChange={() => editor.chain().focus().redo().run()}
                aria-label="Toggle Link"
            >
                <Redo className="h-4 w-4" />
            </Toggle>

        </>
    )
}
