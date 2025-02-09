import { createBrowserRouter, RouterProvider } from "react-router";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import GaleryPage from "./pages/Galery";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/galery", element: <GaleryPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
