import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "@/shared/components/header";

export const LayoutPages = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Outlet />
    </div>
  );
};
