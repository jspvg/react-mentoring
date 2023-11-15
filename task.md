# TASK DETAILS

Your solution code should contain the following elements / features:

- [x] A reusable, flexible Button component that renders either a <button> or a <Link> (a component provided by react-router-dom), depending on whether the to prop is present on <Button> or not

  <Button to="/sessions">Click me</Button> should render <Link to="/sessions">Click me</Link>

  <Button>Click me</Button> should render <button>Click me</button>

- [x] Both <button> and <Link> should receive a "button" CSS class

- [x] The Button should accept a textOnly prop that, when set to true, should add the "button--text-only" CSS class to the rendered element - no matter if it's a <Link> or <button> that's rendered

- [x] The standard <button> or <Link> props should be settable on <Button> (and then be spread onto <button> or <Link>)

- [x] A custom, reusable Input wrapper component that can be used to fetch user input - it should bundle ("connected") <label> and <input> elements into a <div> element

- [x] The standard <input> props should be accepted by Input and should be spread onto the rendered <input> element

- [x] A custom Modal component that exposes an open() method which, inside the Modal component, then triggers the built-in showModal() method on the built-in <dialog> element - in addition, the <dialog> element should be "teleported" into the <div id="modal-root"> element

- [] The custom Modal component should then be used for the "Book a Session" and "Upcoming Sessions" components - these components should trigger Modal's exposed open() method whenever they are added to the DOM (i.e., the "Book a Session" and "Upcoming Sessions" components should be rendered conditionally by other components)

- [] Booked sessions should be managed centrally via React's Context API and with help of the useReducer() Hook
