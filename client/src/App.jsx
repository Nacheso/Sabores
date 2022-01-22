import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div>
      <h1>¡SABORES!</h1>
      <Nav></Nav>
      <Outlet />
    </div>
  );
}
