import { useState } from "react";
import "./App.css";
import BoxComponent from "./components/box/box.component";
import ButtonComponent from "./components/button/button.component";

function App() {
  const [label, setLabel] = useState(0);

  const handleClick = (buttonSize) => {
    setLabel(label + parseInt(buttonSize, 10));
    console.log("Button", buttonSize, "clicked!");
  };

  return (
    <>
      <div>
        <label>Sum: {label}</label>
        <BoxComponent title="Custom Title" />
        <BoxComponent borderColor="red" />
        <BoxComponent
          borderColor="blue"
          title="no title"
          imagePath="/react.svg"
        />
        <BoxComponent borderColor="#415841" title="Boxx" />
        <ButtonComponent size="1" onClick={handleClick} />
        <ButtonComponent size="5" onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
