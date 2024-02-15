import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../pages/NewBlog";
import BlogDetail from "../pages/BlogDetail";
import Profile from "../pages/Profile";
import MyBlogs from "../pages/MyBlogs";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlog />} />
          <Route path="/blogdetail/:idx" element={<BlogDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myblogs" element={<MyBlogs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
