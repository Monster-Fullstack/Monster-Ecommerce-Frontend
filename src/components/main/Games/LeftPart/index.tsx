import React from "react";
import ItemPhotos from "../../ItemPhotos";
import Loader from "../../Loader/index";

const LeftPart = ({ isDataReady, item }) => {
  return (
    <>
      {isDataReady ? (
        <>
          <ItemPhotos photos={item.photos} />
        </>
      ) : (
        <Loader type="slider" />
      )}
    </>
  );
};

export default LeftPart;
