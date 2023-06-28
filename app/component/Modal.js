import React from "react";
import { Modal, Button} from "@nextui-org/react";


export default function ModalForm({openModal, closeHandler, buttonText}){
  
  return (
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={openModal}
        onClose={closeHandler}
      >
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
