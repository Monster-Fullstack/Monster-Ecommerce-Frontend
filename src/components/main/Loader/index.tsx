import React from "react";
import MainContainer from "../../UI/MainContainer";
import parse from "html-react-parser";
import { Row } from "react-bootstrap";

const Loader: React.FC<{
  many?: number;
  type?:
    | "cart_items"
    | "slider"
    | "main"
    | "box"
    | "items"
    | "title"
    | "search";
}> = ({ many = 1, type = "main" }) => {
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
  } else if (type === "cart_items") {
    let allLoaders = "";
    for (let i = 0; i < many; i++) {
      allLoaders += `
      <div class="ph-item">

      <div class="ph-col-2">
          <div class="ph-picture h-100"></div>
      </div>
      
      <div>
          <div class="ph-row">
              <div class="ph-col-4"></div>
              <div class="ph-col-8 empty"></div>
              <div class="ph-col-6"></div>
              <div class="ph-col-6 empty"></div>
              <div class="ph-col-2"></div>
          </div>
      </div>
  </div>
      `;
    }

    const htmlLoader = parse(allLoaders);
    return <MainContainer>{htmlLoader}</MainContainer>;
  } else if (type === "title") {
    const loader = `
    <div class="ph-item">
      <div class="ph-col-12">
          <div class="ph-row">
              <div class="ph-col-8"></div>
          </div>
      </div>
    </div>
    `;
    const htmlLoader = parse(loader);
    return (
      <MainContainer fluid={false}>
        <Row className="justify-content-around">{htmlLoader}</Row>
      </MainContainer>
    );
  } else if (type === "search") {
    const loader = `
    <div class="ph-item">
      <div class="ph-col-12">
      <div class="ph-row">
          <div class="ph-col-8"></div>
      </div>
      <div class="ph-row">
          <div class="ph-col-8"></div>
      </div>
      </div>
    </div>
    
    <div class="ph-item">
      <div class="ph-col-12">
      <div class="ph-row">
          <div class="ph-col-8"></div>
      </div>
      <div class="ph-row">
          <div class="ph-col-8"></div>
      </div>
      </div>
    </div>
    
    `;
    const htmlLoader = parse(loader);
    return (
      <MainContainer className="search_items_container">
        <Row className="justify-content-around">{htmlLoader}</Row>
      </MainContainer>
    );
  } else if (type === "slider") {
    const loader = `
    <div class="ph-item">
      <div class="ph-col-12">
          <div class="ph-picture"></div>
      </div>
      <div class="col-3">
          <div class="ph-picture"></div>
      </div>
      <div class="col-3">
          <div class="ph-picture"></div>
      </div>
      <div class="col-3">
          <div class="ph-picture"></div>
      </div>
      <div class="col-3">
          <div class="ph-picture"></div>
      </div>
    </div>
  `;
    const htmlLoader = parse(loader);
    return (
      <MainContainer fluid={false}>
        <Row className="justify-content-around">{htmlLoader}</Row>
      </MainContainer>
    );
  } else if (type === "box") {
    const loader = ` 
      <div class="row">
        <div class="col-12">
            <div class="ph-item">
                <div class="ph-col-12">
                    <div class="ph-picture"></div>
                    <div class="ph-row">
                        <div class="ph-col-4"></div>
                        <div class="ph-col-8 empty"></div>
                        <div class="ph-col-12"></div>
                    </div>
                </div>
                <div class="ph-row">
                <div class="ph-item">
                  <div class="ph-col-12 big"></div>
                </div>
                <div class="ph-item">
                  <div class="ph-col-12 big"></div>
                </div>
                  <div class="ph-item">
                    <div class="ph-col-12 big"></div>
                  </div>
                </div>
            </div>
        </div>
      </div>`;
    const htmlLoader = parse(loader);
    return (
      <MainContainer fluid={false}>
        <Row className="justify-content-around">{htmlLoader}</Row>
      </MainContainer>
    );
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
