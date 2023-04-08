import * as Yup from "yup";

const DiologsvalidationSchema = Yup.object().shape({
  newMessageBody: Yup.string()
    .max(500, "Message is too long")
    .required("Message is required"),
});

export default DiologsvalidationSchema