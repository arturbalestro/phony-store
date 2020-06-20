import React from "react";
import { connect } from "react-redux";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Formik } from "formik";
import NumberFormat from "react-number-format";
import { formatToDecimal } from "../../../utils/formatCurrency";

import { addProduct } from "../../../actions";
import { StyledButton } from "../../../styles/StyledButton";

export const AddProductModal = ({ isOpen, toggle, addProduct }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD A PRODUCT TO THE CATALOG</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              productName: "",
              productPrice: "",
              productQuantity: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.productName) errors.productName = "Required";
              if (!values.productPrice) errors.productPrice = "Required";
              if (!values.productQuantity) errors.productQuantity = "Required";
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const newProduct = {
                id: Math.random(5000) + formatToDecimal(values.productPrice),
                nome: values.productName,
                valor: formatToDecimal(values.productPrice),
                quantidade: values.productQuantity,
              };

              addProduct(newProduct);
              setSubmitting(false);
              toggle();
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
                  <Label for="productName">Product Name</Label>
                  <Input
                    type="text"
                    name="productName"
                    id="productName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName}
                  />
                  <FormFeedback>
                    {errors.productName &&
                      touched.productName &&
                      errors.productName}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="productPrice">Product Price</Label>
                  <NumberFormat
                    className="form-control"
                    name="productPrice"
                    id="productPrice"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productPrice}
                    thousandSeparator={true}
                    prefix={"R$ "}
                    renderText={(formattedPrice) => (
                      <span>{formattedPrice}</span>
                    )}
                  />
                  <FormFeedback>
                    {errors.productPrice &&
                      touched.productPrice &&
                      errors.productPrice}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="productQuantity">Product Quantity</Label>
                  <div>
                    <Input
                      type="number"
                      name="productQuantity"
                      id="productQuantity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.productQuantity}
                    />
                    <FormFeedback>
                      {errors.productQuantity &&
                        touched.productQuantity &&
                        errors.productQuantity}
                    </FormFeedback>
                  </div>
                </FormGroup>
                <FormGroup className="text-right">
                  <StyledButton type="submit" disabled={isSubmitting}>
                    Add
                  </StyledButton>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </Modal>
    </div>
  );
};

//Dispatching action to use as props
const mapDispatchToProps = {
  addProduct,
};

export default connect(null, mapDispatchToProps)(AddProductModal);
