import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Field, Form } from "formik";
import postFormSchema from "../../FormValidation/PostFormSchema";
import { Textarea } from "../../common/FormsControl/FormsControl";

const MyPosts = (props) => {

  const postsElements = props.posts.map((p) => (
    <Post className = {s.post} key={p.id} id={p.id} message={p.message} likeCount={p.likeCount} />
  ));

  const onAddPost = (values, { resetForm }) => {
    props.addPost(values.newPostText);
    resetForm();
  };

  return (
    <div className={s.postsBlock}>
      

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
                className={s.inputPost}
              />
              {touched.newPostText && errors.newPostText && (
                <div className={s.errorMessage}>{errors.newPostText}</div>
              )}
            </div>
            <div>
              <button className ={s.btnPost} type="submit">Add post</button>
            </div>
          </Form>
        )}
      </Formik>
      <h3>My posts:</h3>
    
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
