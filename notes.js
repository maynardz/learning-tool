/*
************
 COOKER.JS
************
*/

import React, {useState, useEffect} from 'react';

const Cooker = () => {

    console.log('component rendered!');

    const [stoveTemp, setStoveTemp] = useState(0);
    const [boiling, setBoiling] = useState(false);
    const [cooked, setCooked] = useState(false);
    const [eaten, setEaten] = useState(false);

    return(
        <div>

        </div>
    )
}

export default Cooker;

/*
************
   STATE
************

    - State is a JavaScript function that stores a components dynamic data and determines the components behavior. Since state is dynamic, it allows a component to keep track of changing information in between renders.

    - To declare and manage state, we call the ReactHook 'useState', which is a function imported from React itself. The useState hook takes an initial argument of what the initial state should be set as, and uses array destructing to assign that initial argument a variable name, as well as a means of changing that state via a named callback function

        const [stoveTemp, setStoveTemp] = useState(0);

        1. the first element is declared as 'stoveTemp' and represents the state variable. Any changes to this variable will cause our Cooker component to re-render.
        2. The second element is declared as 'setStoveTemp', and is our callback function to update the state variable of 'stoveTemp'.

*/

