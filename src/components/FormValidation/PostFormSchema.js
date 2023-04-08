import * as yup from 'yup';

const postFormSchema = yup.object().shape({
  newPostText: yup
    .string()
    .required('Please enter a post message')
    .min(5, 'Post message must be at least 5 characters')
    .max(150, 'Post message must be less than 500 characters'),
});

export default postFormSchema