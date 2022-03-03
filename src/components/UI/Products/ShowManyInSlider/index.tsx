import React from "react";
import { Row } from "react-bootstrap";
import useResponsive from "../../../../hooks/useResponsive";
import SlidersModels from "../../../../interfaces/SlidersModels";
import { GroupItemsSlider, ItemsSlider } from "../../Sliders";

const ShowManyInSlider: React.FC<SlidersModels> = ({
  groupSlider = false,
  items,
}) => {
  const mode = useResponsive();
  return (
    <Row>
      {!groupSlider || mode === "phone" || mode === "tablet" ? (
        <ItemsSlider items={items} />
      ) : (
        <GroupItemsSlider items={items} />
      )}
    </Row>
  );
};

export default ShowManyInSlider;
