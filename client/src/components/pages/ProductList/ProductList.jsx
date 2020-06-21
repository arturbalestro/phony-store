import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import { StyledProductList } from "../../../styles/StyledProductList";
import { StyledProductContainer } from "../../../styles/StyledProductContainer";
import { StyledButton } from "../../../styles/StyledButton";
import AddProductModal from "../../modals/AddProductModal/AddProductModal";
import Options from "../../atoms/Options/Options";
import { getProducts } from "../../../actions";
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
      <StyledProductContainer key={"product-" + index + "-" + id}>
        <div className="product-item">
          <h2>{nome}</h2>
          <p>
            <b>{locales.priceTitle}</b>
            <NumberFormat
              displayType={"text"}
              value={valor}
              thousandSeparator={true}
              prefix={"R$ "}
              renderText={(formattedPrice) => <span>{formattedPrice}</span>}
            />
          </p>

          <p>
            <b>{locales.quantityTitle}</b>
            {quantidade}
          </p>
        </div>
        <Options product={product} />
      </StyledProductContainer>
    );
  });
};

export const ProductList = ({ products, getProducts }) => {
  const [addModal, setAddModal] = useState(false);
  const toggleAddModal = () => setAddModal(!addModal);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (products) {
    return (
      <StyledProductList>
        {renderProducts(products)}
        <StyledButton
          className="add-button"
          onClick={toggleAddModal}
          title={locales.addProductButtonTitle}
        >
          {locales.addProductButtonTitle}
        </StyledButton>
        <AddProductModal isOpen={addModal} toggle={toggleAddModal} />
      </StyledProductList>
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
