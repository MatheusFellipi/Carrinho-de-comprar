import { Outlet } from "react-router-dom";
import styled from "./styles.module.css";
import PrimarySearchAppBar from "@/shared/components/header";

export const LayoutPages = () => {
  return (
    <main>
      <PrimarySearchAppBar />
      <section className={styled.container}>
        <Outlet />
      </section>
    </main>
  );
};
