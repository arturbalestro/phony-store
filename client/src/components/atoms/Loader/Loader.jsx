import React from "react";
import { connect } from "react-redux";
import img from "../../../img/product-loader.gif";
import { StyledLoader } from "../../../styles/StyledLoader";

//Adding loading state to wait for the action call to finish.
export const Loader = ({ loading }) =>
  loading ? (
    <StyledLoader>
      <img src={img} alt="loading" />
    </StyledLoader>
  ) : null;

//Mapping loading state
const mapStateToProps = (state) => ({ loading: state.loading });

export default connect(mapStateToProps, null)(Loader);
