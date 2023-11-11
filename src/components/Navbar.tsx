import Button from "./Button";

const Navbar = () => {
  return (
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
        <Button textOnly={false}>Upcoming Sessions</Button>
      </div>
    </nav>
  );
};

export default Navbar;
