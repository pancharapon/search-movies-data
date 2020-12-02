import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Backdrop from '../backdrop/backdrop';

const Modal = React.memo((props) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(window.innerWidth);
    });
  }, []);

  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.clicked}>
        <div className="z-20 absolute top-2/4 left-2/4 text-white transform -translate-x-2/4 -translate-y-2/4 p-4 bg-gray-100">
          {(props.video) ? <ReactPlayer
            controls
            url={`https://www.youtube.com/watch?v=${props.video}`}
            width={
              size <= 640
                ? '320px'
                : size <= 768
                ? '480px'
                : size <= 1024
                ? '720px'
                : '720px'
            }
            height={
              size <= 640
                ? '300px'
                : size <= 768
                ? '400px'
                : size <= 1024
                ? '400px'
                : '400px'
            }
          /> : null}
        </div>
      </Backdrop>
    </React.Fragment>
  );
});

export default Modal;
