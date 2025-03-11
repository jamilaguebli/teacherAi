import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./components/HomePage";
import Learn from "./components/Learn";
import Profile from "./components/Profile";
import Game from "./components/Game";
import Wallet from "./components/Wallet";
import Event from "./components/Event";
import Store from "./components/Store";
import Chat from "./components/Chat";
import DashboardLayout from "./components/DashboardLayout";
import Register from "./pages/Register"

function App() {
  return (
    <Routes>
      {/* Routes générales */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    

      {/* Routes avec SlidePage affiché */}
      <Route element={<DashboardLayout />}>
         <Route path="/home" element={<HomePage />} />
         <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/event" element={<Event />} />
        <Route path="/store" element={<Store />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
