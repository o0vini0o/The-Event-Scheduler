import { Heading } from "./components";
import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EventDetail from "./pages/EventDetail";
import { EventContextProvider } from "./context/EventContext";
import CreateEvent from "./pages/CreateEvent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div
      className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]
          font-['Outfit']  "
    >
      <EventContextProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/api/events/new" element={<CreateEvent />} />
            <Route path="/signin" element={<SignIn />} />

            <Route path="/events/:id" element={<EventDetail />} />
          </Route>

          <Route path="/" element={<ProtectedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/api/events/new" element={<CreateEvent />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/events/:id" element={<EventDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </EventContextProvider>
    </div>
  );
}

export default App;
