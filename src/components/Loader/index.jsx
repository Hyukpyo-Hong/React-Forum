import React from 'react';
import loadingGif from '../../loading.gif';

export default ({ width, height }) => (
  <div className="text-center">
    <img src={loadingGif} alt="" className="img" width={width || '40px'} height={height || '40px'} />
  </div>
);
