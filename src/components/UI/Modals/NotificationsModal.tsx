import React from "react";
import ReactDOM from "react-dom";
import { ButtonSite } from "../Buttons";
import OverLay from "../OverLay";
import cl from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { TopBottom } from "./ModelsAnimations";
import Notification from "../../../interfaces/Notification";
import { BsFillBellFill } from "react-icons/bs";

export interface ModalsModel {
  show: boolean;
  setShow: (value: boolean) => void;
  item: Notification;
}

const ModalComponent: React.FC<ModalsModel> = ({ show, setShow, item }) => {
  const toggleModal = () => {
    setShow(!show);
  };
  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <>
            <OverLay toggleLay={toggleModal} />
            <motion.div
              className={`${cl.modal} modal`}
              variants={TopBottom}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      <BsFillBellFill className={cl.icon} />
                      Date: {item.date}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={toggleModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="modal-footer">
                    <ButtonSite onClick={toggleModal}>Close</ButtonSite>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

const NotificationsModal: React.FC<ModalsModel> = ({ show, setShow, item }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalComponent show={show} setShow={setShow} item={item} />,
        document.getElementById("modal-place")
      )}
    </React.Fragment>
  );
};

export default NotificationsModal;
