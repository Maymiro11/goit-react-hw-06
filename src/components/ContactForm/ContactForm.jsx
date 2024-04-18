// src/ContactForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short! Length must be between 3 and 50 characters')
    .max(50, 'Too Long! Length must be between 3 and 50 characters')
    .required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .min(3, 'Too Short! Length must be between 3 and 50 characters')
    .max(50, 'Too Long! Length must be between 3 and 50 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      actions.resetForm();
      await dispatch(addContact(values));
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="tel" name="phone" id="phone" />
          <ErrorMessage name="phone" component="div" className={css.error} />
        </div>
        <button className={css.addButton} type="submit">Add contact</button>
        </Form>
    </Formik>
  );
};

export default ContactForm;