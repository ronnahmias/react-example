import "./button.component.css";

function ButtonComponent(props) {
  const { onClick, size } = props;
  const handleClick = () => {
    onClick(size);
  };
  return <button onClick={handleClick}>Add {size}</button>;
}

export default ButtonComponent;
