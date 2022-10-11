const Divider = ({ text, isVertical, left, right, color }) => {
  let classname = "is-family-title divider";
  classname = isVertical ? classname.concat(" is-vertical") : classname;
  classname = left ? classname.concat(" is-left") : classname;
  classname = right ? classname.concat(" is-right") : classname;
  return (
    <div
      className={`${classname} ${color ? "is-" + color : ""}`}
    >
      {text ? text : <></>}
    </div>
  );
};

export default Divider;
