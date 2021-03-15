import React from "react";
import './ModalBox.sass';
import Portal from "../Portal/Portal";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const ModalBox = ({title, isOpen, onCancel, onSubmit, children}) => {
    return (
        <Portal>
            <div className="modalOverlay">
                <div className="modalWindow">
                    <div className="modalHeader">
                        <div className="modalTitle">{title}</div>
                    </div>
                    <div className="modalBody">
                        {children}
                    </div>
                    <div className="modalFooter">
                        <Button onClick={onCancel}>Продолжить урок</Button>
                        <Button>Уйти</Button>
                    </div>
                </div>
            </div>
        </Portal>
    )
};

export default ModalBox;