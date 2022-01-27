import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ punkListData, selectedPunk }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  console.log(punkListData);

  console.log(selectedPunk);

  //   console.log(activePunk);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <Container>
      <MainContent>
        <HighLighter>
          <PunkContainer>
            <SelectedImage src={activePunk.image_preview_url} />
          </PunkContainer>
        </HighLighter>

        <PunkDetails>
          <Title>
            <title>{activePunk.name}</title>
            <span>.#{activePunk.token_id}</span>
          </Title>

          <OwnerInfo>
            <OwnerImage>
              <Owner src={activePunk.owner.profile_img_url} />
            </OwnerImage>

            <OwnerDetails>
              <OwnerName>{activePunk.owner.address}</OwnerName>
              <OwnerId>@MarudhuPandiyan</OwnerId>
            </OwnerDetails>

            <OwnerPersonal>
              <OwnerMedia>
                <img src={instagramLogo} alt="Logo" />
              </OwnerMedia>
              <OwnerMedia>
                <img src={twitterLogo} alt="Logo" />
              </OwnerMedia>
              <OwnerMedia>
                <img src={moreIcon} alt="Logo" />
              </OwnerMedia>
            </OwnerPersonal>
          </OwnerInfo>
        </PunkDetails>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  max-height: 60vh;
  color: white;
`;

const MainContent = styled.div`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid orange;
  transition: 1s ease-in-out;
`;

const HighLighter = styled.div`
  flex: 0.25;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PunkContainer = styled.div`
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  margin-right: 20px;
`;

const SelectedImage = styled.img`
  max-width: min(20vw, 40vh);
  height: 40vh;
  object-fit: contain;
  transition: 0.2s ease-in-out;
`;

const PunkDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.75;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: fit-content;
  title {
    display: flex;
    font-size: 80px;
    font-weight: 700;
  }

  span {
    color: #a1ab50;
    font-size: 70px;
    font-weight: 700;
    margin-left: 20px;
  }
`;

const OwnerInfo = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  margin-top: 20px;
`;

const OwnerImage = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: contain;
  border: 2px solid #a1ab50;
`;

const Owner = styled.img`
  width: 100%;
  height: 100%;
`;

const OwnerPersonal = styled.div`
  display: flex;
  align-items: center;
`;

const OwnerDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  flex: 1;
`;

const OwnerName = styled.div`
  color: #a1ab50;
  font-size: normal;
  flex: 1;
`;

const OwnerId = styled.div``;

const OwnerMedia = styled.div`
  padding: 12px;
  width: 40px;
  height: 40px;
  background-color: #a1ab50;
  border-radius: 30px;
  margin: 10px;

  &:hover {
    background-color: orange;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
export default Main;
