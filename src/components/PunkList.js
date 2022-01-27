import React from "react";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  return (
    <PunkLists>
      {punkListData.map((punk) => (
        <TotalPunk onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_preview_url}
          />
        </TotalPunk>
      ))}
    </PunkLists>
  );
};

const PunkLists = styled.div`
  display: flex;
  /* cursor: pointer; */
  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid orange;
  transition: transform 0.2s;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TotalPunk = styled.div``;
export default PunkList;
