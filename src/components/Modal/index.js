import React from "react";

import * as Style from "./style";

function Modal({ children, active, close }) {
  return (
    <Style.ModalContent active={active}>
      <div className="modal-main">
        <div className="modal-close">
          <button onClick={close}>fechar</button>
        </div>
        {children}
      </div>
    </Style.ModalContent>
  );
}

export default Modal;
