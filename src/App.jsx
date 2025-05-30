import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import NavBar from "./components/NavBar";
import ForumHome from "./views/Forum/ForumHome";
import ForumPost from "./views/Forum/ForumPost";
import FeaturesContainer from "./components/features";
import CaloriesPerDish from "./components/CaloriesPerDish";
import CompetitionOfTheDay from "./components/CompetitionOfTheDay";
import RecipePage from "./components/RecipePage";
import RecipeDetails from "./components/RecipeDetails";
import ShoppingList from "./components/ShoppingList";
import LuckyWheel from "./components/LuckyWheel";
import LoyaltyPage from "./components/LoyaltyPage";
import DiscountPage from "./components/DiscountPage";
import MysteryBox from "./components/MysteryBox";
import Dishes from "./components/Dishes";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Guide />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forum" element={<ForumHome />} />
          <Route path="/forum/post/:id" element={<ForumPost />} />
          <Route path="/calories" element={<CaloriesPerDish />} />
          <Route path="/competition" element={<Dishes />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/wheel" element={<LuckyWheel />} />
          <Route path="/loyalty" element={<LoyaltyPage />} />
          <Route path="/discounts" element={<DiscountPage />} />
          <Route path="/mystery-box" element={<MysteryBox />} />
        </Routes>
        <FeaturesContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
