const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of component",
        exercises: 14,
      },
    ],
  };
  console.log(course.parts);
  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
        // exercises1={parts.map((p) => p.exercises)}
      />

      <Total
        a={course.parts[0].exercises}
        b={course.parts[1].exercises}
        c={course.parts[2].exercises}
      />
    </div>
  );
};
export default App;

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <ul>
      {props.parts.map((part, idx) => (
        <Part part={part.name} exercises={part.exercises} key={idx} />
      ))}
    </ul>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.a + props.b + props.c}</p>;
};

const Part = (props) => {
  return (
    <li>
      {props.part} {props.exercises}
    </li>
  );
};
