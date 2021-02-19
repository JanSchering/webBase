import * as React from "react";
import { MDBBtn } from "mdbreact";
import { FormikProps, Form } from "formik";
import Constants from "../../utils/textConstants";

/**
 * @description Eine Form, über welche username und Passwort eingegeben und durch Button-klick
 * abgeschickt werden können
 * @param {FormikProps<FormValues>} props erwartet Formikprops um die Funktionalität der Form zu ermöglichen.
 */
/*
const InnerForm = (props: FormikProps<FormValues>): JSX.Element => {
  const {
    touched,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label id="username">{Constants.USERNAME}</Form.Label>
        <Form.Control
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.username}
          placeholder="Full Name"
          className={touched.username && errors.username ? "" : null}
        />
        {touched.username && errors.username ? (
          <div >{errors.username}</div>
        ) : null}
      </Form.Group>
      <Form.Group>
        <Form.Label id="password">{Constants.PASSWORD}</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          placeholder="pw..."
          className={touched.password && errors.password ? "" : null}
        />
        {touched.password && errors.password ? (
          <div >{errors.password}</div>
        ) : null}
      </Form.Group>
      <MDBBtn type="submit" disabled={isSubmitting}>
        {Constants.LOGIN}
      </MDBBtn>
    </Form>
  );
};
*/

interface FormValues {
  username: string;
  password: string;
}

export default {};
export { FormValues };
