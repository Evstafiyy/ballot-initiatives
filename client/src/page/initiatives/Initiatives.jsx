import axios from "axios";
import React, { useEffect, useState } from "react";
import InitiativeItem from "./InitiativeItem";

import FormAddInitiative from "./FormAddInitiative";

import "./Initiatives.css";

function Initiatives({ user }) {
  const [initiatives, setInitiatives] = useState([]);
  const [isAddNew, setIsAddNew] = useState(false);

  const getAllInitiatives = async () => {
    const initiativesFromServer = await axios.get("/api/initiatives");

    console.log(initiativesFromServer);
    setInitiatives(initiativesFromServer.data.initiatives);
    console.log(initiativesFromServer.data.initiatives);
  };

  useEffect(() => {
    getAllInitiatives();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsAddNew(true)}
        style={{ color: "blue", backgroundColor: "white" }}
      >
        Добавить новую инициативу
      </button>
      {isAddNew && (
        <FormAddInitiative
          setInitiatives={setInitiatives}
          setIsAddNew={setIsAddNew}
          initiatives={initiatives}
          user={user}
        />
      )}

      {initiatives?.map((initiative) => (
        <div key={initiative.id}>
          <InitiativeItem
            initiative={initiative}
            setInitiatives={setInitiatives}
            user={user}
          />
        </div>
      ))}
    </>
  );
}

export default Initiatives;
