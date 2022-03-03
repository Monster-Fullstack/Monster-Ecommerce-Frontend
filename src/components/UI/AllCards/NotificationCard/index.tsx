import React from "react";
import { Card } from "react-bootstrap";
import cl from "./index.module.scss";
import { AiOutlineBell } from "react-icons/ai";
import Notification from "../../../../interfaces/Notification";

const NotificationCard: React.FC<Notification> = ({ title, date, status }) => {
  return (
    <Card className={`${cl.card} ${status && cl.done}`}>
      <Card.Body>
        <h6>{title}</h6>
        <p className="py-1 px-0 text-primary m-0">
          <AiOutlineBell /> Date: {date} | Status:
          {status ? " Red Successfully" : " Unread"}
        </p>
      </Card.Body>
    </Card>
  );
};

export default NotificationCard;
