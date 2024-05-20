import React from 'react'
import '../creator-componets.css'
import { useNavigate } from 'react-router-dom';

const FinishCreator = () => {
  return (
    <>
      <div class="container-finish">
        <div class="descrip">
          <textarea className='textarea-finish' placeholder='Inserta la descripción para tu video en Youtube.'>
            Inserta la descripción para tu video en Youtube.
          </textarea>
        </div>

        <div class="miniatura">
          <div className='miniatura-settings'>
              <span id='span-miniatura-upload'>
                Sube tu miniatura
              </span>

              <label id='label-miniatura'>
              Formatos recomendados: JPG, PNG, WEBP.
              </label>

              <div>
                <input type="file" />
                <button>1</button>
              </div>

              <span>
                  thumbnail.jpg
                </span>
              
            </div>
          <div className='miniatura-here'>
            Miniatura aqui
          </div>

        </div>

        <div class="playlist">
          <span>Elige la playlist de la que formará parte tu video</span>
          <label>Dropdown Here</label>
          <input type='text'></input>
        </div>
        <div class="etiquetas"></div>
        <div class="proyectos"></div>
        <div class="View"></div>
        <div class="Boton"></div>
      </div>
    </>
  );
};

export default FinishCreator;
