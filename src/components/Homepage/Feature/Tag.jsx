import { useState } from "react";

const TagComponent = ({ color, label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLight = isHovered ? "is-primary" : "";
  const str = isHovered ? `is-primary is-light` : "is-primary";
  return (
    <span
      className={`tag ${str} is-unselectable is-medium`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </span>
  );
};

export default TagComponent;
