import React, { Fragment, Suspense } from "react";
import useId from "../hooks/useId";
const NotePage = React.lazy(() => import("../pages/Note"));
const MainPage = React.lazy(() => import("../pages/Main"));

export const navbar = [
  {
    id: useId,
    title: "Main Page",
    path: "/main",
    element: (
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
        <MainPage />
      </Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useId,
    title: "Note Page",
    path: "/note",
    element: (
      <Suspense fallback={<Fragment>Loading...</Fragment>}>
        <NotePage />
      </Suspense>
    ),
    private: false,
    hidden: false,
  },
];
export default navbar;
