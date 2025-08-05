import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts";
import { Homepage, SignIn, SignUp } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
