import React, { useContext, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Col } from "react-bootstrap";
import useGet from "../../../../hooks/useGet";
import { useParams } from "react-router-dom";
import Loader from "../../../main/Loader";
import profileImagePath from "../../../../Functions/profileImagePath";
import ReviewForm from "../../Forms/ReviewForm";
import AuthContext from "../../../../store/Auth";
import axios from "axios";
import AppURL from "../../../../api/AppURL";
import { ErrorToast } from "../../Toasts/ToastType";

const DetailsAndReviews: React.FC<{ description: string }> = ({
  description,
}) => {
  const { id } = useParams();
  const { loggedIn } = useContext(AuthContext);
  const [isUserPayed, setIsUserPayed] = useState(false);
  const {
    isDataReady: isReviewsReady,
    data: reviews,
    setData: setReviews,
  } = useGet(`reviews/product/${id}`);
  const allReviews =
    isReviewsReady &&
    reviews.length > 0 &&
    reviews.map((review) => {
      const profileUrl = profileImagePath(review.reviewer_image);

      const rate = [];
      for (let i = 0; i < +review.reviewer_rate; i++) {
        rate.push(<AiFillStar />);
      }
      return (
        <div className="mb-4">
          <p className="p-0 m-0">
            <img
              alt={review.reviewer_name}
              src={profileUrl}
              width={70}
              height={65}
              className="rounded-circle me-2 mb-2"
            />
            <span className="Review-Title me-2">{review.reviewer_name}</span>
            <span className="text-success">{rate}</span>
          </p>
          <p>{review.reviewer_comment}</p>
        </div>
      );
    });

  const changeReviews = (newReview) => {
    axios
      .get(AppURL.CompileURL(`reviews/product/${id}`))
      .then((response) => {
        setReviews(response.data);
        checkIfUserPayProductToReview();
      })
      .catch((error) => {
        ErrorToast(error.response.data.message);
      });
  };

  const checkIfUserPayProductToReview = () => {
    if (loggedIn) {
      axios
        .get(AppURL.CompileURL("reviews/is_user_payed_product/" + id))
        .then((response) => {
          setIsUserPayed(response.data);
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    }
  };

  useEffect(() => {
    checkIfUserPayProductToReview();
  }, [loggedIn]);

  return (
    <>
      <Col md={6} lg={6} sm={12} xs={12}>
        <h6 className="mt-2">DETAILS</h6>
        <p>{description}</p>
      </Col>

      <Col md={6} lg={6} sm={12} xs={12}>
        <div className="mb-4">
          {isUserPayed ? <ReviewForm changeReviews={changeReviews} /> : ""}
        </div>
        {isReviewsReady ? (
          reviews.length > 0 ? (
            allReviews
          ) : (
            <h3 className="text-warning">
              There's no reviews for this product.
            </h3>
          )
        ) : (
          <Loader type="box" />
        )}
      </Col>
    </>
  );
};

export default DetailsAndReviews;
