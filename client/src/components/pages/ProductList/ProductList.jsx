import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import NumberFormat from "react-number-format";

import { StyledProductList } from "../../../styles/StyledProductList";
import { StyledProductContainer } from "../../../styles/StyledProductContainer";
import { StyledButton } from "../../../styles/StyledButton";
import AddProductModal from "../../modals/AddProductModal/AddProductModal";
import Options from "../../atoms/Options/Options";
import { getProducts } from "../../../actions";

let renderProducts = (products) => {
  //Sorting products by alphabetical order
  const sortedProducts = products.sort(
    (a, b) =>
      //a.valor < b.valor ? -1 : a.valor > b.valor ? 1 : 0
      //TODO Add sort by price in utils
      a.valor < b.valor
  );

  //Rendering the product list if the data is found
  return sortedProducts.map((product, index) => {
    const { id, nome, quantidade, valor } = product;

    return (
      <StyledProductContainer key={"product-" + index + "-" + id}>
        <div className="product-item">
          <h2>{nome}</h2>
          <p>
            <b>Valor: </b>
            <NumberFormat
              displayType={"text"}
              value={valor}
              thousandSeparator={true}
              prefix={"R$ "}
              renderText={(formattedPrice) => <span>{formattedPrice}</span>}
            />
          </p>

          <p>
            <b>Quantidade:</b> {quantidade}
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
          title="ADD"
        >
          ADD A NEW PRODUCT
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
