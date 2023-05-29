import React from "react";
//context(warehouse)
//provider(delivery boy)
//consumer(we)

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value="japes">
        {children}
    </AppContext.Provider>;
};

export { AppContext, AppProvider};
