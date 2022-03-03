import React from "react";

const NotificationsNo: React.FC<{ many: number }> = ({ many }) => {
  return (
    <>
      <sup>
        <span className="bg-danger badge text-white">{many}</span>
      </sup>
    </>
  );
};

export default NotificationsNo;
