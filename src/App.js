import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Overview from "./components/Overview/Overview";
import Inventory from "./components/Inventory/Inventory";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </div>
  );
}
export default App;
