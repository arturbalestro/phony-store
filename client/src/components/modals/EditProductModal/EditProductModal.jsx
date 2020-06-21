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
} from "reactstrap";
import { Formik } from "formik";
import NumberFormat from "react-number-format";
import { formatToDecimal } from "../../../utils/formatCurrency";
import { locales } from "../../../utils/locales";

import { editProduct } from "../../../actions";
import { StyledButton } from "../../../styles/StyledButton";

export const EditProductModal = ({
  isOpen,
  toggle,
  currentProduct,
  editProduct,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{locales.editProductTitle}</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              productName: currentProduct ? currentProduct.nome : "",
              productPrice: currentProduct ? currentProduct.valor : "",
              productQuantity: currentProduct ? currentProduct.quantidade : "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.productName)
                errors.productName = locales.requiredFormText;
              if (!values.productPrice)
                errors.productPrice = locales.requiredFormText;
              if (!values.productQuantity)
                errors.productQuantity = locales.requiredFormText;
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              const newProduct = {
                id: Math.random(5000) + formatToDecimal(values.productPrice),
                nome: values.productName,
                valor: formatToDecimal(values.productPrice),
                quantidade: values.productQuantity,
              };

              editProduct(currentProduct.id, newProduct);
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
                  <Label for="productName">{locales.productNameLabel}</Label>
                  <Input
                    type="text"
                    name="productName"
                    id="productName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.productName}
                  />
                  {errors.productName && touched.productName && (
                    <div className="error-feedback">{errors.productName}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="productPrice">{locales.productPriceLabel}</Label>
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
                  {errors.productPrice && touched.productPrice && (
                    <div className="error-feedback">{errors.productPrice}</div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="productQuantity">
                    {locales.productQuantityLabel}
                  </Label>
                  <div>
                    <Input
                      type="number"
                      name="productQuantity"
                      id="productQuantity"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.productQuantity}
                    />
                    {errors.productQuantity && touched.productQuantity && (
                      <div className="error-feedback">
                        {errors.productQuantity}
                      </div>
                    )}
                  </div>
                </FormGroup>
                <FormGroup className="text-right">
                  <StyledButton type="submit" disabled={isSubmitting}>
                    {locales.editButtonText}
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
  editProduct,
};

export default connect(null, mapDispatchToProps)(EditProductModal);
