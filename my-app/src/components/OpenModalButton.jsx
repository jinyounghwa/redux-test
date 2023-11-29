import React from "react";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../reducer";

export default function OpenModalButton() {

    const dispatch = useDispatch(); // action을 dispatch(불러내는)하는 함수

    const openModal = () => {
        dispatch({type: OPEN_MODAL}); // 미리 등록해둔 액션을 실행하도록 하는 것
    }
    return(
        <button onClick={openModal}>
            모달열기
        </button>
    )
}
