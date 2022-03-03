import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Notification from "../../../interfaces/Notification";
import NotificationCard from "../../UI/AllCards/NotificationCard";
import MainContainer from "../../UI/MainContainer";
import NotificationsModal from "../../UI/Modals/NotificationsModal";

const DUMMY_NOTIFICATIONS = [
  {
    id: 1,
    title: "You must buy this element",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "03/3/2022",
    status: true,
  },
  {
    id: 2,
    title: "New Products 🔥",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "09/4/2022",
    status: true,
  },
  {
    id: 3,
    title: "You may like",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "03/6/2023",
    status: false,
  },
  {
    id: 4,
    title: "On Sale 70% 🔥😍",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "07/7/20023",
    status: false,
  },
];

const Notifications: React.FC = () => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState<Notification>();
  const sendDataToModal = (el: Notification) => {
    setItem((prevItem) => ({
      ...prevItem,
      title: el.title,
      description: el.description,
      date: el.date,
      status: el.status,
    }));
    setShow(true);
  };

  const all = DUMMY_NOTIFICATIONS.map((el: Notification) => (
    <Col
      onClick={() => sendDataToModal(el)}
      key={el.id}
      className="p-1"
      md={6}
      lg={6}
      sm={12}
      xs={12}
    >
      <NotificationCard title={el.title} date={el.date} status={el.status} />
    </Col>
  ));
  return (
    <>
      <MainContainer fluid={false}>
        <Row>{all}</Row>
      </MainContainer>
      <NotificationsModal item={item} show={show} setShow={setShow} />
    </>
  );
};

export default Notifications;
