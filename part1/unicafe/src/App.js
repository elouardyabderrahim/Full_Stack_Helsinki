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

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part, idx) => (
        <Part part={part.name} exercises={part.exercises} key={idx} />
      ))}
    </ul>
  );
};

const Total = ({ a, b, c }) => {
  return <p>Number of exercises {a + b + c}</p>;
};

const Part = ({ part, exercises }) => {
  return (
    <li>
      {part} {exercises}
    </li>
  );
};
