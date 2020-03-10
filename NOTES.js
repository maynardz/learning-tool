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

/*
************
 USEEFFECT
************

    - The Effect Hook lets you perform side effects in function components

    - The Effect Hook tells your component that it needs to do something after render. By default, effects run both after the first render and after every update, but that's not always the case - we can customize when we want certain effects to run.

    - When React renders our component, it will remember the effect we used, and then run our effect after updating the DOM. This happens for every render, including the first one.

    - React performs the cleanup when the component unmounts. However, effects run for every render and not just once. This is why React also cleans up effects from the previous render before running the effects next time.
*/

/*
************
   PROPS
************

    - Props get passed as a single object from a parent component to a child component.

    - Props can be named whatever you want, but it's standard convention to name the prop what you're passing in AS the prop to ehance readability/comprehension.

        - Think of props as a telemarketer wanting to sell something: The parent component (or telemarketer) calls the child component and wants to sell it something. It could have a single item, or multiple items it wants to give to who it's calling. Assuming the component being called wants to buy all of those items, they get packaged up and sent to them as a single 'props' object.
*/