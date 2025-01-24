import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration } from "react-router";

export default function RootPage() {
  return (
    <>
      <ScrollRestoration />
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
}
