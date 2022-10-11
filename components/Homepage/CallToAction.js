import Link from "next/link";

const CallToActionComponent = () => {
  return (
    <div className="call-to-action mt-5">
      {/*show only on desktop*/}
      <div className="is-hidden-touch">
        <div className="columns">
        <div className="column is-3"></div>
          <div className="column is-4">
            <Link href="/invite">
              <button className="button is-primary is-large is-fullwidth is-rounded">
                Invite
              </button>
            </Link>
          </div>
          <div className="column is-4"></div>
        </div>
      </div>
      {/*show only on mobile*/}
      <div className="is-hidden-desktop">
        <div className="columns is-mobile is-centered">
          {/* <div className="column is-1"></div> */}
          <div className="column is-10">
            <Link href="/invite">
              <button className="button is-primary is-large is-fullwidth is-rounded">
                Invite
              </button>
            </Link>
          </div>
        </div>
        <div className="column is-6"></div>
      </div>
    </div>
  );
};

export default CallToActionComponent;
