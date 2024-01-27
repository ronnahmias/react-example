import "./box.component.css";

function BoxComponent(props) {
  const { title, borderColor, imagePath } = props;
  return (
    <>
      <div
        className="div-box"
        style={borderColor ? { border: `1px solid ${borderColor}` } : {}}
      >
        {/* Conditional rendering */}
        {imagePath ? (
          <img src="/react.svg" />
        ) : (
          <h4>{title ? title : "Default Text"}</h4>
        )}
      </div>
    </>
  );
}

export default BoxComponent;
