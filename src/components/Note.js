import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import env from "../env.json";

const Note = () => {
  
  let {noteURL} = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');
  
  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBackend, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({'url': noteURL})
      })
        .then(response => response.json())
        .then(response => {
          if (response.result) {
            setNoteText(response.note);
            setLineClass('');
            setFormClass('hide');
            setErrorClass('hide');
          } else if (!response.result) {
            setLineClass('hide');
            setFormClass('hide');
            setErrorClass('')
          }
        })
    } else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, []);
  
  const getNote = (event) => {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Fill fields!');
      return false;
    }
    noteURL = url;
    window.location.href = env.url + '/' + url;
  }
  
  const searchNote = () => {
    window.location.href = env.url;
  }
  
  return (
    <div>
      <div className={lineClass}>
        <h4 className='note__title'>Note:</h4>
        <div className='note__text'>{noteText}</div>
        <p className='note__attention'>Attention! After showing the note will be deleted!</p>
        <div>
          <button className='btn' onClick={searchNote}>
            Search Note
          </button>
        </div>
      </div>
      <div className={errorClass}>
        <p>An error occurred, the note was not found!</p>
      </div>
      <div className={formClass}>
        <form className='note__form' action="" onSubmit={getNote}>
          <label htmlFor='url'>Please Enter the Note hash: </label>
          <input type='text' name='url' id='url' className='form-control'/>
          <button type='submit' className='btn'>Search Note</button>
        </form>
      </div>
    </div>
  );
};

export default Note;