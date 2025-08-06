import { Heading } from "./components";
import { Routes, Route } from "react-router";
import { CreateEvent, Homepage, SignIn, SignUp, EventDetail } from "./pages";
import MainLayout from "./layouts/MainLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { EventContextProvider } from "./context/EventContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <EventContextProvider>
      <AuthContextProvider>
        <div
          className="min-h-screen w-full grid grid-rows-[auto_1fr_auto]
          font-['Outfit']  "
        >
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/events/:id" element={<EventDetail />} />
            </Route>

            <Route>
              <Route path="/" element={<ProtectedLayout />} />
              <Route index element={<Homepage />} />
              <Route path="/api/events/new" element={<CreateEvent />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>
          </Routes>
        </div>
      </AuthContextProvider>
    </EventContextProvider>
  );
}
export default App;
