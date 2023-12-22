import logo from "./logo.svg";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Contact from "./components/Contact";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Single-Blog" element={<SingleBlog />} />
            <Route path="/Contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
