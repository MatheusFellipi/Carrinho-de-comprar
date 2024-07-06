import { Outlet } from "react-router-dom";
import styled from "./styles.module.css";
import PrimarySearchAppBar from "@/shared/components/header";

export const LayoutPages = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <main className={styled.container}>
        <Outlet />
      </main>
    </div>
  );
};
