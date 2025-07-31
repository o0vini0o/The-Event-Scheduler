const Heading = () => {
  return (
    <header className="bg-neutral text-white flex flex-col items-center md:flex-row justify-between p-4 ">
      <h1 className="btn btn-ghost text-3xl">Event Scheduler</h1>
      <nav>
        <ul className="flex flex-col sm:flex-row">
          <li className="btn btn-ghost">Home</li>
          <li className="btn btn-ghost">Add Event</li>
          <li className="btn btn-ghost">Anmenden</li>
          <li className="btn btn-ghost">Abmelden</li>
        </ul>
      </nav>
    </header>
  );
};
export default Heading;
