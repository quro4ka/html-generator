'use client'
import { HeaderTemplate } from '@/components/Header/HeaderTemplate/HeaderTemplate'
import { SideBar } from '@/components/SideBar/SideBar'
import { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { initialTemplate } from '@/app/template/[id]/initialTemplate'
import styles from './Template.module.scss'
import { Button } from '@/ui/Button/Button'

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
          plugins:
            'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',

          toolbar:
            'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        apiKey={'745nxz674zp1tjq87dtp5chw08yzhrnkcckjsjhu76jms6i7'}
        value={data}
        onEditorChange={(e) => setData(e)}
        disabled={disabled}
        inline
      />
      <Button onClick={toggleDisabled}>{disabled ? 'Enable Editor' : 'Disable Editor'}</Button>
      <textarea
        style={{ width: '100%', height: '200px' }}
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  )
}
