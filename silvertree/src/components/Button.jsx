import { useState } from 'react';

var i = 0;

export default function Button({ colours }) {
  const [currentColour, setCurrentColour] = useState(colours[0]);
  const onClick = () => {
    if (i === colours.length) {
      i = 0;
    } else {
      i++;
    }
    setCurrentColour(colours[i]);
  };
  return (
    <div>
      <button onClick={onClick} style={{ backgroundColor: currentColour }}>
        Hi from Brent
      </button>
    </div>
  );
}
