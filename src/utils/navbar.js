import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import PropertiesPage from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    private: false,
    hidden: false,
  },
  {
    id: useId,
    title: "Properties",
    path: "/properties",
    element: <PropertiesPage />,
    private: false,
    hidden: false,
  },
];
export default navbar;
