/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { createContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import DragonType from "../types/DragonType";

type DragonsContextType = {
  dragons: DragonType[] | null;
  deleteDragon: (id: string) => void;
  addDragon: (item: any) => void;
  editDragon: (item: any) => void;
};

type ProviderProps = {
  children?: React.ReactNode;
};

const DragonsContext = createContext<DragonsContextType>({
  dragons: [],
  deleteDragon: (id: string) => {},
  addDragon: (item: DragonType) => {},
  editDragon: (item: DragonType) => {},
});

const DragonsProvider = ({ children }: ProviderProps) => {
  const { deleteData, postData, putData, data, fetchData } = useApi();

  const [dragons, setDragons] = useState<DragonType[] | null>([]);

  useEffect(() => {
    setDragons(() => data);
  }, [data]);

  // sobrecarrega api, porém é necessário por conta que mockapi reescreve id enviado
  // useEffect(() => {
  //   fetchData();
  // }, [dragons]);

  const deleteDragon = (id: string) => {
    const newData = dragons!.filter((dragon) => dragon.id !== id);
    setDragons(() => newData);
    deleteData(id);
  };

  const addDragon = async (newDragon: DragonType) => {
    setDragons((prev) => [...prev!, newDragon]);
    postData(newDragon);
  };

  const editDragon = (item: DragonType) => {
    const newData = [...dragons!];
    const dragonIndex = newData.findIndex((dragon) => dragon.id === item.id);
    newData[dragonIndex] = item;

    setDragons(() => newData);
    putData(item);
  };

  const dragonsContextValue = {
    dragons,
    deleteDragon,
    addDragon,
    editDragon,
  };

  return (
    <DragonsContext.Provider value={dragonsContextValue}>
      {children}
    </DragonsContext.Provider>
  );
};

export { DragonsContext, DragonsProvider };
