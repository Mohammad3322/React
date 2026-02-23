import "./MyComponent.css";

export default function MyComponent() {
  const person = {
    name: "Mohammad",
    email: "Mohammad@gmail.com",
  };

  const elmStyle = {
    backgroundColor: "blue",
    fontSize: "40px",
    borderRadius: "10px",
  };

  return (
    <div>
      <h1 style={elmStyle}>{sayHello() + " " + person.name}</h1>
      <h2 style={elmStyle}>{person.email}</h2>
      <h2 style={{ backgroundColor: "green" }}>Hi</h2>
      <h2 className={"active redBg"}>Hi2</h2>
      <h2 className={person.name === "Mohammad" ? "greenBg" : "redBg"}>Hi3</h2>
    </div>
  );
}

function sayHello() {
  return "Hello";
}
