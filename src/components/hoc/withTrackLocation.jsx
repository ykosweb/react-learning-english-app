import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import ModalBox from "../UI/ModalBox/ModalBox";

const withTrackLocation = Component => props => {
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const currentPath = history.location.pathname;
    useEffect(() => {
        console.log(currentPath)
        return () => {
            const newPath = history.location.pathname;
            console.log(newPath)
        }

    }, [currentPath]);

    function handleCancel() {

        history.goBack()

    }
    if (modal) {
        return (
            <ModalBox title="Внимание"
                      onCancel={() => {
                          console.log("click")}}>
                <p>Если вы уйдете со страницы, прогресс урока будет потерян.</p>
            </ModalBox>
        )
    }
    return (

        <Component {...props}>123123123</Component>)
}

export default withTrackLocation;