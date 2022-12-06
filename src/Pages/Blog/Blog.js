import React from "react";

const Blog = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl mt-20 mb-20">
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-1) What are the different ways to manage a state in a React
          application?
        </h2>

        <p>
          Local state is most often managed in React using the useState hook.
          For example, local state would be needed to show or hide a modal
          component or to track values for a form component, such as form
          submission, when the form is disabled and the values of a form's
          inputs.If we need to increase the component responsibility we only
          need to update the code in the same component and not in three
          different places.
          <br />
          <span className="text-yellow-600">
            Different ways to manage a state in a React application:
          </span>{" "}
          <br />
          1) Auto caching and re-fetching. <br />
          2) Parallel and dependent queries.
          <br />
          3) Mutations + Reactive Query Refetching.
          <br />
          4) Multi-layer Cache + Automatic Garbage Collection.
          <br />
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-2) How does prototypical inheritance work?
        </h2>
        <p>
          Answer : The Prototypal Inheritance is a feature in javascript used to
          add methods and properties in objects. It is a method by which an
          object can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object. getPrototypeOf and Object. The most important
          difference between class- and prototype-based inheritance is that a
          class defines a type which can be instantiated at runtime, whereas a
          prototype is itself an object instance.
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">
          Q-3)What is a unit test? Why should we write unit tests?
        </h2>
        <span className="text-yellow-600">What is a unit test:</span>{" "}
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
          <br />
          <span className="text-yellow-600">
            Why should we write unit tests:
          </span>
          <br />
          They enable you to catch bugs early in the development process.
          Automated unit tests help a great deal with regression testing. They
          detect code smells in your codebase. For example, if you're having a
          hard time writing unit tests for a piece of code, it might be a sign
          that your function is too complex
        </p>
      </div>
      <div className="card-body">
        <h2 className="text-yellow-600">Q-4) React vs. Angular vs. Vue?</h2>
        <p>
          Vue provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option. Vue
          provides higher customizability and hence is easier to learn than
          Angular or React. Further, Vue has an overlap with Angular and React
          with respect to their functionality like the use of components. Hence,
          the transition to Vue from either of the two is an easy option
        </p>
      </div>
    </div>
  );
};

export default Blog;