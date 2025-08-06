
import React from "react";

import { Link } from "react-router";
const Heading = () => {
  return (
    <header className="bg-neutral text-white flex flex-col items-center md:flex-row justify-between p-4 ">
      <h1 className="btn btn-ghost text-3xl">Event Scheduler</h1>
      <nav>
        <ul className="flex flex-col sm:flex-row">

          <Link className="btn btn-ghost" to="/">
            Home
          </Link>
          <Link className="btn btn-ghost" to="/api/events/new">
            Add Event
          </Link>
          <Link className="btn btn-ghost" to="/">
            Anmenden
          </Link>
          <Link className="btn btn-ghost" to="/">
            Abmelden
          </Link>

        </ul>
      </nav>
    </header>
  );
};
export default Heading;
