import React from "react";
import MainContainer from "../../UI/MainContainer";
import parse from "html-react-parser";
import { Row } from "react-bootstrap";

const Loader: React.FC<{ many?: number; type?: "main" | "items" }> = ({
  many = 1,
  type = "main",
}) => {
  if (type === "main") {
    let allLoaders = "";
    for (let i = 0; i < many; i++) {
      allLoaders += `<div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className="ph-col-4"></div>
            <div className="ph-col-8 empty"></div>
            <div className="ph-col-6"></div>
            <div className="ph-col-6 empty"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
            <div className="ph-col-12"></div>
          </div>
        </div>
      </div>`;
    }

    const htmlLoader = parse(allLoaders);
    return <MainContainer>{htmlLoader}</MainContainer>;
  } else {
    let allLoaders = "";
    const manyItems = many === 4 ? 3 : 2;
    for (let i = 0; i < many; i++) {
      allLoaders += `
      <div className="col-lg-${manyItems} col-md-${manyItems} col-sm-4 col-6 p-1">
        <a href="" className="card image-box h-100  w-100">
          <div className="ph-picture"></div>
          <div className="ph-item">
            <div className="ph-col-12">
              <div className="ph-row">
                <div className="ph-col-12 small"></div>
                <div className="ph-col-12 small"></div>
              </div>
            </div>
          </div>
        </a>
      </div>`;
    }

    const htmlLoader = parse(allLoaders);
    return (
      <MainContainer fluid={false}>
        <Row className="justify-content-around">{htmlLoader}</Row>
      </MainContainer>
    );
  }
};

export default Loader;
