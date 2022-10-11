const IconText = ({ icon, text }) => {
  return (
    <span className="icon-text">
      <span className="icon">{icon}</span>
      <span>{text}</span>
    </span>
  );
};

export default IconText;
