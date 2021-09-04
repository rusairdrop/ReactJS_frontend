import React, {useState} from 'react';
import env from '../env.json';

const Create = () => {
  
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide');
  const [formClass, setFormClass] = useState('');
  
  const sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');
    
    fetch(env.urlBackend, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
      .then(response => response.json())
      .then(response => {
        if (response.result) {
          setUrl(env.url + '/' + response.url);
        }
      })
  }
  
  const loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Enter your Note text please');
      return false;
    }
    sendData({'note': note});
  }
  
  return (
    <div>
      <form onSubmit={loadDataFromForm} className={formClass}>
        <label htmlFor="note">
        <textarea name="note"
                  id="note"
                  rows="5"
                  placeholder='Enter your note text...'
                  defaultValue=''/>
        </label>
        <button className='btn' type='submit'>Create</button>
      </form>
      <div>
        <div className={lineClass}>
          <div className='note__url'>
            <p>Copy the URL and send it to the addressee:</p>
            {url}
          </div>
          <div>
            <button className='btn' onClick={function () {
              window.location.reload()
            }}>
              Create new note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;