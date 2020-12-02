import React from 'react';

const backdrop = React.memo((props) => {
  return props.show ? (
    <div className="z-10 fixed h-screen w-full top-0 left-0 bg-black bg-opacity-75"
         onClick={props.clicked}
    >
      {props.children}
    </div>
  ) : null;
});

export default backdrop;
