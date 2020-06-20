import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../../actions";
import { StyledOptions } from "../../../styles/StyledOptions";
import { StyledButton } from "../../../styles/StyledButton";
import EditProductModal from "../../modals/EditProductModal/EditProductModal";

//Button to call the action.
export const Options = (props) => {
  const { product, deleteProduct } = props;
  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

  return (
    <StyledOptions>
      <div className="button-wrapper">
        <StyledButton
          className="options"
          onClick={toggleEditModal}
          title="EDIT"
        >
          EDIT
        </StyledButton>
        <EditProductModal
          isOpen={editModal}
          toggle={toggleEditModal}
          currentProduct={product}
        />

        <StyledButton
          className="options"
          onClick={() => deleteProduct(product.id)}
          title="DELETE"
        >
          DELETE
        </StyledButton>
      </div>
    </StyledOptions>
  );
};

const mapStateToProps = (state) => {
  return {
    productId: state.productId,
  };
};

//Dispatching action to use as props
const mapDispatchToProps = {
  deleteProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
