import { createContext, useContext, useState, type ReactNode } from "react";

type GameView = "chat" | "map" | "explore" | "journal" | "inventory";

interface GameState {
  currentView: GameView;
  currentLocation: string | null;
  gameTime: number;
  setView: (view: GameView) => void;
  setLocation: (location: string) => void;
}

const GameContext = createContext<GameState | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<GameView>("chat");
  const [currentLocation, setCurrentLocation] = useState<string | null>(null);
  const [gameTime, setGameTime] = useState(0);

  const setLocation = (location: string) => {
    setCurrentLocation(location);
    setCurrentView("explore");
  };

  const setView = (view: GameView) => {
    setCurrentView(view);
  };

  return (
    <GameContext.Provider
      value={{
        currentView,
        currentLocation,
        gameTime,
        setView,
        setLocation,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within GameProvider");
  }
  return context;
};
