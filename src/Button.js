import React, { useState } from 'react';

function Button() {
  const [count, setCount] = useState(0);
  return (
      <div>
    <button onClick={() => setCount(1)}>
      Click me!
    </button>
   
    </div>
  );
}

export default Button;