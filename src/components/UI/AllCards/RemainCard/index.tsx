import React from "react";

const RemainCard: React.FC<{ quantity: number; sells: number }> = ({
  quantity,
  sells,
}) => {
  const total = quantity - sells;
  const color_remain =
    total < 10 ? "danger" : total < 25 ? "less-danger" : "success";

  return (
    <h6 className="section-sub-title">
      Remain: <p className={`text-${color_remain} fs-5 d-inline`}>{total}</p>
    </h6>
  );
};

export default RemainCard;
