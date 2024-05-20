import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../creator-componets.css'
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const GuideCreator = () => {
  const navigate = useNavigate();

  const HandleButtonClick = () => {
    navigate('/creator-content/FinishCreator');
  };
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
        </div>

        <div className='editor-quills'>
          <p>Editor Aqui</p>
        </div>
          <div className='btn-container-next'>
          <button 
          id='btn-next-guide'
          onClick={HandleButtonClick}
          >Siguiente</button>
          </div>
      </div>

      
    </div>
    </>
  )
}

export default GuideCreator
