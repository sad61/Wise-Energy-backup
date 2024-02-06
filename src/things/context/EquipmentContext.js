import React, { createContext, useContext, useReducer } from "react";

const EquipmentContext = createContext();

const initialState = {
  equipments: [],
};

const equipmentReducer = (state, action) => {
  switch (action.type) {
    case "RESET_EQUIPMENT":
      return { ...state, equipments: [] };
    case "ADD_EQUIPMENT":
      return { ...state, equipments: [...state.equipments, action.payload] };
    default:
      return state;
  }
};

const EquipmentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(equipmentReducer, initialState);

  const addEquipment = (equipment) => {
    dispatch({ type: "ADD_EQUIPMENT", payload: equipment });
  };

  const resetEquipment = () => {
    dispatch({ type: "RESET_EQUIPMENT" });
  };

  return (
    <EquipmentContext.Provider value={{ state, addEquipment, resetEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};

const useEquipment = () => {
  const context = useContext(EquipmentContext);
  if (!context) {
    throw new Error("useEquipment must be used within an EquipmentProvider");
  }
  return context;
};

export { EquipmentProvider, useEquipment };
