import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { StyledButton } from "../../../styles/StyledButton";

export const WarningModal = ({ warningModal }) => {
  const [modal, setWarningModal] = useState(false);

  const modalClose = () => {
    setWarningModal(false);
  };

  useEffect(() => {
    if (warningModal) {
      setWarningModal(warningModal.modalOpen);
    }
  }, [warningModal]);

  if (warningModal) {
    return (
      <div>
        <Modal isOpen={modal} onClick={modalClose}>
          <ModalHeader>{warningModal.actionType}</ModalHeader>
          <ModalBody>{warningModal.modalMessage}</ModalBody>
          <ModalFooter>
            <StyledButton onClick={modalClose}>Close</StyledButton>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <Modal isOpen={modal} onClick={modalClose}>
        <ModalHeader>Error</ModalHeader>
        <ModalBody>An error has occurred</ModalBody>
        <ModalFooter>
          <StyledButton onClick={modalClose}>Close</StyledButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

//Mapping warningModal state
const mapStateToProps = (state) => ({ warningModal: state.warningModal });

export default connect(mapStateToProps, null)(WarningModal);
