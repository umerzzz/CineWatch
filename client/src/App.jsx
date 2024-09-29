import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayWatchList from "./pages/DisplayWatchList";
import Dashboard from "./pages/Dashboard";
import AddWatchlist from "./pages/AddWatchlist";
import HowTo from "./pages/Howto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/displayWatchList" element={<DisplayWatchList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-watchlist" element={<AddWatchlist />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
