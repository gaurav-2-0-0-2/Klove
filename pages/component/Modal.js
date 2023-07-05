import React from "react";
import { Modal, Button } from "@nextui-org/react";


export default function ModalForm({ openModal, closeHandler, content }) {

  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={openModal}
      onClose={closeHandler}
      width="800px"
      css={{
        padding: '$12'
      }}
    >
      <Modal.Body>
        {content}
      </Modal.Body>
    </Modal>
  );
}
