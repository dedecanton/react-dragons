/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import DragonEditView from "../views/DragonEditView";
import NotFound from "../controllers/NotFoundController";
import useApi from "../hooks/useApi";
import DragonType from "../types/DragonType";
import Layout from "../components/Layout";

const DragonEditController = () => {
  const [dragon, setDragon] = useState<DragonType>();
  const [isLoading, setIsLoading] = useState(false);

  const { getItem } = useApi();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await getItem(id);
      if (response !== "Not found") {
        setDragon(response);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && dragon) {
    return (
      <Layout>
        <DragonEditView dragon={dragon} />
      </Layout>
    );
  }

  return <NotFound />;
};

export default DragonEditController;
