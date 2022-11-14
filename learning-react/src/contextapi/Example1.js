import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("shubham1");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        {userName}
        <Child />
      </div>
    </AppContext.Provider>
  );
};

export const Child = () => {
  return <Grandchild />;
};

export const Grandchild = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Shubhamshukla1");
        }}
      >
        Change Username
      </button>
    </div>
  );
};
