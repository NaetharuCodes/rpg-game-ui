import { createFileRoute } from "@tanstack/react-router";
import Journal from "../pages/Journal";

export const Route = createFileRoute("/game")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Journal />;
}
