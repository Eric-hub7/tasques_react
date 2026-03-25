import React from 'react';
import './Targeta.css';

function Targeta({ 
  imatge, 
  titol, 
  text, 
  textBoto1, 
  enllacBoto1, 
  textBoto2, 
  enllacBoto2 
}) {
  return (
    <div className="targeta-container">
      <img src={imatge} alt={titol} className="targeta-imatge" />
      
      <div className="targeta-contingut">
        <h2 className="targeta-titol">{titol}</h2>
        <p className="targeta-text">{text}</p>
      </div>
      
      <div className="targeta-accions">
        <a href={enllacBoto1} className="targeta-boto">{textBoto1}</a>
        <a href={enllacBoto2} className="targeta-boto">{textBoto2}</a>
      </div>
    </div>
  );
}

export default Targeta;