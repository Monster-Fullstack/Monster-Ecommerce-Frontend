import * as yup from "yup";

export type ReviewProps = {
  comment: string;
};

const ReviewSchema = () => {
  const schema: yup.SchemaOf<Partial<ReviewProps>> = yup.object({
    comment: yup
      .string()
      .required("Please enter your comment")
      .min(15, "Please enter the comment at least 15 characters"),
  });
  return schema;
};

export default ReviewSchema;
