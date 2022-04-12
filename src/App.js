import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Overview from "./components/Overview/Overview";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipment from "./components/Shipment/Shipment";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="overflow-x-hidden apps">
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;
