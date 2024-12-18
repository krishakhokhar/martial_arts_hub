import React from 'react';
import '../comman/Button.css';

function Button({ text, className,icone }) {
  return (
    <div>
      <button className={`button ${className}`}>
        {text}
        {icone}
      </button>
    </div>
  );
}

export default Button;
