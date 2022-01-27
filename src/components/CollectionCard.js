import React from "react";
import styled, { css } from "styled-components";
import weth from "../assets/weth.png";

const CollectionCard = ({ image, name, id, traits }) => {
  return (
    <CollectionCards>
      <MainImage src={image} />
      <ImageDetails>
        <div className="name">
          {name}
          <div className="id">.#{id}</div>
        </div>

        <div className="priceContainer">
          <img className="wethImage" src={weth} alt="Eth" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </ImageDetails>
    </CollectionCards>
  );
};

const CollectionCards = styled.div`
  color: orange;
  background-color: #1a1c1e;
  border-radius: 25px;
  overflow: hidden;
  width: 290px;
  height: 500px;
  margin-right: 30px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MainImage = styled.img`
  width: 100%;
`;

const ImageDetails = styled.div`
  padding-left: 15px;
  .name {
    font-size: 25px;
    margin-top: 15px;
    font-weight: 700;

    .id {
      color: #a1ab50;
      font-weight: normal;
    }
  }
  .priceContainer {
    display: flex;
    align-items: center;
    margin-top: 10px;
    object-fit: contain;
    .wethImage {
      height: 23px;
      width: 15px;
    }
    .price {
      font-weight: 600;
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;

export default CollectionCard;
