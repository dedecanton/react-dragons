/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { SearchBar } from "../../components/common";

// helpers
import DragonList from "../../components/DragonList";
import DragonType from "../../types/DragonType";
import { Container } from "./DragonListView.style";

type DragonListViewProps = {
  filter: string;
  handleChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredDragons: DragonType[];
};

function DragonListView({
  filter,
  handleChangeFilter,
  filteredDragons,
}: DragonListViewProps) {
  return (
        <Container>
          <SearchBar
            type="text"
            value={filter}
            onChange={handleChangeFilter}
            placeholder="🔍 Filtrar dragões"
          />
          <DragonList dragons={filteredDragons} />
        </Container>
  );
}

export default DragonListView;
