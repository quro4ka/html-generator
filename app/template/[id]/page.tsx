'use client'
import { HeaderTemplate } from '@/components/Header/HeaderTemplate/HeaderTemplate'
import { SideBar } from '@/components/SideBar/SideBar'
import { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { initialTemplate } from '@/app/template/[id]/initialTemplate'
import styles from './Template.module.scss'

export default function Template() {
  const [disabled, setDisabled] = useState(true)
  const [data, setData] = useState(initialTemplate)

  const editorRef = useRef(null)

  const toggleDisabled = () => setDisabled((prev) => !prev)

  // 745nxz674zp1tjq87dtp5chw08yzhrnkcckjsjhu76jms6i7
  return (
    <div className={styles.template}>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],

          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        apiKey={'745nxz674zp1tjq87dtp5chw08yzhrnkcckjsjhu76jms6i7'}
        value={data}
        onEditorChange={(e) => setData(e)}
        disabled={disabled}
        inline
      />
      <button onClick={toggleDisabled}>{disabled ? 'Enable Editor' : 'Disable Editor'}</button>
      <textarea
        style={{ width: '100%', height: '200px' }}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  )
}
