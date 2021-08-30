import React from 'react';

const Error = () => {
  return (
    <div className='err'>
      <h1 className='err__title'>404</h1>
      <h3 className='err__subtitle'>Not Found</h3>
      <h5 className='err__text'>The resource requested could not be found on this server</h5>
    </div>
  );
};

export default Error;