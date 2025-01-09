import React from "react";
import { SpeedContext } from "../context/SpeedContext";
import { useContext } from "react";

export const useSpeed = () => {
  const context = useContext(SpeedContext);
  if (!context) {
    throw new Error("useSpeed must be used within a SpeedProvider");
  }
  return context;
};
