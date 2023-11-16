import { useState } from "react";
import Button from "./Button";
import UpcomingSessions from "./sessions/UpcomingSessions";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showUpcomingSessions = () => {
    setIsVisible(true);
  };

  const hideUpcomingSessions = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && <UpcomingSessions onClose={hideUpcomingSessions} />}
      <nav>
        <div>
          <span>ReactMentoring</span>
        </div>
        <div>
          <Button to="/" textOnly={true}>
            Our Mission
          </Button>
          <Button to="/sessions" textOnly={true}>
            Browse Sessions
          </Button>
          <Button textOnly={false} onClick={showUpcomingSessions}>
            Upcoming Sessions
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
