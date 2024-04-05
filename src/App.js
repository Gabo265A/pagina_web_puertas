import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./screens/Home";
import Catalog from "./screens/Catalog";
import Contact from "./screens/Contact";
import About from "./screens/AboutOurBusiness";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />,
      <Route path="catalogo" element={<Catalog />} />,
      <Route path="contacto" element={<Contact />} />,
      <Route path="sobre-nosotros" element={<About />} />
    </Route>
  ));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
