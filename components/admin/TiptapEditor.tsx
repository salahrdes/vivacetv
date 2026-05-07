'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import {
  Bold, Italic, List, ListOrdered, Quote, Code, Minus,
  Heading2, Heading3, Link as LinkIcon, Image as ImageIcon, Undo, Redo,
} from 'lucide-react';

type Props = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
};

function ToolBtn({
  onClick, active, label, children,
}: {
  onClick: () => void; active?: boolean; label: string; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className="flex items-center justify-center w-7 h-7 rounded transition-colors"
      style={{
        backgroundColor: active ? '#111110' : 'transparent',
        color: active ? '#fff' : '#6B6B65',
      }}
    >
      {children}
    </button>
  );
}

export default function TiptapEditor({ value, onChange, placeholder = 'Commencez à écrire…' }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3] } }),
      Image.configure({ inline: false }),
      Link.configure({ openOnClick: false }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'tiptap-content',
        style: 'min-height:320px;outline:none;padding:16px;font-size:14px;line-height:1.7;color:#111110',
      },
    },
  });

  if (!editor) return null;

  function addLink() {
    const url = window.prompt('URL du lien');
    if (url) editor!.chain().focus().setLink({ href: url }).run();
  }

  function addImage() {
    const url = window.prompt('URL de l\'image');
    if (url) editor!.chain().focus().setImage({ src: url }).run();
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid #E5E5E3', backgroundColor: '#fff' }}
    >
      {/* Toolbar */}
      <div
        className="flex flex-wrap items-center gap-0.5 px-3 py-2"
        style={{ borderBottom: '1px solid #E5E5E3', backgroundColor: '#FAFAF8' }}
      >
        <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} label="Gras">
          <Bold size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} label="Italique">
          <Italic size={13} />
        </ToolBtn>
        <div className="w-px h-4 mx-1" style={{ backgroundColor: '#E5E5E3' }} />
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} label="Titre H2">
          <Heading2 size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} label="Titre H3">
          <Heading3 size={13} />
        </ToolBtn>
        <div className="w-px h-4 mx-1" style={{ backgroundColor: '#E5E5E3' }} />
        <ToolBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} label="Liste">
          <List size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} label="Liste numérotée">
          <ListOrdered size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} label="Citation">
          <Quote size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} label="Code">
          <Code size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} label="Séparateur">
          <Minus size={13} />
        </ToolBtn>
        <div className="w-px h-4 mx-1" style={{ backgroundColor: '#E5E5E3' }} />
        <ToolBtn onClick={addLink} active={editor.isActive('link')} label="Lien">
          <LinkIcon size={13} />
        </ToolBtn>
        <ToolBtn onClick={addImage} label="Image">
          <ImageIcon size={13} />
        </ToolBtn>
        <div className="w-px h-4 mx-1 ml-auto" style={{ backgroundColor: '#E5E5E3' }} />
        <ToolBtn onClick={() => editor.chain().focus().undo().run()} label="Annuler">
          <Undo size={13} />
        </ToolBtn>
        <ToolBtn onClick={() => editor.chain().focus().redo().run()} label="Rétablir">
          <Redo size={13} />
        </ToolBtn>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} />
    </div>
  );
}
