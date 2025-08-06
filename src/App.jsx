
import { Heading } from "./components";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import EventDetail from "./pages/EventDetail";
import { EventContextProvider } from "./context/EventContext";
import CreateEvent from "./pages/CreateEvent";

function App() {
  return (
    <EventContextProvider>
      <div
        className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]
          font-['Outfit']  "
      >
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/events/:id" element={<EventDetail />} />

            <Route path="/api/events/new" element={<CreateEvent />} />
          </Route>
        </Routes>
      </div>
    </EventContextProvider>

  );
}

export default App;
