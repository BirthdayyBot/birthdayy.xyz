const Error = () => {
  return (
    <div className="error container">
      <h1 className="is-title">
        It seems like this Page does not exist :(
      </h1>
      <div className="columns mt-5">
        <div className="column is-3">
          <button className="button is-primary is-large is-fullwidth is-rounded is-outlined">
            Return Home
          </button>
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <button className="button is-primary is-large is-fullwidth is-rounded">
            Invite Birthday
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
