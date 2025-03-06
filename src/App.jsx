import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import NavBar from "./components/NavBar";
import ForumHome from "./views/Forum/ForumHome";
import ForumPost from "./views/Forum/ForumPost";
import Home from "./views/Home";
import FeaturesContainer from "./components/features";

import CaloriesPerDish from "./components/CaloriesPerDish";
import CompetitionOfTheDay from "./components/CompetitionOfTheDay";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Guide />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forum" element={<ForumHome />} />
          <Route path="/forum/post/:id" element={<ForumPost />} />
          <Route path="/calories" element={<CaloriesPerDish />} />
          <Route path="/competition" element={<CompetitionOfTheDay />} />
        </Routes>
        <FeaturesContainer />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
