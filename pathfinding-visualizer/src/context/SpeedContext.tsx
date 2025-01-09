import { createContext, useState } from "react";
import { SpeedType } from "../utils/types";

export const SpeedContext = createContext<SpeedType | undefined>(undefined);

export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<SpeedType>(0.5);
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
