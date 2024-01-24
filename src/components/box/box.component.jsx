import "./box.component.css";

function BoxComponent(props) {
  const { title, borderColor } = props;
  return (
    <>
      <div
        className="div-box"
        style={borderColor ? { border: `1px solid ${borderColor}` } : {}}
      >
        <h4>{title ? title : "Default Text"}</h4>
      </div>
    </>
  );
}

export default BoxComponent;
