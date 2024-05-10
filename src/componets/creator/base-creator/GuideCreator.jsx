import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../creator-componets.css'

const GuideCreator = () => {
  return (
    <>
    <div className='container-guide'>
      <div className='title-guide'>
        <div className='title-input'>
        <input type='text' placeholder='Coloca un título a tu publicación'></input>
        </div>
      </div>

      <div className='quill-container'>
        <div className='btn-quills'>
        <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        </div>

        <div className='editor-quills'>
        </div>

      </div>

    </div>
    </>
  )
}

export default GuideCreator
