import React from "react";

//INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../collectionPage/collectionIndex";
import { Slider, Brand } from "../components/componentsindex";
import Filter from "../components/Filter/Filter";

const collection = () => {
  const collectionArray = [
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
    {
      image: "img/nft-image-3.png",
    },
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
    {
      image: "img/nft-image-3.png",
    },
    {
      image: "img/nft-image-1.png",
    },
    {
      image: "img/nft-image-2.png",
    },
  ];
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />

      <Slider />
      <Brand />
    </div>
  );
};

export default collection;
