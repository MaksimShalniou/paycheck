import React, { ReactElement, lazy } from "react";
import { useStyles } from ".";
import { withSuspense } from "@/shared/hocs";

export const Main = (): ReactElement => {
  const classes = useStyles();
  const Page1 = withSuspense(lazy(() => import("./page-1")));
  const Page2 = withSuspense(lazy(() => import("./page-2")));
  const Page3 = withSuspense(lazy(() => import("./page-3")));
  const Page4 = withSuspense(lazy(() => import("./page-4")));
  const Page5 = withSuspense(lazy(() => import("./page-5")));
  const Page6 = withSuspense(lazy(() => import("./page-6")));
  const Page7 = withSuspense(lazy(() => import("./page-7")));

  return (
    <main className={classes.main}>
      <Page1 id="page-1" />
      <Page2 id="page-2" />
      <Page3 id="page-3" />
      <Page4 id="page-4" />
      <Page5 id="page-5" />
      <Page6 id="page-6" />
      <Page7 id="page-7" />
    </main>
  );
};
