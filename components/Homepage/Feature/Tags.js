const FeatureTagsComponent = () => {
  const tag = (prefix, name) => {
    return (
      <div className="control">
        <div className="tags has-addons is-medium">
          <span className="tag is-dark">{prefix}</span>
          <span className="tag is-primary">{name}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="tags is-centered">
            {/* {tag("Birthday", "Announcement")}
            {tag("Birthday", "Register")}
            {tag("Birthday", "List")}
            {tag("Birthday", "Update")}
            {tag("Birthday", "Delete")} */}

            {/* {tag("Config", "Announcement")} */}
            
            <span className="tag is-primary">Birthday Announcement</span>
            <span className="tag is-primary">Birthday </span>
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
            <span className="tag is-danger">Danger</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureTagsComponent;
