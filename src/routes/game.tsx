import { createFileRoute } from "@tanstack/react-router";
import Chat from "../pages/Chat";
import Map from "../pages/Map";
import Explore from "../pages/Explore";
import Journal from "../pages/Journal";
import Inventory from "../pages/Inventory";
import { GameProvider, useGame } from "../contexts/GameContext";

export const Route = createFileRoute("/game")({
  component: RouteComponent,
});

function GameContent() {
  const { currentView } = useGame();

  switch (currentView) {
    case "chat":
      return <Chat />;
    case "map":
      return <Map />;
    case "explore":
      return <Explore />;
    case "journal":
      return <Journal />;
    case "inventory":
      return <Inventory />;
  }
}

function RouteComponent() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}
