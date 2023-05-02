import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";
import { Formik, Field } from "formik";
import DiologsvalidationSchema from "../FormValidation/DiologsFormSchema";
import { Textarea } from "../common/FormsControl/FormsControl";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItems name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>

      <Formik
  initialValues={{ newMessageBody: "" }}
  validationSchema={DiologsvalidationSchema}
  onSubmit={(values, { resetForm }) => {
    // Обработчик отправки формы
    props.sendMessage(values.newMessageBody);
    resetForm();
  }}
>
  {({ handleSubmit, handleChange, values, errors, touched }) => (
    <form onSubmit={handleSubmit}>
      <div>
        <Field 
          className = {s.dialogInput}
          name="newMessageBody"
          type={Textarea}
          placeholder="Enter your message"
          value={values.newMessageBody}
          onChange={handleChange}
        />
        {errors.newMessageBody && touched.newMessageBody && (
          <div>{errors.newMessageBody}</div>
        )}
      </div>
      <div>
        <button className={s.btnDialog} type="submit">Send</button>
      </div>
    </form>
  )}
</Formik>
    </div>
  );
};

export default Dialogs;
// const AddMessageFormRedux = (props) => {
//   return (
//     <Formik initialValues={{ newMessageBody: "" }} onSubmit={(values) => {
//       // Обработчик отправки формы
//       props.sendMessage(values.newMessageBody);
//       values.newMessageBody = '';
//     }}>
//       {({ handleSubmit, handleChange, values }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <Field
//               name="newMessageBody"
//               type="textarea"
//               placeholder="Enter your message"
//               value={values.newMessageBody}
//               onChange={handleChange}
//             ></Field>
//           </div>
//           <div>
//             <button type="submit">Send</button>
//           </div>
//         </form>
//       )}
//     </Formik>
//   );
// };