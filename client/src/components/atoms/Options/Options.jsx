import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteProduct } from "../../../actions";
import { StyledOptions } from "../../../styles/StyledOptions";
import { StyledButton } from "../../../styles/StyledButton";
import EditProductModal from "../../modals/EditProductModal/EditProductModal";
import { locales } from "../../../utils/locales";
import { PencilIcon, TrashIcon } from "@primer/octicons-react";

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
          title={locales.editButtonText}
        >
          <PencilIcon />
        </StyledButton>
        <EditProductModal
          isOpen={editModal}
          toggle={toggleEditModal}
          currentProduct={product}
        />

        <StyledButton
          className="options"
          onClick={() => deleteProduct(product.id)}
          title={locales.deleteButtonText}
        >
          <TrashIcon />
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
