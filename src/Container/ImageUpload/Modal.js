import React from 'react';

const Modal = ({selected}) => {
  return (
    <div className="backdrop">
      <img src={selected} alt="ddd"></img>
    </div>
  );
};

export default Modal;
