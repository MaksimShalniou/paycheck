import React, { ComponentType, FC, Suspense } from "react";
import { CircularProgress } from "@material-ui/core";

export const withSuspense =
  <T,>(Component: ComponentType<T>): FC<T> =>
  (props) =>
    (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );
