import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function RootPage() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
}
