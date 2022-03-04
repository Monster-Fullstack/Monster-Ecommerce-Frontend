import React, { FC, ReactComponentElement } from "react";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../UI/MainContainer";
import cl from "./index.module.scss";
import useResponsive from "../../../hooks/useResponsive";
import { motion } from "framer-motion";

interface Props {
  UsedForm: ReactComponentElement<FC>;
  rightSection: ReactComponentElement<any>;
}

const secSectionAnimate = {
  hidden: {
    x: -50,
    y: 100,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.5,
    },
  },
};
const formAnime = {
  hidden: {
    rotateY: 80,
  },
  visible: {
    rotateY: 0,
    transition: {
      duration: 1.5,
      delay: 1,
    },
  },
};

const MainForm: React.FC<Props> = ({ UsedForm, rightSection }) => {
  const mode = useResponsive();
  return (
    <MainContainer>
      <Row>
        <Col sm={12}>
          <Row>
            <motion.div
              className={`col-lg-6 col-md-5 col-sm-12 p-0 m-0 ${cl.formParent}`}
              variants={formAnime}
              initial="hidden"
              animate="visible"
            >
              {UsedForm}
            </motion.div>
            {mode !== "phone" && mode !== "tablet" && (
              <motion.div
                className="col-lg-6 col-md-7 col-sm-12 p-0 m-0"
                variants={secSectionAnimate}
                initial="hidden"
                animate="visible"
              >
                {rightSection}
              </motion.div>
            )}
          </Row>
        </Col>
      </Row>
    </MainContainer>
  );
};

export default MainForm;
