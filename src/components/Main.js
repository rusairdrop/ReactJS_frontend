import React from 'react';

const Main = () => {
  return (
    <div>
      <div className='main__buttons'>
        <a className='btn' href='/create'>Create Note</a>
        <a className='btn' href='/note'>View Note</a>
      </div>
      
      <div className="main__text">
        <p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку и
          получатель сможет её просмотреть. Заметка будет удалена после просмотра или по истечении
          15 минут с момента создания.</p>
        <br/>
        <p>Как сделать заметку? </p>
        <ul>
          <li>Пройдите по ссылке</li>
          <li>Вставьте текст и нажмите Create</li>
          <li>Отправьте сгенерированный адрес другу!</li>
        </ul>
        <br/>
        <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес в разделе <a
          href='/note'>Note</a></p>
      </div>
    
    </div>
  );
};

export default Main;