import Landing from "./Components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import LinkedInCallback from "./LinkedInCallback";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
              <Landing />
            </div>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/linkedin-callback" Component={LinkedInCallback} />
        <Route
          path="*"
          element={
            <h1 className="h-screen grid place-items-center">
              Page not found!
            </h1>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
