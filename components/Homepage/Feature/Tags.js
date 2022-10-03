import TagComponent from "./Tag";

const FeatureTagsComponent = () => {
  const tag = (color, label) => {
    return <span className={`tag is-${color}`}>{label}</span>;

    // const tag = (prefix, name) => {
    return (
      <div className="control">
        <div className="tags has-addons is-medium">
          <span className="tag is-dark">{prefix}</span>
          <span className="tag is-primary">{name}</span>
        </div>
      </div>
    );
  };
  const birthdayColor = "primary";
  const configColor = "light";
  return (
    <>
      <div className="columns is-centered">
        <div className="column is-7">
          <div className="tags is-centered">
            <TagComponent label="Birthday Register" color={birthdayColor} />
            <TagComponent label="Birthday Update" color={birthdayColor} />
            <TagComponent label="Birthday Remove" color={birthdayColor} />
            <TagComponent label="Birthday List" color={birthdayColor} />
            <TagComponent label="Birthday Test" color={birthdayColor} />

            <TagComponent label="Config Announcement" color={configColor} />
            <TagComponent label="Config Ping Role" color={configColor} />
            <TagComponent label="Config Birthday Role" color={configColor} />
            <TagComponent label="Config Overview" color={configColor} />
            <TagComponent label="Config Status" color={configColor} />

            {/* <span className="tag is-primary">Birthday </span>
            <span className="tag is-primary">Seven</span>
            <span className="tag is-primary">Seven</span>

            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>

            <span className="tag is-black">Black</span>
            <span className="tag is-dark">Dark</span>
            <span className="tag is-light">Light</span>
            <span className="tag is-white">White</span>
            <span className="tag is-primary">Primary</span>
            <span className="tag is-link">Link</span>
            <span className="tag is-info">Info</span>
            <span className="tag is-success">Success</span>
            <span className="tag is-warning">Warning</span>
            <span className="tag is-danger">Danger</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTagsComponent;
