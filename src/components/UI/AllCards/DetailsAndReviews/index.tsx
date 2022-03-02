import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Col } from "react-bootstrap";

const DetailsAndReviews: React.FC<{ description: string }> = ({
  description,
}) => {
  return (
    <>
      <Col md={6} lg={6} sm={12} xs={12}>
        <h6 className="mt-2">DETAILS</h6>
        <p>{description}</p>
      </Col>

      <Col md={6} lg={6} sm={12} xs={12}>
        <h6 className="mt-2">REVIEWS</h6>
        <p className=" p-0 m-0">
          <span className="Review-Title">Kazi Ariyan</span>
          <span className="text-success">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>

        <p className=" p-0 m-0">
          <span className="Review-Title">Kazi Ariyan</span>
          <span className="text-success">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>

        <p className=" p-0 m-0">
          <span className="Review-Title">Kazi Ariyan</span>
          <span className="text-success">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </Col>
    </>
  );
};

export default DetailsAndReviews;
