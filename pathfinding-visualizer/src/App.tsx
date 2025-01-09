import React from "react";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import Grid from "./components/Grid";
import { useRef } from "react";
import Nav from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <TileProvider>
      <PathfindingProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col items-center justify-center">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </PathfindingProvider>
    </TileProvider>
  );
}

export default App;
