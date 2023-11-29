import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CLOSE_MODAL } from "../reducer";
import { ModalWrapper } from "./Modal/Modal.style";

export default function Modal() {

    const isShow = useSelector(state => state.modal.isShow);
    // useSelector는 state(데이터)를 가져오는 GETTER함수
    const dispatch = useDispatch(); // 실행을 위한 함수
    
    const closeModal = () => {
        dispatch({type: CLOSE_MODAL}); // 미리 등록해둔 액션을 실행하도록 하는 것
    }
    if(!isShow) return null;

    return(
        <ModalWrapper>
            <div className="container">
                <div className="header">
                <h1>제목</h1>
                <button onClick={closeModal}>닫기</button>
            </div>
            <p>내용</p>
            </div>
         </ModalWrapper>
    )}
