import React, {useState} from 'react';

const Toggler = () => {
  const [isToggled, setToggle] = useState(false);

  return(
    <>
      {isToggled ? 'The Toggler enable!' : 'The Toggler disable!'}
      <button onClick={() => setToggle(!isToggled)}>
          Func Component Toggle
      </button>
    </>
  )
}

export default Toggler;