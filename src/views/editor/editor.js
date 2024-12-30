import { useDialog, useMessage } from 'naive-ui'
import { Editor } from '@tiptap/vue-3'
import Image from 'tiptap-extension-image'
import Video from 'tiptap-extension-video'
import Iframe from 'tiptap-extension-iframe'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import FontSize from 'tiptap-extension-font-size'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Link from 'tiptap-extension-link'
import CodeBlock from '@tiptap/extension-code-block'
import TrailingNode from 'tiptap-extension-trailing-node'
import Section from 'tiptap-extension-section'
import ImageLink from 'tiptap-extension-image-link'
import Hr from 'tiptap-extension-hr'
import BulletList from 'tiptap-extension-bullet-list'
import OrderedList from 'tiptap-extension-ordered-list'
import LineHeight from 'tiptap-extension-line-height'
import Float from 'tiptap-extension-float'
import Margin from 'tiptap-extension-margin'
import Resizable from 'tiptap-extension-resizable'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

const extensions = [
  StarterKit.configure({
    bulletList: false,
    orderedList: false,
    codeBlock: false,
  }),
  Placeholder.configure({
    placeholder: '请输入内容...',
  }),
  Underline,
  TextStyle,
  Color,
  FontSize,
  TextAlign.configure({
    types: ['paragraph'],
    defaultAlignment: 'justify',
  }),
  Highlight.configure({ multicolor: true }),
  Link.configure({ openOnClick: false, HTMLAttributes: { rel: '' } }),
  CodeBlock.configure({ HTMLAttributes: { class: 'code-snippet' } }),
  Resizable.configure({ types: ['image', 'video'] }),
  Image.configure({ inline: true, allowBase64: true }),
  Video.configure({ allowBase64: true }),
  Iframe,
  Section,
  ImageLink,
  Hr,
  BulletList.configure({ HTMLAttributes: { class: 'list-paddingleft-1' } }),
  OrderedList.configure({
    HTMLAttributes: { class: 'list-paddingleft-1' },
  }),
  LineHeight,
  Float,
  Margin,
]

const createEditor = () => {
  const editor = new Editor({
    element: document.createElement('div'),
    extensions,
    editorProps: {
      attributes: {
        class: 'mjx-editor-skin',
      },
      handleDOMEvents: {
        paste: (view, event) => {
          return true
        },
        click: (event) => {
          // console.log(event)
        },
      },
    },
    parseOptions: {
      preserveWhitespace: true,
      preserveStyle: true,
    },
    onUpdate: ({ editor }) => {
      const wordCount = editor.getText().length
      const wordCountElement = document.querySelector('.mjx-editor-footer .word-count')
      if (wordCountElement) {
        wordCountElement.textContent = wordCount
      }
    },
  })

  return editor
}

export const editor = createEditor()

export function copyContent() {
  const content = editor.getHTML()
  navigator.clipboard
    .writeText(content)
    .then(() => {
      alert('内容已复制到剪贴板！')
    })
    .catch((err) => {
      console.error('复制到剪贴板失败:', err)
    })
}
