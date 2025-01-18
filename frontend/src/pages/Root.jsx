import Header from "../components/Header";
import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
