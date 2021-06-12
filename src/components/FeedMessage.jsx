export default function FeedMessage({ message }) {
  return (
    <div className="message">
      <div className="message__body">
        <div>
          {
            "I got a gig lined up in Watson, no biggie. If you prove useful, expect more side gigs coming your way. I need a half-decent netrunner. Hit me up, provide credentials, eddies on completion."
          }
        </div>
      </div>
      <div className="message__footer">
        <span className="message__authoring">V. M. Vargas</span>
        {" - 11:04pm"}
      </div>
    </div>
  );
}
