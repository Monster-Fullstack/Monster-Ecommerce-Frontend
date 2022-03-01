import React, { FC, ReactComponentElement } from "react";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import cl from "./index.module.scss";
import useResponsive from "../../../hooks/useResponsive";

const MainForm: React.FC<{
  UsedForm: ReactComponentElement<FC>;
  rightPhoto: string;
}> = ({ UsedForm, rightPhoto }) => {
  const mode = useResponsive();
  return (
    <MainContainer>
      <Row>
        <Col sm={12}>
          <Row>
            <Col md={6} lg={6} sm={12} xs={12} className={cl.formParent}>
              {UsedForm}
            </Col>
            {mode !== "phone" && mode !== "tablet" && (
              <Col className="p-0 m-0" md={6} lg={6} sm={6} xs={6}>
                <img src={rightPhoto} alt="Login Now" />
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default MainForm;
