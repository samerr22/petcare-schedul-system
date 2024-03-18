import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import Schedul from "./pages/schedul";
import Creatschedul from "./pages/CreatSch";
import Viewshdule from "./pages/ViewSchu";
import Profile from "./components/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/schedul" element={<Schedul />} />
          <Route path="/Creatsch" element={<Creatschedul />} />
          <Route path="/Viewschedul" element={<Viewshdule />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<OnlyAdminPrivateRoute />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
