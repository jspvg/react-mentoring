import Button from "../Button";

type UpcomingSessionProps = {
  title: string;
  summary: string;
  date: string;
  handleCancelSession: () => void;
};

const UpcomingSession = ({
  title,
  summary,
  date,
  handleCancelSession,
}: UpcomingSessionProps) => {
  return (
    <div className="upcoming-session">
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <time>{date}</time>
      </div>
      <div className="actions">
        <Button textOnly={true} onClick={handleCancelSession}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UpcomingSession;
