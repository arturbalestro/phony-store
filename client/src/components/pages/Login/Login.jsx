import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Formik } from "formik";
import { locales } from "../../../utils/locales";

import { getProducts } from "../../../actions";
import { StyledLogin } from "../../../styles/StyledLogin";
import { StyledButton } from "../../../styles/StyledButton";

const addUser = (newUser) => {
  sessionStorage.setItem("userEmail", newUser.email);
  sessionStorage.setItem("userPassword", newUser.password);
};

const Login = ({ getProducts, history }) => {
  return (
    <StyledLogin>
      <Formik
        initialValues={{ userName: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.userName) errors.userName = locales.requiredFormText;
          if (!values.password) errors.password = locales.requiredFormText;
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const newUser = {
            email: values.userName,
            password: values.password,
          };
          addUser(newUser);
          getProducts();
          setSubmitting(false);
          history.push("/products");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="userName">{locales.userNameLabel}</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              {errors.userName && touched.userName && (
                <div className="error-feedback">{errors.userName}</div>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">{locales.passwordLabel}</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="error-feedback">{errors.password}</div>
              )}
            </FormGroup>
            <FormGroup className="text-right">
              <StyledButton type="submit" disabled={isSubmitting}>
                {locales.loginButtonText}
              </StyledButton>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </StyledLogin>
  );
};

//Dispatching action to use as props
const mapDispatchToProps = {
  getProducts,
};

export default connect(null, mapDispatchToProps)(Login);
