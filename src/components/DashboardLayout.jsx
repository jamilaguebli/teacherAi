import { Outlet } from "react-router-dom";
import SlidePage from "./SildePage";


const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Barre latérale */}
      <SlidePage />

      {/* Contenu de la page */}
      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
