import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import AppShell from "../components/AppShell/AppShell";
import "../index.css";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AppShell>
        <Outlet />
      </AppShell>
    </React.Fragment>
  );
}
