import React, { useContext, useState } from "react";
import { InputSite, TextAreaSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorForm } from "./../../Alerts/index";
import ReviewSchema, { ReviewProps } from "./ReviewSchema";
import StarRatings from "react-star-ratings";
import AuthContext from "../../../../store/Auth";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorToast, SuccessToast, WarningToast } from "../../Toasts/ToastType";
import axios from "axios";
import AppURL from "../../../../api/AppURL";

const ReviewForm = ({ changeReviews }) => {
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState();
  const [rateError, setRateError] = useState({
    message: "",
  });

  const { loggedIn } = useContext(AuthContext);

  const nav = useNavigate();

  const { id } = useParams();

  // the form component
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ReviewProps>({
    resolver: yupResolver(ReviewSchema()),
  });

  const changeRating = (newRating, name) => {
    setRate(newRating);
  };

  // when submit the form
  const onSubmit = async (formData: ReviewProps) => {
    if (rate) {
      setRateError({ message: "" });
      if (loggedIn) {
        const form = new FormData();
        form.append("product_id", id);
        form.append("comment", formData.comment);
        form.append("rate", rate);
        axios
          .post(AppURL.ReviewsProduct, form)
          .then((response) => {
            reset();
            SuccessToast(response.data.message);
            changeReviews(response.data.new_review);
          })
          .catch((error) => {
            ErrorToast(error.response.data.message);
          });
      } else {
        nav("/login");
        WarningToast("Please login first to send the review");
      }
    } else {
      setRateError({ message: "Please Enter Your Rating" });
    }
  };

  return (
    <>
      <form className={`text-start`} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <TextAreaSite
                settings={{
                  type: "text",
                  placeholder: "Enter Your Comment",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="comment"
          />
          <ErrorForm error={errors?.comment} />
        </div>
        <div className="mb-4 text-center">
          <StarRatings
            rating={rate}
            starRatedColor="#FF9529"
            changeRating={changeRating}
            numberOfStars={5}
            name="rate"
          />
          <div className="row justify-content-center">
            {rateError.message.length > 0 && <ErrorForm error={rateError} />}
          </div>
        </div>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Send Review" : "Loading..."}
        </ButtonSite>
      </form>
    </>
  );
};

export default ReviewForm;
