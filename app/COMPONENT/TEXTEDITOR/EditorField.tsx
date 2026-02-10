"use client"

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const extensions=[

    StarterKit
]

export default function EditorField() {

    const editor=useEditor({
        extensions:extensions,
        content:'<p>I am Dip</p>',
        immediatelyRender:false
    })

  return (
    <EditorContent editor={editor} />
  )
}
