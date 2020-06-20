import React from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import { Formik } from "formik";

import { addUser, getProducts } from "../../../actions";
import { StyledLogin } from "../../../styles/StyledLogin";
import { StyledButton } from "../../../styles/StyledButton";

const saveSession = (newUser) => {
  sessionStorage.setItem("userEmail", newUser.email);
  sessionStorage.setItem("userPassword", newUser.password);
};

const Login = ({ addUser, getProducts, history }) => {
  return (
    <StyledLogin>
      <Formik
        initialValues={{ userName: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.userName) errors.userName = "Required";
          if (!values.password) errors.password = "Required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const newUser = {
            name: values.userName,
            type: values.password,
          };
          saveSession(newUser);
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
              <Label for="userName">Username</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.userName}
              />
              <FormFeedback>
                {errors.userName && touched.userName && errors.userName}
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <FormFeedback>
                {errors.password && touched.password && errors.password}
              </FormFeedback>
            </FormGroup>
            <FormGroup className="text-right">
              <StyledButton type="submit" disabled={isSubmitting}>
                LOGIN
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
  addUser,
  getProducts,
};

export default connect(null, mapDispatchToProps)(Login);
