import React, { Fragment, Suspense } from "react";
import useId from "../hooks/useId";
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HomePage = React.lazy(() => import("../pages/Home"));

export const navbar = [
  {
    id: useId,
    title: "Home",
    path: "/home",
    element: (
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
        <HomePage />
      </Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useId,
    title: "Properties",
    path: "/properties",
    element: (
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
        <PropertiesPage />
      </Suspense>
    ),
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
