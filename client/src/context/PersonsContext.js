import React, { createContext, useState } from "react";

export const PersonsContext = createContext();

export const PersonsContextProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const deletePersons = (id) => {
    let data = persons.filter((person) => person.id !== id);
    setPersons(data);
  };
  return (
    <PersonsContext.Provider
      value={{
        persons,
        setPersons,
        addPerson,
        deletePersons,
        selectedPerson,
        setSelectedPerson,
      }}
    >
      {children}
    </PersonsContext.Provider>
  );
};
