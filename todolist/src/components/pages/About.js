import React from 'react';

function About() {

  // don't need an element in a dom, we can use react.fragment rather than a div or a single element, does not show in the dom but need it for jsx
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>This is the Todolist App V1.0.0. It is part of a React Crash Course</p>
    </React.Fragment>
  )
}

export default About;