import React, { useState, useEffect } from "react";
import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState([0]);

  // console.log(selectedPunk);

  useEffect(() => {
    const getMyNft = async () => {
      const openSeaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xa359ccab82d4ae4f7d3465279f255a424da9410d&order_direction=asc"
      );
      // console.log(openSeaData.data.assets);
      setPunkListData(openSeaData.data.assets);
    };
    return getMyNft();
  }, []);

  // 0xa359ccab82d4ae4f7d3465279f255a424da9410d;
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
