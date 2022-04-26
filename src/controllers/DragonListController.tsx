/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { DragonsContext } from "../contexts/dragons-context";
import DragonListView from "../views/DragonListView";
import useApi from "../hooks/useApi";
import DragonType from "../types/DragonType";
import Layout from "../components/Layout";

const DragonListController = () => {
  const { dragons } = useContext(DragonsContext);
  const [filteredDragons, setFilteredDragons] = useState<DragonType[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredDragons(dragons!);
  }, []);

  const { loading } = useApi();

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const searchFilter = filter.toLowerCase();
    const filtered = dragons!.filter((dragon) =>
      dragon.name.toLowerCase().includes(searchFilter)
    );

    if (filter.trim() === "") {
      setFilteredDragons(dragons!);
      return;
    }

    setFilteredDragons(filtered!);
  }, [filter, dragons]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <DragonListView
        filter={filter}
        handleChangeFilter={handleChangeFilter}
        filteredDragons={filteredDragons}
      />
    </Layout>
  );
};

export default DragonListController;
