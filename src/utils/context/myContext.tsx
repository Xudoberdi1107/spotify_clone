import React, { useState, createContext } from "react";

export const MyContext = createContext<{
  userPosition: boolean;
  setUserPosition: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  userPosition: false,
  setUserPosition: () => {},
});

export const ContextProvoder: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userPosition, setUserPosition] = useState(false);
  return (
    <MyContext.Provider value={{ userPosition, setUserPosition }}>
      {children}
    </MyContext.Provider>
  );
};

