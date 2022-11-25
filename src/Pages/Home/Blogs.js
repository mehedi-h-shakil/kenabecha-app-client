import React from "react";

const Blogs = () => {
  return (
    <div className="w-9/12 mx-auto">
      <div>
        <h2 className="text-3xl py-5">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There are a lot of ways to handle state. <br />
          1. URL : We can use URL to store some data. Like filter parameters,
          sorting data, the id of current item . <br />
          2. Web Storage : We can store the state in the browser via web
          storage. This is useful when we want to presist state between reloads
          and reboots. <br />
          3. Local State : We can store item locally. It is useful when one
          component needs the state. <br />
          4. Lifted State :We can define the state in the parent component and
          share the same state across multiple components. <br />
          5. Derived State : We can use this state based on the available state
          and we do not need to declare a state at all.
        </p>
      </div>
      <div>
        <h2 className="text-3xl py-5">
          How does prototypical inheritance work?
        </h2>
        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object.getPrototypeOf and Object.
        </p>
      </div>
      <div>
        <h2 className="text-3xl py-5">
          What is a unit test? Why should we write unit tests?
        </h2>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages. <br />
          For Test-Driven Development (TDD), you write unit tests before writing
          any implementation. This makes your implementation details in your
          code shorter and easier to understand. In this instance, the best time
          to write unit tests is immediately. For others, most developers write
          unit tests after the code's been written.
        </p>
      </div>
      <div>
        <h2 className="text-3xl py-5">React vs. Angular vs. Vue?</h2>
        <p>
          In Angular, components are referred to as directives. Directives are
          just markers on DOM elements, which Angular can track and attach
          specific behavior too. Therefore, Angular separates the UI part of
          components as attributes of HTML tags, and their behaviors in the form
          of JavaScript code. This is what sets it apart when looking at Angular
          vs React. <br />
          React, interestingly, combines the UI and behavior of components. For
          instance, here is the code to create a hello world component in React.
          In React, the same part of the code is responsible for creating a UI
          element and dictating its behavior. <br />
          When looking into Vue vs React, in Vue, UI and behavior are also a
          part of components, which makes things more intuitive. Also, Vue is
          highly customizable, which allows you to combine the UI and behavior
          of components from within a script. Further, you can also use
          pre-processors in Vue rather than CSS, which is a great functionality.
          Vue is great when it comes to integration with other libraries, like
          Bootstrap.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
