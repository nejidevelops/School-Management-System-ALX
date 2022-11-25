import React, { useState, useEffect} from "react";

const SubjectContext = React.createContext();

function SubjectProvider({ children }) {
    const [currentSubject, setCurrentSubject] = useState(null);

    return (
      <SubjectContext.Provider value={{ currentSubject, setCurrentSubject }}>
        {children}
      </SubjectContext.Provider>
    );
  }

export { SubjectContext, SubjectProvider };