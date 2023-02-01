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
  {
    id: useId,
    title: "Sign In",
    path: "/signin",
    element: <h1>Sign in page</h1>,
    private: false,
    hidden: true,
  },
  {
    id: useId,
    title: "Sign Up",
    path: "/signup",
    element: <h1>Sign Up page</h1>,
    private: false,
    hidden: true,
  },
];
export default navbar;
