import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import { StyledProductList } from "../../../styles/StyledProductList";
import { StyledProductContainer } from "../../../styles/StyledProductContainer";
import { StyledButton } from "../../../styles/StyledButton";

import AddProductModal from "../../modals/AddProductModal/AddProductModal";
import WarningModal from "../../modals/WarningModal/WarningModal";
import Options from "../../atoms/Options/Options";
import placeHolderImg from "../../../img/product-placeholder.png";

import { getProducts, sortProducts } from "../../../actions";
import { locales } from "../../../utils/locales";
import { sortByPrice } from "../../../utils/sortProducts";

let renderProducts = (products) => {
  //Sorting by default products by highest price
  //TODO Add new selectable sorts
  const sortedProducts = sortByPrice(products, "desc");

  //Rendering the product list if the data is found
  return sortedProducts.map((product, index) => {
    const { id, nome, quantidade, valor } = product;

    return (
      <Card key={"product-" + index + "-" + id}>
        <CardImg top src={placeHolderImg} alt={nome} />
        <CardBody>
          <CardTitle>
            <h4>{nome}</h4>
          </CardTitle>
          <CardText>
            <strong>{locales.priceTitle}</strong>
            <NumberFormat
              displayType={"text"}
              value={valor}
              thousandSeparator={true}
              prefix={"R$ "}
              renderText={(formattedPrice) => <span>{formattedPrice}</span>}
            />
          </CardText>
          <CardText>
            <strong>{locales.quantityTitle}</strong>
            {quantidade}
          </CardText>
          <Options product={product} />
        </CardBody>
      </Card>
    );
  });
};

const handleSorting = (products, sortType, sortDirection) => {
  console.log("####handle sorting", products, sortType, sortDirection);
  sortProducts(products, sortType, sortDirection);
};

const ProductList = ({ products, getProducts }) => {
  const [addModal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!addModal);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (products) {
    return (
      <>
        <StyledProductList>
          <div className="button-container">
            <StyledButton
              onClick={() => handleSorting(products, "price", "desc")}
            >
              Sort by Highest Price
            </StyledButton>
            <StyledButton
              onClick={() => handleSorting(products, "price", "asc")}
            >
              Sort by Lowest Price
            </StyledButton>
            <StyledButton
              className="add-button"
              onClick={toggleAddModal}
              title={locales.addProductButtonTitle}
            >
              {locales.addProductButtonTitle}
            </StyledButton>
          </div>
          <StyledProductContainer>
            {renderProducts(products)}
          </StyledProductContainer>
        </StyledProductList>
        <AddProductModal isOpen={addModal} toggle={toggleAddModal} />
        <WarningModal />
      </>
    );
  }

  return null;
};

//Mapping current list of products state to props
const mapStateToProps = (state) => ({
  products: state.products,
});

//Dispatching action to use as props
const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
