import React, { useRef } from 'react'
import EmailEditor from 'react-email-editor'

const CustomEmailTemplate = () => {
  const emailEditorRef = useRef(null)

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor
    unlayer?.exportHtml((data) => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }

  const onEditorLoad = () => {
    console.log('The editor has loaded.')
  }

  return (
    <div>
      <div>
        <button
          className='bg-white hover:bg-slate-200 text-gray-800 font-semibold py-2 px-4 border border-slate-200 rounded shadow gap-1 mr-3 ml-2 mt-2'
          onClick={exportHtml}
        >
          Export HTML
        </button>
      </div>
      <div className='mt-2'>
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onEditorLoad}
          className='h-[600px] w-full'
        />
      </div>
    </div>
  )
}

export default CustomEmailTemplate
