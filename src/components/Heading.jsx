import { Link } from "react-router";
const Heading = () => {
  return (
    <header className="bg-neutral text-white flex flex-col items-center md:flex-row justify-between p-4 ">
      <h1 className="btn btn-ghost text-3xl">Event Scheduler</h1>
      <nav>
        <ul className="flex flex-col sm:flex-row">
          <li className="btn btn-ghost">
            <Link to="/">Home</Link>
          </li>
          <li className="btn btn-ghost">Add Event</li>
          <li className="btn btn-ghost">
            <Link to="/SignIn">Anmenden</Link>{" "}
          </li>
          <li className="btn btn-ghost">
            <Link to="/SignUp">Registerung</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Heading;
