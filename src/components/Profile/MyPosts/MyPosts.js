import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Field, Form } from "formik";
import postFormSchema from "../../FormValidation/PostFormSchema";
import { Textarea } from "../../common/FormsControl/FormsControl";

const MyPosts = (props) => {

  const postsElements = props.posts.map((p) => (
    <Post key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  const onAddPost = (values, { resetForm }) => {
    props.addPost(values.newPostText);
    resetForm();
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <Formik
        initialValues={{ newPostText: "" }}
        onSubmit={onAddPost}
        validationSchema={postFormSchema}
      >
        {({ handleSubmit, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field
                placeholder="Post message"
                name="newPostText"
                type={Textarea}
                className={`${touched.newPostText && errors.newPostText ? s.error : ""}`}
              />
              {touched.newPostText && errors.newPostText && (
                <div className={s.errorMessage}>{errors.newPostText}</div>
              )}
            </div>
            <div>
              <button type="submit">Add post</button>
            </div>
          </Form>
        )}
      </Formik>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
